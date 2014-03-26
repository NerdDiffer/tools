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

var reduce = function(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
};

var add = function(a, b) {
	return a + b;
};

var multiply = function(a, b) {
	return a * b;
};
