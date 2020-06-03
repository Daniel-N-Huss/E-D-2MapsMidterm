const pinPainter = function(map_id) {

 getMapPins(map_id)
    .then(pins => {
      pins.forEach(pin => {


        userMarkers.push(new google.maps.Marker({
          map: map,
          position: {lat: parseFloat(pin.geo_location.lat), lng: parseFloat(pin.geo_location.lng)},
          label: pin.id
        }))

      })
  });
};


/*
        let infowindow = new google.maps.InfoWindow({
          content: `<div id="content"> <p>This pin's id: ${pin.id}</p>`
        })
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        })
*/
