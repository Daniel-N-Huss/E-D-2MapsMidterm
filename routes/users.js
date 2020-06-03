/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');

router.use(cookieSession({
  name: 'Shh-secret',
  keys: ['Secret', 'rotation'],
}));

/* __________________
    These will all serve responses to ajax requests from the client side
    which means they need to return promises, likely as json data we can render client side
*/


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    //This will return a user and a list of their maps I think
    const user_id = req.params.id;
    db.query(
      `SELECT *
      FROM maps
      JOIN users
      ON users.id = owner_id
      WHERE owner_id = ${user_id}
      GROUP BY users.id, maps.id`
    )
      .then(user => res.send(user.rows));
  });

  router.get("/login/:id", (req, res) => {
    req.session.id = req.params.id;

    res.status(200).send(req.session.id);

  })

  router.get("/logout/:id", (req, res) => {
    console.log("goodbye");

    req.session = null;
    res.status(200).send("ok");
  })

  /*   Routes for possible stretch goals below       */

  // router.post("/:id", (req, res) => {
    // res.send('Ahoy, this be where we might make requests to edit user profile');
  // });

  // router.post("/", (req, res) => {
    // res.send('This would be the route for creating a new user with the login button');
  // });


  return router;
};

