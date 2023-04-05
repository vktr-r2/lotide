//ASSERTION FUNCTIONS//

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

//TASK//
// Implement middle which will take in an array and return the middle-most element(s) of the given array.

// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// For arrays with one or two elements, there is no middle. Return an empty array.
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned



//PSEUDO//
//IN - Function will take an array of numbers as parameter
//OUT - Will output middle element(s) in that array in a separate array
//HOW - First function should determine the middle value based on parameter length
// - Second function should iterate through parameter array and push middle element(s) to new array
// - Return that new array
// - Appears that no existing JS methods for finding middle of array
// - For EVEN numbers (array.lenth / 2 > result and result + 1 would be midpoints that should be stored in an array)
// - For ODD numbers (array.length / 2 > apply Math.ceiling to result to find midpoint)

//CODED FUNCTION

const middle = (arrayArg) => {
  let midPoints = []
  let arrayLength = arrayArg.length;
  //console.log(arrayLength);
  if (arrayLength < 3) {return midPoints;}
  if (arrayLength % 2 === 0) {
    midPoints.push(arrayArg[(arrayLength/2) - 1]);
    midPoints.push(arrayArg[arrayLength/2]);
    return midPoints;
  }
  if (arrayLength % 2 === 1) {
    midPoints.push(arrayArg[Math.ceil(arrayLength/2)]);
    return midPoints;
  }
}; 

console.log(middle([1,2,3]));


//TEST CODE