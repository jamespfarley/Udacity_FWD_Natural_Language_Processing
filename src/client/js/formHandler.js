

function handleSubmit(event){
    event.preventDefault();

    const userInput = document.getElementById('name').innerHTML;

    getPhraseOrigin(userInput);
}

function getPhraseOrigin(userInput){

    postData('http://localhost:8081/nlp', {"userInput" : userInput})
    .then(() => updateUI())
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
        console.log('... app.js : postData() :: newData = ' + JSON.stringify(newData));

        return newData;

    } catch(error){
        console.error(`Error in postData() : ${error}`);
    } 
}

// GET project data
const updateUI = async () => {

    const request = await fetch('http://localhost:8081/nlp').catch( error => { console.log(`updateUI fetch() error: ${error}`)});

    try{
        const data = await request.json();

        document.getElementById('results').innerHTML = data.lang;

    } catch(error) {
        console.error(`Error in updateUI() : ${error}`);
    }
}

export { handleSubmit}