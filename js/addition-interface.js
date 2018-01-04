import { Calculator } from './../js/pingpong.js';

$(document).ready(function() {
  $('#addition').submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($('#number1').val());
    let number2 = parseInt($('#number2').val());
    let simpleCalculator = new Calculator("hot pink");
    let output = simpleCalculator.addition(number1, number2);
    $('#solution').append(`<p> ${number1} plus ${number2} equals ${output} </p>`);
  });
});
