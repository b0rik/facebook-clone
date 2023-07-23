const router = require('express').Router();
const post_controller = require('../controllers/postController');

// GET request for posts by user
router.get('/user/:id', post_controller.posts_by_user);

// GET request for post create form
router.get('/create', post_controller.post_create_get);

// POST request to add a post
router.post('/create', post_controller.post_create_post);

// POST request to edit a post
router.post('/:id/update', post_controller.post_update);

// POST request to delete a post
router.post('/:id/delete', post_controller.post_delete);

module.exports = router;