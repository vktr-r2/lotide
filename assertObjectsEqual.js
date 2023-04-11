const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  let assertion = eqObjects(actual, expected);
  if (assertion === true) console.log(`🟩 🟩 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  if (assertion === false) console.log(`🔴 🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = eqObjects;


// //eqObjects function checks whether two objects are identical to one another
// const eqObjects = (obj1, obj2) => {
//   //Check to see if Object.keys array lengths are equal
//   const obj1Keys = Object.keys(obj1);
//   const obj2Keys = Object.keys(obj2);
//   if (obj1Keys.length !== obj2Keys.length) {
//     return false;
//   }
//   //Iterate through each propery with for..in
//   for (let property in obj1) {
//     //Check if value is an array, if TRUE run nested if statement holding eqArrays function to compare arrays
//     if (Array.isArray(obj1[property]) && Array.isArray(obj2[property])) {
//       if (!eqArrays(obj1[property],obj2[property])) {
//         return false;
//       }
//       //If isArray false, compare two properties with inequality opperator
//     } else if (obj1[property] !== obj2[property]) {
//       return false;
//     }
//   }
//   return true;
// };




// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { colors: ["red", "blue"], size:"medium" };
// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);