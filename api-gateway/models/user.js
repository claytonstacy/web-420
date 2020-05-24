/*
============================================
Title: 2.3
Author: Professor Krasso
Date: 10 May 2020
Modified By: Clayton Stacy
Description: API-Gateway
============================================
*/

var mongoose = require('mongoose');

//Define user Schema
var userSchema = new mongoose.Schema({
 username: String,
 password: String,
 email: String
});

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
  user.save(callback);
};

module.exports.getById = (id, callback) => {
  var query = {_id: id};
  User.findById(query, callback);
};

// Define the user model and expose to project
module.exports = mongoose.model('User', userSchema);