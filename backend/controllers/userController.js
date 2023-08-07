const asyncHandler = require("express-async-handler");

const auth = require("../utils/auth");

const User = require("../models/User");
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
      data: {
        message: 'New User Created.',
        id: newUser._id
      }
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      data: {
        message: 'There was an error creating a new user.',
        error
      }
    });
  }
});

exports.userLogin = asyncHandler(async (req, res, next) => {
  auth.configuredPassport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({
        status: 'error',
        message: 'Error authenticating user.',
        data: {
          error: err
        }
      });
    }

    if(!user) {
      return res.status(400).json({
        status: 'error',
        message: info.message,
        data: { id: null }
      });
    }

    req.login(user, err => {
      if (err) {
        console.error('Error looggin in user:', err.message);
        return res.status(500).json({
          status: 'error',
          message: 'Error logging in user.',
          data: { id: null }
        });
      }

      return res.status(200).json({
        status: 'success',
        message: 'User successfuly logged in.',
        data: {
          id: user._id
        }
      });
    });
  })(req, res, next);
});

exports.userLogout = asyncHandler(async (req, res, next) => {
  req.logout(err => {
    if (err) {
      console.error('Error looggin out user:', err.message);
      return res.status(500).json({
        status: 'error',
        message: 'Error logging out user.',
        data: { id: null }
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'User successfuly logged out.',
      data: {
        id: user._id
      }
    });
  });
});

exports.getUserInfo = asyncHandler(async (id) => {
  const user = await User.findOne({ _id: id })
    .select('name profilePicture pendingFriendRequests dateOfBirth')
    .populate({
      path: 'pendingFriendRequests',
      populate: {
        path: 'from',
        select: '_id name'
      }
    })
    .exec();

  return user;
});
