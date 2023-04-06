const eqArrays = (array1, array2) => {
  //If arrays are not equal length, return false
  if (array1.length !== array2.length) return false;
  //Iterate through arrays with for statement
  for (let i = 0; i < array1.length; i++) {
    //Compare value of array1[i] to array2[i] counterpart.  If not identical return false
    if (array1[i] !== array2[i]) return false;
  }
  //If function processes this far, return true
  return true;
};

//eqObjects function checks whether two objects are identical to one another
const eqObjects = (object1, object2) => {
  //Check to see if Object.keys array lengths are equal
  const Object1Keys = Object.keys(object1);
  const Object2Keys = Object.keys(object2);
  if (Object1Keys.length !== Object2Keys.length) {
    return false;
  }
  //Iterate through each propery with for..in
  for (property in object1) {
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



const assertObjectsEqual = (actual, expected) => {
  let assertion = eqObjects(actual, expected);
  if (assertion === true) console.log(`🟩 🟩 Assertion Passed: ${actual} === ${expected}`);
  if (assertion === false) console.log(`🔴 🔴 Assertion Failed: ${actual} !== ${expected}`);
}

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { colors: ["red", "blue"], size:"large" };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);