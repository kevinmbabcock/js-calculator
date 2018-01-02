var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#addition').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.addition(number1, number2);
    $('#solution').append("<p>" + number1 + " plus " + number2 + " equals " + output + "</p>");
  });
});
