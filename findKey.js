const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (let k in object) {
    if (callback(object[k])) {
      return k;
    }
  }
};

const nestedObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

console.log(findKey(nestedObj, x => x.stars === 2));
//EXPECTED => "noma"

assertEqual(findKey(nestedObj, x => x.stars === 2), 'noma');