const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return (key);
    }
  }
};

module.exports = findKey


// //Define assertEqual function, takes two params
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

//TRIAL && ERROR TESTING
// const findKey = (obj, callback) => {
//   console.log(obj);
//   for (let key in obj) {
//     console.log(`Key is: ${key}`);
//     let value = obj[key];
//     console.log(callback(value));
//     console.log(`Value: ${value}`)
//     console.log(`Struggling with: ${key}`);
//   }
// };


// assertEqual(
//   findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 2), "noma");


