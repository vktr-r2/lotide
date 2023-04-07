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
  if (assertion === true) console.log(`🟩 🟩 Assertion Passed: ${array1} === ${array2}`);
  if (assertion === false) console.log(`🔴 🔴 Assertion Failed: ${array1} !== ${array2}`);
};




const takeUntil = function(array, callback) {
  const result = [];
  for (let elm of array) {
    if (!callback(elm)) {
      result.push(elm);
    } else {
      return result;
    }
  }
  return result;
};





const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === 'Toronto');
assertArraysEqual(results2, data2)

//console.log(results2);
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]