const router = require('express').Router({ mergeParams: true });
const commentController = require('../controllers/commentController');
const validation = require('../utils/validation');

router.post('/addComment', validation.postIdParamsValidation, commentController.addComment);
router.post('/deleteComment', validation.postIdParamsValidation, commentController.deleteComment);

module.exports = router;