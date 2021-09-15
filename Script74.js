// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
function turnToMaxEdge(array){
    var max = array[0] > array[array.length-1] ? array[0] : array[array.length-1];
    return array.map((idx, arr) => arr[idx]=max);
}
console.log(turnToMaxEdge([3,20,2]));  
console.log(turnToMaxEdge([2,-1,4])); 
console.log(turnToMaxEdge([1,5,1]));
console.log(turnToMaxEdge([22,5,125,45,1]));