//Declare findKeyByValue function, takes obj and value
const findKeyByValue = (obj, value) => {
  //Iterate through properties in array with for...in loop
  for (let key in obj) {
    //Check if values match, if true return KEY
    if (obj[key] === value) {
      return (key);
    }
  }
};

module.exports = findKeyByValue;



// const assertEqual = (actual, expected) => {
//   //If statement checks if two params are identical
//   if (actual !== expected) {
//     //If FALSE, log error
//     console.log(`🔴 🔴 Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     //If TRUE, log success
//     console.log(`🟩 🟩 Assertion Passed: ${actual} === ${expected}`);
//   }
// };



// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
