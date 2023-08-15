const ObjectId = require('mongoose').Types.ObjectId;

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

exports.getPostsById = asyncHandler(async (req, res, next) => {
  const user = req.user;
  
  // TODO: make middleware
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Need to be logged in to fetch posts.',
      data: {}
    });
  } 
  
  const queryId = Object.keys(req.params).length === 0 || !ObjectId.isValid(req.params.id)? user.id : req.params.id;

  try {
    const userData = await User.findOne({ _id: queryId })
      .select('posts friends')
      .populate({
        path: 'posts',
        populate: {
          path: 'author',
          select: '_id name profilePicture'
        },
      })
      .populate({
        path: 'friends',
        populate: {
          path: 'posts',
          populate: {
            path: 'author',
            select: '_id name profilePicture'
          }
        },
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
  
    res.status(200).json({
      status: 'success',
      message: 'Fetched posts by user id.',
      data: {
        id: queryId,
        posts: sortedPosts,
      }
    });
  } catch (error) {
    console.error('Error fetching posts by id:', error.message);
    return res.status(500).json({
      status: 'error',
      message: 'Error fetching posts.',
      data: {}
    });
  }
});
