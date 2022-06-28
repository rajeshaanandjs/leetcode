function* generattorFn(i) {
  yield i;
  yield i * 4;
}
const gen = generattorFn(5);
console.log(gen.next().value);
console.log(gen.next().value);
