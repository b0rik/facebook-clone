const router = require('express').Router();
const postController = require('../controllers/postController');
const validation = require('../utils/validation');
const { ensureAuthenticated, forwardAuthenticated, friendRequestValidation } = require('../utils/auth');

router.use(ensureAuthenticated);

router.get('/:id', validation.idParamsValidation, postController.getPostsByUserId);
router.get('/', validation.idParamsValidation, postController.getPostsByUserId);

router.post('/:id/addLike', validation.postIdParamsValidation, postController.addLike);
router.post('/:id/removeLike', validation.postIdParamsValidation, postController.removeLike);
router.post('/:id/addComment', validation.postIdParamsValidation, postController.addComment);
router.post('/:id/deleteComment', validation.postIdParamsValidation, postController.deleteComment);

router.post('/addPost', postController.addPost);

module.exports = router;