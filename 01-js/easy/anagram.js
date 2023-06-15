/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str){
  var arr=str.split("");
  arr = arr.sort();
  var ans = arr.join("");
  return ans;
}
function isAnagram(str1, str2) {
  var s1 = str1.toLowerCase();
  var s2 = str2.toLowerCase();

  if(sort(s1) == sort(s2) ){
    return true
  }
  else{
    return false
  }


}


module.exports = isAnagram;
