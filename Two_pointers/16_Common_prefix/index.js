let a1 = ["present", "predicate", "prepare"]; 
let a2 = ["dog", "cat", "bike"]; 
let a3 = ["flower", "flow", "flight"]; 

function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let result = "";
  let p2 = 0;

  while (true) {
    const char = strs[0][p2];
    if (char === undefined) break;

    let allMatch = true;
    for (let p1 = 1; p1 < strs.length; p1++) {
      if (strs[p1][p2] !== char) {
        allMatch = false;
        break;
      }
    }

    if (!allMatch) break;

    result += char;
    p2++;
  }

  return result;
}

console.log(longestCommonPrefix(a1)); // "pre"
console.log(longestCommonPrefix(a2)); // ""
console.log(longestCommonPrefix(a3)); // "fl"
