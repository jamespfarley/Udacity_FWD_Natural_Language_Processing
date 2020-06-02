
// https://www.npmjs.com/package/node-fetch
// a window.fetch compatible API on Node.js runtime
const fetch = require("node-fetch");

function handleSubmit(event){
    event.preventDefault();

    const inputValue = document.getElementById('name').value;
 
    const nlpURLLocal = 'http://localhost:8081/nlp';
    let reqBody = { 
        userInput : inputValue 
    };

    getPhraseOrigin(nlpURLLocal, reqBody);

}

function getPhraseOrigin(url, userInput){

    postData(url, userInput)
    .then((retData)=> updateUI(retData))
    .catch((error) => {console.error(`getPhraseOrigin() chained promises :: error: ${error}`)});
}

// POST data
const postData = async (url, data) => {

    const response = await fetch(url,
                                { method: 'POST',
                                credentials: 'same-origin',
                                headers: {'Content-type':'application/json', },
                                body: JSON.stringify(data)
                                }).catch( 
                                    error => { console.log(`postData() fetch() error: ${error}`)}
                                );
   try{
        const newData = await response.json();
        // !!!
        console.log('... formHandler.js : postData() :: newData = ' + JSON.stringify(newData));
        return newData;

    } catch(error){
        console.error(`Error in postData() : ${error}`);
    } 
}

// Update view
const updateUI = async (originData) => {

    try{
        // !!!
        console.log("updateUI : data object :: " + JSON.stringify(originData));

        const country = Client.getCountryOrigin(originData.lang);
        document.getElementById('results').innerHTML = country;

    } catch(error) {
        console.error(`Error in updateUI() : ${error}`);
    }
}

export { handleSubmit, postData}