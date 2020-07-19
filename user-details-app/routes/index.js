var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();
const UserDetails = require('./__helper__/user_details_store');

/* GET home page. */
router.get('/', function(req, res, next) {
    try {
        const dataStore = new UserDetails();
        const id = req.params.id || 'eaddcde4-c974-11ea-92c1-4c327593b7eb';
        fetch(`http://localhost:3000/user/${id}`)
        .then(response => response.json())
        .then(data => {
            res.render('index', {title: 'User Details', response: data[0]});
        });
        
    } catch (err) {
        next(err);
    }
    
});

module.exports = router;
