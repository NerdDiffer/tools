var forEach = function(array, action) {
	for (var i = 0; i < array.length; i++) action(array[i]);
};

var map = function(action, array) {
	var result = [];
	forEach(array, function(element) {
		result.push(action(element));
	});
	return result;
};

var reduce = function(combineAction, base, array) {
  forEach(array, function (element) {
    base = combineAction(base, element);
  });
  return base;
};

var filter = function(booleanTest, array) {
	var result = [];
	forEach(array, function(element) {
		if (booleanTest(element)) {
			result.push(element);
		}
	});
	return result;
};

var every = function(array, booleanTest) {
	var boo = booleanTest(array[0]);
	var i = 0;
	while (i < array.length && boo) {
		boo = booleanTest(array[i]);
		i++;
	}
	return boo;
};

var some = function(array, booleanTest) {
	var boo = booleanTest(array[0]);
	var i = 1;
	if (boo) {
		return boo;
	} else {
		while (i < array.length && boo === false)	{
			boo = booleanTest(array[i]);
			i++;
		}
		return boo;
	}
};

// simply print out each value of the passed in array or object
var p = function(arrayOrObject) {
	each(arrayOrObject, function(val, key, obj) {
		console.log(val);
	});
};

// collects & stores values, from a passed-in array of objects, specified by object property 
// returns collected values as a one-dimensional array
function collectValues(arrOfObj, prop) {
  return arrOfObj.map(function(obj) {
		if (obj.hasOwnProperty(prop)) return obj[prop];
		else return ('property ' + prop + ' is not present');
  });
}

// takes a two-dimensional array, converts to a one-dimensional array
function flatten(arr) {
  return [].concat.apply([], arr);
}

// gets the average value from a one-dimensional array
function getAverageOf(array, prop) {
  return (array.reduce(function(average, prop) {
    return average + parseFloat(prop);
  }, 0) / array.length).toFixed(2);
}
