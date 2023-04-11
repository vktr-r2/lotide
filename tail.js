//Define tail function, takes array as param
const tail = (arr) => {
  //Use slice method to move all elements except for array[0] to newArray
  let newArr = arr.slice(1, arr.length);
  return newArr;
};


module.exports = tail;