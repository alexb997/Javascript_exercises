// Write a JavaScript program to reverse the order of the bits in a given integer. 
function mirrorBits(n) {
  return parseInt(n.toString(2).split("").reverse().join(""), 2);
}

console.log(mirror_bits(56));
console.log(mirror_bits(234));