var mergeKLists = function (lists) {
  let mergedArray = [];
  for (let i = 0; i < arguments.length; i++) {
    mergedArray.push(...arguments[i]);
  }
  console.log(mergedArray.reverse().sort((a, b) => a - b));
};
mergeKLists([1, 2], [1, 2, 6], [1, 9, 9, 10, 11, 12]);
