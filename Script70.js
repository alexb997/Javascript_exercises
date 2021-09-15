// Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
function rotate(array){
    return [array[1], array[2], array[0]];
}
console.log(rotate([10,20,3]));  
console.log(rotate([2,-1,4])); 
console.log(rotate([0,1,3]));