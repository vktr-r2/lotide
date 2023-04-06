//assertEqual function returns pass or fail based on actual input matching expected input
const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🔴 🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟩 🟩 Assertion Passed: ${actual} === ${expected}`);
  }
};

//eqArrays function checks if two arrays are equal or not
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
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


//TEST CODE//
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { colors: ["red", "blue"], size:"medium" };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);
