const { body, validationResult } =  require('express-validator');
const User = require('../models/User');

exports.userSignupValidation = [
  body('name')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Name cannot be empty.')
    .isAlpha(undefined, { ignore: ' ' })
    .withMessage('Name can contain only letters(a-zA-Z) and space(" ")')
    .toLowerCase(),
  body('email', 'Invalid email.')
    .trim()
    .isEmail()
    .toLowerCase()
    .custom(async value => {
      const existingUser = await User.findOne({ email: value }).exec();
      if (existingUser) throw new Error('A user with this email already exists.');
    }),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty.')
    .isStrongPassword()
    .withMessage('Passsword must be at least 8 characters long and must contain at least: 1 lower case letter 1 upper case letter 1 number and 1 symbol'),
  body('passwordConfirm')
    .notEmpty()
    .withMessage('Cannot be empty.')
    .custom((value, { req }) => (value === req.body.password))
    .withMessage('Passwords must be the same.'),
  body('dateOfBirth', 'Invalid date.')
    .notEmpty()
    .withMessage('Date of birth cant be empty.')
    .isDate(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.send(errors);
    next();
  },
];

exports.userLoginValidation = [
  body('email', 'Invalid email.')
    .trim()
    .isEmail()
    .toLowerCase()
    .custom(async value => {
      const existingUser = await User.findOne({ email: value }).exec();
      if (!existingUser) throw new Error("A user with this email doesn't exists.");
    }),
  body('password')
    .notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.send(errors);
    next();
  },
];
