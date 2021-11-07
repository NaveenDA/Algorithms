/**
 * Stack is a linear data structure which follows LIFO (Last In First Out)
 */

class Stack {
  private arr: any[] = [];
  private top: number = -1;
  private capacity: number = 0;

  /**
   * Create a linear stack with given capacity
   * @param capacity Capacity of the Stack
   */
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  /**
   * Push an element to the top of the stack
   * @param element Element to be pushed
   */
  public push(item: any) {
    if (this.isFull()) {
      throw new Error("Stack is full");
    }
    this.arr[++this.top] = item;
  }

  /**
   * Pop an element from the top of the stack
   * @returns {any} Element popped from the stack
   */
  public pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.arr[this.top--];
  }
  /**
   * Peek the top element of the stack
   * @returns {any} Top element of the stack
   */
  public peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.arr[this.top];
  }

  /**
   * To check the stack is empty or not
   * @returns {boolean} true if stack is full
   */
  public isFull() {
    return this.top == this.capacity - 1;
  }

  /**
   * Check the stack is empty or not
   * @returns {boolean} true if stack is empty
   */
  public isEmpty() {
    return this.top == -1;
  }
}


export default Stack;