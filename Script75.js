// Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3. 
function newMiddleArray(a,b){
	if(a.length===3 && b.length==3){
		let array = new Array();
		array[0]=a[1];
		array[1]=b[1];
		return array;
	}
	return "Invalid input";
}
console.log(newMiddleArray([3,20,2],[2,-1,4]));  
console.log(newMiddleArray([2,-1,4],[1,5,1])); 
console.log(newMiddleArray([1,5,1],[3,20,2]));
console.log(newMiddleArray([3,20,2,44]));
console.log(newMiddleArray([3,20,2,44],[1]));
