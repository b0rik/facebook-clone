const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendRequestSchema = new Schema({
  status: {
    type: String,
    enum: ['pending', 'denied', 'accepted'],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
});

module.exports = mongoose.model('FriendRequest', FriendRequestSchema);