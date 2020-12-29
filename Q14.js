const searchRange = (nums, target) => {};

const binarySearch = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      //search left
      right = mid - 1;
    } else {
      //search right
      left = mid + 1;
    }
  }

  return -1;
};
// const test = [1, 3, 3, 5, 5, 5, 8, 9];

const test = [1, 2, 3, 4, 5, 6, 7];

console.log(binarySearch(test, 10));
