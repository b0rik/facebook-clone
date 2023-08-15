const asyncHandler = require('express-async-handler');
const ObjectId = require('mongoose').Types.ObjectId;

const auth = require('../utils/auth');
const User = require('../models/User');
const FriendRequest = require('../models/FriendRequest');

// Create a user after the details were validated with validation middleware
exports.userCreate = asyncHandler(async (req, res, next) => {
  const { profilePicture, name, email, password, dateOfBirth } = req.body;

  try {
    hashedPassword = await auth.getHashedPassword(password);

    const newUser = new User({
      profilePicture,
      name,
      email,
      hashedPassword,
      dateOfBirth,
    });

    newUser.save();

    return res.status(200).json({
      status: 'success',
      message: 'New User Created.',
      data: {
        id: newUser._id,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'There was an error creating a new user.',
      data: {
        error,
      },
    });
  }
});

exports.userLogin = asyncHandler(async (req, res, next) => {
  auth.configuredPassport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({
        status: 'error',
        message: 'Error authenticating user.',
        data: {
          error: err,
        },
      });
    }

    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: info.message,
        data: {},
      });
    }

    req.login(user, (err) => {
      if (err) {
        console.error('Error looggin in user:', err.message);
        return res.status(500).json({
          status: 'error',
          message: 'Error logging in user.',
          data: {},
        });
      }

      return res.status(200).json({
        status: 'success',
        message: 'User successfuly logged in.',
        data: {
          id: user._id,
        },
      });
    });
  })(req, res, next);
});

exports.userLogout = asyncHandler(async (req, res, next) => {
  req.logout((err) => {
    if (err) {
      console.error('Error looggin out user:', err.message);
      return res.status(500).json({
        status: 'error',
        message: 'Error logging out user.',
        data: {},
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'User successfuly logged out.',
      data: {},
    });
  });
});


exports.getUserInfo = asyncHandler(async (id) => {
  const user = await User.findOne({ _id: id })
    .select('_id friends sentFriendRequests pendingFriendRequests')
    .populate({
      path: 'sentFriendRequests',
      populate: {
        path: 'from to',
        select: '_id name'
      },
    })
    .populate({
      path: 'pendingFriendRequests',
      populate: {
        path: 'from to',
        select: '_id name'
      },
    })
    .exec();

  return user;
});

// return results for a search bar 
exports.searchUsers = asyncHandler(async (req, res, next) => {
  try {
    // check if query is provided or is a legal query
    // a legal query must contain only letters and space
    const isQuery = req.query.q && req.query.q.trim() !== '' && /^[A-Za-z\s]*$/.test(req.query.q);

    // if the query is illegal then return an empty array
    const users = isQuery
      ? await User.find({
          name: { $regex: req.query.q, $options: 'i' },
        })
          .select('_id name')
          .exec()
      : [];

    res.status(200).json({
      status: 'success',
      message: 'Search results.',
      data: {
        users,
      },
    });
  } catch (error) {
    console.error('Error searching users:', error.message);

    return res.status(500).json({
      status: 'error',
      message: 'Error quering database.',
      data: {},
    });
  }
});

exports.getUserById = asyncHandler(async (req, res, next) => {
  const user = req.user;
  
  // TODO: make middleware
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Need to be logged in to fetch users.',
      data: {}
    });
  } 
  
  // check if an id is provided or is a legal mongo ID
  // if not the use the logged in users id
  const queryId = Object.keys(req.params).length === 0 || !ObjectId.isValid(req.params.id) ? user.id : req.params.id;

  try {
    const userData = await User.findOne({ _id: queryId })
    .select('_id profilePicture name dateOfBirth friends joinDate')
    .populate({
      path: 'friends',
      select: '_id profilePicture name'
    })
    .exec();
  
    res.status(200).json({
      status: 'success',
      message: 'Fetched user by id.',
      data: {
        user: userData,
      }
    });
  } catch (error) {
    console.error('Error fetching user by id:', error.message);
    return res.status(500).json({
      status: 'error',
      message: 'Error fetching user.',
      data: {}
    });
  }
});

exports.addFriendRequest = asyncHandler(async (req, res, next) => {
  const user = req.user;
  
  // TODO: make middleware
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Need to be logged in to send friend requests.',
      data: {}
    });
  } 

  // if provided id is not a valid mongo ID or is of the loggen in user
  if (!ObjectId.isValid(req.params.id) || req.params.id === user.id) {
    return res.status(400).json({
      status: 'error',
      message: 'Error adding friend request.',
      data: {}
    });
  }

  try {
    const friendRequest = await FriendRequest.create({
      status: 'pending',
      from: user.id,
      to: req.params.id
    })

    // add the friend request to the sending user
    await User.findByIdAndUpdate({ _id: user.id }, {
      $push: { sentFriendRequests: friendRequest } 
    })
    .exec();
    // add the friend request to the receiving user
    await User.findByIdAndUpdate({ _id: req.params.id }, {
      $push: { pendingFriendRequests: friendRequest } 
    })
    .exec();

    return res.status(200).json({
      status: 'success',
      message: 'Friend request sent',
      data: {
        currentUserId: user.id,
        sentToUser: req.params.id
      }
    });
    
  } catch (error) {
    console.error('Error sending friend request:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Error sending friend request',
      data: {}
    });

  }
});