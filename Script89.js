// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with 
//one of the four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
function checkFirstWithSecondResultThird(x,y,z) {
	return (x*y===z||x/y===z||x-y===z||x+y===z);
}

console.log(checkFirstWithSecondResultThird(50,25,75));
console.log(checkFirstWithSecondResultThird(13,2,26));
console.log(checkFirstWithSecondResultThird(14,49,7));
