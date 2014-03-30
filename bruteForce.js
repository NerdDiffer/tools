// brute force search
// http://en.wikipedia.org/wiki/Naive_solution
/* 4 procedures
	first (P) : generate first candidate solution for P
	next (P, c) : generate next candidate for P after the current one (c)
		next also tells us when there's no more candidates for P after c. just return "null"
	valid (P, c): check whether candidate c is a solution for P
	output (P, c): use the solution c of P as appropriate to the application
*/

/* expressed as algorithm
c = first(P)
while (c != null) {
  if (valid(P,c)) {
 	  output(P, c)
	}
 c = next(P,c)
}
while
*/
function divBy(num, max) {
	var nums = [];
	var cnum = num;
	while (cnum <= max) {
		nums.push(cnum);
		cnum += num;
	}
	return nums;
}
//console.log(divBy(417, 1000));
