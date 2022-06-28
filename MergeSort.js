var mergeSort = (array1, array2) => {
  let array1ItemIndex = 1,
    array2ItemIndex = 1;
  let array1Item = array1[0];
  let array2Item = array2[0];
  let mergedArray = [];
  while (array1Item || array2Item) {
    if (array1Item && array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[array1ItemIndex];
      array1ItemIndex++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[array2ItemIndex];
      array2ItemIndex++;
    }
  }
  console.log(mergedArray);
};
mergeSort([1, 3, 5, 7], [2, 4, 6, 8]);
