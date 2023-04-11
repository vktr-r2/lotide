//Declare function
const countLetters = (inputString, checkLettersArr) => {
  //Declare empty object
  const letterCount = {};
  //For loop and if statement create properties in object with value of 0 (Allows us to handle cases where letter doesn't appear in array at all)
  for (letter of checkLettersArr) {
    if (letter !== ' ') letterCount[letter] = 0;
  }
  //For loop and if statement check if character in string exists as key in array and increments accordingly
  for (char of inputString) {
    if (letterCount[char] >= 0) {
      letterCount[char] += 1;
    }
  }
  return letterCount;
};

module.exports = countLetters


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



//TEST CODE//
// const string = "I am ssslowly getting the hang of this!";
// const check = ['a', 'b', 'e', 's'];

// assertEqual(countLetters(string,check)["a"], 2);
// assertEqual(countLetters(string,check)["b"], 0);
// assertEqual(countLetters(string,check)["e"], 2);
// assertEqual(countLetters(string,check)["s"], 4);
