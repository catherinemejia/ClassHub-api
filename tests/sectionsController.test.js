const httpMocks = require('node-mocks-http');
var crypto = require('crypto');
const sectionsController = require('../controllers/sectionsController');

describe("sectionsController", () => {
    const sectionObj = {
        body: {
            name: "Section A"
        }
    }

    it("should return OK (200) when get sections is called", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/roles'
        });

        const response = httpMocks.createResponse();
        let roles = [];
        const result = sectionsController(roles);
        result.get(request, response);

        expect(response.statusCode).toEqual(200);
    });

    it("should return section when section is found", () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/roles',
        });

        const response = httpMocks.createResponse();
        const result = sectionsController(sectionObj);
        result.getById(request, response);

        expect(response.statusCode).toEqual(200);
    });
});