const tail = require('../tail');

const assert = require('chai').assert;

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it(`returns [] for ["Yo Yo"]`, () => {
    assert.deepEqual(tail(["Yo Yo"]), []);
  });
  it(`returns [] for []`, () => {
    assert.deepEqual(tail([]), []);
  });
});