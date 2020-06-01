const testPins = [
  {title: 'Heat', thumbnail_url: 'https://www.master.ca/sn_uploads/fck/heating_history.jpg', description: 'really hot', geo_location: {lat: 34.397, lng: -150.644}, map_id: 1},
  {title: 'Revolver Coffee', thumbnail_url: 'https://i.imgur.com/Q1pA96P.jpg', description: 'Best coffee in Gastown', geo_location: {lat: 49.283158, lng: -123.109305}, map_id: 2},
  {title: 'Bakery Brewing', thumbnail_url: 'https://bccraftbeer.com/app/uploads/2019/05/69200421_2357393507689670_5300398940762406912_o.jpg', description: 'Barrel-aged beer brewed in Port Moody B.C.', geo_location: {lat: 49.278991, lng: -122.853245}, map_id: 3}
  ];

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
