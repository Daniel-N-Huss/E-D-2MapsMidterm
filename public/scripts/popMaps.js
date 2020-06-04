let isloggedin = false;
let favourite;
const renderMaps = function(maps) {
  // append Title
  $('main.maps-container').append(
    `
    <h1>Popular Maps</h1>
    `
  );
  // loops through maps
  isFavourite(isloggedin).then(()=>{
    for (let i = 0; i < maps.length; i++) {
      // calls createMapElement for each map

      const currentMap = createMapElement(maps[i]);
      // takes return value and appends it to the maps container
      $('main.maps-container').append(currentMap);
      favoriteButtonListener(maps[i].id);
    }
  })
};

//Function to create the Element that hosts the map, and to apply
const createMapElement = function(map) {
  let $map; // declare $map variable

  if (isloggedin) { // check if user is logged or not
    console.log("in element:" + mapIdCheck(favourite, map));
    if (mapIdCheck(favourite,map)){
      $map =
      // creates map HTML that is favourited
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
          <span class="material-icons" id="favourite-icon-${map.id}"> favorite </span>
        </footer>
      </section>`
    } else {
      $map =
      // creates map HTML that is not favourited
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
    }
  } else {
    $map =
  // creates map HTML without favourite button
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
  })
});

const isLoggedIn = function() {
  return $.get(`/api/users/isloggedin`)
  .done(function (response) {
    //console.log("response:"+response);
    isloggedin = response;
    // console.log(isloggedin);

  });
}
const isFavourite = function(userId, map) {
  if (isloggedin) {
    return $.get(`/api/favourites/user/?userId=${userId}`)
    .done(function (response) {
      favourite = response;
    });
  } else {
    return $.get(`/api/users/isloggedin`)
      .done(function (response) {

      });
  }

}
const mapIdCheck = function(maps, map) {
  let bool = false;
  for (let i of maps){
    if (i.map_id === map.id){
      bool = true;
    }
  }
  return bool;
}

const favoriteButtonListener = function(id) {
  $(`#favourite-icon-${id}`).click(function(event) {
    console.log("Favorite button"+id);
  })
}



