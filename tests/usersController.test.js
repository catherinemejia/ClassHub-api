const httpMocks = require('node-mocks-http');
var crypto = require('crypto');
const usersController = require('../controllers/usersController');

describe("usersController", () => {
    const userObj = {
        body: {
            id: '1',
            userName: 'gambore',
            password: 'password123',
            fullName: 'Rey Gamboa',
            contactNumber: '09173057623',
            emailAddress: 'rey@school.edu',
            roleId: '1'
        }
    }
    const newUserObj = {
        body: {
            id: '8',
            userName: 'rizaljo',
            password: 'password123',
            fullName: 'Jose Rizal',
            contactNumber: '09123456789',
            emailAddress: 'rizal@school.edu',
            roleId: '1'
        }
    }

    it("should return CREATED (201) when new user is posted", () => {
        const request = httpMocks.createRequest({
            method: 'POST',
            url: '/users'
        });

        const response = httpMocks.createResponse();
        let users = [newUserObj];
        const result = usersController(users);
        result.post(request, response);

        expect(response.statusCode).toEqual(201);
    });

    it("should return OK (200) when get users is called", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/users'
        });

        const response = httpMocks.createResponse();
        let users = [userObj];
        const result = usersController(users);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });

    it("should return OK (200) when getById is called", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/users'
        });

        const response = httpMocks.createResponse();
        let users = [userObj];
        const result = usersController(users);
        result.getById(request, response);

        expect(response.statusCode).toEqual(200);
    });
});