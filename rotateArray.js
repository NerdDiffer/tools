// @param direction: 
//   (-1) if we are moving the last element to become the first element 
//   (0)  if we are moving the first element to become the last element
var rotate = function(arr, direction) {
  if (direction != 0 && direction != -1) {
    direction = -1;
  }
  direction == 0 ? arr.push(arr.shift(arr[0])) : arr.unshift(arr.pop(arr[0]));
  return arr;
};
var myArr = ['a','b','c','d','e','f','g','h','i','j'];
var arr = ['a', 'b', 'c'];
console.log(arr);
rotate(arr, 0);
console.log(arr);
rotate(arr, -1);
console.log(arr);
