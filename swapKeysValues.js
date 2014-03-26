function swapKeysValues(arr) {
	var hash = {};
	//arr.forEach(function(value, index, array) {
	//	hash[value] = index;
	//});
	for (var key in arr) {
		
	}
	return hash;
}
var swapKeysAndValues = function(obj) {
	var keys = Object.keys(obj);
	var vals = obj[key];
	for (var key in obj) {
		key = key;
	}
	return obj;
}
var myObj = {a: 'one', b: 'two', c: 'three'};
//console.log(swapKeysAndValues(myObj));
console.log(swapKeysValues(myObj));