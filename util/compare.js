// helper functions, use in testing. mostly for arrays.

// make a copy of an array;
function copyArr(arr) {
	return arr.map(function(val) {
    return val;
	});
}
// checks array length.
// return true if both arrays have same length.
// otherwise, returns false.
var arrTheSameLength = function(arr1, arr2) {
  return arr1.length == arr2.length;
};

// useful for comparing sets as well as arrays.
// checks for identical contents. 
// does NOT consider the order of array values.
// does NOT check if the data types are the same
var arrTheSame = function(arr1, arr2) {
  if (arr1.length != arr2.length)
	 	return false;
	else {
		return arr1.every(function(member, index, array) {
      return arr2.indexOf(member) >= 0;
		});
	}
};

// compares the contents of the array.
// return true if and only if:
//   1) contents appear in the same order
//   2) the array contents are identical to each other
//   3) each value is of the same datatype as its 'twin' value in the other array
var arrInTheSameOrder = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  else {
    return arr1.every(function(val, ind, arr) {
      return arr2[ind] === val;
		});
	}
};

// returns true if all values are unique. returns false otherwise
function allUniqueValues(testThisArr) {
	if (!Array.isArray(testThisArr))
	 	throw new Error('pass in an array');
	else {
    return testThisArr.every(function(val, ind, arr) {
      var count = 0;
	  	var i = ind;
	  	while (i < arr.length) {
	  		if (arr[i] == val) count++;
        i++;
	  	}
	  	if (count >= 2) 
	  	  return false;
      else
	  	  return true;
	  });
	}
}

// get maximum value from array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
// get minimum value from array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}
// test function for array ranges, iterate through a range starting from index 1
// will actually make a COPY of the range, SORT it in ascending order and test the SORTED COPY
// array range defined as:
//   1) an array whose values are integers 
//   2) each value is unique 
//   3) range is sorted, either ascending or descending
//   4) adjacent values separated by 1
// @param rangeArray, the range to iterate through
// @param fn, the callback, containing the condition you are testing between adjacent array elements
function iterateFrom1 (rangeArray, fn) {
	var sortedRange = copyArr(rangeArray).sort(function(a,b) { return a -b } );
  var i = 1;
  while (i < sortedRange.length) {
		if (!fn(sortedRange, i)) return false;
  	i++;
  };
  return true;
};

// callbacks for iterateFrom1. should evaluate to false when you want the loop to break.
//function isDifferentFromPrevious(arr, a) { return arr[a] != arr[a-1] };
//function areOneApart(arr, a) { return arr[a] - arr[a-1] == 1	};

//exports start here
exports.copyArr = copyArr;
exports.arrTheSameLength = arrTheSameLength;
exports.arrTheSame = arrTheSame;
exports.arrInTheSameOrder = arrInTheSameOrder;
exports.allUniqueValues = allUniqueValues;
exports.getMaxOfArray = getMaxOfArray;
exports.getMinOfArray = getMinOfArray;
exports.iterateFrom1 = iterateFrom1;
