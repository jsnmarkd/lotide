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
    console.log(`⭕ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = function(array) {
  let middleArr = [];
  if (array.length === 1 || array.length === 2) {
    return middleArr;
  } else if (array.length % 2 === 1) {
    middleArr.push(array[Math.floor(array.length / 2)]);
    return middleArr;
  } else if (array.length % 2 === 0) {
    middleArr.push(array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]);
    return middleArr;
  }
};

// TEST
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9])); // => [5]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [4, 5]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // => [5, 6]

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]));