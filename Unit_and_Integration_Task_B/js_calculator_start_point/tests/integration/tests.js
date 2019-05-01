const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const should = chai.should();

describe("calculator functionality", function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get("http://localhost:3000");
  });

  // write integration tests here in the form of "it should do something..."
  it("should have working number buttons", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("2");
  });

  it("update the display of the running total", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number8")).click();
    element(by.css("#operator_equals")).click();

    expect(running_total.getAttribute("value")).to.eventually.equal("10");
  });

  it("multiple operations be chained together", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number8")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number9")).click();
    element(by.css("#operator_equals")).click();

    expect(running_total.getAttribute("value")).to.eventually.equal("90");
  });

  it("display a positive number", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();

    expect(running_total.getAttribute("value")).to.eventually.equal("2");
  });

  it("display a negative number", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number8")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("-6");
  });

  it("display a decimal", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number9")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number1")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("2.5");
  });
});
