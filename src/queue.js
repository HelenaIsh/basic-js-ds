const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
  constructor() {
    this.head = new ListNode(null);
    this.tail = this.head;
  }

  getUnderlyingList() {
    return this.head.next;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    if (this.head.next === null) {
      return null;
    }

    const dequeuedValue = this.head.next.value;
    this.head.next = this.head.next.next;

    if (this.head.next === null) {
      this.tail = this.head;
    }

    return dequeuedValue;
  }
}

module.exports = {
  Queue
};
