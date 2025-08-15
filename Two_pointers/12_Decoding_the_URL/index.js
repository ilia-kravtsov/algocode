let a = ["h", "e", "l", "l", "o", "%", "2", "0", "w", "o", "r", "l", "d"];
let b = ["a", "%", "2", "0", "b", "%", "2", "0", "%", "2", "0", "c"];

function unurlify(s) {
  let p1 = 0;
  let p2 = 0;

  while(p2 < s.length || p1 < s.length) {
    if (p2 >= s.length && p1 < s.length) {
      s[p1] = "#";
      p1++
      continue;
    }
    
    if (s[p2] !== "%" && s[p2 + 1] !== "2" && s[p2 + 2] !== "0") {
      s[p1] = s[p2]
      p1++;
      p2++;
    } else {
      s[p1] = " ";
      p2 += 3;
      p1++;
    } 
  }

  return s
}

                                  // [ "h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "#", "#"]
console.log(unurlify(a));
                                  // [ "a", " ", "b", " ", " ", "c", "#", "#", "#", "#", "#", "#"]
console.log(unurlify(b));