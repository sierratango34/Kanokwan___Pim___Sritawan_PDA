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

  it("it can subtract numbers", function() {
    calculator.numberClick(7);
    calculator.operatorClick("-");
    calculator.subtract(4);
    expected = calculator.runningTotal;
    assert.equal(3, expected);
  });

  it("it can multiply numbers", function() {
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.multiply(5);
    expected = calculator.runningTotal;
    assert.equal(15, expected);
  });
});
