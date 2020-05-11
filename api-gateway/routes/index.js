/*
============================================
Title: Assignment 2.2
Author: Professor Krasso
Date: 3 May 2020
Modified By: Clayton Stacy
Description: API Gateway Part 2
============================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
