const asyncHandler = require("express-async-handler");

const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.addComment = asyncHandler(async (req, res, next) => {
  const { id: postId } = req.params;
  
  try {
    const post = await Post.findOne({ _id: postId }).exec();

    const comment = await Comment({
      post: postId,
      author: req.user.id,
      content: req.body.content
    }).save();

    await post.updateOne({ $push: { comments: comment._id } });

    return res.status(200).json({
      status: 'success',
      message: 'comment added.',
      data: {
        commnetId: comment._id
      }
    });

  } catch (error) {
    console.log('Error adding comment:', error);

    return res.status(400).json({
      status: 'error',
      message: 'Error adding comment.',
    });
  }
});

exports.deleteComment = asyncHandler(async (req, res, next) => {
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
    });
  }
});

