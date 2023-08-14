const router = require('express').Router();
const friendRequestController = require('../controllers/friendRequestController');

router.post('/:id/accept', friendRequestController.acceptFriendRequest);
router.post('/:id/decline', friendRequestController.declineFriendRequest);

module.exports = router;