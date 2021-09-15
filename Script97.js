// Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.
function smallAdjustmentToPalindrom(s) {
  let check;
  for (let i = s.length;; i++) {
    check = true;
    for (var j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < s.length && s[j] != s[i - j - 1]) {
        check = false;
        break;
      }
    }
    if (check) {
      for (var j = s.length; j < i; j++) {
        s += s[i - j - 1];
      }
      return s;
    }
  }
}

console.log(smallAdjustmentToPalindrom("Ron"))
console.log(smallAdjustmentToPalindrom("Paine"))
console.log(smallAdjustmentToPalindrom("roor"))