// http://en.wikipedia.org/wiki/Insertion_sort

arrNum = [12, 14, 1, 24, 300, 9];
arrStr = ["zebra", "cat", "apple", "moose", "yellow fin tuna"];
var insertionSort = function(array) {
	for (var i = 1; i < array.length; i++) { // outer loop
		var j = i;
		while (j > 0 && array[j-1] > array[j]) { // inner loop
			// swaps values of 2 array elements
			var b = array[j-1];
			array[j-1] = array[j];
			array[j] = b;
			j--;
		}
	}
	return array;
};
//console.log(insertionSort(arrNum));
//console.log(insertionSort(arrStr));

var insertionSort2 = function(array) {
	return array.forEach(function(val, ind, arr){
		var j = ind;
		while (j > 0 && array[j-1] > array[j]) { // inner loop
			// swaps values of 2 array elements
			var b = array[j-1];
			array[j-1] = array[j];
			array[j] = b;
			j--;
	  }
	}
);};

arrNum.forEach(function(val, ind, arr) {
	val = parseInt(val);
//	console.log(val);
});
console.log(arrNum.sort(a-b));

console.log(insertionSort2(arrNum));
console.log(insertionSort2(arrStr));
/*
  outer loop runs through all elements except for the first one because we are coming back to it in the inner loop?
    so its order is trivial to the outer loop?
  inner loop moves the current element to its correct place so when the inner loop is done, the first (i+2) elements are sorted
  
*/
