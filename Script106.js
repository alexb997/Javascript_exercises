// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.
function divideWhileRezInt(num, d) {
    if(d==1)
        return num;
    else{
        while (num%d===0){
            num /= d;
        }
        return num;
    }
}
console.log(divideWhileRezInt(-12, 2))
console.log(divideWhileRezInt(13, 2))
console.log(divideWhileRezInt(13, 1))
