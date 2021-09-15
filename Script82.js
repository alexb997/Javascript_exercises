// Write a JavaScript to add two positive integers without carry.
function addWithoutCarry(x,y){
	let rez=0;
	let unit=1;
	while(x>0 || y>0){
		if(x!=0&&y!=0){
			rez=rez+((x%10+y%10)%10)*unit;
			x=Math.floor(x/10);
			y=Math.floor(y/10);
			unit=unit*10;
		}else{
			if(y==0){
			rez=rez+(x%10)*unit;
			x=Math.floor(x/10);
			unit=unit*10;
			}
			if(x==0){
			rez=rez+(y%10)*unit;
			y=Math.floor(y/10);
			unit=unit*10;
			}
		}
	}
	return rez;
}
console.log(addWithoutCarry(24,191));
console.log(addWithoutCarry(999,145));