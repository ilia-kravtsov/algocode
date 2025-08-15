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

/*
Comment on the line of code:

if (s[left++].toLowerCase() !== s[right--].toLowerCase()) return false;

This line of code is equivalent to:

if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
left++;
right--;

left++ is a postfix increment: the current value of left is used first, then left is incremented by 1.

Similarly, for right--: the current value of right is used first, then it is decremented by 1.

In other words, the characters at indices left and right are compared first, and only afterwards the pointers are moved.

Therefore, the behavior and result are exactly the same.
*/