/*
============================================
Title: Assignment 2.2
Author: Professor Krasso
Date: 3 May 2020
Modified By: Clayton Stacy
Description: API Gateway Part 2
============================================
*/


var User = require('../models/user');


// Register a new user on POST
exports.user_register = function(req, res) {
 res.send('NOT IMPLEMENTED: User registration POST');
};
// Verify token on GET
exports.user_token = function(req, res) {
 res.send('NOT IMPLEMENTED: User token lookup GET');
};