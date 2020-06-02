// supertest to test HTTP requests/responses
const request = require("supertest");

// index.js for correct routes
const app = require("../src/server/index");

describe('test server route', () => {
    test("GET method test", () => {
        return request(app)
            .get("/test")
            .expect(200);
    });

    test("POST method test", async (done) => {
        const response = await request(app).post("/nlp").send("I play guitar in a rock band");
        expect(response.lang).toBe("en")
        .end(done);
    });
});

