// Write a JavaScript program to find the kth greatest element of a given array of integers
function kthHighest(arr,k) {
	if(k<arr.length && k>=0){
		arr.sort(function (a, b) {  return a - b;  });
		return arr[arr.length-1-k];
	}
	return "Invalid input";
}

console.log(kthHighest([10,23,555,1,21,2],3));
console.log(kthHighest([10,23,555],5));
console.log(kthHighest([15,223,-21,555,1],4));
console.log(kthHighest([15,223,-21,51],4));
//(inside sort) Array.prototype.sort() recommends this compare function for arrays that don't contain Infinity or NaN. 
//(Because Infinity - Infinity is NaN, not 0).