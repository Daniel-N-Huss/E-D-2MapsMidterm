
const myMapCardListener = function(mapId) {
  console.log("#map-body-" + mapId);

  $("#map-body-" + mapId).click(function() {
    $( "#map_ID" ).val(mapId);

    // const mapId = this.dataset.mapId;
    console.log('popmaps' + mapId);

    const refreshMap = function () {

      for (let i = 0; i < userMarkers.length; i++) {
        userMarkers[i].setMap(null)
      }
      userMarkers = []
      pinPainter(mapId);
    }
    clearPinDisplay();

    refreshMap();

    moveMaps();
    openPinsDisplay();

    myPinDisplay(mapId);

  });
}
