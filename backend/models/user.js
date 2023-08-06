const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  profilePicture: String,
  name: { 
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100 
  },
  email: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  dateOfBirth: { 
    type: Date,
    required: true
  },
  friends: {
    type: [{ 
      type:Schema.Types.ObjectId,
      ref: 'User' 
    }],
    default: []
  },
  posts: {
    type: [{ 
      type:Schema.Types.ObjectId,
      ref: 'Post' 
    }],
    default: []
  },
  sentFriendRequests: {
    type: [{ 
      type:Schema.Types.ObjectId,
      ref: 'FriendRequest' 
    }],
    default: []
  },
  pendingFriendRequests: {
    type: [{ 
      type:Schema.Types.ObjectId,
      ref: 'FriendRequest' 
    }],
    default: []
  },
  likes: {
    type: [{
      type:Schema.Types.ObjectId, 
      ref: 'Like' 
    }],
    default: []
  },
  comments: {
    type: [{ 
      type:Schema.Types.ObjectId,
      ref: 'Comment' 
    }],
    default: []
  },
  joinDate: { 
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('User', UserSchema);