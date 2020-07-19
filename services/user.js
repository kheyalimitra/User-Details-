'use strict'

const ModelOperations = require('../model/modelOperations');
const  uuidv4 = require('uuid').v4;

class UserService {
    constructor() {
        this.userModel = new ModelOperations();
    }

    generateUUID(req, res) {
        res.send(uuidv4());
    }

    async getUserDetails(req, res, next) {
        try {
            const response = await this.userModel.fetchUser(req.params.id);
            res.status(200).send(response.rows);
        } catch(err) {
            next(err);
        }
    }

    async createNewUser(req, res, next) {
        console.log('inside createNewUser');
        try {
            const newUser = {
                "name": req.name ? req.name : "no_name",
                "email": req.email ? req.name : "",
                "country": req.country ? req.country : "CA"
            };
            const response = await this.userModel.saveUser(newUser);
            res.status(200).send(response);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = UserService;