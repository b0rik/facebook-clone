const router = require('express').Router({ mergeParams: true });
const likeController = require('../controllers/likeController');
const validation = require('../utils/validation');
const { ensureAuthenticated, forwardAuthenticated, friendRequestValidation } = require('../utils/auth');

router.post('/addLike', validation.postIdParamsValidation, likeController.addLike);
router.post('/removeLike', validation.postIdParamsValidation, likeController.removeLike);

module.exports = router;