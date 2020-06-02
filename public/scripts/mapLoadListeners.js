const mapCardListener = function() {
  $(`.popular-maps`).click(function() {
    const mapId = this.dataset.mapId;


    const displayMap = function () {
      const mapOptions = {
        center: {lat: 49.281394, lng: -123.115016},
        zoom: 10
      };
      const mapDiv = document.getElementById('map');
      return new Promise (google.maps.Map(mapDiv, mapOptions));

    };

    // console.log('map before new display ' + $("#map").html());

    displayMap().then(() => {console.log('hi');
    });
    // const promisedMap = (new Promise(displayMap))
      // .then(() => {
        // console.log('map after new display ' + $("#map").html());
      // })
      // .catch((err) => {console.log(err);
      // })




  });
  }
