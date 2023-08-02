const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("../models/User");

const SALT_ROUNDS = 10;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, cb) => {
      const user = await User.findOne({ email: email }).exec();
      if (!user || !(await validPassword(password, user.hashedPassword))) {
        return cb(null, false, { message: "Incorrect email or password" });
      }
      return cb(null, user);
    }
  )
);

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, {
      id: user._id
    });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});

const validPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const getHashedPassword = async (password) => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

module.exports = { getHashedPassword, configuredPassport: passport };
