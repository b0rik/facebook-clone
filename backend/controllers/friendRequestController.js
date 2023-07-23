const FriendRequest = require('../models/friend_request');
const asyncHandler = require('express-async-handler');


// display all friend requests
exports.friend_requests_list = asyncHandler(async (req, res, next) =>
  res.send('NOT IMPLEMENTED: display al friend requests')
);

// display friend requests by user
exports.friend_requests_by_user = asyncHandler(async (req, res, next) =>
  res.send(`NOT IMPLEMENTED: display friend requests by user id ${req.params.id}`)
);

// display all friend requests sent by user
exports.friend_requests_sent_by_user = asyncHandler(async (req, res, next) =>
  res.send(`NOT IMPLEMENTED: display sent friend requests by user id ${req.params.id}`)
);

// display all friend requests sent to user
exports.friend_requests_sent_to_user = asyncHandler(async (req, res, next) =>
  res.send(`NOT IMPLEMENTED: display sent friend requests to user id ${req.params.id}`)
);

// display all pending friend requests
exports.friend_requests_pending = asyncHandler(async (req, res, next) =>
  res.send('NOT IMPLEMENTED: display pending friend requests')
);

// display all denied friend requests
exports.friend_requests_denied = asyncHandler(async (req, res, next) =>
  res.send('NOT IMPLEMENTED: display denied friend requests')
);

// display all accepted friend requests
exports.friend_requests_accepted = asyncHandler(async (req, res, next) =>
  res.send('NOT IMPLEMENTED: display accepted friend requests')
);

// display all pending friend requests to user
exports.friend_requests_pending_to_user = asyncHandler(async (req, res, next) =>
  res.send(`NOT IMPLEMENTED: display pending friend requests to user ${req.params.id}`)
);

// display all denied friend requests to user 
exports.friend_requests_denied_to_user = asyncHandler(async (req, res, next) =>
  res.send(`NOT IMPLEMENTED: display denied friend requests to user ${req.params.id}`)
);

// display all accepted friend requests to user
exports.friend_requests_accepted_to_user = asyncHandler(async (req, res, next) =>
  res.send(`NOT IMPLEMENTED: display accepted friend requests to user ${req.params.id}`)
);

// display all pending friend requests from user
exports.friend_requests_pending_from_user = asyncHandler(async (req, res, next) =>
  res.send(`NOT IMPLEMENTED: display pending friend requests from user ${req.params.id}`)
);

// display all denied friend requests from user 
exports.friend_requests_denied_from_user = asyncHandler(async (req, res, next) =>
  res.send(`NOT IMPLEMENTED: display denied friend requests from user ${req.params.id}`)
);

// display all accepted friend requests from user
exports.friend_requests_accepted_from_user = asyncHandler(async (req, res, next) =>
  res.send(`NOT IMPLEMENTED: display accepted friend requests from user ${req.params.id}`)
);

// add friend request
exports.friend_request_create = asyncHandler(async (req, res, next) =>
  res.send('NOT IMPLEMENTED: add friend request')
);

// delete friend request
exports.friend_request_delete = asyncHandler(async (req, res, next) =>
  res.send(`NOT IMPLEMENTED: delete friend request by id ${req.params.id}`)
);

// update friend request
exports.friend_request_update = asyncHandler(async (req, res, next) =>
  res.send(`NOT IMPLEMENTED: update friend request by id ${req.params.id}`)
);