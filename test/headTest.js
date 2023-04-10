const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);  //PASSED
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //PASSED
assertEqual(head([])); //UNDEFINED === UNDEFINED PASSED
assertEqual(head([1]), 1); //PASSED