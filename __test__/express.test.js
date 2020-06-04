// supertest to test HTTP requests/responses
const request = require("supertest");

// index.js for correct routes
const app = require("../src/server/index");

describe('test server route', () => {
    test("GET method test", (done) => {
        request(app)
            .get("/test")
            .expect('Content-Type', /json/);
            done();
    });

    test("POST method test", done => {
        request(app)
            .post("/nlp")
            .send("I play guitar in a rock band")
            .expect('Content-Type', /json/);
            done();
    });

    /* ALTERNATE TEST */
    // test("POST method test", async done => {
    //     const response = await request(app).post("/nlp").send({ "userInput": "I play lead guitar in a rock band" });
    //         expect(response.body.lang).toBe("en");
    //         done();
    // });
});

