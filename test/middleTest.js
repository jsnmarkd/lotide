const middle = require('../middle');

const assertArraysEqual = require('../assertArraysEqual');

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

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);