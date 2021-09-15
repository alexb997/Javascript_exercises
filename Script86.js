// Write a JavaScript program to find the types of a given angle.
function typeOfAngle(x){
	while(x>180){
		x=x-180;
	}
	if(x<90)
		return "Acute angle";
	if(x===180)
		return "Straight angle";
	if(x===90)
		return "Right angle";	
	return "Optuse angle";
}
console.log(typeOfAngle(45));
console.log(typeOfAngle(90));
console.log(typeOfAngle(111));
console.log(typeOfAngle(180));
console.log(typeOfAngle(360));
console.log(typeOfAngle(270));