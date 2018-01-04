
$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    let goal = $('#goal').val();
    let simpleCalculator = new Calculator("hot pink");
    let output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append(`<li> ${element} </li>`);
    });
  });
});
