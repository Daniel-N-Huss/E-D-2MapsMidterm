const renderFavourites = function(maps) {
  // append Title
  $('main.maps-container').append(
    `
    <h1>Favourites</h1>
    `
  );
  // loops through maps
  console.log(maps);

  for (let i = 0; i < maps.length; i++) {
    // calls createMapElement for each map
    const currentMap = createMapElement(maps[i]);
    // takes return value and appends it to the maps container
    $('main.maps-container').append(currentMap);
  }
};


const loadFavourites = function(id) {

  $.get(`/api/maps/favourites/${id}`, JSON)
  .done(function (response) {
    $('.maps-container').empty();
    renderFavourites(response);
    // mapCardListener();
})};

