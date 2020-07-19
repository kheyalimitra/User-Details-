'use strict'

const expect = require('chai').expect;
const UserService = require('../user');

const userService = new UserService();

describe('User service unit tests', () => {
    describe('get id', () => {
        beforeEach(() => { 
            jest.useFakeTimers();
         });
        afterEach(() => { jest.useRealTimers(); });

        it('Should return uuid every time', () => {
            const uuid1 = userService.generateUUID();
            expect(uuid1).not.to.be.undefined;
            const uuid2 = userService.generateUUID();
            expect(uuid2).not.to.be.undefined;
        });
    });
});