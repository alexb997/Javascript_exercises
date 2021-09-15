// Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers.
//The array length must be greater or equal to 1.
function endOrStart1(array){
	return (array[0]===1 || array[array.length-1]===1)? true: false;
}
console.log(endOrStart1([1,20,3]));  
console.log(endOrStart1([2,-1,4])); 
console.log(endOrStart1([0,1,1]));