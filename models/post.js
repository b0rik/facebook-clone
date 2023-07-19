const mongoose = require('mongoose');

const PostModelSchema = new mongoose.Schema({
  author: { 
    type: Schema.Types.ObjectId, 
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
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'Like'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
});

module.exports = mongoose.model('PostModel', PostModelSchema);