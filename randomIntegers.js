/* return array of random integers
  @param min, the lowest value desired
  @param max, the highest value desired
  @param arrLength, length of array you want to make
*/
var randomIntegers = function(min, max) {
	return Math.floor(min + Math.random() * ((max - min) + 1));
};
var hoRecursive = function(min, max, arrLength, callback) {
	var arr = [];
	if (arr.length == arrLength) {
		return arr;
	} else {
		return hoRecursive(min, max, arrLength, callback);
	}
};
/*
console.log(hoRecursive(1,5,5, randomIntegers));
console.log(hoRecursive(3,8,8, randomIntegers));
console.log(hoRecursive(0,3,5, randomIntegers));
console.log(hoRecursive(7,8,3, randomIntegers));
*/
var ho = function(min, max, size, callback) {
	var arr = [];	
	for (var i = 0; i < size; i++) {
		arr[i] = callback(min, max);
	}
	return arr;
}

console.log(ho(1,5,5, randomIntegers));
console.log(ho(3,8,8, randomIntegers));
console.log(ho(0,3,5, randomIntegers));
console.log(ho(7,8,3, randomIntegers));