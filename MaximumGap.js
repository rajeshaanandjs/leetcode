// Maximum Gap
//Input; nums=[3,6,9,1]
//ouput; 3
var maximumGap = function (nums) {
  let sortArray = nums.reverse().sort((a, b) => a - b);
  let diff = (a, b) => b - a;
  let setDiff = new Set();
  for (let i = 0; i < sortArray.length - 1; i++) {
    setDiff.add(diff(sortArray[i], sortArray[i + 1]));
  }
  console.log(Math.max(...setDiff));
};
maximumGap([6, 3, 2, 1, 12, 39]);
