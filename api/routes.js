'use strict'

const express = require('express');
const UserService = require('../services/user');

const router = express.Router();
const userService = new UserService();
router.get('/id', (req, res) => {
    userService.generateUUID(req, res);
})

router.get('/user/:id', (req, res, next) => {
    console.log('get: user');
    userService.getUserDetails(req, res, next);
})

router.post('/user', (req, res, next) => {
    console.log('post: user');
    userService.createNewUser(req.body, res, next);
})

module.exports = router;
