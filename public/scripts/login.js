$(document).ready(function() {
  $(".login").submit(function(event) {
    event.preventDefault();
    $.get('/api/users/login/2')
    .done(function (response) {
      $('.menu').empty();
      $.get(`/api/users/${response}`, JSON)
      .done(function (response) {
        console.log(response);
        $('.menu').append(
          `
          <a href="#">Logged in as: ${response[0].username}</a>
          <a href="#">Favorites</a>
          <a href="#">My Maps</a>
          <a onclick="openNav(); moveMaps()" href="#">New Map</a>
          <a href="#" class="logout" >Logout</a>

                `
        )
        $(".logout").click(function(event) {

          event.preventDefault();
          console.log("hello");

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
          })
        });
      })

    })
  });


});
