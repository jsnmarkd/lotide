const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(data) {
  if (data[1] === undefined || data === []) {
    console.log([]);
  } else {
    console.log(data.slice(1));
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const words1 = ["Yo Yo"];
const words2 = [];
tail(words);
tail(words1);
tail(words2);
assertEqual(words.length, 3); // original array should still have 3 elements!