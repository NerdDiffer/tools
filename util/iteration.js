var each = function(arrayOrObject, iterator) {
	if (Array.isArray(arrayOrObject)) {
		for (var i = 0; i < arrayOrObject.length; i++) 
			iterator(arrayOrObject[i], i, arrayOrObject);
	} else if (arrayOrObject !== null && typeof arrayOrObject === "object") {
		for (var i in arrayOrObject) 
			iterator(arrayOrObject[i], i, arrayOrObject);
	} else {
    throw new Error('you must pass in an array or an object as the first parameter');
	}
};

// not as good b/c it assumes anything that's not an Array will be a straight-up Object
//var each2 = function(arrayOrObject, iterator) {
//	Array.isArray(arrayOrObject) ? arrayLoop() : objectLoop();
//
//	function arrayLoop() {
//		for (var i = 0; i < arrayOrObject.length; i++) 
//			iterator(arrayOrObject[i], i, arrayOrObject);
//	}
//  function objectLoop() {
//		for (var i in arrayOrObject) 
//			iterator(arrayOrObject[i], i, arrayOrObject);
//	}
//};

var mapEach = function(iterator, arrayOrObject) {
	var result;
	if (Array.isArray(arrayOrObject)) {
		result = [];
		each(arrayOrObject, function(value, index, array) {
			return result[index] = iterator(value, index, array);
		})
	} else if (arrayOrObject !== null && typeof arrayOrObject === "object") {
		result = {};
		each(arrayOrObject, function(val, key, obj) {
			return result[key] = iterator(val, key, obj);
		})
	}	
	return result;
};

// not as strong b/c it only works with arrays
//var mapEach2 = function(action, array) {
//	var result = [];
//	each(array, function(element) {
//		result.push(action(element));
//	});
//	return result;
//};

var reduceEach = function(combine, base, array) {
	each(array, function (element) {
    base = combine(base, element);
  });
  return base;
};

var filterEach = function(booleanTest, array) {
	var result = [];
	each(array, function(element) {
		if (booleanTest(element)) {
			result.push(element);
		}
	})
	return result;	
};

// makes an object out of an array
// keys of new object are the array values in the order they appear in array. value of each key is undefined
var makeObjFrom = function(arr) {
	var obj = {};
	mapEach(function(val) {
		return obj[val]	= undefined;
	}, arr)
	return obj;
};

// makes an array out of an object
// values of new array are the values of each key in the object. the original keys of object are ignored
var makeArrFrom = function(obj) {
	var arr = [];
	each(obj, function(val) {
		arr.push(val)
	})
	return arr;
};

// makes an array out of an object values
// like 'makeArrFrom' but can specify which property to pick from
var makeArrOfObjValues = function(obj, prop) {
	var  arr = [];
	each(obj, function(element) {
		arr.push(element[prop]);
	});
	return arr;
};

// checks array length. true if both arrays have same length. false otherwise
var checkArrLength = function(arr1, arr2) {
  return arr1.length == arr2.length;
};

/* blend 2 arrays into 1 object. 
  values of header become keys of returned object. values of row become values of returned object.
  lengths of each of the array parameters must be the same
*/
var meldObj = function(header, row) {
	if (header.length != row.length) return 'error: both parameters must be arrays with identical length';
	else {
		var	obj = {};
  	for(var i = 0; i < header.length; i++){
   	 obj[header[i]] = row[i];
  	}
		return obj;
	}
};
