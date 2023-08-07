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

    res.status(200).json({
      status: 'success',
      data: {
        message: 'New User Created.',
        id: newUser._id
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: {
        message: 'There was an error creating a new user.',
        error
      }
    });
  }
});

exports.userLogin = asyncHandler(async (req, res, next) => {
  auth.configuredPassport.authenticate("local", {
    failureRedirect: "/auth/badLogin",
    successRedirect: "/auth/login",
  })(req, res, next);
});

exports.userLogout = asyncHandler(async (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/auth/logout');
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
