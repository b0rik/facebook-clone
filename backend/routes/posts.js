const router = require('express').Router();
const postController = require('../controllers/postController');
const validation = require('../utils/validation');
const { ensureAuthenticated, forwardAuthenticated, friendRequestValidation } = require('../utils/auth');

const likeRouter = require('./likes');

router.use(ensureAuthenticated);

router.get('/:id', validation.idParamsValidation, postController.getPostsByUserId);
router.get('/', validation.idParamsValidation, postController.getPostsByUserId);

router.use('/:id/like', likeRouter);

router.post('/:id/addComment', validation.postIdParamsValidation, postController.addComment);
router.post('/:id/deleteComment', validation.postIdParamsValidation, postController.deleteComment);

router.post('/addPost', postController.addPost);

module.exports = router;