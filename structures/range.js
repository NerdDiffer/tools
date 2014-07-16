// make a range of numbers
function range (min, max) {
	var range = [];
	var i = max;
	var j = 0;
	while (i >= min) {
		range[j] = i;
		j++;
		i--;
	}
	return range.reverse();
}
/* the above function returns a range from high to low.
   make a function that returns a range from low to high.
   make another function that can return both: 
     if first param is lower than second param, return low - high
     if second param is lower than first param, return high - low
*/

// returns higher number. if numbers are equal, returns num1
function checkHighLow (num1, num2) {
	if (num1 >= num2) {
		return num1;
	} else {
		return num2;
	}
}
// returns a range low to high if num1 < num2
// returns a range high to low if num1 > num2
// returns range with 1 number if num1 == num2
function makeRange_old (num1, num2) {
	var max = checkHighLow(num1, num2);
	var min = num1 != max ? num1 : num2;
	return (num2 == max) ? range(num1, num2) : range(num2, num1).reverse();
}

// make a range of numbers
function makeRange (num1, num2) {
	function range (num1, num2) {
		var newRange = [];
		var i = num2;
		var j = 0;
		while (i >= num1) {
			newRange[j] = i;
			j++;
			i--;
		}
		return newRange.reverse();	
	}

	// returns higher number. if numbers are equal, returns num1
	function checkHighLow(num1, num2) {
		if (num1 >= num2) {
			return num1;
		} else {
			return num2;
		}
	}
	
	var max = checkHighLow(num1, num2);
	var min = num1 != max ? num1 : num2;
	return (num2 == max) ? range(num1, num2) : range(num2, num1).reverse();
}

exports.makeRange = makeRange;
