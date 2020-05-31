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
  });
};

getPinDetails(1);

// Users Requests





// Maps Requests




// Favourites Requests
