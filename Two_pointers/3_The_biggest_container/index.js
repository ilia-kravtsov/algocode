let nums = [2, 3, 4, 5];

function maxArea_1(nums) {
  let left = 0;
  let right = nums.length - 1;
  let maxArea = 0;

  while (left < right) {
    const height = Math.min(nums[left], nums[right]);
    const width = right - left;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (nums[left] < nums[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea
}

console.log(maxArea_1(nums));

nums = [2, 3, 4, 5];

function maxArea_2(nums) {
  let left = 0,
    right = nums.length - 1,
    maxArea = 0;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(nums[left], nums[right]) * (right - left)
    );
    nums[left] < nums[right] ? left++ : right--;
  }

  return maxArea;
}

console.log(maxArea_2(nums));