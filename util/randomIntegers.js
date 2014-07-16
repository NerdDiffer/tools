/* return array of random integers between min and max (inclusive)
  @param min, the lowest value desired
  @param max, the highest value desired
  @param arrLength, length of array you want to make
*/
var randomIntegers = function(min, max) {
	return Math.floor(min + Math.random() * ((max - min) + 1));
};
