// Two Pointers - Fuzzy Match
// Given two strings s and t, determine if you can obtain string s by deleting some (possibly none) characters from string t without changing the order of the remaining characters.
// Example 1:
// s = "abc", t = "a1b2c3" should return true because you can delete '1', '2', and '3' from t to get s.
// Example 2:
// s = "abc", t = "ac" should return false because you cannot obtain s from t without changing the order of characters.
// The time complexity is O(n + m) where n is the length of s and m is the length of t.

// Example strings
// let s = "abc", t = "a1b2c3";

// Function to check if s can be obtained from t
// using the two-pointer technique.

let s = "abc",
  t = "a1b2c3";

function fuzzyMatch(s, t) {
  let p1 = 0;
  let p2 = 0;

  while(p1 < s.length && p2 < t.length) {
    if (s[p1] === t[p2]) {
      p1++
      p2++
    } else {
      p2++
    } 
  }

  return p1 === s.length
}

console.log(fuzzyMatch(s, t));