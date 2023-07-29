const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

exports.getHashedPassword = async password => {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

exports.validatePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};