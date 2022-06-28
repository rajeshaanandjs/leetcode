var rotateArray = function (nums) {
  let j = 0;
  for (i = nums.length - 1; i >= nums.length / 2; i--) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    j++;
  }
  console.log([...nums]);
};
rotateArray([1, 3, 4, 5]);
