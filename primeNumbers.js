function prime(num) {
	if (num == 0 || num == 1) 
		return false;
	else if (num == 2) 
		return true;
	else {
		var i = 2;
		while (i <= Math.ceil(Math.sqrt(num))) {
			if (num % i == 0) return false;
			i++;
		}
		return true;
	}
}

// Sieve of Eratosthenes
// http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
function sieve_of_Eratosthenes (n) {
	var sieveNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]
	var nums = function(n) {
		var i = 2;
		var numsArr = [];	
		while (i <= n) {
			numsArr.push(i);
			i++;
		}
		return numsArr;
	}
	var nums = nums(n)

}
console.log(sieve_of_Eratosthenes(30));