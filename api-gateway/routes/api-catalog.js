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
var auth_controller = require('../controllers/authController');
var checkToken = require('../check-token'); 
// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);
// GET request for verifying user tokens
router.get('/auth/token', checkToken,  auth_controller.user_token);
module.exports = router;

router.post('/auth/login', auth_controller.user_login);

router.get('/auth/logout', auth_controller.user_logout);