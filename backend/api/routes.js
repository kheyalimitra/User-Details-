'use strict'

const express = require('express');
const UserService = require('../services/user');

const router = express.Router();
const userService = new UserService();
router.get('/id', (req, res) => {
    userService.getUUID(req, res);
})

router.get('/user/:id', (req, res) => {
    userService.getUserDetails(req, res);
})

router.post('/user', (req, res, ) => {
    userService.createNewUser(req.body, res);
})

module.exports = router;
