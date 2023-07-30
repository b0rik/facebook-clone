const bcrypt = require('bcrypt');

const User = require('../models/User');

const SALT_ROUNDS = 10;

const validPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const getHashedPassword = async password => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

module.exports = { getHashedPassword };