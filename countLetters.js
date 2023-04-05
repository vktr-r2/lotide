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
//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
//this function could return an object where each unique character encountered in the string is a property of the object and the value for that property/key should be the number of occurrences for that character.

//HOW//
//How do I handle letters that I am supposed to check for, but don't appear in my string?

//countLetters takes a inputString and checkLetters array
const countLetters = (inputString, checkLetters) => {
  const letterCount = {}
  for (letter of checkLetters) {
    if (letter !== ' ')letterCount[letter] = 0
  }
  console.log(letterCount)
};


//TEST CODE//

const string = "I am slowly getting very sleep";
const check = ['a', 'b', 'e', 's'];

countLetters(string,check);