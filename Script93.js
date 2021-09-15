// Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers. 
function maxDifference(arr) {
	let maxDif=Math.abs(arr[0]-arr[1]);
	for(let i=0; i<arr.length-1;i++){
		for(let j=i;j<arr.length;j++)
			if(Math.abs(arr[i]-arr[j])>maxDif)
				maxDif=Math.abs(arr[i]-arr[j]);
	}
	return maxDif;
}

console.log(maxDifference([10,23,555,1,21,2]));
console.log(maxDifference([1110,23,555,1]));
console.log(maxDifference([15,223,-22221,555,1]));
console.log(maxDifference([15,223,-21,51]));
console.log(maxDifference([15,223,-21,51]));