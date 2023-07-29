const asyncHandler = require('express-async-handler');

const User = require('../models/User');
const auth = require('../utils/auth');

// Create a user after the details were validated with validation middleware
exports.userCreate = asyncHandler(async (req, res, next) => {
  const {
    profilePicture,
    name,
    email,
    password,
    dateOfBirth,
  } = req.body;

  hashedPassword = await auth.getHashedPassword(password);

  await User.create({
    profilePicture,
    name,
    email,
    hashedPassword,
    dateOfBirth
  });

  res.json({ ok: true });
});