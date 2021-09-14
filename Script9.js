// Write a JavaScript program to calculate days left until next Christmas.
function days_until_xmas(){
	let now= new Date(Date.now());
	let year = now.getFullYear();
	let timeLeft= new Date(year,11,25).getTime()- now.getTime();
	return Math.round(timeLeft/(1000*60*60*24));
}
console.log(days_until_xmas());