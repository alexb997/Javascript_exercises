// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function around_100_or_400(x){
	return ((100-x)<=20 || (400-x)<=20)? true: false;
}

console.log(around_100_or_400(60));
console.log(around_100_or_400(120));
console.log(around_100_or_400(500));
