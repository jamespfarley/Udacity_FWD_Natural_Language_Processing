const formHandler = require("../src/client/js/formHandler");
const nlpURLLocal = 'http://localhost:8081/nlp';


test('formHandler.postData test', async (done) => {
    const data = await formHandler.postData(nlpURLLocal, {"userInput" : "I play lead guitar in a rock band"});
    expect(data.lang).toBe('en');
    done();
  });
