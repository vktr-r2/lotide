const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

//Define assertArraysEqual func, takes two arrays as params
const assertArraysEqual = (array1, array2) => {
  //Declare assertion var to equal the output of two arrays being passed into eqArrays function
  let assertion = eqArrays(array1, array2);
  //Console log pass or fail accordingly
  if (assertion === true) console.log(`🟩 🟩 Assertion Passed: array1 === array2`);
  if (assertion === false) console.log(`🔴 🔴 Assertion Failed: array1 !== array2`);
};