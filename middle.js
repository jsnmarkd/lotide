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

module.exports = middle;