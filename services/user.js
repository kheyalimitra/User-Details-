const  uuidv4 = require('uuid').v4;

class UserService {
    // constructor(userModel) {}

    generateUUID() {
        return  uuidv4();
    }
    async getUserDetails(req, res, options={}) {
        const response =  await fetch(``, options);
        res.send(response);
        
    }
}

module.exports = UserService;