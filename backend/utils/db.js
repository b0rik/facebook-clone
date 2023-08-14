const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const mongoDBUri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBUri);
    console.log('Connected to the database.')
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;