// Write a JavaScript program to check whether a given string contains equal number of p's and t's.
function evenP_T(s){
	
	let ct = s.match(/[tT]/gi);
	let cp = s.match(/[pP]/gi);
	if(ct === null || cp === null)
		return false;
	return ct.length===cp.length;
}

console.log(evenP_T("ttTpPP"));
console.log(evenP_T("Tatarii"));
console.log(evenP_T("Paine Taraneasca"));
console.log(evenP_T("clever"));