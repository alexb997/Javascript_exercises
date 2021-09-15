// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three. 
function midle3(s){
    if (s.length % 2!= 0) {
        let mid=(s.length+1)/2;
        return s.slice(mid - 2, mid +1);
    }else{
        return s;
    }
}
console.log(midle3("Mamaliga"));  
console.log(midle3("Maimuta")); 
console.log(midle3(" Tornada "));