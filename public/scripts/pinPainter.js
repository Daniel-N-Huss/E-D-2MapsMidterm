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

      userMarkers.forEach(marker => {
        marker.addListener('mouseover', ()=> {
          $(`section:contains(${marker.getTitle()}`).animate({'margin': '+=50px'}, 500);
        })
        marker.addListener('mouseout', ()=> {
          $(`section:contains(${marker.getTitle()}`).animate({'margin': '-=50px'}, 500);
        })

      });

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
