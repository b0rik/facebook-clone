const router = require('express').Router();

const comment_controller = require('../controllers/commentController');

// GET request for comments by a user
router.get('/user/:id', comment_controller.comments_by_user);

// GET request for comments on a post
router.get('/post/:id', comment_controller.comments_by_post);

// POST request to add comment
router.post('/create', comment_controller.comment_create);

// POST request to edit comment
router.post('/:id/update', );

// POST request to delete comment
router.post('/:id/delete', comment_controller.comment_delete);

module.exports = router;
