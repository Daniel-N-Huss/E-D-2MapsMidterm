const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

router.use(cookieSession({
  name: 'Shh-secret',
  keys: ['Secret', 'rotation'],
}));


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

  router.post("/", (req, res) => {
    console.log(req.body)
    db.query (
      `INSERT
      INTO maps (owner_id, title, thumbnail_url, description)
      VALUES ('${req.session.id}','${req.body.title}', '${req.body.url}', '${req.body.description}')
      RETURNING *`
      )
    .then(maps => res.send(maps.rows))
  });


  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM maps WHERE id = ${req.params}`)
      .then(map => { res.send(map.rows[0])})

    //This will send back a map, and all of it's associated data with pins joined on.

  });
  router.get("/myMaps/:id", (req, res) => {
    db.query(`SELECT *
    FROM maps
    JOIN users
    ON owner_id = users.id
    WHERE owner_id = ${req.params.id}
    GROUP BY maps.id, users.id`)
      .then(map => { res.send(map.rows)})

    //This will send back all maps that belong to the user id

  });
  router.get("/favourites/:id", (req, res) => {
    db.query(`SELECT *
    FROM favourites
    JOIN maps ON maps.id = map_id
    JOIN users ON owner_id = users.id
    WHERE user_id = ${req.params.id}
    `)
      .then(map => { res.send(map.rows)})

    //This will send back all maps that belong to the user id

  });

  router.post("/:id", (req, res) => {
    //This will be a path for editing the data for the map in the database,
    //likely containing form data to update
  });

  // router.post("/", (req, res) => {

  //   //This will be a path for creating a new map in the database -- the request should
  //   //be holding some form data for us to convert into a database store
  // });

  router.post("/:id/delete", (req, res) => {
    // This will come from a delete button tied to a map
  });

  return router;
};
