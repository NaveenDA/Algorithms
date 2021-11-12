/**
 * This file is used to test the functionality of the DSA while implementing it.
 * Please do not commit the file to the repository.
 */
import PriorityQueue from "./data-structure/priority-queue";

const pq = new PriorityQueue(5);
pq.insert(2, 50);
pq.insert(3, 23);
pq.insert(4, 90);
pq.insert(5, 1);
pq.insert(57, 1);
pq.insert(1, 90);

console.log(pq.remove());

console.log("output",pq.remove());
console.log(pq.remove());
