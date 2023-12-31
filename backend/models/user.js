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
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 32
  },
  date_of_birth: { 
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
  sent_friend_requests: [{ 
    type:Schema.Types.ObjectId,
    ref: 'FriendRequest' 
  }],
  pending_friend_requests: [{ 
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
  join_date: { 
    type: Date,
    required: true 
  },
});

module.exports = mongoose.model('User', UserSchema);