'use strict'

const expect = require('chai').expect;
const bodyParser = require('body-parser');
const request = require('supertest');
const app = require('../../app');

describe('User service unit tests', () => {
    describe('Unit testing  /id GET route', function() {
        app.use(bodyParser);
        it('should return OK status', function() {
            return new Promise((resolve) => {
                request(app)
                .get('/id')
                .then(function(response){
                    expect(response.status).equal(200);
                    resolve();
                });
            });
        });
        it ('Should return uuid within 50 ms', () => {
            return new Promise((resolve) => {
                const start = process.hrtime();
                request(app)
                .get('/id')
                .then(function(response){
                    const elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
                    const timeTaken = elapsed.toFixed(3);
                    expect(response.status).equal(200);
                    expect(Math.floor(timeTaken)).to.be.lessThan(50);
                    resolve();
                });
            });
        });
    });
    describe('Unit testing the /user GET route', function() {

        it('should return OK status', function() {
            return new Promise((resolve) => {
                request(app)
                .get('/user/eaddcde4-c974-11ea-92c1-4c327593b7eb')
                .then(function(response){
                    expect(response.status).equal(200);
                    resolve();
                });
            });
        });
        it ('Should return user details within 300 ms', () => {
            return new Promise((resolve) => {
                const start = process.hrtime();
                request(app)
                .get('/user/eaddcde4-c974-11ea-92c1-4c327593b7eb')
                .then(function(response){
                    const elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
                    const timeTaken = elapsed.toFixed(3);
                    expect(response.status).equal(200);
                    expect(Math.floor(timeTaken)).to.be.lessThan(300);
                    resolve();
                });
            });
        });
    });

    describe('Unit testing the /user POST route', function() {
        app.use(bodyParser);
        it('should return OK status', function() {
            return new Promise((resolve) => {
                request(app)
                .post('/user')
                .send({name:'test'})
                .then(function(response){
                    expect(response.status).equal(200);
                    resolve();
                });
            });
        });
        it('should return 500 status for POST user', async function() {
            
            return new Promise((resolve) => {
                request(app)
                .post('/user')
                .then(function(response){
                    expect(response.status).equal(500);
                    resolve();
                });
            })
        });
    });
});
