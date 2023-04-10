
const assertEqual = function(actual, expected) {
  if (!(actual === expected)) {
    return false;
  } else {
    return true;
  }
};


module.exports = assertEqual;