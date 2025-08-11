// This function takes a sorted array of integers and returns a new array containing the squares of each number, sorted in non-decreasing order.
// It uses a two-pointer approach to efficiently calculate the squares while maintaining the sorted order.
// The time complexity is O(n) and space complexity is O(n).
// The function returns the new sorted array of squares.
// Example usage: sortedSquares_1([-4, -1, 0, 3, 10]) returns [0, 1, 9, 16, 100].

let nums = [-2, 1, 6, 9, 12];
let target = 18;

function twoSum_1(nums, target) {
  for (let left = 0, right = nums.length - 1; left < right; ) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left + 1, right + 1];
    sum < target ? left++ : right--;
  }

  return [-1, -1];
}

console.log(twoSum_1(nums, target));

function twoSum_2(nums, target) {
  let right = nums.length - 1;

  for (let left = 0; left < right; ) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else if (left === right) {
      return [-1, -1];
    }
  }

  return [-1, -1];
}

console.log(twoSum_2(nums, target));

function twoSum_3(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
}

console.log(twoSum_3(nums, target));