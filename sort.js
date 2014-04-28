// callback functions to pass into Array#sort()
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// sorting an array of objects by the value of A property in each object
// http://stackoverflow.com/questions/1129216/sorting-objects-in-an-array-by-A-field-value-in-javascript
var compareObjValues = function(A,B) {
	// if A.val < B.val, then move B to lower index of array
	if (A.val < B.val) return 1;

	// if A.val > B.cal, then move A to lower index of array
	if (A.val > B.val) return -1;

	// otherwise, A.val == B.val
	return 0;
}

// example:
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic" },
  { name: "Zeros", value: 37 }
];
items.sort(function (a, b) {
    if (a.name > b.name)
      return 1;
    if (a.name < b.name)
      return -1;
    // a must be equal to b
    return 0;
});