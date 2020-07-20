'use strict'

const  uuidv4 = require('uuid').v4;
const ModelOperations = require('../model/modelOperations');
const ToneGenerator = require('./tone');

class UserService {
    constructor() {
        this.userModel = new ModelOperations();
        this.toneGenerator = new ToneGenerator();
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
            const tone = await this.toneGenerator.call_Tone_API();
            response.rows[0]["tone"] = tone["tone"];
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
            console.log("succesfully saved the entry in db");
            const tone = await this.toneGenerator.call_Tone_API();
            response["tone"] = tone["tone"];
            res.status(200).send(response);
        } catch(err) {
            res.status(500).send({message: `unable to create user. Details: ${err}`});
        }
    }
}

module.exports = UserService;