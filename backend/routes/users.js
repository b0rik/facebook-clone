const router = require('express').Router();
const userController = require('../controllers/userController');
const validation = require('../utils/validation');

// router.post('/create', validation.userSignupValidation, userController.userCreate);
router.post('/create', validation.userSignupValidation, (req, res) => {
  res.send(req.body)
});

// router.post('/login', validation.userLoginValidation, );

module.exports = router;