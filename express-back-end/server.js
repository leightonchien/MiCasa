const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

//Elliott's work
const db = require('./db')
const cors = require('cors');

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
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
