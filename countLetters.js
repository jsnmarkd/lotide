const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const result = {};
  const text = str.split(" ").join("").toLowerCase(); // .split removes spaces; .join removes the commas after splitting

  for (let letter of text) {
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  return result;
};

module.exports = countLetters;

console.log(countLetters("lighthouse in the house"));