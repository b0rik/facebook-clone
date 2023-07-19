const Like = require('../models/like');
const asyncHandler = require('express-async-handler');

// display all likes
exports.likes_list = asyncHandler(async (req, res, nex)t => {
  res.send("NOT IMPLEMENTED: display likes list");
});

// display likes on post
exports.likes_list = asyncHandler(async (req, res, nex)t => {
  res.send(`NOT IMPLEMENTED: display likes on post by id ${req.params.id}`);
});

// display likes from user
exports.likes_list = asyncHandler(async (req, res, nex)t => {
  res.send(`NOT IMPLEMENTED: display likes of user by id ${req.params.id}`);
});

// delete like
exports.likes_list = asyncHandler(async (req, res, nex)t => {
  res.send(`NOT IMPLEMENTED: delete likes by id ${req.params.id}`);
});