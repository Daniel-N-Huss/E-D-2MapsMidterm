const mapCardListener = function() {
  $(`.popular-maps`).click(function() {
    const mapId = this.dataset.mapId;

    console.log(mapId);


    console.log(window.google.maps);

    // google.maps.getMap();
    console.log("mapCardListener -> google.maps.getMap();", window.google.maps.getMap());



    // getMapPins(mapId)
      // .then(pins => {

        // console.log(pins);

        // window.google.maps.marker.forEach(marker => {
        // marker.setMap(null)
        // });



        // pinPainter(maps.id);
      // })

    console.log($(this.dataset[0]));
  //});
})
}
