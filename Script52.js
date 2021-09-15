// Write a JavaScript program to convert the letters of a given string in alphabetical order.
function alphabet_Soup(str) { 
    return str.toLowerCase().split("").sort().join(""); 
}

console.log(alphabet_Soup("labrador"));
console.log(alphabet_Soup("WIser"));;
// sort pe string pune in functie de valoarea ascii => ordinea alfabetica, lowerCase sa nu puna literele mari inainte (din cauza valorii ascii)