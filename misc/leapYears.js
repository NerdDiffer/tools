var isLeapYear = function(year) {
	// if (the year is divisible by 4 && is NOT divisible by 100) OR (year is divisible by 400)
	if ((year % 4 == 0 && year % 100 > 0) || year % 400 == 0) {
		return true;
	} else {
		return false;
	}
}
