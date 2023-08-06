const User = require("../models/User");
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

exports.addPost = asyncHandler(async (req, res, next) => {
  const { _id, content } = req.body;

  const post = new Post({
    author: _id,
    content
  });
  post.save();

  const user = await User.findOneAndUpdate(
    { _id },
    { $push: { posts: post._id } }
  ).exec()
  
  res.json({ok: true});
});

exports.getPosts = asyncHandler(async (req, res, next) => {
  const user = req.user;
  if (!user) return next(new Error("Need to be logged in to fetch posts."));
  
  const userData = await User.findOne({ _id: user.id })
    .select('posts friends')
    .populate({
      path: 'posts',
      populate: 'author'
    })
    .populate({
      path: 'friends',
      populate: 'posts',
      select: 'posts'
    })
    .exec();

  const userPosts = userData.posts;
  const friendsPosts = [];
  userData.friends.forEach(friend => {
    friend.posts.forEach(post => {friendsPosts.push(post)});
  });
  
  const posts = [...userPosts, ...friendsPosts];
  
  const sortedPosts = posts.sort((a, b) => b.date - a.date);

  res.json(sortedPosts);
});
