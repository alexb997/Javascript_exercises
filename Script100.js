// Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.
function existsCommonElement(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++)
  {
    if (arr2.indexOf(arr1[i]) != -1) 
      return true;
  }
  return false;
}
console.log(existsCommonElement([5,6,7], [5,10,15]));   
console.log(existsCommonElement([10,12,14],[100,222,300]));
