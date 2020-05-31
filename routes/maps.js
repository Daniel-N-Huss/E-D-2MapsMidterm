const express = require('express');
const router = express.Router();


/* __________________
    These will all serve responses to ajax requests from the client side
    which means they need to return promises; likely as json data we can render
*/


module.exports = (db) => {

  router.get("/", (req, res) => {
    res.send('Maps api browse function coming!');
  });

  return router;
};
