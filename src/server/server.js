const app = require('./index');

// SERVER
//Server port
const port = 8081;

// Create server  app.listen(<port-number>, <callback function>)
const server = app.listen(port, listening);

// Callback to debug
function listening(){
  console.log('... server is running');
  console.log(`... running on location ${port}`);
}