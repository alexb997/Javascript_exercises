// Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.
function sameExtremeties(array){
    if (array.length >= 1){
       return array[0] == array[array.length-1];
    }else{
    return false;
    }
}
console.log(sameExtremeties([3,20,3]));  
console.log(sameExtremeties([2,-1,4])); 
console.log(sameExtremeties([1,1,1]));