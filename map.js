const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const callbackFunc = word => word[0];

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["light", "house", "labs"];
const results1 = map(words, callbackFunc);


//TEST
console.log(results1);
assertArraysEqual(map(words, callbackFunc), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words1, callbackFunc), ['l', 'h', 'l']);