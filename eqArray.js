//Define eqArrays func, takes two arrays as params
const eqArrays = (arr1, arr2) => {
  //If arrays are not equal length, return false
  if (arr1.length !== arr2.length) return false;
  //Iterate through arrays with for statement
  for (let i = 0; i < arr1.length; i++) {
    //Compare value of arr1[i] to arr2[i] counterpart.  If not identical return false
    if (arr1[i] !== arr2[i]) return false;
  }
  //If function processes this far, return true
  return true;
};

module.exports = eqArrays;