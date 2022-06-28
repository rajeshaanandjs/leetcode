//remove duplicate element in an array
var removeDuplicate = function (nums) {
  let withoutDuplicate = new Set(nums);
  return [...withoutDuplicate];
};
console.log(removeDuplicate([2, 3, 4, 6, 7, 8, 2]));
