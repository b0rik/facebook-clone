const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  profile_picture: String,
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
  hashPassword: {
    type: String,
    required: true,
  },
  dateOfBirth: { 
    type: Date,
    required: true
  },
  friends: [{ 
    type:Schema.Types.ObjectId,
    ref: 'User' 
  }],
  posts: [{ 
    type:Schema.Types.ObjectId,
    ref: 'Post' 
  }],
  sentFriendRequests: [{ 
    type:Schema.Types.ObjectId,
    ref: 'FriendRequest' 
  }],
  pendingFriendRequests: [{ 
    type:Schema.Types.ObjectId,
    ref: 'FriendRequest' 
  }],
  likes: [{
    type:Schema.Types.ObjectId, 
    ref: 'Like' 
  }],
  comments: [{ 
    type:Schema.Types.ObjectId,
    ref: 'Comment' 
  }],
  joinDate: { 
    type: Date,
    required: true 
  },
});

module.exports = mongoose.model('User', UserSchema);