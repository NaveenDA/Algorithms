import PriorityQueue from "../src/data-structure/priority-queue";

// test all the methods of PriorityQueue
describe("PriorityQueue", () => {

    // test the constructor
    test("constructor", () => {
        const pq = new PriorityQueue(5);
        pq.insert(1, 1);
        pq.insert(2, 2);
        pq.insert(3, 3);
        pq.insert(4, 4);
        pq.insert(5, 5);
        expect(pq.peek()).toBe(5);
    });

    // test the insert method
    test("insert", () => {
        const pq = new PriorityQueue(5);
        pq.insert(1, 1);
        pq.insert(2, 2);
        pq.insert(3, 3);
        pq.insert(4, 4);
        pq.insert(5, 5);
        expect(pq.peek()).toBe(5);
    });

    // test the remove method
    test("remove", () => {
        const pq = new PriorityQueue(5);
        pq.insert(1, 1);
        pq.insert(2, 2);
        pq.insert(3, 3);
        pq.insert(4, 4);
        pq.insert(5, 5);
        expect(pq.remove()).toBe(5);
        expect(pq.remove()).toBe(4);
        expect(pq.remove()).toBe(3);
        expect(pq.remove()).toBe(2);
        expect(pq.remove()).toBe(1);
    });

    // test the peek method
    test("peek", () => {
        const pq = new PriorityQueue(5);
        pq.insert(1, 1);
        pq.insert(2, 2);
        pq.insert(3, 3);
        pq.insert(4, 4);
        pq.insert(5, 5);
        expect(pq.peek()).toBe(5);
    });

    // test the isEmpty method
    test("isEmpty", () => {
        const pq = new PriorityQueue(5);
        expect(pq.isEmpty()).toBe(true);
        pq.insert(1, 1);
        expect(pq.isEmpty()).toBe(false);
    });

    // test the isFull method
    test("isFull", () => {
        const pq = new PriorityQueue(5);
        expect(pq.isFull()).toBe(false);
        pq.insert(1, 1);
        pq.insert(2, 2);
        pq.insert(3, 3);
        pq.insert(4, 4);
        pq.insert(5, 5);
        expect(pq.isFull()).toBe(true);
    });

    // test "isFull" while adding an element
    test("isFull while adding an element", () => {
        const pq = new PriorityQueue(5);
        pq.insert(1, 1);
        pq.insert(2, 2);
        pq.insert(3, 3);
        pq.insert(4, 4);
        pq.insert(5, 5);
        expect(() => { pq.insert(6, 5) }).toThrow("Queue is full");
    });

    // test "isEmpty" while removing an element
    test("isEmpty while removing an element", () => {
        const pq = new PriorityQueue(5);
        pq.insert(1, 1);
        pq.insert(2, 2);
        pq.insert(3, 3);
        pq.insert(4, 4);
        pq.insert(5, 5);
        pq.remove();
        pq.remove();
        pq.remove();
        pq.remove();
        pq.remove();
        expect(pq.isEmpty()).toBe(true);
        expect(() => { pq.remove() }).toThrow("Queue is empty");
    });

    // test "peek" while removing an element
    test("peek while removing an element", () => {
        const pq = new PriorityQueue(5);
        pq.insert(1, 1);
        pq.insert(2, 2);
        pq.insert(3, 3);
        pq.insert(4, 4);
        pq.insert(5, 5);
        pq.remove();
        pq.remove();
        pq.remove();
        pq.remove();
        pq.remove();
        expect(() => { pq.peek() }).toThrow("Queue is empty");
        expect(() => { pq.remove() }).toThrow("Queue is empty");
    });

    // un order queue
    test("un order queue", () => {
        const pq = new PriorityQueue(5);
        pq.insert(1, 90);
        pq.insert(2, 67);
        pq.insert(3, 54);
        pq.insert(4, 39);
        pq.insert(5, 20);
        expect(pq.remove()).toBe(1);
        expect(pq.remove()).toBe(2);
        expect(pq.remove()).toBe(3);
        expect(pq.remove()).toBe(4);
        expect(pq.remove()).toBe(5);
    });

    // remove and then add
    test("remove and then add", () => {
        const pq = new PriorityQueue(5);
        pq.insert(1, 90);
        pq.insert(2, 67);
        pq.insert(3, 54);
        pq.insert(4, 39);
        pq.insert(5, 20);
        pq.remove();
        pq.remove();
        pq.remove();
        pq.remove();
        pq.remove();
        pq.insert(1, 90);
        pq.insert(2, 67);
        pq.insert(3, 54);
        pq.insert(4, 39);
        pq.insert(5, 20);
        expect(pq.remove()).toBe(1);
        expect(pq.remove()).toBe(2);
        expect(pq.remove()).toBe(3);
        expect(pq.remove()).toBe(4);
        expect(pq.remove()).toBe(5);
    });


});
