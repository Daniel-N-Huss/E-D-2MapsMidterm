$(document).ready(function () {

  $(".user-map-input").submit(function(event) {
    event.preventDefault();
    alert( "Handler for .submit() called." );
    console.log(event)

    $.post('/api/maps/', $(this).serialize())
    .done(function(response) {
      console.log(response)
      console.log('im done')
    })
  });




});

