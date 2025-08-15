let a = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "#", "#"];
let b = 11;

let c = ["a", " ", "b", " ", " ", "c", "#", "#", "#", "#", "#", "#"];
let d = 6;

function urlify(s, k) {
  let slow = s.length - 1;
  let fast = k - 1;
  
  while(fast >= 0) {

    if (s[fast] !== ' ') {
      s[slow] = s[fast];
      slow--;
    } else if (s[fast] === ' ') {
      s[slow] = "0";
      s[slow - 1] = "2";
      s[slow - 2] = "%";
      slow -= 3;
    }

    fast--;
  }

  return s
}
                                    // ["h", "e", "l", "l", "o", "%", "2", "0", "w", "o", "r", "l", "d"]
console.log(urlify(a, b));
                                    // [ "a", "%", "2", "0", "b", "%", "2", "0", "%", "2", "0", "c"]
console.log(urlify(c, d)); 