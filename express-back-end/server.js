const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const cors = require('cors');

// PG database client/connection setup
const { Pool } = require("pg");
require('dotenv').config();
const connectionString = process.env.DATABASE_URL ||
  `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
//const dbParams = require("./lib/db.js");
const db = new Pool({connectionString});
db.connect();

//get the map
App.get('/api/v1/map')

//get the favourites 
App.get('/api/v1/favourites')

//

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => {
  console.log('request received', req.url);
  db.query('SELECT * FROM users;').then((results) => {
    console.log('rows found:', results.rows);
    res.json(results.rows);
  }).catch((error) => {
    console.log('query error:', error);
    res.status(500).send(`Error: ${error}`);
  })
});

// App.get('/api/properties', (req, res) => {

//   console.log('request received', req.url);
//   db.query('SELECT * FROM property;').then((results) => {
//     console.log('rows found:', results.rows);
//     res.json(results.rows);
//   }).catch((error) => {
//     console.log('query error:', error);
//     res.status(500).send(`Error: ${error}`);
//   })
// });




App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
