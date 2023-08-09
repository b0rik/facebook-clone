const router = require('express').Router();

const userController = require('../controllers/userController');
const validation = require('../utils/validation');

router.post('/create', validation.userSignupValidation, userController.userCreate);

router.post('/login', validation.userLoginValidation, userController.userLogin);


//TODO need to add user authorization
router.post('/logout', userController.userLogout);

router.get('/search', userController.searchUsers);

module.exports = router;