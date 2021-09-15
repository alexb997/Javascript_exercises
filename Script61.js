// Write a JavaScript program to concatenate two strings except their first character. 
function exclusiveConcatenate (s,t) {
  return s.substr(1,s.length) + t.substr(1,t.length);
}
console.log(exclusiveConcatenate("Mamaliga", "deasa"));  
console.log(exclusiveConcatenate("Maimuta","mare")); 
console.log(exclusiveConcatenate(" Tornada "," de nisip"));