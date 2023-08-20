const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/User');

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    async (email, password, cb) => {
      try{
        const user = await User.findOne({ email: email }).exec();
        if (!user || !(await validPassword(password, user.hashedPassword))) {
          return cb(null, false, { message: 'Incorrect email or password' });
        }
        return cb(null, user);
      } catch(error) {
        console.error('Error authenticating user:', error.message);
        return cb(error);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, {
      id: user._id,
    });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});

const validPassword = async (password, hashedPassword) => {
  try{
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error('Error validation password:', error.message);
    throw error;
  }

};

const getHashedPassword = async (password) => {
  try {
    return await bcrypt.hash(password, SALT_ROUNDS);
  } catch (error) {
    console.error('Error while hashing password:', error.message);
    throw error;
  }
};

const ensureAuthenticated = (req, res, next) => {
    if (req.isUnauthenticated()) {
      return res.status(400).json({
        status: 'error',
        message: 'Unauthorized action. Please log in first.',
      });
    } 

    next();
};

const forwardAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return res.status(400).json({
        status: 'error',
        message: 'Unauthorized action. Please log out first.',
      });
    } 

    next();
};

module.exports = { getHashedPassword, configuredPassport: passport, forwardAuthenticated, ensureAuthenticated };
