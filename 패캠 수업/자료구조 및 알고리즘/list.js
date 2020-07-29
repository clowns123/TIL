class ArrayList {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Int32Array(capacity);
    this.length = 0;
  }

  isEmpty() {
    let is = false;
    this.array.forEach(e => {
      if (e === 0) {
        is = true;
      }
    });
    return is;
  }

  prepend(value) {
    const isAdd = this.capacity > this.length;
    if (isAdd) {
      const index = this.array.findIndex(i => i === 0);
      this.array[index] = value;
      this.length += 1;
    } else {
      const temp = new Int32Array(this.capacity);
      this.array = new Int32Array([...this.array, ...temp]);
      const index = this.array.findIndex(i => i === 0);
      this.array[index] = value;
      this.length += 1;
      this.capacity *= 2;
    }
    return this.array;
  }

  append(value) {
    const isAdd = this.capacity > this.length;
    if (isAdd) {
      this.array[this.length] = value;
      this.length += 1;
    } else {
      const temp = new Int32Array(this.capacity);
      this.array = new Int32Array([...this.array, ...temp]);
      this.array[this.length] = value;
      this.length += 1;
      this.capacity *= 2;
    }
    return this.array;
  }

  setHead(index) {
    this.length -= index;
    this.array = this.array.slice(index);
    return this.array;
  }

  access(index) {
    return this.array[index];
  }

  insert(index, value) {
    const isAdd = this.capacity > this.length;
    if (isAdd) {
      const temp = this.array.slice(index, this.array.length - 1);
      this.array = this.array.slice(0, index);
      this.array = new Int32Array([...this.array, value, ...temp]);
      this.length += 1;
    } else {
      const temp = new Int32Array(this.capacity);
      this.array = new Int32Array([...this.array, ...temp]);
      const tempArr = this.array.slice(index, this.array.length - 1);
      this.array = this.array.slice(0, index);
      this.array = new Int32Array([...this.array, value, ...tempArr]);

      this.length += 1;
      this.capacity *= 2;
    }
    return this.array;
  }

  remove(index) {
    if (this.array[index] === 0) {
      return 'no Index';
    }
    const temp = this.array.slice(index + 1);
    this.array = this.array.slice(0, index);
    this.array = [...this.array, ...temp];
    return this.array;
  }

  print() {
    return this.array;
  }
}
const a = new ArrayList(3);
// console.log(a.print());
//-----
// console.log(a.isEmpty());
//-----
console.log(a.prepend(1));
console.log(a.prepend(2));
console.log(a.prepend(3));
// console.log(a.prepend(4));
//-----
// console.log(a.append(5));
// console.log(a.append(6));
// console.log(a.append(7));
//-----
// console.log(a.access(1));
//-----
console.log(a.insert(1, 2));

//-----
// console.log(a.remove(1));
// console.log(a.remove(1));
// console.log(a.remove(1));
//-----
console.log(a.setHead(2));
