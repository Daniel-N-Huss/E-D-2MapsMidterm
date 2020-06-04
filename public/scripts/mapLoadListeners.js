const pinCardListener = function(){};

const mapCardListener = function(mapId) {
  console.log("#data-map-" + mapId);

  $("#data-map-" + mapId).click(function() {


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

    pinDisplay(mapId);

  });
}
