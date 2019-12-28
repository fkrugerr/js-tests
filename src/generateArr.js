function generateArr (n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push((Math.random() * 10).toFixed(1));
  }
  return arr;
};

module.exports = generateArr;
