// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function name(s) {
  if (s.length >= 3 && ((s.substring(0, 3) == 'Los') || (s.substring(0, 3) == 'New'))){
	return s;
  }
  return '';
}
console.log(name("Lost Name"));  
console.log(name("New somethng")); 
console.log(name("JavaScript"));