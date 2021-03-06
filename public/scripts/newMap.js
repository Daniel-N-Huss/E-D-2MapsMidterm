$(document).ready(function () {
  let mapsID;
  console.log('hello')

  $(".user-map-input").submit(function(event) {
    event.preventDefault();
    // alert( "HANDLER FOR MAP SUBMIT" );\
    // refreshMap()
    for (let i = 0; i < userMarkers.length; i++) {
      userMarkers[i].setMap(null)
    }
    userMarkers = []
    $.post('/api/maps/', $(this).serialize())
    .then(maps => {
      //Attach new pin button to pins display that would open user-map-input2
      // call pinDisplay(mapId)
      $( "#create-pin" ).replaceWith( `<h1>${maps.title}</h1>` );
      $( "#map_ID" ).val(maps.id);
      mapsID = maps.id;

      $(".user-map-input").each(function(){
        this.reset();
    });
    })
  });

  $(".user-map-input2").submit(function(event) {
    event.preventDefault();
    // alert( "HANDLER FOR PIN SUBMIT" );

    let long = markers[0].getPosition().lng()
    let lati = markers[0].getPosition().lat()

    const position = {
      lng: long,
      lat: lati
    }

    const data = $(this).serializeArray()
    data.push({name:'Geo_location', value:JSON.stringify(position)})
    // data.push({name:'map_id', value: mapsID})
    $.post('/api/pins/', data)
    .done(function(response) {
      // console.log('this is logging the response back from the maps.js route' + response)

      $(".user-map-input2").each(function(){
        this.reset();
        markers[0].setMap(null)
      });
      clearPinDisplay();
      myPinDisplay(mapsID);
      pinPainter(mapsID);

    })
  });
});

