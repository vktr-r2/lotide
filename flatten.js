const flatten = (arr) => {
  const result = [];                        //store result in empty result array

  for (const element of arr) {              //loop through arr
    if (Array.isArray(element)) {           //if arr element is an array === true
      for (const subArray of element) {     //loop through sub array
        result.push(subArray);              //push each element in subArray to result array
      }
    } else {                                //if arr element is not an array
      result.push(element);                 //push element into result array 
    }
  }
  return result;                            //return result     
};

module.exports = flatten;





console.log(flatten([1, 2, [3, 4 ], 5, [6]]));