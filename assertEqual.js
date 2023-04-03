//Define assertEqual function, takes two params
const assertEqual = (actual, expected) => {
  //If statement checks if two params are identical
  if (actual !== expected) {
    //If FALSE, log error
    console.log('🔴' + '🔴 ' + 'Assertion Failed: ' + actual + ' !== ' + expected);
  } else {
    //If TRUE, log success
    console.log('🟩' + '🟩 ' + 'Assertion Passed: ' + actual + ' === ' + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);