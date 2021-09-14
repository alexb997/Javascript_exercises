// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
function remove_char_by_position(s,index){
	if(index==0)
		return s.slice(1,s.length);
	else{
		if(index==s.length)
			return s.slice(0,s.length-1);
		return s.slice(0,index-1) + s.slice(index,s.length);
	}
}

console.log(remove_char_by_position("yp",1));
console.log(remove_char_by_position("_what",5));
console.log(remove_char_by_position("python",2));
