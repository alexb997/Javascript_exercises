//  Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.
function replaceSpecified(arr,x,y){
	
	console.log(arr);
	if(x && arr.indexOf(x)!=-1){
		for(let i=0;i<arr.length;i++){
			if(arr[i]==x){
				arr[i]=y;
			}
		}
		return arr;
	}else{
		return "Value to be replaced invalid" +"\n";
	}
}

console.log(replaceSpecified([1,1,2,1,21,2],1,3));
console.log(replaceSpecified([1110,23,555,1],2,3));
console.log(replaceSpecified([15,223,-22221,15,1],15,2));
console.log(replaceSpecified([15,223,-21,51]));
