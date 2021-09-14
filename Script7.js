// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
function day_newYear( year){
	if (year >2050 || year < 2014)
		return "Not in scope";
	else{
		let firstJanuary= new Date(year, 0, 1);
		return "1st january of "+ year + (firstJanuary.toLocaleString('en-us', {weekday:'long'})==='Sunday'? " is on a sunday" : " isn't on a sunday");
	}
}
console.log(day_newYear(2055));
console.log(day_newYear(2014));
console.log(day_newYear(2023));
console.log(day_newYear(2049));
console.log(day_newYear(2033));
console.log(day_newYear(2011));
console.log(day_newYear(2021));