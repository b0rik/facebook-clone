const User = require('../models/User');
const Post = require('../models/Post');

const asyncHandler = require('express-async-handler');

exports.addPost = asyncHandler(async (req, res, next) => {
  const post = new Post({
    author: req.user.id,
    content: req.body.content,
  });
  post.save();

  // add the post to users posts array
  const user = await User.findOneAndUpdate(
    { _id: req.user.id },
    { $push: { posts: post._id } }
  ).exec();

  res.json({ ok: true });
});

exports.getPostsByUserId = asyncHandler(async (req, res, next) => {
  // get users posts and users friends posts
  try {
    const postPopulate = [
      {
        path: 'author',
        select: '_id name profilePicture',
      },
      {
        path: 'likes',
      },
      {
        path: 'comments',
        populate: {
          path: 'author',
          select: '_id name profilePicture',
        },
      },
    ];

    const userData = await User.findOne({ _id: req.params.id })
      .select('posts friends')
      .populate({
        path: 'posts',
        populate: postPopulate,
      })
      .populate({
        path: 'friends',
        populate: {
          path: 'posts',
          populate: postPopulate,
        },
        select: 'posts',
      })
      .exec();

    // merge users posts and users friends posts to one array
    const userPosts = userData.posts;
    const friendsPosts = [];
    userData.friends.forEach((friend) => {
      friend.posts.forEach((post) => {
        friendsPosts.push(post);
      });
    });

    const posts = [...userPosts, ...friendsPosts];

    // sort posts by date
    const sortedPosts = posts.sort((a, b) => b.date - a.date);

    res.status(200).json({
      status: 'success',
      message: 'Fetched posts by user id.',
      data: {
        id: req.params.id,
        posts: sortedPosts,
      },
    });
  } catch (error) {
    console.error('Error fetching posts by id:', error.message);
    return res.status(500).json({
      status: 'error',
      message: 'Error fetching posts.',
    });
  }
});
