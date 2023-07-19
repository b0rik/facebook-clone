const Comment = require('../models/comment');
const asyncHandler = require('express-async-handler');

// display comments by user
exports.comments_by_user = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: display comments by user id ${req.params.id}`);
});

// display comments on post
exports.comments_by_post = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: display comments by post id ${req.params.id}`);
});

// add comment
exports.comment_create = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: add comment');
});

// update comment 
exports.comment_update = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: update comment by id ${req.params.id}`);
});

// delete comment 
exports.comment_delete = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: delete comment by id ${req.params.id}`);
});
