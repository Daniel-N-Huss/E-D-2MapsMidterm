// document.addEventListener('DOMContentLoaded', function () {
//   if (document.querySelectorAll('#map').length > 0)
//   {
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = 'https://maps.googleapis.com/maps/api/js?key=&callback=initMap';
//     script.async = true;

//     document.getElementsByTagName('head')[0].appendChild(script);
//   }
// });

// var map;
// function initMap(map_id) {
//   var LHL = {lat: 49.281394, lng: -123.115016};
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 49.2827, lng: -123.1207},
//     zoom: 13
//   });
//   var marker = new google.maps.Marker({position: LHL, map: map});

//   pinPainter(map_id);
// };



// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">


document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map').length > 0)
  {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src= "https://maps.googleapis.com/maps/api/js?key=AIzaSyDULpIxFp_-eO_89aWF2od0f-aa8bnuNK8&libraries=places&callback=initAutocomplete";
    script.async = true;

    document.getElementsByTagName('head')[0].appendChild(script);
  }
});

let map;
let userMarkers = [];
let markers = [];

window.initAutocomplete = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.2827, lng: -123.1207},
    zoom: 13,
    mapTypeId: 'roadmap'
  });


  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls.push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  markers = [];
  console.log(markers)
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();


    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location,
        clickable: true,
      }));
      console.log('HEY THIS MIGHT BE SOME GEO LOCATION DATA? -> ' + markers[0].getPosition())

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

// const apiCall = function() {
// if (document.querySelectorAll('#map').length > 0)
  // {
    // var script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.src = 'https://maps.googleapis.com/maps/api/js?key=&callback=initMap';
    // script.async = true;

    // document.getElementsByTagName('head')[0].appendChild(script);
  // }
// }

// var LHL = {lat: 49.281394, lng: -123.115016};




// window.initMap = function() {


  // map = new google.maps.Map(document.getElementById('map'), {
    // var marker = new google.maps.Marker({position: LHL, map: map});
    // userMarkers.push(marker);

  // };

  // document.addEventListener('DOMContentLoaded', apiCall());
