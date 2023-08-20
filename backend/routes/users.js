const router = require('express').Router();

const userController = require('../controllers/userController');
const validation = require('../utils/validation');
const { ensureAuthenticated, forwardAuthenticated, friendRequestValidation } = require('../utils/auth');

router.post('/create', [forwardAuthenticated, validation.userSignupValidation], userController.userCreate);

router.post('/login', [forwardAuthenticated, validation.userLoginValidation], userController.userLogin);

router.post('/logout', ensureAuthenticated, userController.userLogout);

//TODO need to add user authorization
router.get('/search', [ensureAuthenticated, validation.userSearchValidation], userController.searchUsers);

router.get('/:id', [ensureAuthenticated, validation.idParamsValidation], userController.getUserById);
router.get('/', [ensureAuthenticated, validation.idParamsValidation], userController.getUserById);

router.post('/:id/sendFriendRequest', [ensureAuthenticated, validation.friendRequestValidation], userController.addFriendRequest);

module.exports = router;