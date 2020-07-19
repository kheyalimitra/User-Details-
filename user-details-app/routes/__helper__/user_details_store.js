const fetch = require("node-fetch");
class UserDetails {
    // constructor() {

    // }
    getUserDetails(id) {
        id = id ? id : 'eaddcde4-c974-11ea-92c1-4c327593b7eb';
        console.log(id);
        fetch(`http://localhost:3000/user/${id}`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
    }
}

module.exports = UserDetails;