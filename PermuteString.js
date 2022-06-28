let str = "abc";
var perString = (str, result) => {
  if (str.length === 0) {
    console.log(result);
  }
  for (let i = 0; i < str.length; i++) {
    let rest = str.substring(0, i) + str.substring(i + 1);
    perString(rest, result + str[i]);
  }
};
perString(str, "");
