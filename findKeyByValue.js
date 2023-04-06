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

const findKeyByValue = (object, value) => {
  for (let key in object) {
    checkVariable = object[key];
    if (object[key] === value) {
      return (key);
    }
  }
}



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const value = "The Wire";

findKeyByValue(bestTVShowsByGenre, value);


//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);