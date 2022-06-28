//moveZero([2,0,0,5]);
var moveZeroes = function (nums) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
    }
  }
  console.log(...nums);
};
moveZeroes([2, 0, 0, 5]);
