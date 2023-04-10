//Define eqArrays func, takes two arrays as params
const eqArrays = (array1, array2) => {
  //If arrays are not equal length, return false
  if (array1.length !== array2.length) return false;
  //Iterate through arrays with for statement
  for (let i = 0; i < array1.length; i++) {
    //Compare value of array1[i] to array2[i] counterpart.  If not identical return false
    if (array1[i] !== array2[i]) return false;
  }
  //If function processes this far, return true
  return true;
};

module.exports = eqArrays;