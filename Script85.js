// Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, 
//second element goes to second part, and third element goes to first part and so on.
// Now compute the sum of two parts and store into an array of size two.
function arraySum(arr){
	let sum=0;
	arr.map((e)=>sum=sum+e);
	return sum;
}
function weirdPartedSum(arr) {
	let rez= new Array();
	let part1=new Array();
	let part2= new Array();
	arr.map((e,idx)=>{if(idx%2===0) {part1[part1.length]=e;} else{part2[part2.length]=e}})
	rez[0]=arraySum(part1);
	rez[1]=arraySum(part2);
	return rez;
}

console.log(weirdPartedSum([30, 30,25]));
console.log(weirdPartedSum([40, 11]));
console.log(weirdPartedSum([30, 20,31,125]));
console.log(weirdPartedSum([50]));