const createPinElement = function(pin) {
  console.log(pin)
  let $pin =
  // creates pin HTML from db data
  `<section class="pin-info" data-pin-id="${pin.id}">
      <img src="${pin.thumbnail_url}" alt="Pin Icon">
      <div class="pin-body">
      <p class="pin-title">${pin.title}</p>
      <p class="map-description"> ${pin.description}
      </p>
    </div>
  </section>`
  return $pin;
};


const renderPins = function(pins) {

  for (let i = 0; i < pins.length; i++) {
    const currentPin = createPinElement(pins[i]);
    $('#pins-display').append(currentPin);
  }
};



const pinDisplay = function(mapId) {


  getPinDetails(mapId)
    .then(pins => {
      renderPins(pins)
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


const clearPinDisplay = function() {
  $('#pins-display').empty();
};
