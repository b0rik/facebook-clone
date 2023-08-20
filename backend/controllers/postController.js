const ObjectId = require('mongoose').Types.ObjectId;

const User = require("../models/User");
const Post = require("../models/Post");
const Like = require('../models/Like');
const Comment = require('../models/Comment');

const asyncHandler = require("express-async-handler");

exports.addPost = asyncHandler(async (req, res, next) => {
  const { _id, content } = req.body;

  const post = new Post({
    author: _id,
    content
  });
  post.save();

  // add the post to users posts array
  const user = await User.findOneAndUpdate(
    { _id },
    { $push: { posts: post._id } }
  ).exec()
  
  res.json({ok: true});
});

exports.getPostsByUserId = asyncHandler(async (req, res, next) => {
  const user = req.user;
  
  // TODO: make middleware
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Need to be logged in to fetch posts.',
      data: {}
    });
  } 
  
  // if there is no id provided or it is no a valid mongo ID then use the logged in users id
  const queryId = Object.keys(req.params).length === 0 || !ObjectId.isValid(req.params.id)? user.id : req.params.id;

  // get users posts and users friends posts
  try {
    const userData = await User.findOne({ _id: queryId })
      .select('posts friends')
      .populate({
        path: 'posts',
        populate: [{
          path: 'author',
          select: '_id name profilePicture'
        },
        {
          path: 'likes'
        },
        {
          path: 'comments',
          populate: {
            path: 'author',
            select: '_id name profilePicture'
          }
        }],
      })
      .populate({
        path: 'friends',
        populate: {
          path: 'posts',
          populate: [{
            path: 'author',
            select: '_id name profilePicture'
          },
          {
            path: 'likes'
          },
          {
            path: 'comments',
            populate: {
              path: 'author',
              select: '_id name profilePicture'
            }
          }]
        },
        select: 'posts'
      })
      .exec();

    // merge users posts and users friends posts to one array
    const userPosts = userData.posts;
    const friendsPosts = [];
    userData.friends.forEach(friend => {
      friend.posts.forEach(post => {friendsPosts.push(post)});
    });
    
    const posts = [...userPosts, ...friendsPosts];
    
    // sort posts by date
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

exports.addLike = asyncHandler(async (req, res, next) => {
  const user = req.user;
  
  // TODO: make middleware
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Need to be logged in to like.',
      data: {}
    });
  } 

  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      status: 'error',
      message: 'Error adding like.',
      data: {}
    });
  }

  try {
    const post = await Post.findOne({ _id: req.params.id }).populate('likes').exec();

    const alradyLiked = post.likes.some(like => like.likedBy.toString() === req.user.id.toString());

    if (!alradyLiked) {
      const like = await Like({ 
        post: req.params.id, likedBy: req.user.id 
      }).save();
      post.updateOne({ $push: { likes: like._id } }).exec();
  
      return res.status(200).json({
        status: 'success',
        message: 'Like added.',
        data: {
          likeId: like._id
        }
      });
    } else {
      return res.status(400).json({
        status: 'error',
        message: 'User already liked this post.',
        data: {}
      });
    }
  } catch (error) {
    console.log('Error adding like:', error);
    return res.status(400).json({
      status: 'error',
      message: 'Error adding like.',
      data: {}
    });
  }
});

exports.removeLike = asyncHandler(async (req, res, next) => {
  const user = req.user;
  
  // TODO: make middleware
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Need to be logged in to remove a like.',
      data: {}
    });
  } 

  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      status: 'error',
      message: 'Error removing like.',
      data: {}
    });
  }

  try {
    // get the post
    const post = await Post.findOne({ _id: req.params.id }).populate('likes').exec();

    const notLiked = post.likes.every(like => like.likedBy.toString() !== req.user.id.toString());

    if (!notLiked) {
      // find the like by the user in the post
      const like = post.likes.find(like => like.likedBy.toString() === req.user.id.toString());

      // delete the like from db
      await Like.deleteOne({ _id: like._id });
      // delete the like from the post
      await post.updateOne({ $pull: { likes: like._id } })
  
      return res.status(200).json({
        status: 'success',
        message: 'Like removed.',
        data: {
          likeId: like._id
        }
      });
    } else {
      return res.status(400).json({
        status: 'error',
        message: 'User didnt like this post.',
        data: {}
      });
    }
  } catch (error) {
    console.log('Error removing like:', error);
    return res.status(400).json({
      status: 'error',
      message: 'Error removing like.',
      data: {}
    });
  }
});

exports.addComment = asyncHandler(async (req, res, next) => {
  const user = req.user;
  
  // TODO: make middleware
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Need to be logged in to add a comment.',
      data: {}
    });
  } 

  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      status: 'error',
      message: 'Error adding comment.',
      data: {}
    });
  }

  try {
    const post = await Post.findOne({ _id: req.params.id }).exec();

    const comment = await Comment({
      post: post._id,
      author: req.user.id,
      content: req.body.content
    }).save();

    await post.updateOne({ $push: { comments: comment._id } });
    return res.status(200).json({
      status: 'success',
      message: 'commnet added.',
      data: {
        commnetId: comment._id
      }
    });

  } catch (error) {
    console.log('Error adding comment:', error);
    return res.status(400).json({
      status: 'error',
      message: 'Error adding comment.',
      data: {}
    });
  }
});

exports.deleteComment = asyncHandler(async (req, res, next) => {
  const user = req.user;
  
  // TODO: make middleware
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Need to be logged in to delete a comment.',
      data: {}
    });
  } 

  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      status: 'error',
      message: 'Error removing comment.',
      data: {}
    });
  }

  try {
    const post = await Post.findOne({ _id: req.params.id }).exec();
    const { commentId } = req.body;
    await post.updateOne({ $pull: { comments: commentId } });
    await Comment.findByIdAndDelete(commentId);

    return res.status(200).json({
      status: 'success',
      message: 'commnet deleted.',
      data: {
        commentId
      }
    });

  } catch (error) {
    console.log('Error deleting comment:', error);
    return res.status(400).json({
      status: 'error',
      message: 'Error deleting comment.',
      data: {}
    });
  }
});

