let a = [-5, 0, 6];
let b = [10, -2, 3];

let c = [1, 15, 3];
let d = [21, 10, 30];

let e = [1, 3, 15];
let f = [10, 20, 30];

function findDifference(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;

  let min = +Infinity

  while(p1 < nums1.length || p2 < nums2.length) {
    if (p1 === nums1.length && p2 < nums2.length) {
      p2++;
      p1 = 0;
      continue;
    }

    let curr = Math.abs(nums1[p1] - nums2[p2]);

    if (curr < min) {
      min = curr;
      p1++; 
      continue;
    }

    p1++
  }

  return min
}

console.log(findDifference(a, b)); // 2
console.log(findDifference(c, d)); // 5
console.log(findDifference(e, f)); // 5
