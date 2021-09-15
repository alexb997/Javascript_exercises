// Write a JavaScript program to add two digits of a given positive integer of length two.
function digitsSum(x){
  return x % 10 + Math.floor(x / 10);
}
console.log(digitsSum(14))
console.log(digitsSum(22))