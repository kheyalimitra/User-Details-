'use strict'

const express = require('express');
var router = express.Router();
const UserDetails = require('./__helper__/user_details_store');

/* GET home page. */
router.get('/', async (req, res, next) => {
    try {
        const dataStore = new UserDetails();
        const response = await dataStore.createUser();
        if (response.message) {
            res.render('error', {title: 'Something went wrong', response: response.message});
        }
        else {
          res.render('index', {title: 'User Details', response: response});  
        }
        
        
    } catch (err) {
        console.log(err);
        res.render('error', {title: 'Something went wrong', response: err});
        next(err);
    }
    
});

module.exports = router;
