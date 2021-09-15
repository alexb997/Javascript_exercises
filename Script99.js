// Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.
function turnEqualIfPossible(s1, s2) {

  let part_1= s1.split(''),
      part_2 = s2.split(''),
      result = true;

  part_1.sort();
  part_2.sort();

  for (var i = 0; i < Math.max(part_1.length, part_2.length); i++) {
    if (part_1[i] !== part_2[i]) {
      result = false;
    }
  }

  return result;
}

console.log(turnEqualIfPossible("abc", "cab"))
console.log(turnEqualIfPossible("nor", "ron"))
console.log(turnEqualIfPossible("php", "hph"))