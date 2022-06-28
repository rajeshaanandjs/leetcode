class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.array[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lestItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
  }
  shiftitem(index) {
    this.data[index] = this.data[index + 1];
    delete this.data[this.length - 1];
    this.length--;
  }
}
let newArray = new myArray();
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.shiftitem(1);
console.log(newArray.data);
