const router = require('express').Router();
const user_controller = require('../controllers/userController');

// GET request for user page
router.get('/:id', user_controller.user_show);

// POST request to add user
router.post('/create', user_controller.user_create);

// POST request to delete user
router.post('/:id/delete', user_controller.user_delete);

module.exports = router;