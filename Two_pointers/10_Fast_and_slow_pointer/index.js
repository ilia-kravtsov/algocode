let nums = [2, 1, 0, 0, 4, 0, 9];
function moveZeros(nums) {
  let p1 = 0;
  let p2 = 0;

  while(p2 < nums.length) {
    if (nums[p2] !== 0) {
      [nums[p1], nums[p2]] = [nums[p2], nums[p1]]

      p1++
    }

    p2++
  }

  return nums
}

console.log(moveZeros(nums));