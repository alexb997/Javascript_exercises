//  Write a JavaScript program to convert a given number to hours and minutes.
function time_convert(num){ 
	 let hours = Math.floor(num / 60);  
	 let minutes = num % 60;
	 return hours + ":" + minutes;         
}

console.log(time_convert(121));
console.log(time_convert(10));
console.log(time_convert(4001));