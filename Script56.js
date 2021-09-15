// Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.
function properDivision(x,y){
	let rez=(x/y).toString().replace('.',',');
	return rez;
}

console.log(properDivision(10,200));
console.log(properDivision(10,14));
console.log(properDivision(15,2010));
console.log(properDivision(10,22));