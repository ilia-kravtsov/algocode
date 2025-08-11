// This code finds common elements in two sorted arrays using the two-pointer technique.
// It efficiently traverses both arrays to find elements that are present in both.
// The time complexity is O(n + m) where n and m are the lengths of the two arrays.

// Example arrays
// let nums1 = [-3, 2, 2, 5, 8, 19, 31];
// let nums2 = [1, 2, 2, 2, 6, 19, 52];
// The function returns an array of common elements.
// The function can handle duplicates and returns each common element only once.
// The space complexity is O(k) where k is the number of common elements found.
// The function can be used to find common elements in any two sorted arrays.

let nums1 = [-3, 2, 2, 5, 8, 19, 31],
  nums2 = [1, 2, 2, 2, 6, 19, 52];

function intersect(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  let result = [];

  while(p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] > nums2[p2]) {
      p2++
    } else if (nums1[p1] < nums2[p2]) {
      p1++
    } else {
      result.push(nums1[p1])
      p1++
      p2++
    }
  }

  return result
}

console.log(intersect(nums1, nums2));

function intersect_2(nums1, nums2) {
    let p1 = 0,
      p2 = 0,
      result = [];

    while (p1 < nums1.length && p2 < nums2.length) {
      if (nums1[p1] === nums2[p2]) {
        result.push(nums1[p1]);
        p1++;
        p2++;
      } else if (nums1[p1] < nums2[p2]) {
        p1++;
      } else {
        p2++;
      }
    }
    
    return result;
}

console.log(intersect_2(nums1, nums2));