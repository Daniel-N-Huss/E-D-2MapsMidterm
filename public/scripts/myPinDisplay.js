const createMyPinElement = function(pin) {
  console.log(pin)
  let $pin =
  // creates pin HTML from db data
  `<div>
  <section class="pin-info text-center" data-pin-id="${pin.id}" >
  <img src="${pin.thumbnail_url}" alt="Pin Icon">
  <div class="pin-body">
  <p class="pin-title">${pin.title}</p>
  <p class="map-description"> ${pin.description}
  </p>
</div>
  </section>
  <div class="text-center" style="margin-bottom: 16px">
  <button class="btn btn-primary">edit</button>
      <button class="btn btn-primary">delete</button>
      <div>
      </div>`
  return $pin;
};




const renderMyPins = function(pins) {

  for (let i = 0; i < pins.length; i++) {
    const currentPin = createMyPinElement(pins[i]);
    $('#pins-display').append(currentPin);
  }
  $('#pins-display').append(
  '<button id="pin-submit" type="submit" class="btn btn-primary pins-button" onClick="openPinsDisplay()"> add more pins!</button>'
  )
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



