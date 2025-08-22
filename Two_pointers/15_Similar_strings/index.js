//_____________________________________ input

// вставка посередине разная длина
let a1 = "iq";
let b1 = "ieq";

// одинаковые строки
let a2 = "qwe";
let b2 = "qwe";

// 2 лишних символа в конце
let a3 = "abcd";
let b3 = "abcdef";

// замена при одинаковых длинах строки
let a4 = "abc";
let b4 = "adc";

// 1 лишний символ посередине
let a5 = "abc";
let b5 = "abxc";

// лишний символ посередине и в конце
let a6 = "abc";
let b6 = "adcq";

// замена последнего символа
let a7 = "abcdef";
let b7 = "abcdeg";

// замена первого символа
let a8 = "abcdef";
let b8 = "zbcdef";

// лишний символ в начале 
let a9 = "abc";
let b9 = "zabc";

// лишний символ в конце 
let a10 = "abc";
let b10 = "abcz";

// несколько отличий
let a11 = "abc";
let b11 = "axdz";

// несколько отличий
let a12 = "abc";
let b12 = "azbcx";

// пустые строки
let a13 = "";
let b13 = "";

// пустые строки
let a14 = "";
let b14 = "a";

// пустые строки
let a15 = "";
let b15 = "ab";

// cтроки одинаковой длины, но больше одной ошибки
let a16 = "abcd";
let b16 = "abxy";

//_____________________________________ solution

function isSimilar(s, t) {
  if (Math.abs(s.length - t.length) > 1) return false;

  let difference = 0;
  let p1 = 0;
  let p2 = 0;

  while (p1 < s.length && p2 < t.length) {
    if (s[p1] === t[p2]) {
      p1++;
      p2++;
    } else {
      difference++;
      if (difference > 1) return false;

      if (s.length === t.length) {
        p1++;
        p2++;
      } else if (s.length > t.length) {
        p1++;
      } else {
        p2++;
      }
    }
  }

  difference += s.length - p1 + (t.length - p2);

  return difference <= 1;
}

//_____________________________________ tests

console.log(isSimilar(a1, b1));  // true   (вставка посередине разная длина)
console.log(isSimilar(a2, b2));  // true   (одинаковые строки)
console.log(isSimilar(a3, b3));  // false  (2 лишних символа в конце)
console.log(isSimilar(a4, b4));  // true   (замена при одинаковых длинах строки)
console.log(isSimilar(a5, b5));  // true   (1 лишний символ посередине)
console.log(isSimilar(a6, b6));  // false  (лишний символ посередине и в конце → 2 изменения)
console.log(isSimilar(a7, b7));  // true   (замена последнего символа одинаковая длина)
console.log(isSimilar(a8, b8));  // true   (замена первого символа одинаковая длина)
console.log(isSimilar(a9, b9));  // true   (лишний символ в начале)
console.log(isSimilar(a10, b10)); // true  (лишний символ в конце)
console.log(isSimilar(a11, b11)); // false (несколько отличий)
console.log(isSimilar(a12, b12)); // false (несколько отличий)
console.log(isSimilar(a13, b13)); // true  (пустые строки равны)
console.log(isSimilar(a14, b14)); // true  (одна вставка)
console.log(isSimilar(a15, b15)); // false (2 вставки)
console.log(isSimilar(a16, b16)); // false (строки равной длины, но 2 ошибки)