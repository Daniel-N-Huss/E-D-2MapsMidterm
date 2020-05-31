/*
  These create the functions needed for querying our DB through ajax reqs to the server
  These are returning the table data through promises.
    use function().then() to do stuff with the data :)
  Any data that you expect as a group will be an array of objects, (like getMaps)
  Singular data will be returned as an object
*/

// Maps Requests

const getMaps = function() {
  return $.ajax({
    url: `api/maps`
  });
};





//Pins Requests

const getMapPins = function(mapId) {
  return $.ajax({
    url: `/api/pins/map/`,
    data: { mapId }
  });
};


const getPinDetails = function(pinId) {
  return $.ajax({
    url: `/api/pins/${pinId}`,
  // }).then(data => {
    // console.log(data);
    // return data;
  // });
  });
};


// Users Requests



// Favourites Requests
