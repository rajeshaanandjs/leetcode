//find array has a duplicate element
var containsDuplicate = function (nums) {
  let withoutDuplicate = new Set(nums);
  console.log(withoutDuplicate.Size < nums.length);
};
containsDuplicate([2, 3, 3, 4, 6, 7, 8, 2]);
