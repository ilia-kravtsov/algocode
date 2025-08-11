let nums1 = [1, 5, 7, 9];
let nums2 = [2, 3, 5, 6, 7, 8];
function findDifference_1(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  const result = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      p1++
      p2++
    } else if (nums1[p1] < nums2[p2]) {
      result.push(nums1[p1])
      p1++
    } else if (nums1[p1] > nums2[p2]) {
      result.push(nums2[p2]);
      p2++
    } 
  }

  let rest;
  let restIndex;

  if (p1 < nums1.length) {
    rest = nums1;
    restIndex = p1;
  } else if (p2 < nums2.length) {
    rest = nums2;
    restIndex = p2;
  }

  if (!rest) {
    return result
  }

  for (let i = restIndex; i < rest.length; i++) {
    result.push(rest[i])
  }

  return result
}

console.log(findDifference_1(nums1, nums2));

function findDifference_2(nums1, nums2) {
  const result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length || p2 < nums2.length) {
    if (p2 >= nums2.length) {
      result.push(nums1[p1]);
      p1 += 1;
      continue;
    }

    if (p1 >= nums1.length) {
      result.push(nums2[p2]);
      p2 += 1;
      continue;
    }

    if (nums1[p1] < nums2[p2]) {
      result.push(nums1[p1]);
      p1 += 1;
    } else if (nums1[p1] > nums2[p2]) {
      result.push(nums2[p2]);
      p2 += 1;
    } else {
      p1 += 1;
      p2 += 1;
    }
  }

  return result;
}

console.log(findDifference_2(nums1, nums2));

function findDifference_3(nums1, nums2) {
  const result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length || p2 < nums2.length) {
    if (p2 >= nums2.length) {
      result.push(nums1[p1++]);
    } else if (p1 >= nums1.length) {
      result.push(nums2[p2++]);
    } else if (nums1[p1] < nums2[p2]) {
      result.push(nums1[p1++]);
    } else if (nums1[p1] > nums2[p2]) {
      result.push(nums2[p2++]);
    } else {
      p1++;
      p2++;
    }
  }

  return result;
}

console.log(findDifference_3(nums1, nums2));