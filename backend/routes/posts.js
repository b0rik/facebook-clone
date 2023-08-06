const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/', postController.getPosts);

router.post('/addPost', postController.addPost);

module.exports = router;