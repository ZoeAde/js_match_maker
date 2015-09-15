$(document).on('ready', function() {
  $('#studentSection').hide();
  $('#mentorSection').hide();


  $('form').on('submit', function(e) {
    e.preventDefault();
    if ($('#category').val() === "student") {
      $('#studentSection').show();
      $('#studentTableBody').append('<tr><td>' + $('#name').val() + '</td><td>' + $('#number').val() + '</td></tr>');
    } else {
      $('#mentorSection').show();
      $('#mentorTableBody').append('<tr><td>' + $('#name').val() + '</td><td>' + $('#number').val() + '</td></tr>');
    }
  });
});

