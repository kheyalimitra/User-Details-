const fetch = require("node-fetch");
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
        return fetch('http://localhost:3000/user', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("received data ", data);
            return (data);
        }).catch(err => {
            throw ("Error: ", err);
        })
        
    }
}

module.exports = UserDetails;