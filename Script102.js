// Write a JavaScript program to find the number of inversions of a given array of integers
function countInversions(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) 
              count++;
        }
    }
    return count;
}

console.log(countInversions([0, 3, 2, 5, 9]));   
console.log(countInversions([1, 5, 4, 3]));   
console.log(countInversions([10, 30, 20, -10]));