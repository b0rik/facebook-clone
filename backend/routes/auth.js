const router = require('express').Router();

const userController = require('../controllers/userController');
const { ensureAuthenticated } = require('../utils/auth')

// a route too authenticate the logged in user
router.get('/user', ensureAuthenticated, userController.getUserInfo);

module.exports = router;