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
    })
  });
}
const loginListener = function() {
  $(".login").submit(function(event) {
    event.preventDefault();
    $.get('/api/users/login/1')
    .done(function (response) {
      $('.menu').empty();
      $.get(`/api/users/${response}`, JSON)
      .done(function (response) {
        console.log(response);
        $('.menu').append(
          `
          <a href="#">Logged in as: ${response[0].username}</a>
          <a href="#" class="favourites">Favourites</a>
          <a href="#" class="myMaps">My Maps</a>
          <a onclick="openNav(); moveMaps()" href="#">New Map</a>
          <a href="#" class="logout" onclick="closeNav(); moveMapsBack()">Logout</a>

                `
        )// add clearing function in logout
        myMapsListener(response);
        logoutListener(response);

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
