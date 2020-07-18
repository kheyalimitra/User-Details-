'use strict'

const express = require('express');
const router = express.Router();

router.post('user', (req, res) => {
    return fetchUserDetails(req.body, res);
})
    
