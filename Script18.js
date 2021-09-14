// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function any_or_sum_50(x,y){
	return (x+y==50 || x==50 || y==50)? true: false;
}// nu e necesar if-ul aici, dar e mai usor de inteles presupun.

console.log(any_or_sum_50(60,13));
console.log(any_or_sum_50(50,12));
console.log(any_or_sum_50(30,20))