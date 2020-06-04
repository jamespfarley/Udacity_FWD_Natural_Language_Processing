// Enable use of environment variable
const dotenv = require('dotenv');
dotenv.config();

// Express to run server and routes
const express = require('express');

// Start a server instance
const app = express();

// Dependencies
// Read data from POST requests on the server
const bodyParser = require('body-parser');

// Middleware
// Configure Express to user body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS for cross-origin allowance
const cors = require('cors');
app.use(cors());

const path = require('path');

var aylien = require("aylien_textapi");

// Initialize project root folder
app.use(express.static('dist'));
//console.log('Current directory : ' + __dirname);

// // SERVER
// //Server port
// const port = 8081;

// // Create server  app.listen(<port-number>, <callback function>)
// const server = app.listen(port, listening);

// // Callback to debug
// function listening(){
//   console.log('... server is running');
//   console.log(`... running on location ${port}`);
// }

// Setup empty JS object to act as endpoint for all routes
const nlpData = {};

const json = {
    "message" : "Is this working?"
}

app.get('/test', (req, res) => {
    res.send(json);
})

// Callback function to complete GET
app.get('/nlp', (req, res) => {

    res.sendFile(path.join(__dirname + "../../../dist/index.html"));
});

// Post Route
app.post('/nlp', detectLanguage);

// Set aylien API credentials
const aylienApi = new aylien(
    {
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    }
);

function detectLanguage(req, res){
    aylienApi.language({
        text: req.body.userInput
    }, function(error, response) {
        if (error === null) {
            console.log("Aylien response : " + JSON.stringify(response));
            Object.assign(nlpData, response);
            res.send(nlpData);
        }
    });
}

module.exports = app;