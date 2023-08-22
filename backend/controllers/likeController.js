const asyncHandler = require("express-async-handler");

const Like = require('../models/Like');
const Post = require('../models/Post');

exports.addLike = asyncHandler(async (req, res, next) => {
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
      });
    }
  } catch (error) {
    console.log('Error adding like:', error);
    return res.status(400).json({
      status: 'error',
      message: 'Error adding like.',
    });
  }
});

exports.removeLike = asyncHandler(async (req, res, next) => {
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
      });
    }
  } catch (error) {
    console.log('Error removing like:', error);
    return res.status(400).json({
      status: 'error',
      message: 'Error removing like.',
    });
  }
});