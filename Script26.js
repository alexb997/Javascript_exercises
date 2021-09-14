// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. 
//The string length must be 3 or more. 
function endPadding(s){
	if (s.length<3)
		return false;
	let end=s.substring(s.length-3)
	return end + s + end;
}

console.log(endPadding("what"));
console.log(endPadding("monkey"));
console.log(endPadding("guns"));
