var assert = require('assert');
var rotate = require('../util/rotateArray.js');
var rotateSelf = rotate.rotateSelf;
var rotateCopy = rotate.rotateCopy;

var myArr = ['a','b','c','d','e','f','g','h','i','j'];
var arr = ['a', 'b', 'c'];
console.log(arr);
rotateSelf(arr, 0);
console.log(arr);
rotateSelf(arr, -1);
console.log(arr);
