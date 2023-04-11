const eqArrays = require('./eqArray');

//Define assertArraysEqual func, takes two arrays as params
const assertArraysEqual = (actual, expected) => {
  //Declare assertion var to equal the output of two arrays being passed into eqArrays function
  let assertion = eqArrays(actual, expected);
  //Console log pass or fail accordingly
  if (assertion === true) console.log(`🟩 🟩 Assertion Passed: ${actual} === ${expected}`);
  if (assertion === false) console.log(`🔴 🔴 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;