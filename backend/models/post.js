const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostModelSchema = new Schema({
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now()
  },
  content: {
    type: String,
    required: true,
    minLength: 1
  },
  likes: {
    type: [{
    type: Schema.Types.ObjectId,
    ref: 'Like'
    }],
    default: []
  },
  comments: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }],
    default: []
  },
});

module.exports = mongoose.model('Post', PostModelSchema);