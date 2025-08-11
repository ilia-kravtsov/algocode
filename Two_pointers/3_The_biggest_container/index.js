// This function finds the maximum area of water that can be contained between two lines represented by the heights in the array.
// It uses a two-pointer approach to efficiently calculate the area while moving the pointers based on the heights of the lines.
// The time complexity is O(n) and space complexity is O(1).
// The function returns the maximum area found.
// The input is an array of integers representing the heights of the lines.
// Example usage: maxArea_1([2, 3, 4, 5]) returns 6.

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