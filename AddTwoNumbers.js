//Input l1=[2,4,3],l2=[5,6,4]
//Output [7,0,8]
//Explanation: 342 + 465 = 807.
var addTwoNumbers = function (l1, l2) {
  let reverseSum =
    parseInt(l1.reverse().join("")) + parseInt(l2.reverse().join(""));
  console.log(reverseSum.toString().split("").reverse());
};
addTwoNumbers([2, 4, 3], [5, 6, 4]);
