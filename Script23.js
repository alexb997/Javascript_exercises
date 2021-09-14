// Write a JavaScript program to create a new string from a 
//given string changing the position of first and last characters. The string length must be greater than or equal to 1. 
function lastToFirst(s){
	if(s.length>=2)
	return s.charAt(s.length-1) +s.substring(1,s.length-1) +s.charAt(0);
	else
	return s;
}

console.log(lastToFirst("yp"));
console.log(lastToFirst("_what"));
console.log(lastToFirst("python"));