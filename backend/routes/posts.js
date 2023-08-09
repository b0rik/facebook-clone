const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/:id', postController.getPostsById);
router.get('/', postController.getPostsById);

router.post('/addPost', postController.addPost);

module.exports = router;