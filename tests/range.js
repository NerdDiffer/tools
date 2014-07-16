var assert = require('assert');
var range = require('../structures/range.js');
var compare = require('../util/compare.js');

var makeRange = range.makeRange;
var iterateFrom1 = compare.iterateFrom1;

function sortAscending (a,b) { return a - b };
function sortDescending (a,b) { return b - a };
// callbacks for iterateFrom1. should evaluate to false when you want the loop to break.
function isDifferentFromPrevious(arr, a) { return arr[a] != arr[a-1] };
function areOneApart(arr, a) { return arr[a] - arr[a-1] == 1	};
//function areOneApartDescending(arr, a) { return arr[a] - arr[a-1] == 1	};

var range1 = makeRange(1, 9);
var range2 = makeRange(9, 1);
var range3 = makeRange(9, 9);
var notRange1 = [1,3,5];
var notRange2 = [5,3,3,1];
var notRange3 = [2,2,3,3,5,5];
var notRange4 = [2,2,3,3,4,4,5,5];

describe('range', function() {
	it("should return range with all unique values", function() {
		var allUniqueValues = compare.allUniqueValues;
    assert.equal(true, allUniqueValues(range1));
    assert.equal(true, allUniqueValues(range2));
    assert.equal(true, allUniqueValues(range3));
    assert.equal(true, allUniqueValues(notRange1)); // though it's not a range, all values are unique
    assert.equal(false, allUniqueValues(notRange2));
    assert.equal(false, allUniqueValues(notRange3));
    assert.equal(false, allUniqueValues(notRange4));
	});
  it("should return range in descending order if first parameter is higher than second parameter", function() {
		var param1 = 9;
		var param2 = 1;
    assert.equal([9,8,7,6,5,4,3,2,1].toString(), makeRange(param1,param2).toString());
    assert.equal([1,2,3,4,5,6,7,8,9].sort(sortDescending).toString(), makeRange(param1,param2).toString());
	});
  it("should return range in ascending order if first parameter is lower than second parameter", function() {
		var param1 = 1;
		var param2 = 9;
    assert.equal([1,2,3,4,5,6,7,8,9].toString(), makeRange(param1,param2).toString());
    assert.equal([9,8,7,6,5,4,3,2,1].sort(sortAscending).toString(), makeRange(param1,param2).toString());
	});
	it("should have a min value no less than the value of lowest of the two passed-in parameters", function() {
    var getMin = compare.getMinOfArray;
    assert.equal(1, getMin(range1));
    assert.equal(1, getMin(range2));
    assert.equal(9, getMin(range3));
    assert.equal(2, getMin(notRange3));
    assert.equal(2, getMin(notRange4));
	});
	it("should have a max value no higher than the value of higher of the two passed-in parameters", function() {
    var getMax = compare.getMaxOfArray;
    assert.equal(9, getMax(range1));
    assert.equal(9, getMax(range2));
    assert.equal(9, getMax(range3));
    assert.equal(5, getMax(notRange3));
    assert.equal(5, getMax(notRange4));
	});
	it("should return range with adjacent integer values, difference of one between all", function() {
		var copy = compare.copyArr;
		var range1_copy = copy(range1);
		var range2_copy = copy(range2);
		var range3_copy = copy(range3);
		var notRange1_copy = copy(notRange1);
		var notRange2_copy = copy(notRange2);
		var notRange3_copy = copy(notRange3);
		var notRange4_copy = copy(notRange4);

    assert.equal(true, iterateFrom1(range1_copy, areOneApart));
    assert.equal(true, iterateFrom1(range1, areOneApart));
    assert.equal(true, iterateFrom1(range2_copy, areOneApart));
    assert.equal(true, iterateFrom1(range2, areOneApart));
    assert.equal(false, iterateFrom1(notRange1_copy, areOneApart));
    assert.equal(false, iterateFrom1(notRange2_copy, areOneApart));
    assert.equal(false, iterateFrom1(notRange3_copy, areOneApart));
    assert.equal(false, iterateFrom1(notRange4_copy, areOneApart));
	});	
});
