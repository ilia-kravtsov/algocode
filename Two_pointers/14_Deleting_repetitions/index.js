let nums = [-2, -2, -2, -1, -1, 0, 0, 0, 0];

function removeDuplicates(nums) {
  if (nums.length <= 1) return nums;

  let p1 = 1;
  let p2 = 0;
  
  while(p1 < nums.length) {
    if (nums[p1] === nums[p2]) {
      p1++;
      continue;
    } else {
      nums[p2+1] = nums[p1];
    }

    p1++;
    p2++;
  }

  nums.length = p2 + 1
  
  return nums;
}

console.log(removeDuplicates(nums));

function removeDuplicates_2(nums) {
  if (nums.length <= 1) return nums;

  let p2 = 0;
  for (let p1 = 1; p1 < nums.length; p1++) {
    if (nums[p1] !== nums[p2]) {
      nums[++p2] = nums[p1];
    }
  }

  nums.length = p2 + 1;
  return nums;
}

console.log(removeDuplicates_2(nums));