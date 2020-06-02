const renderMaps = function(maps) {
  // loops through maps
  for (let i = 0; i < maps.length; i++) {
    // calls createMapElement for each map
    const currentMap = createMapElement(maps[i]);
    // takes return value and appends it to the maps container
    $('main.maps-container').append(currentMap);
  }
};

//Function to create the Element that hosts the map, and to apply
const createMapElement = function(map) {
  let $map =
  // creates map HTML with input from client
  `<section class="popular-maps" data-map-id="${map.id}">
    <header>
      <p class="map-title">${map.title}</p>
      <p class="owner-id">${map.username}</p>
    </header>
    <div class="map-body">
      <img src="${map.thumbnail_url}" alt="Map Icon"><p class="map-description"> ${map.description}
      </p>
    </div>
    <footer>
      <p> map created: 7 days ago </p>
      <span class="material-icons"> favorite_border outlined_flag repeat</span>
    </footer>
  </section>`
  return $map;
};


const loadMaps = () => $.get('/api/maps', JSON)
.done(function (response) {
  // $('.maps-container').empty();
  renderMaps(response);
  mapCardListener();
});

