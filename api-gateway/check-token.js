/*
============================================
Title: Assignment 8.4
Author: Professor Krasso
Date: 21 June 2020
Modified By: Clayton Stacy
Description: API Gateway Part V
============================================
*/ 

var header = require('../Stacy-header');
var jwt = require('jsonwebtoken');
var config = require('./config');
const { JsonWebTokenError } = require('jsonwebtoken');
console.log(header.display('Clayton', 'Stacy', '1.4 API Gateway Part 1' ));

function checkToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if(!token) return res.status(403).send({ auth: false, message: 'No token provided'});
  jwt.verify(token, config.web.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate'});
    req.userId = decoded.id;
    next();
  });
}

module.exports = checkToken;