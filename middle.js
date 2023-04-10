//CODED FUNCTION
//Declare middle function which takes array as parameter
const middle = (arrayArg) => {
  //Declare midPoints empty array to store final result
  let midPoints = [];
  //Declare arrayLength as number value to store the length of the array passed into the function
  let arrayLength = arrayArg.length;
  //Return empty array if arrayLength > 3 (No midpoint)
  if (arrayLength < 3) {
    return midPoints;
  }
  //Return array of two elements if arrayLength is even number
  if (arrayLength % 2 === 0) {
    //First midpoint equals arrayArg index at arrayLength divided by 2 then subtracted by one (making up for 0 indexing)
    midPoints.push(arrayArg[(arrayLength / 2) - 1]);
    //Second midpoint equals arrayArg index at arrayLength divided by 2
    midPoints.push(arrayArg[arrayLength / 2]);
    return midPoints;
  }
  //Return array of one element if arrayLength is odd number
  if (arrayLength % 2 === 1) {
    //Midpoint equals arrayArg index of arrayLength divded by 2, then rounded down (round down to make up for 0 indexing)
    midPoints.push(arrayArg[Math.floor(arrayLength / 2)]);
    return midPoints;
  }
};

module.exports = middle;