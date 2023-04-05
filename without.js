const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

//Define assertArraysEqual func, takes two arrays as params
const assertArraysEqual = (array1, array2) => {
  //Declare assertion var to equal the output of two arrays being passed into eqArrays function
  let assertion = eqArrays(array1, array2);
  //Console log pass or fail accordingly
  if (assertion === true) console.log(`🟩 🟩 Assertion Passed: array1 === array2`);
  if (assertion === false) console.log(`🔴 🔴 Assertion Failed: array1 !== array2`);
};


/* //TASK//
Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

Use assertArraysEqual to write test cases for various scenarios.

Write a test case to make sure that the original array is not modified.


//PSEUDO//
- /Without function will take source array and itemsToRemove.  iTR will be used as control
- Need nested for statements (Try without index)?
- Need to declare empty array where answer will be pushed
- First for statement takes elements in control array one by one
- Second for statement checks element in source array against control array.  If not equal then push to empty array
- Return empty array as answer

//EDGE CASES TO TEST//
- Enter no elements to be removed from source array
- Enter elements that would require coercion to match, but are not identical ('1' !== 1 )
- Provide source where all elements are to be removed
- TEST TO MAKE SURE ORIGINAL ARRAY IS NOT ALTERED


//TOOLS TO USE//
- for in loop
- slice (Doesn't modify original array)
- Array.prototype.filter() ??  No experience using this
- (!contorl element)
*/


//CODE//

const without = (source, itemsToRemove) => {
  
}