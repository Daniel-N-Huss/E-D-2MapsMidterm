const testPins = [
  {title: 'Heat', thumbnail_url: 'https://www.master.ca/sn_uploads/fck/heating_history.jpg', description: 'really hot', geo_location: {lat: 34.397, lng: -150.644}, map_id: 1},
  {title: 'Revolver Coffee', thumbnail_url: 'https://i.imgur.com/Q1pA96P.jpg', description: 'Best coffee in Gastown', geo_location: {lat: 49.283158, lng: -123.109305}, map_id: 2},
  {title: 'Bakery Brewing', thumbnail_url: 'https://bccraftbeer.com/app/uploads/2019/05/69200421_2357393507689670_5300398940762406912_o.jpg', description: 'Barrel-aged beer brewed in Port Moody B.C.', geo_location: {lat: 49.278991, lng: -122.853245}, map_id: 3}
  ];


document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map').length > 0)
  {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=&callback=initMap';
    script.async = true;

    document.getElementsByTagName('head')[0].appendChild(script);
  }
});



const pinPainter = function() {

  testPins.forEach(pin => {
    marker = new google.maps.Marker({
      position: pin.geo_location,
      map: map
    })

  });
};


var map;
function initMap() {
  var LHL = {lat: 49.281394, lng: -123.115016};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.2827, lng: -123.1207},
    zoom: 13
  });
  var marker = new google.maps.Marker({position: LHL, map: map});

  pinPainter();
};

