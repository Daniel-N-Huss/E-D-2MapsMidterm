let isloggedin = false;
const renderMaps = function(maps) {
  // append Title
  $('main.maps-container').append(
    `
    <h1>Popular Maps</h1>
    `
  );
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
  let $map;

  if (isloggedin) { // check if user is logged or not
    console.log("in element");

    $map =
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
      <span class="material-icons" id="favourite-icon-${map.id}"> favorite_border </span>
    </footer>
  </section>`
  //icon removed: outlined_flag repeat
  } else {
    $map =
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
    </footer>
  </section>`
  //icon removed: outlined_flag repeat

  }
  return $map;
};


const loadMaps = () => $.get('/api/maps', JSON)
.done(function (response) {
  // $('.maps-container').empty();
  isLoggedIn().then(()=>{
    renderMaps(response);
    mapCardListener();
  }

  )

});

const isLoggedIn = function() {
  return $.get(`/api/users/isloggedin`)
  .done(function (response) {
    //console.log("response:"+response);
    isloggedin = response;
  });
}



