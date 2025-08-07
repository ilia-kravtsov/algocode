let nums = [-5, -3, -1];

function some_1(nums) {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
}

console.log(some_1(nums));

function some_2(nums) {
  const result = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result.unshift(nums[left] ** 2);
      left++;
    } else {
      result.unshift(nums[right] ** 2);
      right--;
    }
  }

  return result;
}

console.log(some_2(nums));

function some_3(nums) {
  const result = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result.push(nums[left] ** 2);
      left++;
    } else {
      result.push(nums[right] ** 2);
      right--;
    }
  }

  return result.reverse();
}

console.log(some_3(nums));

function some_4(nums) {
  const result = [];
  let k = nums.length - 1;

  for (let i = 0; i <= k; i++) {
    if (Math.abs(nums[i]) > Math.abs(nums[k])) {
      result.push(nums[i] ** 2);
    } else {
      result.push(nums[k] ** 2);
      k--;
    }
  }

  return result.reverse();
}

console.log(some_4(nums));

function some_5(nums) {
  const result = [];
  let k = nums.length - 1;

  for (let i = 0; i <= k; i++) {
    if (Math.abs(nums[i]) > Math.abs(nums[k])) {
      result.unshift(nums[i] ** 2);
    } else {
      result.unshift(nums[k] ** 2);
      k--;
    }
  }

  return result;
}

console.log(some_5(nums));

nums = [-5, -3, -1];
function some_6(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] ** 2;
  }

  for (let i = 1; i < nums.length; i++) {
    let key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }

  return nums;
}

console.log(some_6(nums));

nums = [-5, -3, -1];

function some_7(nums) {
  let left = 0;
  let right = nums.length - 1;
  const result = [];

  while (left <= right) {
    const leftSq = nums[left] ** 2;
    const rightSq = nums[right] ** 2;

    if (leftSq > rightSq) {
      result.unshift(leftSq);
      left++;
    } else {
      result.unshift(rightSq);
      right--;
    }
  }

  return result;
}

console.log(some_7(nums));

nums = [-5, -3, -1];

function some_8(nums) {
  let left = 0;
  let right = nums.length - 1;
  let originalLength = nums.length;

  for (let i = 0; i < originalLength; i++) {
    const leftSq = nums[left] ** 2;
    const rightSq = nums[right] ** 2;

    if (leftSq > rightSq) {
      nums.push(leftSq);
      left++;
    } else {
      nums.push(rightSq);
      right--;
    }
  }

  nums.splice(0, originalLength);

  nums.reverse();

  return nums;
}

console.log(some_8(nums));

nums = [-5, -3, -1];
function some_9(nums) {
  const result = new Array(nums.length);
  let left = 0,
    right = nums.length - 1;
  let pos = nums.length - 1;

  while (left <= right) {
    const leftSq = nums[left] ** 2;
    const rightSq = nums[right] ** 2;

    if (leftSq > rightSq) {
      result[pos] = leftSq;
      left++;
    } else {
      result[pos] = rightSq;
      right--;
    }
    pos--;
  }

  return result;
}

console.log(some_9(nums));
