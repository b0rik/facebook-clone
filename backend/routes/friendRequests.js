const router = require('express').Router();
const friendRequestController = require('../controllers/friendRequestController');
const validation = require('../utils/validation');
const { ensureAuthenticated, forwardAuthenticated, friendRequestValidation } = require('../utils/auth');

router.use(ensureAuthenticated);

router.post('/:id/accept', friendRequestController.acceptFriendRequest);
router.post('/:id/decline', friendRequestController.declineFriendRequest);

module.exports = router;