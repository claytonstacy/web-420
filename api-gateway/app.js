/*
============================================
Title: Assignment 1.4
Author: Professor Krasso
Date: 3 May 2020
Modified By: Clayton Stacy
Description: API Gateway Part 1
============================================
*/ 
//Start program
//Import header and log to the console
var header = require('../Stacy-header');
console.log(header.display('Clayton', 'Stacy', '1.4 API Gateway Part 1' ));

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb+srv://admin:admin@buwebdev-cluster-1-xyv9m.mongodb.net/test?retryWrites=true&w=majority', {
promiseLibrary: require('bluebird'),
useNewUrlParser: true,
useUnifiedTopology: true
}).then ( () => console.log('connection successful'))
.catch( (err) => console.error(err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
