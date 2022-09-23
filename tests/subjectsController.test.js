const httpMocks = require('node-mocks-http');
var crypto = require('crypto');
const subjectsController = require('../controllers/subjectsController');

describe("subjectsController", () => {
    const subjectObj = {
        body: {
            id: '1',
            name: 'Math'
        }
    }

    it("should return OK (200) when get subjects is called", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/subjects'
        });

        const response = httpMocks.createResponse();
        let subjects = [subjectObj];
        const result = subjectsController(subjects);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });

    it("should return OK (200) when get subjects is called with teacherId query", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/subjects?userId=2'
        });

        const response = httpMocks.createResponse();
        let subjects = [subjectObj];
        const result = subjectsController(subjects);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });

    it("should return OK (200) when getById is called", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/subjects'
        });

        const response = httpMocks.createResponse();
        let subjects = [subjectObj];
        const result = subjectsController(subjects);
        result.getById(request, response);

        expect(response.statusCode).toEqual(200);
    });
});