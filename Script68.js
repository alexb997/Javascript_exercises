// Write a JavaScript program to create a new string using the first and last n characters from a given sting.
//The string length must be greater or equal to n.
function justEdges(s, n){
    let start = s.substr(0,n);
    let end = s.substr(s.length-n);
    return start+end;
 }
console.log(justEdges("PepperP",2));  
console.log(justEdges("Peppermint",3)); 
console.log(justEdges("Pause",1));