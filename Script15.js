// Write a JavaScript program to get the difference between a given number and 13, 
//if the number is greater than 13 return double the absolute difference. 
function difference_to_13(num){
	if (num<=13)
		return 13-num;
	else 
		return 2*(num-13);
}
console.log(difference_to_13(60));
console.log(difference_to_13(10));