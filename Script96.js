// Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.
function sumOfConsecutiveDif(arr){
	let sum=0;
	for(let i=0;i<arr.length-1;i++){
		sum += Math.abs(arr[i]-arr[i+1])
	}
	return sum;
}

console.log(sumOfConsecutiveDif([1,1,2,1,21,2]));
console.log(sumOfConsecutiveDif([1110,23,555,1]));
console.log(sumOfConsecutiveDif([15,223,-22221,15,1]));
console.log(sumOfConsecutiveDif([15,223,-21,51]));