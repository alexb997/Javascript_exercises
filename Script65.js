// Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.
function finishInScript(str) {
    if (str.substring(str.length - 6, str.length) == 'Script'){
        return true;
    } 
    else{
        return false;
    }
}
console.log(finishInScript("A small script"));  
console.log(finishInScript("Random scrissors")); 
console.log(finishInScript("JavaScript"));