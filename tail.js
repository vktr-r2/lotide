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


//Define tail function, takes array as param
const tail = (array) => {
  //Use slice method to move all elements except for array[0] to newArray
  let newArray = array.slice(1, array.length);
  return newArray;
};

//TEST CODE
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3);