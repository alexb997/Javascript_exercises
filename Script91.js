// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.)
//of a given array of positive integers.
function arraySum(arr){
	let sum=0;
	arr.map((e)=>sum=sum+e);
	return sum;
}
function highestInternalSum(arr,k) {
	if(k>arr.length||k<2)
		return "invalid k";
	if(k===arr.length)
		return arraySum(arr);
	let check=true;
	let maxSum=0;
	for(let i=0; i<arr.length;i++){
		if(i+k>=arr.length)
			break;
		let auxArr=new Array();
		for(let j=i;j<=i+k;j++){
			auxArr[j-i]=arr[j];
		}
		let aux = arraySum(auxArr);
		if(aux>maxSum)
			maxSum=aux;
	}
	return maxSum;
}

console.log(highestInternalSum([10,23,555,1,21,2],3));
console.log(highestInternalSum([10,23,555],5));
console.log(highestInternalSum([15,223,-21,555,1],4));
console.log(highestInternalSum([15,223,-21,51],4));
console.log(highestInternalSum([15,223,-21,51],6));