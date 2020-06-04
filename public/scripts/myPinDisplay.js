const createMyPinElement = function(pin) {
  console.log(pin)
  let $pin =
  // creates pin HTML from db data
  `<section class="pin-info" data-pin-id="${pin.id}">
    <header>
      <p class="pin-title">My map ${pin.title}</p>
    </header>
    <div class="pin-body">
      <img src="${pin.thumbnail_url}" alt="Pin Icon"><p class="map-description"> ${pin.description}
      </p>
    </div>
  </section>`
  return $pin;
};


const renderMyPins = function(pins) {

  for (let i = 0; i < pins.length; i++) {
    const currentPin = createMyPinElement(pins[i]);
    $('#pins-display').append(currentPin);
  }
};



const myPinDisplay = function(mapId) {


  getPinDetails(mapId)
    .then(pins => {
      renderMyPins(pins)
    })
    .then(() => {
      $(`.pin-info`).mouseover(function() {
        const pinId = this.dataset.pinId

        userMarkers.forEach(marker => {

          console.log(marker.title)
          if (marker.title === pinId) {
            marker.setAnimation(google.maps.Animation.BOUNCE)
            setTimeout(()=> {marker.setAnimation(google.maps.Animation.null)} , 2000)
          }
        });

      });
    })
}



