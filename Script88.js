// Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either. 
function checkIfMultiplesOf(x,y,rate) {
	return (x%rate ===0 && y%rate ===0);
}

console.log(checkIfMultiplesOf(25,30,5));
console.log(checkIfMultiplesOf(13,2,3));
console.log(checkIfMultiplesOf(14,49,7));