class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.top = 0;
    this.array = new Array(capacity);
  }

  push(value) {
    if (this.top >= this.capacity) {
      throw new Error('오버플로우');
    }
    this.array[this.top] = value;
    this.top++;
    return this.array;
  }

  pop() {
    if (!this.top) {
      throw new Error('언더플로우');
    }
    this.array[this.top - 1] = undefined;
    this.top--;
    return this.array;
  }

  peek() {
    if (!this.top) {
      return '없음';
    }
    return this.array[this.top - 1];
  }

  isEmpty() {
    if (this.top === 0) {
      return true;
    }
    return false;
  }
}

const a = new Stack(3);

console.log(a.push(1));
console.log(a.peek());
console.log(a.push(2));
console.log(a.peek());
console.log(a.push(3));
console.log(a.peek());

console.log(a.isEmpty());

console.log(a.pop());
console.log(a.peek());
console.log(a.pop());
console.log(a.peek());
console.log(a.pop());
console.log(a.peek());
