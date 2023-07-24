const { faker } = require('@faker-js/faker');
const User = require('./models/user');
const Comment = require('./models/comment');
const FriendRequest = require('./models/friend_request');
const Like = require('./models/like');
const Post = require('./models/post');

const users = [];
const comments = [];
const friendRequests = [];
const likes = [];
const posts = [];

exports.addUser = async () => {
  const id = faker.database.mongodbObjectId()

  await User.create({
    _id: id,
    profile_picture: faker.image.avatar(),
    name: faker.person.fullName(),
    date_of_birth: faker.date.anytime(),
    friends: [],
    posts: [],
    sent_friend_requests: [],
    pending_friend_requests: [],
    likes: [],
    comments: [],
    join_date: faker.date.anytime(),
  });

  users.push(id);
};

exports.addPost = async (userId, content) => {
  const id = faker.database.mongodbObjectId();

  await Post.create({
    _id: id,
    author: userId,
    date: faker.date.anytime(),
    content: content,
    likes: [],
    comments: [],
  });

  await User.findByIdAndUpdate(userId, { $push: { posts: id} }).exec();
};

exports.addComment = () => {
  console.log('addComment');
};
exports.addFriendRequest = () => {
  console.log('addFriendRequest');
};
exports.addLike = () => {
  console.log('addLike');
};

module.exports = exports;