const renderPinlist = function(pins) {
  // loops through maps
  for (let i = 0; i < pins.length; i++) {
    // calls createMapElement for each map
    const currentPin = createPinList(pins[i]);
    // takes return value and appends it to the maps container
    $('xxxx').append(currentPin);
  }
};

const createPinList = function(pin) {
  let $pinlist =
  // creates map HTML with input from client
<a href="#">pin.title</a>
  return $pinlist;
};
