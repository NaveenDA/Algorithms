/**
 * Circular Queue is a linear data structure which can be implemented using an array.
 * The array is used to store the elements of the queue.
 * The index of the front element is kept at the front of the array and the index of the rear element is kept at the end of the array.
 * The rear element is always at the index of the length of the array minus one.
 * The array is extended when the rear element is at the end of the array and the front element is at the beginning of the array.
 * The array is shrunk when the rear element is at the beginning of the array and the front element is at the end of the array.
 */
class CircularQueue<T>{

    private front = -1;
    private rear = -1;
    private queue:T[]=[];
    private size;


    /**
     * Create the Circular Queue
     * @constructor
     * @param size - size of the queue
     * @throws Error if size is less than 1
     */
    constructor(size:number){
        if(size < 1){
            throw new Error("Size must be greater than 0");
        }
        this.size = size;
        this.front =0;
        this.rear = -1;
        this.queue = new Array<T>(size);
    }

    /**
     * Add an item to the queue
     * @param item - item to be added
     * @returns true if item is added successfully
     * @throws Error if queue is full
     */
    public enqueue(item:T):boolean{
        if(this.isFull()){
            throw new Error("Queue is full");
        }
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = item;
        return true;
    }

    /**
     * Remove an item from the queue
     * @returns item removed from the queue
     * @throws Error if queue is empty
     */
    public dequeue():T{
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }

        const item = this.queue[this.front];
        if (this.front === this.rear){

            this.front = 0, this.rear = -1
        }
        else{
            this.front = (this.front + 1) % this.size

        } 
        return item;
    }

    /**
     * Peek at the front item in the queue
     * @returns front item
     * @throws Error if queue is empty
     */
    public peek():T{
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.queue[this.front];
    }
    
    /**
     * Check if the queue is full
     * @returns true if queue is full
     * @throws Error if queue is full
     */
    public isFull():boolean{
        return (!this.isEmpty() && ((this.rear + 1) % this.size === this.front));
    }

    /**
     * Check if the queue is empty
     * @returns true if queue is empty
     */
    public isEmpty():boolean{
        return (this.rear === -1);
    }


}

export default CircularQueue;