const router = require('express').Router();

const userController = require('../controllers/userController');
const validation = require('../utils/validation');

router.post('/create', validation.userSignupValidation, userController.userCreate);

router.post('/login', validation.userLoginValidation, userController.userLogin);

router.post('/logout', userController.userLogout);

//TODO need to add user authorization
router.get('/search', userController.searchUsers);

router.get('/:id', userController.getUserById);
router.get('/', userController.getUserById);

router.post('/:id/sendFriendRequest', userController.addFriendRequest);

module.exports = router;