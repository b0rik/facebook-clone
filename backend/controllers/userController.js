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

// exports.userLogin = asyncHandler(async (req, res, next) => {
//   auth.configuredPassport.authenticate("local", (err, user) => {
//     if (err || !user) return res.json({ ok: false });
//     req.login(user, (err) => {
//       if (err) return next(err);
//       else return res.json({ok: true, id: user._id, name: user.name});
//     })
//   })(req, res, next);
// });

