// Write a JavaScript program to find the number which appears most in a given array of integers.
function maxIdx(arr){
	let max=Math.max(...arr)
	return arr.indexOf(max);
}
function mostRepeatedElement(arr) {
	let noRepeats=true;
	let repeats= new Array(arr.length).fill(0);
	for(let i=0;i<arr.length-1;i++){
		for(let j=i+1;j<arr.length;j++){
			if(arr[i]===arr[j]){
				noRepeats=false;
				repeats[i] += 1;
				//console.log(arr[i] +"-"+arr[j]+"\n")
			}
		}
	}
	if(noRepeats)
		return "There are no dupplicates";
	return arr[maxIdx(repeats)];
}

console.log(mostRepeatedElement([1,1,2,1,21,2]));
console.log(mostRepeatedElement([1110,23,555,1]));
console.log(mostRepeatedElement([15,223,-22221,15,1]));
console.log(mostRepeatedElement([15,223,-21,51]));