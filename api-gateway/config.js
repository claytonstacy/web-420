/*
============================================
Title: Assignment 1.2
Author: Professor Krasso
Date: 3 May 2020
Modified By: Clayton Stacy
Description: API Gateway Part 2
============================================
*/

var config = {};
config.web = {};
config.web.secret = 'topsecret';
config.web.port = process.env.PORT || '3000';
module.exports = config;