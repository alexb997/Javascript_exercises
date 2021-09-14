//  Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
function firstToLast(s){
	let first = s.substring(0,1);
	return first + s + first;
}

console.log(firstToLast("yp"));
console.log(firstToLast("_what"));
console.log(firstToLast("python"));