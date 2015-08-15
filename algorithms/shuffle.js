// http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
// return a copy of arr, shuffled in a random order. indices should not be duplicated.
var Fisher_Yates = function(arr) {
	var randInt = function(min, max) {
		return Math.floor(min + Math.random() * ((max - min) + 1));
	};
	var shuffled = [];
	while (arr.length) {
		// select random value from arr to remove from arr & add to shuffled
		var newEntry = arr[randInt(0, arr.length - 1)];
		// remove that value from arr
		arr.splice(arr.indexOf(newEntry), 1);
		// add that value to shuffled
		shuffled.push(newEntry);
	}
	return shuffled;
};
