// Write a JavaScript program to compute the absolute difference 
//between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function difference_to_19(num){
	if (num<=19)
		return 19-num;
	else 
		return 3*(num-19)
}

console.log(difference_to_19(60));
console.log(difference_to_19(10));
