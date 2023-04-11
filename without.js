const without = (arr, itemsToRemove) => {
  let filteredArray = arr;
  for (let i = 0; i < itemsToRemove.length; i++) {
    filteredArray = filteredArray.filter((element) => element !== itemsToRemove[i]);
  }
  return filteredArray;
};

module.exports = without;


// const eqArrays = (array1, array2) => {
//   if (array1.length !== array2.length) return false;
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) return false;
//   }
//   return true;
// };

// //Define assertArraysEqual func, takes two arrays as params
// const assertArraysEqual = (array1, array2) => {
//   //Declare assertion var to equal the output of two arrays being passed into eqArrays function
//   let assertion = eqArrays(array1, array2);
//   //Console log pass or fail accordingly
//   if (assertion === true) console.log(`🟩 🟩 Assertion Passed: array1 === array2`);
//   if (assertion === false) console.log(`🔴 🔴 Assertion Failed: array1 !== array2`);
// };


/* //TASK//
Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

Use assertArraysEqual to write test cases for various scenarios.

Write a test case to make sure that the original array is not modified.


//PSEUDO//
- /Without function will take source array and itemsToRemove.  iTR will be used as control DONE
- Need nested for statements (Try for in loop)?
- Need to declare empty array where answer will be pushed
- First for statement takes elements in control array one by one
- Second for statement checks element in source array against control array.  If not equal then push to empty array
- Return empty array as answer

//EDGE CASES TO TEST//
- Enter no elements to be removed from source array BUG
- Enter elements that would require coercion to match, but are not identical ('1' !== 1 ) DONE
- Provide source where all elements are to be removed
- TEST TO MAKE SURE ORIGINAL ARRAY IS NOT ALTERED


//TOOLS TO USE//
- for in loop
- slice (Doesn't modify original array)
- Array.prototype.filter() ??  No experience using this
- (!contorl element)
*/


//CODE//



// //TESTS CONDUCTED//
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
// //EXPECTED ASSERTION PASSED

// const testArray = ["hello", "world", "lighthouse", 1, 2, 3, "123"];
// assertArraysEqual(without(testArray, []), testArray);
// //EXPECTED ASSERTION PASSED

// const testArray1 = ["hello", "world", "lighthouse"];
// assertArraysEqual(without(testArray1, ["lighthouse","123",1,2,3]), ["hello", "world"]);
// //EXPECTED ASSERTION PASSED

// const testArray2 = ["hello", "world", "lighthouse"];
// assertArraysEqual(without(testArray2, testArray2), ["hello", "world", "lighthouse"]);
// //EXPECTED ASSERTION FAILED