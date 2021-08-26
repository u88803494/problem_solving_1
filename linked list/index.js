class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push = (value) => {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
    this.length += 1;
  }

  getNode = (index) => {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentIndex += 1;
      current = current.next;
    }
    return current;
  }

  pop = () => {
    const prevNode = this.getNode(this.length - 2);
    const delNode = prevNode.next;
    const nextNode = delNode.next;
    prevNode.next = nextNode
    this.length -= 1;
    return delNode.value;
  }

  size = () => {
    return this.length;
  }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop()); // 3
console.log(myStack.size()); // 2
