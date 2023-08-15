const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/:id', postController.getPostsById);
router.get('/', postController.getPostsById);

router.post('/:id/addLike', postController.addLike);
router.post('/:id/removeLike', postController.removeLike);

router.post('/addPost', postController.addPost);

module.exports = router;