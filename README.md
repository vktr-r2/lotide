# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vktr-r2/lotide`

**Require it:**

`const _ = require('@vktr-r2/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


  `eqArray(arr1, arr2)`: checks if two arrays are equal, returns true or false
  `eqObjects(obj1, obj2)`: checks if two objects are equal, returns true or false
  `assertEqual(actual, expected)`: checks if two inputs are equal, returns true or false
* `assertArraysEqual(actual, expected)`: checks output of eqArrays vs expected, returns assertion
  `assertObjectsEqual(obj1, obj2)`: checks output of eqObjects vs expected, returns assertion
  `head(arr)`: returns only the 0 indexed element in an array
  `tail(arr)`: returns all elements except 0 indexed element in a separate new array
  `middle(arr)`: returns middle element(s) from an array
  `countLetters(inputString, checkLettersArr)`: counts how many times a character appears in a string, returns object storing property
  `countOnly(allItemsArr, itemsToCount)`: takes two arrays, counts elements in one array based on elements given in second array
  `findKeyByValue(obj, value)`: takes object and value and returns key name for the value
  `findKey(obj, callback )`: takes an object and callback, returns the first key for which callback returns truthy value. If no key is found, returns undefined
  `flatten(arr)`: Takes an array with arrays in it, and returns all elements in all 
  `letterPositions(str)`: Returns the index of all characters in a string matching an input character
  `map(arr, callback)`: Takes array and calls callback function argument on each element, returns results in new array
  `takeUntil(arr, callback)`: Takes array and callback, will return new array of elements up until callback function returns true
  `without(arr, itemsToRemove)`: Takes array and array of items to removes, returns array with items that matched removed


  