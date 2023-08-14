const FriendRequest = require('../models/FriendRequest');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

exports.acceptFriendRequest = asyncHandler(async (req, res, next) => {
  const user = req.user;
  
  // TODO: make middleware
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Need to be logged in to fetch users.',
      data: {}
    });
  } 

  try {
    const friendRequest = await FriendRequest.findOne({ _id: req.params.id }).exec();
    const fromUser = await User.findOne({ _id: friendRequest.from }).exec();
    const toUser = await User.findOne({ _id: friendRequest.to }).exec();

    await fromUser.updateOne({ $push: { friends: toUser._id } });
    await toUser.updateOne({ $push: { friends: fromUser._id } });

    await fromUser.updateOne({ $pull: { sentFriendRequests: friendRequest._id } });
    await toUser.updateOne({ $pull: { pendingFriendRequests: friendRequest._id } });

    await FriendRequest.deleteOne({ _id: friendRequest._id }).exec();

    return res.status(200).json({
      status:' success',
      message: 'Accepted friend request',
      data: {
        fromUserId: fromUser._id,
        toUserId: toUser._id,
      }
    });
  } catch (error) {
    console.log("Error accepting friend request:", error);
    return res.status(500).json({
      status: 'error',
      message: 'Error accepting friend request',
      data: {}
    });
  }
});

exports.declineFriendRequest = asyncHandler(async (req, res, next) => {
  const user = req.user;
  
  // TODO: make middleware
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Need to be logged in to fetch users.',
      data: {}
    });
  } 

  try {
    const friendRequest = await FriendRequest.findOne({ _id: req.params.id }).exec();
    const fromUser = await User.findOne({ _id: friendRequest.from }).exec();
    const toUser = await User.findOne({ _id: friendRequest.to }).exec();

    await fromUser.updateOne({ $pull: { sentFriendRequests: friendRequest._id } });
    await toUser.updateOne({ $pull: { pendingFriendRequests: friendRequest._id } });

    return res.status(200).json({
      status:' success',
      message: 'Deeclined friend request',
      data: {
        fromUserId: fromUser._id,
        toUserId: toUser._id,
      }
    });
  } catch (error) {
    console.log("Error declining friend request:", error);
    return res.status(500).json({
      status: 'error',
      message: 'Error declining friend request',
      data: {}
    });
  }
});