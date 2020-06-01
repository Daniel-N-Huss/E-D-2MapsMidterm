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

var map;
function initMap() {
  var LHL = {lat: 49.281394, lng: -123.115016};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.2827, lng: -123.1207},
    zoom: 13
  });
  var marker = new google.maps.Marker({position: LHL, map: map});

  pinPainter(2);
};

