// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function arie_heron(a,b,c) 
  {
    let semi_perim = (a+b+c)/2;
    let aria= Math.sqrt(semi_perim*(semi_perim-a)*(semi_perim-b)*(semi_perim-c));
    return aria;
  }

console.log(arie_heron(5,6,7));