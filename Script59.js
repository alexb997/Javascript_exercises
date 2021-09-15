// Write a JavaScript program to extract the first half of a string of even length.
function halfString (s) {
  if (s.length % 2 == 0) {
    return s.slice(0, s.length / 2);
  }
  return s;
}
console.log(halfString("Mamaliga"));  
console.log(halfString("Maimuta")); 
console.log(halfString("Tornada "));