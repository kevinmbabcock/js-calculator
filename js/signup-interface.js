$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    let email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend(`<p>Thank you, ${email} has been added to our list!</p>`);
  });
});
