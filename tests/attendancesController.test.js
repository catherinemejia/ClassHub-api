const httpMocks = require('node-mocks-http');
const baseURL = "http://localhost:3002"
var crypto = require('crypto');
const attendancesController = require('../controllers/attendancesController');

describe("attendancesController", () => {
    const newAttendance = {
        body: {
            id: crypto.randomUUID(),
            isPresent: false,
            date: "2022-01-01",
            subjectDetailId: 1,
            studentId: crypto.randomUUID()
        }
    }

    it("should return CREATED (201) when new attendance is valid", () => {
        const request = httpMocks.createRequest({
            method: 'POST',
            url: '/attendances'
        });

        const response = httpMocks.createResponse();

        let attendances = [newAttendance];
        const result = attendancesController(attendances);
        result.post(request, response);

        expect(response.statusCode).toEqual(201);
    });

    it("should return OK (200) when get attendance is called with studentId query", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/attendances?studentId=1'
        });

        const response = httpMocks.createResponse();
        let attendances = [newAttendance];
        const result = attendancesController(attendances);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });

    it("should return OK (200) when get attendances is called", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/attendances'
        });

        const response = httpMocks.createResponse();
        let attendances = [newAttendance];
        const result = attendancesController(attendances);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });
});