const User = require('../models/user');
const asyncHandler = require('express-async-handler');

// display all users
exports.users_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: display all users');
});

// display user
exports.users_list = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: display user by id ${req.params.id}`);
});

// delete user
exports.users_list = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: delete user by id ${req.params.id}`);
});