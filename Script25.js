// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7. 
function multipleOf3Or7(nr){
	return ((nr%7===0)||(nr%3===0))? true: false;
}

console.log(multipleOf3Or7(100));
console.log(multipleOf3Or7(56));
console.log(multipleOf3Or7(17));