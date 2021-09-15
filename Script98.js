// Write a JavaScript program to switch case of the minimum possible number of letters to make a
//given string written in the upper case or in the lower case.
function upperOrLowerMajorityWins(s) {
  var x = 0;
  var y = 0;
  for (var i = 0; i < s.length; i++) {
    if (/[A-Z]/.test(s[i])) {
        x++;
    } else {
        y++;
    }
  }
  if (y > x) 
    return s.toLowerCase();
  return s.toUpperCase();
}

console.log(upperOrLowerMajorityWins("Poison"))
console.log(upperOrLowerMajorityWins("ROLLing"))
