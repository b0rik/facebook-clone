const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true,
    minLength: 1
  }
});

module.exports = mongoose.model('Comment', CommentSchema);