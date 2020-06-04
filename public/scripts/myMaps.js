const renderMyMaps = function(maps) {
  // append Title
  $('main.maps-container').append(
    `
    <h1>My Maps</h1>
    `
  );
  // loops through maps
  console.log(maps);

  isFavourite(isloggedin).then(()=>{
    for (let i = 0; i < maps.length; i++) {
      // calls createMapElement for each map
      console.log('this is maps[i]', maps[i])
      const currentMap = createMapElement(maps[i]);
      // takes return value and appends it to the maps container
      $('main.maps-container').append(currentMap);
      myMapCardListener(`${maps[i].id}`);
      favoriteButtonListener(isloggedin, maps[i]);
    }
  })
};

// //Function to create the Element that hosts the map, and to apply
// const createMyMapElement = function(map) {
//   let $map =
//   // creates map HTML with input from client
//   `<section class="popular-maps" data-map-id="${map.id}">
//     <header>
//       <p class="map-title">${map.title}</p>
//       <p class="owner-id">${map.username}</p>
//     </header>
//     <div class="map-body">
//       <img src="${map.thumbnail_url}" alt="Map Icon"><p class="map-description"> ${map.description}
//       </p>
//     </div>
//     <footer>
//       <p> map created: 7 days ago </p>
//       <span class="material-icons"> favorite_border outlined_flag repeat</span>
//     </footer>
//   </section>`
//   return $map;
// };


const loadMyMaps = function(id) {

  $.get(`/api/maps/myMaps/${id}`)
  .done(function (response) {
    $('.maps-container').empty();
    renderMyMaps(response);
    // mapCardListener();
})};

