const asyncHandler = require('express-async-handler');

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
    console.error(error);
    return res.status(500).json({
      status: 'error',
      message: 'There was an error creating a new user.',
    });
  }
});

exports.userLogin = asyncHandler(async (req, res, next) => {
  auth.configuredPassport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({
        status: 'error',
        message: 'Error authenticating user.',
      });
    }

    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: info.message,
      });
    }

    req.login(user, (err) => {
      if (err) {
        console.error('Error looggin in user:', err.message);
        return res.status(500).json({
          status: 'error',
          message: 'Error logging in user.',
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
      console.error('Error loggin out user:', err.message);
      return res.status(500).json({
        status: 'error',
        message: 'Error logging out user.',
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'User successfuly logged out.',
    });
  });
});

exports.getUserInfo = asyncHandler(async (req, res, next) => {
  const populateFriendRequest = {
    path: 'from to',
    select: '_id name',
  };
  
  try {
    const user = await User.findOne({ _id: req.user.id })
    .select('_id friends sentFriendRequests pendingFriendRequests')
    .populate({
      path: 'sentFriendRequests',
      populate: populateFriendRequest,
    })
    .populate({
      path: 'pendingFriendRequests',
      populate: populateFriendRequest,
    })
    .exec();

    return res.status(200).json({
      status: 'success',
      message: 'Fetched user.',
      data: {
        user
      }
    });
  } catch (error) {
    console.error('Error fetching user info:', error)
    return res.status(500).json({
      status: 'error',
      message: 'Error fetching user info.'
    });
  }
});

// return results for a search bar
exports.searchUsers = asyncHandler(async (req, res, next) => {
  try {
    // if the query is illegal then return an empty array
    const users = await User.find({
      name: { $regex: req.query.q, $options: 'i' },
    })
      .select('_id name')
      .exec();
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
    });
  }
});

exports.getUserById = asyncHandler(async (req, res, next) => {
  try {
    const userData = await User.findOne({ _id: req.params.id })
      .select('_id profilePicture name dateOfBirth friends joinDate')
      .populate({
        path: 'friends',
        select: '_id profilePicture name',
      })
      .exec();

    res.status(200).json({
      status: 'success',
      message: 'Fetched user by id.',
      data: {
        user: userData,
      },
    });
  } catch (error) {
    console.error('Error fetching user by id:', error.message);
    return res.status(500).json({
      status: 'error',
      message: 'Error fetching user.',
    });
  }
});

exports.addFriendRequest = asyncHandler(async (req, res, next) => {
  try {
    const friendRequest = await FriendRequest.create({
      status: 'pending',
      from: req.user.id,
      to: req.params.id,
    });

    // add the friend request to the sending user
    await User.findByIdAndUpdate(
      { _id: req.user.id },
      {
        $push: { sentFriendRequests: friendRequest },
      }
    ).exec();
    // add the friend request to the receiving user
    await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: { pendingFriendRequests: friendRequest },
      }
    ).exec();

    return res.status(200).json({
      status: 'success',
      message: 'Friend request sent',
      data: {
        currentUserId: user.id,
        sentToUser: req.params.id,
      },
    });
  } catch (error) {
    console.error('Error sending friend request:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Error sending friend request',
    });
  }
});
