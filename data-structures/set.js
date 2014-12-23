/* stack overflow draft
I'm trying to test a set of some given variables, by adding them as keys to an object.
how can I dynamically add the name of the given variable as this object's key? 
how can I ensure that each key's value corresponds to the original given number's value?
*/

//example:
var num1 = 43;
var num2 = 597;
var num3 = 5662682;

// I'd like for my object to evaluate to this:
myObj = {
	'num1': 43,
	'num2': 597,
	'num3': 5662682
}
//or even this:
myObj = {
	'num1': num1,
	'num2': num2,
	'num3': num3
}
// I've tried doing this, but obviously, does not reference the variable. it stores a string instead, which is not what I want.
function makeObj () {
	var obj = {};
	for (var i = 1; i <= 3; i++) {
		obj["num" + i] = "num" + i;
	}
	return obj;
}
// how would I get the value of the said variable (num1, num2, num3) inside of my object?


// ********************************
function makeArr() {
	var arr = [];
	for (var i =1; i<=3; i++){
		arr.push("num" + i);
	}
	return arr;
}

//http://stackoverflow.com/questions/22597596/creating-a-set-from-given-variables-how-to-get-the-objects-keys-values-to-cor
function makeObjSO () {
  var obj = {};
  for (var i = 1; i <= 3; i++) {
    obj["num" + i] = eval("num" + i);
  }
  return obj;
}
console.log(makeObj());
console.log(makeArr());
console.log(makeObjSO());

// ********************************
function makeObj2 () {
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    obj["num" + (i+1)] = nums[i];
  }
  return obj;
}
var nums = [];
nums.push(num1);
nums.push(num2);
nums.push(num3);

console.log(makeObj2());