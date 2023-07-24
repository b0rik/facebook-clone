const createError = require('http-errors');
const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const commentsRouter = require('./routes/comments');
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');
const { config } = require('dotenv');

const app = express();

// DB

const mongoose = require('mongoose');

config();

mongoose.set("strictQuery", false);

const mongoDBUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.koxt7dl.mongodb.net/facebook_clone?retryWrites=true&w=majority`;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDBUri);
  console.log('Connected to database.');
}

// END DB

//DELETE AFTER USE!
const { faker } = require('@faker-js/faker');
const { addUser, addPost } = require('./populate');
//DELETE AFTER USE!

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/testAPI', (req, res) => {
  res.send('API is working!')
});
app.use('/comments', commentsRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
