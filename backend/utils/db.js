const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const mongoDBUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.koxt7dl.mongodb.net/facebook_clone?retryWrites=true&w=majority`;

const connectDB = async () => {
  try{
    await mongoose.connect(mongoDBUri);
    console.log('Connected to the database.')
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;