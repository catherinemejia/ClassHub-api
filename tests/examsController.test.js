const httpMocks = require('node-mocks-http');
var crypto = require('crypto');
const examsController = require('../controllers/examsController');

describe("examsController", () => {
    const newExam = {
        body: {
            studentId: crypto.randomUUID(),
            sectionId: crypto.randomUUID(),
            teacherId: crypto.randomUUID(),
            topic: "Finals",
            isPass: true
        }
    }

    it("should return CREATED (201) when new exam is valid", () => {
        const request = httpMocks.createRequest({
            method: 'POST',
            url: '/exams'
        });

        const response = httpMocks.createResponse();

        let exams = [newExam];
        const result = examsController(exams);
        result.post(request, response);

        expect(response.statusCode).toEqual(201);
    });

    it("should return OK (200) when get exams is called", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/exams'
        });

        const response = httpMocks.createResponse();
        let exams = [newExam];
        const result = examsController(exams);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });

    it("should return OK (200) when get exams is called with studentId parameter", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/exams?studentId=1'
        });

        const response = httpMocks.createResponse();
        let exams = [newExam];
        const result = examsController(exams);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });
});