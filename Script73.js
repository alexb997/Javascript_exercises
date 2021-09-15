// Write a JavaScript program to reverse the elements of a given array of integers length 3.
function turnAround(array) {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);// best method to seach into a array .map().
}
console.log(turnAround([3,20,2]));  
console.log(turnAround([2,-1,4])); 
console.log(turnAround([1,1,1]));