const pinPainter = function(map_id) {

 getMapPins(map_id)
    .then(pins => {

      pins.forEach(pin => {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(pin.geo_location.lat, pin.geo_location.lng),
          map: map
        })

        let infowindow = new google.maps.InfoWindow({
          content: `<div id="content"> <p>This pin's id: ${pin.id}</p>`
        })
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        })
    });

  });
};
