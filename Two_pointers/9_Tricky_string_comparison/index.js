let a = "ac#b#ac"; 
let b = "abc##aa#b#c";

let c = "a#####b"; 
let d = "b";

let e = "abcd";
let f = "abcd#";

let g = "ab##";
let h = "c#d#";

let j = "bxj##tw"; 
let k = "bxj###tw";

let l = "bxj##tw"; 
let m = "bxo#j##tw";

function compare(s, t) {
  let p1 = s.length - 1
  let p2 = t.length - 1

  let sGrid = 0
  let tGrid = 0

  let isSGridIncreased = false
  let isTGridIncreased = false

  let result = 0;
  
  while(p1 >= 0 || p2 >= 0) {    
    if (s[p1] === '#') {
      sGrid++
      isSGridIncreased = true
      p1--
      continue;
    } else if (t[p2] === '#') {
      tGrid++
      isTGridIncreased = true
      p2--
      continue;
    } if (s[p1] !== '#' && sGrid > 0) {
      p1--
      sGrid--
    } else if (t[p2] !== '#' && tGrid > 0) {
      p2--
      tGrid--
    } else if (s[p1] === t[p2]) {
      result++
      p1--
      p2--
      continue;
    } else if (s[p1] !== t[p2]) {
      return false
    }
  }

  if (!!result === false && isSGridIncreased && isTGridIncreased) {
    return true
  }

  return !!result;
}

console.log(compare(a, b)); // true
console.log(compare(c, d)); // true
console.log(compare(e, f)); // false
console.log(compare(g, h)); // true
console.log(compare(j, k)); // false
console.log(compare(l, m)); // true
