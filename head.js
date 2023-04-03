//Define assertEqual function, takes two params
const assertEqual = (actual, expected) => {
  //If statement checks if two params are identical
  if (actual !== expected) {
    //If FALSE, log error
    console.log(`🔴 🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    //If TRUE, log success
    console.log(`🟩 🟩 Assertion Passed: ${actual} === ${expected}`);
  }
};

//Define head function which takes array as param
const head = (array) => {
  //Return the value in 0 index position of array
  return array[0];
};

//assertEqual(head([5,6,7]), 5);  PASSED
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); PASSED
//assertEqual(head([])); UNDEFINED === UNDEFINED PASSED
//assertEqual(head([1]), 1); PASSED