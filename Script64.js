// Write a JavaScript program to concatenate two strings and return the result.
//If the length of the strings are not same then remove the characters from the longer string.
function concatenate(s,t) {
  const min = Math.min(s.length, t.length);

  return s.substring(s.length - min) + t.substring(t.length - min);
}
console.log(concatenate("Mamaliga", "deasa"));  
console.log(concatenate("Maimuta","mare")); 
console.log(concatenate(" Tornada "," de nisip"));
