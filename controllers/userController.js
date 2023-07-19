const User = require('../models/user');
const asyncHandler = require('express-async-handler');

// display all users
exports.users_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: display all users');
});

// add user
exports.user_create = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: add user');
});


// display user
exports.user_show= asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: display user by id ${req.params.id}`);
});

// delete user
exports.user_delete = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: delete user by id ${req.params.id}`);
});