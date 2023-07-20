const Post = require('../models/post');
const asyncHandler = require('express-async-handler');

// display posts posted by user
exports.posts_by_user = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: posts by user id ${req.params.id}`);
});

// display all posts liked by user
exports.posts_liked_by_user = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: posts liked by user id ${req.params.id}`);
});

// display add post form
exports.post_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: post create form');
});

// add post
exports.post_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: add post');
});

// delete post
exports.post_delete = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: delete post by id ${req.params.id}`);
});

// update post
exports.post_update = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: update post by id ${req.params.id}`);
});