// Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers.
function maxAdjancentDifference(arr) {
	let maxDif=Math.abs(arr[0]-arr[1]);
	for(let i=0; i<arr.length-1;i++){
		if(Math.abs(arr[i]-arr[i+1])>maxDif)
			maxDif=Math.abs(arr[i]-arr[i+1]);
	}
	return maxDif;
}

console.log(maxAdjancentDifference([10,23,555,1,21,2]));
console.log(maxAdjancentDifference([10,23,555]));
console.log(maxAdjancentDifference([15,223,-21,555,1]));
console.log(maxAdjancentDifference([15,223,-21,51]));
console.log(maxAdjancentDifference([15,223,-21,51]));
