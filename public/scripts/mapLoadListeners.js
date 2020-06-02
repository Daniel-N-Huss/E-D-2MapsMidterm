const mapCardListener = function() {
  $(`.popular-maps`).click(function() {
    const mapId = this.dataset.mapId;

    console.log(mapId);

    getMaps(mapId)
      .then(pins => {

        console.log(pins);

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 49.2827, lng: -123.1207},
          zoom: 10
        })

        pinPainter(mapData.map);
      })

    console.log($(this.dataset[0]));
  });
}
