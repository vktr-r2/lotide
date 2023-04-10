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

//Implemented flatten.js using recursion


const flatten = (array) => {
  const result = [];  //Declare empty array where answer will be stored
  for (element of array) { //For...of loop iterates through input array
    if (!Array.isArray(element)) { //If current element is array, call flatten function on element
      result.push(element); 
    } else {  //If current element is array, call flatten function on element
      flatten(element);
      result.push(element)
    }  
  }
  return result;  //Return result
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));