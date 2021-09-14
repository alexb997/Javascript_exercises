// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
function py_start(s){
	if(s.substring(0,2).toLowerCase()==="py"){
		return s;
	}else{
		return "py"+s;
	}
}

console.log(py_start("yp"));
console.log(py_start("_what"));
console.log(py_start("python"));