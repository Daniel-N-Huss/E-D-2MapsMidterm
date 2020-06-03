const createPinElement = function(pin) {
  let $pin =
  // creates map HTML with input from client
  `<section class="pin-info" data-pin-id="${pin.id}">
    <header>
      <p class="pin-title">${pin.title}</p>
    </header>
    <div class="pin-body">
      <img src="${pin.thumbnail_url}" alt="Pin Icon"><p class="map-description"> ${pin.description}
      </p>
    </div>
  </section>`
  return $pin;
};

const renderPins = function(pins) {

  for (let i = 0; i < pins.length; i++) {
    const currentPin = createPinElement(pins[i]);
    console.log(currentPin);
    $('#pins-display').append(currentPin);
  }
};



const pinDisplay = function(mapId) {


  getPinDetails(mapId)
    .then(pins => {
      console.log(pins)
      renderPins(pins)
    })
}


const clearPinDisplay = function() {
  $('#pins-display').empty();
};
