// Write a JavaScript program to count the number of vowels in a given string.
function vowels(s){
	let c = s.match(/[aeiou]/gi);
	return c === null ? 0 : c.length;
}

console.log(vowels("Porocala"));
console.log(vowels("Fainosag"));
console.log(vowels("Foame"));
console.log(vowels("clvr"));