const { body, query, param, validationResult } =  require('express-validator');
const ObjectId = require('mongoose').Types.ObjectId;

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
    const { errors } = validationResult(req);

    if (errors.length) {
      return res.status(400).json({
        status: 'error',
        data: {
          message: 'The data of the signing up user is not valid.',
          errors
        }
      });
    }
    next();
  },
];

exports.userLoginValidation = [
  body('email', 'Invalid email.')
    .trim()
    .isEmail()
    .toLowerCase(),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty.'),
  (req, res, next) => {
    const { errors } = validationResult(req);
    
    if (errors.length) {
      return res.status(400).json({
        status: 'error',
        message: 'The data of the logging up user is not valid.',
        data: {
          errors
        }
      });
    }
    next();
  },
];

exports.userSearchValidation = [
  query('q')
    .notEmpty()
    .custom(value => {
      const legalString = /^[A-Za-z\s]*$/.test(value);
      if (!legalString) {
        throw new Error('The query is illegal.');
      }
      return true;
    }),
  (req, res, next) => {
    const { errors } = validationResult(req);

    if (errors.length) {
      return res.status(200).json({
        status: 'success',
        message: 'Query is empty or illegal.',
        data: {
          users: [],
          errors
        }
      });
    }

    next();
  }
];

exports.idParamsValidation = [
  param('id')
    .notEmpty()
    .withMessage('Id cannot be empty.')
    .custom((value, { req }) => {
      if (!ObjectId.isValid(req.params.id)) {
        throw new Error('The id is not a valid id.');
      }
      return true;
    }),
  (req, res, next) => {
    const { errors } = validationResult(req);
    
    if (errors.length) {
      req.params.id = req.user.id;
    }

    next();
  }
];

// if (!ObjectId.isValid(req.params.id) || req.params.id === req.user.id) {
//   return res.status(400).json({
//     status: 'error',
//     message: 'Error adding friend request.',
//   });
// }
exports.friendRequestValidation = [
  param('id')
    .notEmpty()
    .withMessage('Id cannot be empty.')
    .custom((value, { req }) => {
      if (!ObjectId.isValid(req.params.id)) {
        throw new Error('The id is not a valid id.');
      }
      return true;
    })
    .custom((value, { req }) => req.params.id !== req.user.id)
    .withMessage('Cannot add self to friends.'),
  (req, res, next) => {
    const { errors } = validationResult(req);

    if (errors.length) {
      return res.status(400).json({
        status: 'error',
        message: 'Error adding friend request.',
        data:{errors}
      });
    }

    next();
  }
];


