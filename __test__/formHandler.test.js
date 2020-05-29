const formHandler = require("../src/client/js/formHandler");
const nlpURLLocal = 'http://localhost:8081/nlp';


test('formHandler.postData test', async () => {
    const data = await formHandler.postData(nlpURLLocal, {"userInput" : "I play guitar in a band"});
    expect(data.lang).toBe('en');
  });
