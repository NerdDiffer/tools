function getPropertyNames(o, /* optional */ a) {
	// If undefined, use a new array
	if (a === undefined) { 
		a = [];
	} 
	for (var property in o) {
		a.push(property);
	}
	return a;
}
var str = new Date();
console.log(getPropertyNames(str));