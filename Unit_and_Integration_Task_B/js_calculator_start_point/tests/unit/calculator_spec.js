var Calculator = require("../../public/js/calculator.js");
var assert = require("assert");

describe("calculator", function() {
  beforeEach(function() {
    calculator = new Calculator();
  });

  xit("it has a sample test", function() {
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

  it("it can divide numbers", function() {
    calculator.numberClick(21);
    calculator.operatorClick("/");
    calculator.divide(7);
    expected = calculator.runningTotal;
    assert.equal(3, expected);
  });

  it("it should be able to clear the screen", function() {
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.add(2);
    expected = calculator.runningTotal;
    assert.equal(4, expected);

    calculator.clearClick();
    expected = 0;
    assert.equal(calculator.runningTotal, expected);
  });
});
