// This function checks if a given string is a palindrome by comparing characters from both ends towards the center.
// It ignores non-alphanumeric characters and is case-insensitive.
// The time complexity is O(n) and space complexity is O(1).
// The function returns true if the string is a palindrome, otherwise false.

let s = "A man, a plan, a canal: Panama";

function isPalindrome_1(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    } 
  }

  return true;
}

console.log(isPalindrome_1(s)); 

s = "A man, a plan, a canal: Panama";

const isAlphaNumeric = (c) => /^[a-z0-9]$/i.test(c);

export function isPalindrome_2(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {

    if (!isAlphaNumeric(s[left])) {
      left++;
      continue;
    }

    if (!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }
    
    if (s[left++].toLowerCase() !== s[right--].toLowerCase()) return false;
  }

  return true;
}

console.log(isPalindrome_2(s)); 