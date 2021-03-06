const menu = function () {
  $(document).ready(function() {
    loginListener();


  });
}
menu();




const logoutListener = function(response) {
  $(".logout").click(function(event) {

    event.preventDefault();
    // console.log("hello");

    $.get(`/api/users/logout/${response[0].id}`)
    .done(function (response) {
      console.log("done!");
      $('.menu').empty();
      $('.menu').append(
        `
        <form class="text-center login" action="/login" method="POST">
              <label for="email">Username</label>
              <input class="form-control" type="email" name="email" style="width: 150px; margin: 1em auto 1em auto">
              <label for="password">Password</label>
              <input class="form-control" type="password" name="password" style="width: 150px; margin: 1em auto 1em auto">
              <button type="submit" class="btn btn-primary">Login</button>
        </form>

              `
      )
      menu();
      $('.maps-container').empty();
      loadMaps();
    })
  });
}
const loginListener = function() {
  $(".login").submit(function(event) {
    event.preventDefault();
    $.get('/api/users/login/3')
    .done(function (response) {
      $('.menu').empty();
      $.get(`/api/users/${response}`, JSON)
      .done(function (response) {
        console.log(response);
        $('.menu').append(
          `
          <a href="#">Logged in as: ${response[0].username}</a>
          <a href="#" class="favourites" onclick="closeOverlays(); moveMapsBack()" >Favourites</a>
          <a href="#" class="myMaps" onclick="closeOverlays(); moveMapsBack()">My Maps</a>
          <a onclick="closeOverlays(); openNav();" href="#">New Map</a>
          <a href="#" class="logout" onclick="closeOverlays(); moveMapsBack()">Logout</a>

                `
        )// add clearing function in logout
        myMapsListener(response);
        favouritesListener(response);
        logoutListener(response);
        $('.maps-container').empty();
        loadMaps();


      })

    })
  });
}
const myMapsListener = function(response){
  $(".myMaps").click(function(event) {
    console.log("myMaps");

    loadMyMaps(response[0].id);
  })
}
const favouritesListener = function(response){
  $(".favourites").click(function(event) {
    console.log("favourites");

    loadFavourites(response[0].id);
  })
}
const brandListener = function() {
  $("#brand-container").click(function(event) {
    $('.maps-container').empty();
    loadMaps();
  })
}
brandListener();
