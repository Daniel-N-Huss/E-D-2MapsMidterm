const pinPainter = function(map_id) {

 getMapPins(map_id)
    .then(pins => {
      pins.forEach(pin => {


        userMarkers.push(new google.maps.Marker({
          map: map,
          position: {lat: parseFloat(pin.geo_location.lat), lng: parseFloat(pin.geo_location.lng)},
          title: pin.id.toString()
        }))
      })
    });
};
