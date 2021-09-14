// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). 
//Return true if one or more of them are in the said range.
function rangeCheck(x){
	return ((50<=x)&&(99>=x))? true:false;
}

function in50_90Range(x,y,z){
	return rangeCheck(x)||rangeCheck(y)||rangeCheck(z);
}

console.log(in50_90Range(10,53,30));
console.log(in50_90Range(60,80,20));
console.log(in50_90Range(10,231,55));
