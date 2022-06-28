var bubbleSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        // nums[j]=nums[j] ^ nums[j+1];
        // nums[j+1]=nums[j] ^ nums[j+1];
        // nums[j]==nums[j] ^ nums[j+1];
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
      }
    }
  }
  console.log(nums);
};
bubbleSort([12, 234, 34, 89, 23, 7, 25, 4, 89]);
