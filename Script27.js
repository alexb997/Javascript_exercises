//  Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
function checkStartJava(s){
	let start=s.toLowerCase().substring(0,4)
	return start==="java"? true: false;
}

console.log(checkStartJava("what"));
console.log(checkStartJava("JAvaScript"));
console.log(checkStartJava("guns"));