// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
function rangeCheck(x){
	return ((50<=x)&&(99>=x))? true:false;
}

function in50_90Range(x,y){
	return rangeCheck(x)||rangeCheck(y);
}

console.log(in50_90Range(10,53));
console.log(in50_90Range(60,80));
console.log(in50_90Range(10,231));