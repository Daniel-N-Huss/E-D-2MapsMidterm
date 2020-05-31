const express = require('express');
const router = express.Router();

/* __________________
    These will all serve responses to ajax requests from the client side
    which means they need to return promises; likely as json data we can render
*/


module.exports = (db) => {

  router.get('/', (req, res) => {
    res.send('Hello from the future pins route');
    //this might send the pin id & the geo-location only, for the map to paint the pins onto itself?
    //Joined onto the map called
  });

  router.get('/:id', (req, res) => {
    res.send('This will send all the details of a pin for when a pin is clicked');
    //Full details of a pin so we can display the name and details
    //also joined to map table
  });

  router.post('/:id', (req, res) => {
    //a post request to change the details of a particular pin
    //this will come in with form data, and respond with a promise returning the edited table data
  });

  router.post('/', (req, res) => {
    //request coming in to save a new pin, should contain all the data of the pin when it's created
  });

  router.post('/', (req, res) => {
    // remove the pin, asking the table to delete the data
  });


  return router;

};
