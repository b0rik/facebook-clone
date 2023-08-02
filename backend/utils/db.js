const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

<<<<<<< HEAD
const mongoDBUri = process.env.MONGODB_URI;
=======
const mongoDBUri = process.env.MONGODB_URI;
>>>>>>> feature-login

const connectDB = async () => {
  try{
    await mongoose.connect(mongoDBUri);
    console.log('Connected to the database.')
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;