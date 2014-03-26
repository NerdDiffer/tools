var coins = [1,3,5,7,9];

function product (a,b) {
	return a * b;
}
function sum (a,b) {
	return a + b;
}
function timesYourself(arr, action, j) {
	var i = 0; 

	var hash = [];
	while (i < arr.length) {
		hash[i] = action( arr[j], arr[i] );
		i++;
	}
	return hash;
}

// @param n, create multiples of n numbers
// @param arr, the array of coins to process
function comboOf(arr, action) {
	var hash = {};
	var j = 0;
	arr.forEach(function(value, index, array) {
		hash[value] =	action(arr, product, j);
		j++;
	});
	return hash;
}
console.log(comboOf(coins, timesYourself));
