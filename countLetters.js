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

//TASK//

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
//For example, lettersCounter('LHL') should return results indicating that L appears twice, and H once.
//this function could return an object where each unique character encountered in the string is a property of the object and the value for that property/key should be the number of occurrences for that character.

//HOW//
//How do I handle letters that I am supposed to check for, but don't appear in my string?


const lettersCounter = (checkLetters) => {
  const letterCountObject = {}
  for (check of checkLetters) {
    letterCountObject[check] = 0
  }
  console.log(letterCountObject);
  return letterCountObject;
};

const stringChecker = (inputString, letterCountObject) => {
  console.log(letterCountObject);
  return letterCountObject;
}

//TEST CODE//

const string = "I am slowly getting very sleep";
const checkFor = ['a', 'b', 'e', 's'];

lettersCounter(checkFor);
stringChecker(string);