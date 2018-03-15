// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

let chars = {};
maxChar = "";
maxCount = 0;
  for (let char of str ){
    !chars[char] ? chars[char] = 1 : chars[char]++ ;
  }
 for (let char in chars){
  if(chars[char] > maxCount){
    maxChar = char ;
    maxCount = chars[char];
  }
 }
return maxChar ;
}

module.exports = maxChar;
