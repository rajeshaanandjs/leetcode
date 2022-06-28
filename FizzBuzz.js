var fizzBuzz = (n) => {
  for (let i = 0; i < n; i++) {
    //  console.log(i)
    console.log(
      i % 3 === 0 && i % 5 === 0
        ? "fizzbuzz"
        : i % 3 === 0
        ? "fizz"
        : i % 5 === 0
        ? "buzz"
        : i
    );
  }
};
fizzBuzz(50);
