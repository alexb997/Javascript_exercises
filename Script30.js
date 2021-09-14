// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, 
//if "Script" presents in the string return the string without "Script" otherwise return the original one.
function checkContainScript(s)
{
  if (s.length < 6) {
    return s;
  }
  let end_s = s;
    
  if (s.substring(10, 4) === 'Script'){
    end_s= s.substring(0, 4) + s.substring(10,s.length);
      
  }
  return end_s;
}

console.log(checkContainScript("JavaScript"));
console.log(checkContainScript("Dogs&cats"));
console.log(checkContainScript("javaCatScript"));