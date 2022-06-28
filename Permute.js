var permuteArray = function (nums) {
  var result = [];
  var backTrack = (i, nums) => {
    if (i == nums.length) {
      result.push(nums.slice());
      return;
    }
    for (var j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      backTrack(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  backTrack(0, nums);
  console.log(result);
  return result;
};
permuteArray([1, 3, 4, 5]);
