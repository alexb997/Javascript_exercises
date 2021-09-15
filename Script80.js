// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
function switchEdges(array) {
    if (array.length==0){
       return "Invalid input";
    }
    let aux= array[0];
    array[0]=array[array.length-1];
    array[array.length-1]=aux;
    return array;
}

console.log(switchEdges([30, 30,25]));
console.log(switchEdges([40, 11]));
console.log(switchEdges([30, 20,31,125]));
console.log(switchEdges([50]));