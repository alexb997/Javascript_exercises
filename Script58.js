// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string.
//The length of the given string must be 3 and above.
function weirdString(s){
  if (s.length >= 3) {
    let rez = s.substring(s.length - 3);
    return rez.repeat(4);
  }
  else
    return false;
}
console.log(weirdString("fainosag"));
console.log(weirdString("Switzerland"));
console.log(weirdString("Pa"));
console.log(weirdString("Doom"));
