'use strict'

const fetch = require("node-fetch");
const config = require("./config.json");
class UserDetails {
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    createUser(name=null) {
        name = name ? name : 'default-' + this.getRandomInt(100).toString();
        console.log('Going to create new user named ', name);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name })
        };
        return fetch(config.docker.POST_USER_URL, requestOptions)
        .then(response => response.json())
        .then(data => {
            return (data);
        }).catch(err => {
            throw ("Error: ", err);
        })
        
    }
}

module.exports = UserDetails;