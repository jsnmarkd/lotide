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

const without = function(source, itemsToRemove) {
  const result = [...source] // copies array
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (result[i] === itemsToRemove[j]) {
        result.splice(i, 1);
      }
    }
  }
  return result;
};

module.exports = without;

//TEST

console.log("without:", without([1, 2, 3], [1])); // => [2, 3]
console.log("without:", without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log("array:", words); // print array
console.log("without:", without(words, ["lighthouse"])); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);// Make sure the original array was not altered by the without function
