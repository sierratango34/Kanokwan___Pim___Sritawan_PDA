var Calculator = require("../../public/js/calculator.js");
var assert = require("assert");

describe("calculator", function() {
  beforeEach(function() {
    calculator = new Calculator();
  });

  it("it has a sample test", function() {
    assert.equal(true, true);
  });

  it("it can add numbers together", function() {
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.add(1);
    expected = calculator.runningTotal;
    assert.equal(5, expected);
  });
});