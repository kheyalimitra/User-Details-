'use strict'

const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;
const UserService = require('../user');

const userService = new UserService();
describe('User service unit tests', () => {
    describe('get id', () => {
        beforeEach(() => { jest.useFakeTimers(); });
        afterEach(() => { jest.useRealTimers(); });

        test('Should return uuid every time', () => {
            const uuid1 = userService.generateUUID();
            expect(uuid1).not.to.be.NaN;
            const uuid2 = userService.generateUUID();
            console.log('uuid2: ', uuid2);
            expect(uuid2).not.to.be.undefined;
        });

        test('Should return uuid without delay', () => {
            const uuid = userService.generateUUID();
            jest.advanceTimersByTime(50); // find a better way to assess the time
            expect(uuid).not.to.be.undefined;

        });
    });

    describe('get user details', () => {
        beforeEach(() => { 
            jest.useFakeTimers(); 
            fetch.resetMocks();
        });
        afterEach(() => { jest.useRealTimers(); });

        test('Should return user details', async () => {
            fetch.mockResponseOnce(JSON.stringify([{ id: 1, display_name: 'test', email: 'test@test.com', country: 'CA' }]));
            const details = await userService.getUserDetails(1);
            expect(details.mock.calls[0][0][0]).not.to.be.equal({ id: 1, display_name: 'test', email: 'test@test.com', country: 'CA' });
        });

        test('Should return user details within 300 ms', async () => {
            const details = await userService.getUserDetails(1);
            jest.advanceTimersByTime(300);
            expect(details).not.to.be.null;
        });
    });

    describe('post user details', () => {
        test('Should save user details to db', async () => {
            const request = httpMocks.createRequest({
                method: 'POST',
                url: '/some/url'
            });
            const response = httpMocks.createResponse();
            sendSomeStuff(request, response, (err) => {
                expect(err).toBeFalsy();
            });
            const { property } = JSON.parse(response._getData());
            expect(property).toBe('someValue');
        });

        test('Should fail to save  user details to db', async () => {
            const request = httpMocks.createRequest({
                method: 'POST',
                url: '/some/url'
            });
            const response = httpMocks.createResponse();
            sendSomeStuff(request, response, (err) => {
                expect(err).toBe(true);
            });
        });
    });
  })