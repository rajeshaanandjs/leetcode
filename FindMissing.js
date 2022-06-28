var findMissing = function (nums) {
  let n = nums.length + 1;
  let sum = 0;

  for (let n of nums) {
    sum += n;
  }
  let res = (n * (n + 1)) / 2 - sum;
  console.log(res);
};
findMissing([1, 2, 3, 4, 5, 7, 8, 9, 10, 11]);
