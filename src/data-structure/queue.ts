/**
 * Queue is a data structure that follows First In First Out (FIFO) principle.
 */

class Queue<T> {
  private data: T[] = [];

  /**
   * Add an item to the end of the queue.
   * @param item The item to add to the queue.
   */
  public enqueue(item: T): void {
    this.data.push(item);
  }

  /**
   * Remove the item at the front of the queue.
   * @returns The item at the front of the queue.
   */
  public dequeue(): T | undefined {
    return this.data.shift();
  }

  /**
   * Get the item at the front of the queue.
   * @returns The item at the front of the queue.
   */
  public peek(): T | undefined {
    return this.data[0];
  }

  /**
   * Get the number of items in the queue.
   * @returns The number of items in the queue.
   */
  public size(): number {
    return this.data.length;
  }
  /**
   * Check if the queue is empty.
   * @returns True if the queue is empty, false otherwise.
   */
  public isEmpty(): boolean {
    return this.data.length === 0;
  }
  
  /**
   * Clear the queue.
   * @returns The queue.
   */
    public clear(): void {
        this.data = [];
    }
}


export default Queue;