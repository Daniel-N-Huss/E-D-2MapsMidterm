const pinCardListener = function(){};

const mapCardListener = function() {
  $(`.popular-maps`).click(function() {
    const mapId = this.dataset.mapId;

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
