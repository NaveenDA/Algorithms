import Queue from "../src/data-structure/queue";

describe("Test the functionality of Queue",()=>{

    it("should be able to enqueue an element",()=>{
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
    });

    it("should be able to dequeue an element",()=>{
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        expect(queue.size()).toBe(2);
    });

    it("should be able to peek the first element",()=>{
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.peek()).toBe(1);
    });

    it("should be able to check if the queue is empty",()=>{
        const queue = new Queue<number>();
        expect(queue.isEmpty()).toBe(true);
    });

    it("should be able to check if the queue is not empty",()=>{
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });

    it("should be able to clear the queue",()=>{
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.clear();
        expect(queue.isEmpty()).toBe(true);
    });

    it("should be able to get the size of the queue",()=>{
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.size()).toBe(3);
    });



});