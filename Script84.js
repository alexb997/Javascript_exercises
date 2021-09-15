// Write a JavaScript to replace each character of a given string by the next one in the English alphabet. 
//Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'
function aroundInAlphabet(s) {
	let rezS= "";
    	for (let i = 0; i < s.length; i++) {
        	let aux = (s[i].charCodeAt()===122 || s[i].charCodeAt()===90) ? ((s[i].charCodeAt()===122)? 97:65) : s[i].charCodeAt()+1;
        	rezS = rezS + String.fromCharCode(aux);
    	}
  	return rezS;
}