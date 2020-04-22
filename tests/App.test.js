const assert = require("assert");
const { test } = require("../index");

test("should equal 20", () => assert.equal(20, multiply(10, 2)));

function multiply(a, b) {
  return a * b;
}
