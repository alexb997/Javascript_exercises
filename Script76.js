//  Write a JavaScript program to create a new array taking the first and last elements from a 
//given array of integers and length must be greater or equal to 1.  
function newEdgesArray(array) {
	let rez= new Array();
	rez[0]=array[0];
	rez[1]=array[array.length-1];
	return rez
}
console.log(newEdgesArray([3,20,2]));  
console.log(newEdgesArray([2,-1,4])); 
console.log(newEdgesArray([1,5,1]));
console.log(newEdgesArray([3,20,2,44]));
console.log(newEdgesArray([3,20,2,45]));
