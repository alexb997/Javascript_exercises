// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
/*
<form>
	1st Number : <input type="text" id="x" /><br>
	2nd Number: <input type="text" id="y" /><br>
	<input type="button" onClick="weird_add()" Value="Special Addition" />
</form>
*/
function multiply(){
	let x = document.getElementById("x").value;
    	let y = document.getElementById("y").value;
	let sum = (x===y)? (x+y)*3 : x+y;
    	document.getElementById("result").innerHTML = sum;
}
