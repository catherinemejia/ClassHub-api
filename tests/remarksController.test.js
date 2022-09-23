const httpMocks = require('node-mocks-http');
var crypto = require('crypto');
const remarksController = require('../controllers/remarksController');

describe("remarksController", () => {
    const newRemark = {
        body: {
            id: '8',
            description: 'desc',
            isMerit: true,
            date: '2022-01-01',
            sudentId: '1'
        }
    }

    // it("should return CREATED (201) when new remark is valid", () => {
    //     const request = httpMocks.createRequest({
    //         method: 'POST',
    //         url: '/remarks'
    //     });

    //     const response = httpMocks.createResponse();

    //     let remarks = [newRemark];
    //     const result = remarksController([remarks]);
    //     result.post(request, response);

    //     expect(response.statusCode).toEqual(201);
    // });

    it("should return OK (200) when get remarks is called", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/remarks'
        });

        const response = httpMocks.createResponse();
        let remarks = [newRemark];
        const result = remarksController(remarks);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });

    it("should return OK (200) when get remarks is called with studentId parameter", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/remarks?studentId=1'
        });

        const response = httpMocks.createResponse();
        let remarks = [newRemark];
        const result = remarksController(remarks);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });
});