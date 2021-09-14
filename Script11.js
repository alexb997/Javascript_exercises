// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
function celsius_fahrenheit(c){
	let f =c*9 /5;
	f=f+32;
	return c +" celsius in fahrenheit = "+ f;
}
function fahrenheit_celsius(f){
	let c=(f-32)*5
	c=c/9
	return f +" fahrenheit in celsius = "+ c;
}
console.log(celsius_fahrenheit(60));
console.log(fahrenheit_celsius(45));
