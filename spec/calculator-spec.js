var Calculator = require('./../js/pingpong.js').calculatorModule;


describe('Calculator', function() {
  var reusableCalculator;

  beforeEach(function() {
    reusableCalculator = new Calculator("red");
  });

  it('should test the ping pong method', function() {
    expect(reusableCalculator.pingPong(5)).toEqual([1,2,"ping",4,"pong"])
  });

  it('should test the addition method', function() {
    expect(reusableCalculator.addition(3,5)).toEqual(8)
  });

});
