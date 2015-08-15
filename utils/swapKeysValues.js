var swapKeysAndValues_veryVerbose = function(obj) {
	var keys = Object.keys(obj);
	var vals = [];
	for (var key in obj) {
		vals.push(obj[key]);
	}
	var newObj = {};
	vals.forEach(function(val, ind, arr) {
		newObj[val] = keys[ind];
	});
	return newObj;
};

var swap_verbose = function(paramObj) {
	// create new blank object called 'swapped'
	// traverse paramObj while building the new object
	// extract values. save as newProperty to swapped object
	// extract keys. save as newValue of the newProperty to swapped object
	var swapped = {};
	for (var prop in paramObj) {
		var newProp = paramObj[prop];
		var newVal = prop;
		swapped[newProp] = newVal;
	}
	return swapped;
};

var swap_concise = function(paramObj) {
	var swapped = {};
	for (var prop in paramObj)
		swapped[paramObj[prop]] = prop;
	return swapped;
};

//exports.swap_veryVerbose = swapKeysAndValues_veryVerbose;
//exports.swap_verbose = swap_verbose;
exports.swap = swap_concise;
