const router = require('express').Router();
const postController = require('../controllers/postController');
const validation = require('../utils/validation');
const { ensureAuthenticated, forwardAuthenticated, friendRequestValidation } = require('../utils/auth');

const likeRouter = require('./likes');
const commentRouter = require('./comments');

router.use(ensureAuthenticated);

router.get('/:id', validation.idParamsValidation, postController.getPostsByUserId);
router.get('/', validation.idParamsValidation, postController.getPostsByUserId);

router.use('/:id/like', likeRouter);

router.use('/:id/comment', commentRouter);

router.post('/addPost', postController.addPost);

module.exports = router;