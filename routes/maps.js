const express = require('express');
const router = express.Router();


/* __________________
    These will all serve responses to ajax requests from the client side
    which means they need to return promises; likely as json data we can render
*/


module.exports = (db) => {

  router.get("/", (req, res) => {
    db.query(
      `SELECT *
      FROM maps
      JOIN users ON users.id = owner_id
      GROUP BY users.id, maps.id`
    )
      .then(maps => res.send(maps.rows));
  });


  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM maps WHERE id = ${req.params}`)
      .then(map => { res.send(map.rows[0])})

    //This will send back a map, and all of it's associated data with pins joined on.

  });

  router.post("/:id", (req, res) => {
    //This will be a path for editing the data for the map in the database,
    //likely containing form data to update
  });

  router.post("/", (req, res) => {

    //This will be a path for creating a new map in the database -- the request should
    //be holding some form data for us to convert into a database store
  });

  router.post("/:id/delete", (req, res) => {
    // This will come from a delete button tied to a map
  });

  return router;
};
