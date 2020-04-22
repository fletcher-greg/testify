const assert = require("assert");
const { test } = require("../index");

const add = (a, b) => a + b;

const hi = () => "hi";

test("should equal 2", () => assert.equal(3, add(1, 2)));
test('should equal "hi"', () => assert.equal("hi", hi()));
