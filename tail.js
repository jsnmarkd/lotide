const tail = function(data) {
  if (data.length === 0) {
    return [];
  } else {
    return data.slice(1);
  }
};

module.exports = tail;