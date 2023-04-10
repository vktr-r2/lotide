const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {

  it("returns true for 1 === 1", () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });

  it(`returns false for 1 === "1"`, () => {
    assert.strictEqual(assertEqual(1, "1"), false); 
  });
});