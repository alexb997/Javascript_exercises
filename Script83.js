// Write a JavaScript to find the longest string from a given array of strings.
function longestElement(array){
  let max=0;
  let rezIndex=0;
  array.map((e,idx)=>{if(max<e.length) {max=e.length; rezIndex=idx}});

  return array +"\n" + "Largest string inside array is:" + array[rezIndex] +"\n";
}
console.log(longestElement(["Largest","String","Maybe"]));
console.log(longestElement(["What","The","Heck","Is","Gonna","Show"]));