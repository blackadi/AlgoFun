//LeetCode 34. Find First and Last Position of Element in Sorted Array

const searchRange = (nums, target) => {
  if (nums.length === 0) return [-1, -1];

  const firstPos = binarySearch(nums, target, 0, nums.length - 1);

  let startPos = firstPos,
    endPos = firstPos,
    tempL = -1,
    tempR = -1;

  //search Right and Left

  while (startPos !== -1) {
    tempL = startPos; //save the pervious value and when -1 is returned reassign it to startPos
    startPos = binarySearch(nums, target, 0, startPos - 1); //search left side
  }
  startPos = tempL;

  while (endPos !== -1) {
    tempR = endPos;
    endPos = binarySearch(nums, target, endPos + 1, nums.length - 1);
  }
  endPos = tempR;

  return [tempL, tempR];
};

const binarySearch = (nums, target, left, right) => {
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

console.log(searchRange(test, 5));
