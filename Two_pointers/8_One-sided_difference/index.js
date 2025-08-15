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