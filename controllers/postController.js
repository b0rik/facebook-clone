const Post = require('../models/post');
const asyncHandler = require('express-async-handler');

// display all posts
exports.posts_list = asyncHandler(async (req, req, next) => {
  res.send('NOT IMPLEMENTED: posts_list');
});

// display posts posted by user
exports.posts_by_user = asyncHandler(async (req, req, next) => {
  res.send(`NOT IMPLEMENTED: posts by user id ${req.params.id}`);
});

// display all posts liked by user
exports.posts_liked_by_user = asyncHandler(async (req, req, next) => {
  res.send(`NOT IMPLEMENTED: posts liked by user id ${req.params.id}`);
});

// add post by user
exports.posts_create = asyncHandler(async (req, req, next) => {
  `NOT IMPLEMENTED: post created by user id ${req.params.id}`
});

// delete post
exports.posts_delete = asyncHandler(async (req, req, next) => {
  `NOT IMPLEMENTED: delete post id ${req.params.id}`
});

// update post
exports.posts_update = asyncHandler(async (req, req, next) => {
  `NOT IMPLEMENTED: update post id ${req.params.id}`
});