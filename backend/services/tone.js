'use strict'

const request = require('request');

class ToneGenerator{
    constructor() {
        this.TONE_API_ENDPOINT = "http://host.docker.internal:5000/tone";
    }

    call_Tone_API() {
        return new Promise((resolve, reject) => {
            request(this.TONE_API_ENDPOINT, {json: true}, (err, res, body) => {
                if (err) reject(err);
                resolve(body);
            });
        })
    }
}
module.exports = ToneGenerator;
