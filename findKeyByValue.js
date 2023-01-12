const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let keys = Object.keys(object); // store array of object keys into the variable keys
  for (let key of keys) {
    // use bracket notation to access object key
    if (object[key] === value) {
      return key;
    }
  }
};


//TEST
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(bestTVShowsByGenre.drama);
console.log(Object.keys(bestTVShowsByGenre));
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
