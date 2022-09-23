const httpMocks = require('node-mocks-http');
const studentsController = require('../controllers/studentsController');

describe("studentsController", () => {
    const studentObj = {
        body: {
            id: '1',
            name: 'Vexana'
        }
    }

    it("should return OK (200) when get students is called", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/students'
        });

        const response = httpMocks.createResponse();
        let students = [studentObj];
        const result = studentsController(students);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });

    it("should return OK (200) when get students is called with parentId query", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/students?parentId=5'
        });

        const response = httpMocks.createResponse();
        let students = [studentObj];
        const result = studentsController(students);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });

    it("should return OK (200) when get students is called with sectionId query", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/students?sectionId=1'
        });

        const response = httpMocks.createResponse();
        let students = [studentObj];
        const result = studentsController(students);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });

    it("should return OK (200) when getById is called", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/students'
        });

        const response = httpMocks.createResponse();
        let students = [studentObj];
        const result = studentsController(students);
        result.getById(request, response);

        expect(response.statusCode).toEqual(200);
    });
});