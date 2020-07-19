'use strict'

const ModelOperations = require('../model/modelOperations');
const  uuidv4 = require('uuid').v4;

class UserService {
    constructor() {
        this.userModel = new ModelOperations();
    }

    generateUUID() {
        return uuidv4();
    }
    getUUID(req, res) {
        res.status(200).send({uuid: this.generateUUID()});
    }

    async getUserDetails(req, res) {
        try {
            const response = await this.userModel.fetchUser(req.params.id);
            res.status(200).send(response.rows);
        } catch(err) {
            res.status(500).send({message: `unable to get user. Details: ${err}`});
        }
    }

    async createNewUser(req, res) {
        try {
            const newUser = {
                "name": req.name.trim(),
                "email": req.email ? req.email : `${req.name.trim()}@test.com`,
                "country": req.country ? req.country : "CA"
            };
            const response = await this.userModel.saveUser(newUser);
            console.log("succesfully save the used in db");
            res.status(200).send(response);
        } catch(err) {
            res.status(500).send({message: `unable to create user. Details: ${err}`});
        }
    }
}

module.exports = UserService;