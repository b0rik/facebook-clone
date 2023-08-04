const asyncHandler = require("express-async-handler");

const auth = require("../utils/auth");

const User = require("../models/User");

// Create a user after the details were validated with validation middleware
exports.userCreate = asyncHandler(async (req, res, next) => {
  const { profilePicture, name, email, password, dateOfBirth } = req.body;

  hashedPassword = await auth.getHashedPassword(password);

  await User.create({
    profilePicture,
    name,
    email,
    hashedPassword,
    dateOfBirth,
  });

  res.json({ ok: true });
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
