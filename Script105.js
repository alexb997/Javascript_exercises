// Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.
function digitsSum(num) {
        let sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
};
function sumDigitsToOneDigit(num) {
    let rez = 0;
    while (num >= 10) {
        rez += 1;
        num = digitsSum(num);
    }
    return rez;
}

console.log(sumDigitsToOneDigit(123))
console.log(sumDigitsToOneDigit(156))
