// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
function weirdSubstring(s){
    return (/a...b/).test(s) || (/b...a/).test(s);
}

console.log(weirdSubstring("Whatever"));
console.log(weirdSubstring("brreakfast "));
console.log(weirdSubstring("aaabbbbb"));