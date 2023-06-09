// allItemsArr: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItemsArr, itemsToCount) {
  const results = {};
  for (const item of allItemsArr) {
    if (itemsToCount[item]) {
      if (!results[item]) {
        results[item] = 0;
      } 
        results[item] ++;
    }
  }
  console.log(results);
  return results;
};

module.exports = countOnly;


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

// //TEST CODE//
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
