// Write a JavaScript program to check whether two arrays of integers of same length are similar or not.
// The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements
function similarArrays(arr1,arr2) {
	if(arr1.length != arr2.length){
		return false;
	}
	let rez=true;
	let swaps=0;
	arr1.map((e,idx)=>{if(arr2.indexOf(e)!=idx){
		if(arr2.indexOf(e)===-1) rez=false;
		if(arr2.indexOf(e)>=0&&arr2.indexOf(e)<arr2.length) swaps +=1;
		}});
	if(swaps>2){
		rez=false;
	}
	return rez;
}

console.log(similarArrays([30, 30,25],[30,25,30]));
console.log(similarArrays([40, 11],[30, 30,25]));
console.log(similarArrays([30, 20,31,125],[125, 20,31,30]));
console.log(similarArrays([50,49,3],[49,3,50]));