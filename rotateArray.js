// @param direction, 
//   (-1) are we moving last element to become the first element? or 
//   (0) are we moving first element so it becomes the last element?
var rotate = function(arr, direction) {
  direction == 0 ? arr.push(arr.shift(arr[0])) : arr.unshift(arr.pop(arr[0]));
};
var myArr = ['a','b','c','d','e','f','g','h','i','j'];
var arr = ['a', 'b', 'c'];
console.log(arr);
rotate(arr, 0);
console.log(arr);
rotate(arr, -1);
console.log(arr);
