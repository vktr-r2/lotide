//CODED FUNCTION
//Declare middle function which takes array as parameter
const middle = (arr) => {
  //Declare midPoints empty array to store final result
  let midPoints = [];
  //Declare arrayLength as number value to store the length of the array passed into the function
  let arrayLength = arr.length;
  //Return empty array if arrayLength > 3 (No midpoint)
  if (arrayLength < 3) {
    return midPoints;
  }
  //Return array of two elements if arrayLength is even number
  if (arrayLength % 2 === 0) {
    //First midpoint equals arr index at arrayLength divided by 2 then subtracted by one (making up for 0 indexing)
    midPoints.push(arr[(arrayLength / 2) - 1]);
    //Second midpoint equals arr index at arrayLength divided by 2
    midPoints.push(arr[arrayLength / 2]);
    return midPoints;
  }
  //Return array of one element if arrayLength is odd number
  if (arrayLength % 2 === 1) {
    //Midpoint equals arr index of arrayLength divded by 2, then rounded down (round down to make up for 0 indexing)
    midPoints.push(arr[Math.floor(arrayLength / 2)]);
    return midPoints;
  }
};

module.exports = middle;