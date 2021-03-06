const express = require('express');
const router = express.Router();

/* __________________
    These will all serve responses to ajax requests from the client side
    which means they need to return promises; likely as json data we can render
*/


module.exports = (db) => {

  router.get('/', (req, res) => {

    //Should return the joined table of users / maps, calling the details of all the maps included
    //This should probably return a count of the number of times a map is favourited as well
    //for if we want to display the number of favourites a particular map has

  });

  router.get('/user/', (req, res) => {
    const { userId } = req.query;

    db.query(`
    SELECT *
    FROM favourites
    WHERE user_id = ${userId}
    `)
      .then(userFavourites => {
        res.send(userFavourites.rows);
      });
  });

  router.get('/:id', (req, res) => {

    //Full details of a favourite map to display the name and description
    // again, from the joined table
  });


  router.post('/user/add', (req, res) => {
    // This will come in with the logged in users id, and the id of the map they clicked favourite on
    const { user_id, map_id } = req.query;
    console.log("adding");
    console.log(user_id);
    console.log(map_id);


    db.query (
      `INSERT INTO favourites (user_id, map_id)
      SELECT ${user_id}, ${map_id}
      WHERE NOT EXISTS
      ( SELECT user_id, map_id FROM favourites WHERE user_id = ${user_id} AND map_id = ${map_id})
      RETURNING *`
      )
    .then(maps => res.send(maps.rows))
  });


  router.post('/user/del', (req, res) => {
    const { user_id, map_id } = req.query;
    console.log("removing");
    console.log(user_id);
    console.log(map_id);

    db.query (
      `DELETE FROM favourites
      WHERE user_id = ${user_id}
      AND map_id = ${map_id}
      RETURNING *`
      )
    .then(maps => res.send(maps.rows))
  });


  return router;

};

