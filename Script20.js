// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
function one_pos_one_neg(x,y){
	return ((x<0 &&y>=0) || (y<0 && x>=0))? true: false;
}

console.log(one_pos_one_neg(60,-10));
console.log(one_pos_one_neg(120,20));
console.log(one_pos_one_neg(-500,5));