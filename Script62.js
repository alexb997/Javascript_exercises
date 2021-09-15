// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three. 
function shiftEndToStart(s) {
     if (s.length > 1){
         return s.substr(s.length-3)+s.substr(0,s.length-3);
      }
  return s;
}
console.log(shiftEndToStart("Mamaliga"));  
console.log(shiftEndToStart("Maimuta")); 
console.log(shiftEndToStart(" Tornada "));