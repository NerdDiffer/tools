// counts # of instances of a value in array 
function countObj(arr){
	var counts = {};
	arr.sort(function(a,b) { return a - b; });
	arr.map(function(val){
	  counts[val] = 0;
	});
	var makeRegEx = function(k) {
	  return new RegExp(k, 'g');
	};

	for (var num in counts) {
		counts[num] = arr.toString().match(makeRegEx(num)).length;
	}
	return counts;	
}
