const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/:id', postController.getPostsByUserId);
router.get('/', postController.getPostsByUserId);

router.post('/:id/addLike', postController.addLike);
router.post('/:id/removeLike', postController.removeLike);
router.post('/:id/addComment', postController.addComment);
router.post('/:id/deleteComment', postController.deleteComment);

router.post('/addPost', postController.addPost);

module.exports = router;