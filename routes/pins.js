const express = require('express');
const router = express.Router();

/* __________________
    These will all serve responses to ajax requests from the client side
    which means they need to return promises; likely as json data we can render
*/


module.exports = (db) => {

  //retrieve all pins for a map
  router.get('/map/', (req, res) => {
    const { mapId } = req.query;

    db.query(`
    SELECT pins.id, pins.geo_location
    FROM pins
    JOIN maps ON maps.id = map_id
    GROUP BY pins.id
    HAVING map_id = ${mapId}
    `)
      .then(data => {
        let pins = data.rows
        pins.forEach(pin => {
          pin.geo_location = JSON.parse(pin.geo_location);

        });
        res.send(pins);
      })
        .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

    //this might send the pin id & the geo-location only, for the map to paint the pins onto itself?
    //Joined onto the map called
  });

  router.get('/', (req, res) => {

    const { mapId } = req.query;
    db.query(
      `SELECT pins.id, maps.id as map_id, pins.title, pins.thumbnail_url, pins.description, pins.geo_location
      FROM pins
      JOIN maps ON maps.id = map_id
      WHERE map_id = ${mapId}
      `
    ).then(data => {


      const pinData = data.rows;
      console.log("pinData", pinData)

      res.send(pinData);
    })
      .catch(err => {
        res
          .status(500);
      });


  });

  router.post('/:id', (req, res) => {
    //a post request to change the details of a particular pin
    //this will come in with form data, and respond with a promise returning the edited table data
  });

  router.post('/', (req, res) => {
    console.log(req)
    db.query (
      `INSERT
      INTO pins (title, description, thumbnail_url)
      VALUES ('${req.body.title}', '${req.body.description}', '${req.body.url}')
      RETURNING *`
      )
    .then(pin => res.send(pin.rows))
  });

  router.post('/', (req, res) => {
    // remove the pin, asking the table to delete the data
  });


  return router;

};
