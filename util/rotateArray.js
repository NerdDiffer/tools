// modifies the original array. moves it by 1 slot
// @param direction: 
//   (-1) if we are moving the last element to become the first element 
//   (0)  if we are moving the first element to become the last element
var rotateSelf = function(arr, direction) {
  if (direction != 0 && direction != -1) {
    direction = -1;
  }
  direction == 0 ? arr.push(arr.shift(arr[0])) : arr.unshift(arr.pop(arr[0]));
  return arr;
};

// returns new copy of an array. modifies it a set number of times
// @param times: number of times to move each letter. default set to 1 time.
// @param direction: 
//   (-1) if we are moving the last element to become the first element 
//   (0)  if we are moving the first element to become the last element
var rotateCopy = function(arr, direction, times) {
  if (direction != 0 && direction != -1) {
    direction = -1;
  }
  times = typeof times === 'undefined' ? 1 : times; // set default value of times
  var rotated = arr.map(function(val) {
    return val;
  });
  for (var i = 1; i <= times; i++) {
    direction == 0 ? rotated.push(rotated.shift(rotated[0])) : rotated.unshift(rotated.pop(rotated[0]));
  }
  return rotated;
};

exports.rotateSelf = rotateSelf;
exports.rotateCopy = rotateCopy;
