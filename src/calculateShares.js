var addNumStr = function (num, str) {
  return num + Math.round(str * 1000);
}

function makeCalculatePercentageFn (total) {
  var fn = function (share) {
    return (+share / total * 100).toFixed(3);
  }
  return fn;
}

function calculateShares (data) {
  return data.map(
    makeCalculatePercentageFn(
      data.reduce(addNumStr, 0) / 1000
    )
  );
}

module.exports = calculateShares;
