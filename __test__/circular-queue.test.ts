import CircularQueue from "../src/data-structure/circular-queue";

describe("Test the functionality of Circular Queue", () => {
  // able to enqueue and dequeue
  it("should be able to enqueue and dequeue", () => {
    const queue = new CircularQueue<number>(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  // Test the peek method
  it("should be able to peek", () => {
    const queue = new CircularQueue<number>(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  // Test the isEmpty method
  it("should be able to check if queue is empty", () => {
    const queue = new CircularQueue<number>(3);
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  // Test the isFull method
  it("should be able to check if queue is full", () => {
    const queue = new CircularQueue<number>(3);
    expect(queue.isFull()).toBe(false);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.isFull()).toBe(true);
  });

  // throws Queue is full
  it("should throw error when queue is full", () => {
    const queue = new CircularQueue<number>(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(() => {
      queue.enqueue(4);
    }).toThrowError("Queue is full");
  });

  // throws Queue is empty
  it("should throw error when queue is empty", () => {
    const queue = new CircularQueue<number>(3);
    expect(() => {
      queue.dequeue();
    }).toThrowError("Queue is empty");
  });

  // throws size is less than 1
  it("should throw error when size is less than 1", () => {
    expect(() => {
      new CircularQueue<number>(0);
    }).toThrowError("Size must be greater than 0");
  });

  // do enqueue and dequeue in the same time
  it("should be able to enqueue and dequeue in the same time", () => {
    const queue = new CircularQueue<number>(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(4);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
  });

  // check the empty queue after enqueue and dequeue
  it("should be able to check the empty queue after enqueue and dequeue", () => {
    const queue = new CircularQueue<number>(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  // check the full queue after enqueue and dequeue
  it("should be able to check the full queue after enqueue and dequeue", () => {
    const queue = new CircularQueue<number>(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isFull()).toBe(false);
  });

});
