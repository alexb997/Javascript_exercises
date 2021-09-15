// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
function has1Or3In(array) {
    if (array.length!=2){
       return "Invalid input";
    }
    if (array.indexOf(1)!=-1 || array.indexOf(3)!=-1){
       return true;
    }else{
       return false;
    }
}
console.log(has1Or3In([3,20]));  
console.log(has1Or3In([2,-1])); 
console.log(has1Or3In([1,5,1]));
console.log(has1Or3In([2,44]));
console.log(has1Or3In([3,20]));