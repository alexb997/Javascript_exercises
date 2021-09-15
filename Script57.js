// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
function stringRepeat (s, x){
      if (x <= 0)
        return false;
      else
        return s.repeat(x);
}
console.log(stringRepeat("lol",13));
console.log(stringRepeat("woof", 0));
console.log(stringRepeat("meh", 4));