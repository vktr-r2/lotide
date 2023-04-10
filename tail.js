//Define tail function, takes array as param
const tail = (array) => {
  //Use slice method to move all elements except for array[0] to newArray
  let newArray = array.slice(1, array.length);
  return newArray;
};


module.exports = tail;