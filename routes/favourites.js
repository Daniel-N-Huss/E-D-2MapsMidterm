const express = require('express');
const router = express.Router();

/* __________________
    These will all serve responses to ajax requests from the client side
    which means they need to return promises; likely as json data we can render
*/


module.exports = (db) => {

  router.get('/', (req, res) => {
    res.send('Hello from the future pins route');
    //Should return the joined table of users / maps, calling the details of all the maps included
    //This should probably return a count of the number of times a map is favourited as well
    //for if we want to display the number of favourites a particular map has

  });

  router.get('/:id', (req, res) => {
    res.send('This will send all the details of a pin for when a pin is clicked');
    //Full details of a favourite map to display the name and description
    // again, from the joined table
  });


  router.post('/', (req, res) => {
    // This will come in with the logged in users id, and the id of the map they clicked favourite on
  });

  router.post('/', (req, res) => {
    // remove the favorite, perhaps clicking on the favourite button again?
  });


  return router;

};

