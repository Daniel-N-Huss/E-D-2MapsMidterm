const createMyPinElement = function(pin) {
  console.log('pin', pin)
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
  <button class="btn btn-primary" id="edit-button-${pin.id}" onClick="closePinsDisplay(); openNav2(); addMapID(${pin.map_id})">edit</button>
      <button class="btn btn-primary" id="delete-button-${pin.id}">delete</button>
      <div>
      </div>`
  return $pin;
};


const renderMyPins = function(pins) {
  console.log('pins', pins)
  for (let i = 0; i < pins.length; i++) {
    const currentPin = createMyPinElement(pins[i]);
    $('#pins-display').append(currentPin);
    deleteButtonListener(pins[i]);
    editButtonListener(pins[i]);
  }
  $('#pins-display').append(
  `<button id="pin-submit" type="submit" class="btn btn-primary pins-button" onClick="closePinsDisplay(); openNav2(); addMapID(${pins[0].map_id})"> add more pins!</button>`)
console.log('line 35', pins[0].map_id)
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

const addPinListener = function (map_id) {

}

const deleteButtonListener = function(pin) {
  // console.log("delete", pin_id);
  const pin_id = pin.id;
  $(`#delete-button-${pin_id}`).click(function(event) {
    console.log("del ",pin_id);




    $.post(`/api/pins/delete/${pin_id}`)
    .done(function (response) {
      console.log(response);
      $('#pins-display').empty();
      myPinDisplay(pin.map_id);
    })


  })
}
const editButtonListener = function(pin) {
  // console.log("delete", pin_id);
  const pin_id = pin.id;
  $(`#edit-button-${pin_id}`).click(function(event) {
    console.log("del ",pin_id);




    $.post(`/api/pins/delete/${pin_id}`)
    .done(function (response) {
      console.log(response);
      $('#pins-display').empty();
      myPinDisplay(pin.map_id);
    })


  })
}
