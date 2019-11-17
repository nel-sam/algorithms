// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new Node(item, this.head);
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;

    if (!currentNode) {
      return null;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }

    this.head = this.head.next;
  }

  removeLast() {
    let currentNode = this.head;
    const size = this.size();

    if (this.size() === 0) {
      return;
    }

    if (this.size() === 1) {
      this.clear();
    }

    for (let i = 1; i < size - 1; i++) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
  }

  insertLast(value) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(value);
    } else {
      this.insertFirst(value);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }
}

module.exports = { Node, LinkedList };
