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

const takeUntil = function(array, callback) {
  let newArray = []; 
  for (i of array) {
    newArray.push(i);
    if (callback(i)){
      newArray.pop();
      return newArray;
    }
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expectedData1 = [1, 2, 5, 7, 2];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const expectedData2 = ['I\'ve', 'been', 'to', 'Hollywood'];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, expectedData1);
assertArraysEqual(results2, expectedData2);


/* EXPECTED OUTPUT

[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

*/