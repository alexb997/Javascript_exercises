// Write a JavaScript program to create a new string without the first and last character of a given string.
function cutEdges (s) {
  if (s.length >=2) {
    return s.substr(1,s.length-2);
  }
  return false;
}
console.log(cutEdges("Mamaliga"));  
console.log(cutEdges("Maimuta")); 
console.log(cutEdges("Tornada "));
