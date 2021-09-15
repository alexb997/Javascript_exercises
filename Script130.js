// Write a JavaScript program to find the number of even digits in a given integer.
function evenDigits(num) {
  var ctr = 0;
  while (num) {
    if(num % 2 === 0)
        ctr++;
    num = Math.floor(num / 10);
  }
  return ctr;
}

console.log(evenDigits(102));
console.log(evenDigits(110));
console.log(evenDigits(155142));