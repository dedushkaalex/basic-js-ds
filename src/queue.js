const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList extends Node {
  constructor() {
    super();
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const node = new Node(value)
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
    return this;
  }
  getList() {
    return this.head
  }
}

class Queue extends LinkedList {
  constructor() {
    super();
  }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    this.append(value);
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  getUnderlyingList() {
    return this.getList();
  }
}

module.exports = {
  Queue
};
