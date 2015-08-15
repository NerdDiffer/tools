var assert = require('assert');
var rotate = require('../utils/rotateArray.js');
var rotateSelf = rotate.rotateSelf;
var rotateCopy = rotate.rotateCopy;

var myArr = ['a','b','c','d','e','f','g','h','i','j'];
var arr = ['a', 'b', 'c'];

function runOneTest(fn, arr, direction, times) {
  console.log(arr);
  verdict = assert.equal(arr, rotateSelf(arr, direction));
  console.log(verdict);
  return verdict;
}

runOneTest(rotateSelf, arr, 0);

//console.log(arr);
//rotateSelf(arr, -1);
//console.log(arr);
