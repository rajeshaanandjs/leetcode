var shuffleArray = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const rand = Math.round(Math.random() * (len - i) + 0);
    //console.log(rand);
    [nums[i], nums[rand]] = [nums[rand], nums[i]];
  }
  console.log(...nums);
};
shuffleArray([5, 4, 6, 7, 8, 9, 10]);
