// Given two sorted arrays, return the elements that are in the first array but not in the second array.
// The arrays may contain duplicates, and the result should not contain duplicates.

// nums1 = [1,2,2,3,3,4];
// nums2 = [0,0,0,3];

// nums1 = [1, 2, 3, 4, 5];
// nums2 = [4, 5, 6];

nums1 = [-3, -2, -2, -2, -2, -1, -1, -1];
nums2 = [-3, -2, -1];

function findDifference(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  const result = [];

  while (p1 < nums1.length) {
    if (p2 >= nums2.length) {
      result.push(nums1[p1++]);
      continue;
    }
    
    if (nums1[p1] < nums2[p2]) {
      result.push(nums1[p1++])
    } else if (nums1[p1] > nums2[p2]) {
      p2++
    } else {
      p1++
    }
  }

  return result;
}

console.log(findDifference(nums1, nums2));