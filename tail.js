const tail = function(data) {
  if (data[1] === undefined || data === []) {
    console.log([]);
  } else {
    console.log(data.slice(1));
  }
};

module.exports = tail;