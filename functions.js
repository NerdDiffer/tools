var forEach = function(array, action) {
	for (var i = 0; i < array.length; i++)
		action(array[i]);
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
	})
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

var each = function(arrayOrObject, iterator) {
	if (Array.isArray(arrayOrObject)) {
		for (var i = 0; i < arrayOrObject.length; i++) {
			iterator(arrayOrObject[i], i, arrayOrObject);
		}
	} else if (arrayOrObject !== null && typeof arrayOrObject === "object") {
		for (var i in arrayOrObject) {
			iterator(arrayOrObject[i], i, arrayOrObject);
		}
	}
};
var each2 = function(arrayOrObject, iterator) {
	var arrayLoop = function() {
		for (var i = 0; i < arrayOrObject.length; i++) {
			iterator(arrayOrObject[i], i, arrayOrObject);
		}	
	};
	var objectLoop = function() {
		for (var i in arrayOrObject) {
			iterator(arrayOrObject[i], i, arrayOrObject);
		}
	};
	Array.isArray(arrayOrObject) ? arrayLoop() : objectLoop();
};

var mapEach = function(action, array) {
	var result = [];
	each(array, function(element) {
		result.push(action(element));
	});
	return result;
};

var reduceEach = function(combine, base, array) {
	each(array, function (element) {
    base = combine(base, element);
  });
  return base;
};

// callbacks
var add = function(a, b) {
	return a + b;
};

var multiply = function(a, b) {
	return a * b;
};

function isBigEnough (element) {
	return element >= 5;
}
var obj = {a: '1st element', b: '2nd element'};
var a = [];
var d = new Date();
console.log(Object.prototype.toString.call(d));
console.log(typeof d);
