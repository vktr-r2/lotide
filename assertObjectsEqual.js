//eqObjects function checks whether two objects are identical to one another
const eqObjects = (object1, object2) => {
  //Check to see if Object.keys array lengths are equal
  const Object1Keys = Object.keys(object1);
  const Object2Keys = Object.keys(object2);
  if (Object1Keys.length !== Object2Keys.length) {
    return false;
  }
  //Iterate through each propery with for..in
  for (let property in object1) {
    //Check if value is an array, if TRUE run nested if statement holding eqArrays function to compare arrays
    if (Array.isArray(object1[property]) && Array.isArray(object2[property])) {
      if (!eqArrays(object1[property],object2[property])) {
        return false;
      }
      //If isArray false, compare two properties with inequality opperator
    } else if (object1[property] !== object2[property]) {
      return false;
    }
  }
  return true;
};



// const assertObjectsEqual = (actual, expected) => {
//   const inspect = require('util').inspect;
//   let assertion = eqObjects(actual, expected);
//   if (assertion === true) console.log(`🟩 🟩 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
//   if (assertion === false) console.log(`🔴 🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
// };

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { colors: ["red", "blue"], size:"medium" };
// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

module.exports = eqObjects;