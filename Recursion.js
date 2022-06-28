let result = [];
var subset = function (nums) {
  callMyself([], 0);
  function callMyself(current, index) {
    result.push(current);
    for (let i = index; i < nums.length; i++) {
      callMyself(current.concat(nums[i]), i + 1);
    }
  }
  console.log(...result);
};
subset([1, 2, 3]);
