///////////////////
// STACKS & QUEUES
///////////////////


///////////////////
// STACK
///////////////////

// LIFO
// EX CALL STACK

// ARRAY IMPLEMENTATION OF STACK

// let stack = [];

// USING PUSH & POP (ADDING TO END & REMOVE FROM END)
// stack.push("A"); // ["A"]
// stack.push("B"); // ["A","B"]
// stack.push("C"); // ["A","B","C"]
//
// stack.pop(); // ["A","B"]
// stack.pop(); // ["A"]
// stack.pop(); // []

// USING UNSHIFT & SHIFT (ADDING TO BEGINNING & REMOVE FROM BEGINNING)
// THIS WILL BE SLOW AS ALL ELEMENTS WILL BE REINDEX/SHIFT
// stack.unshift("A"); // ["A"]
// stack.unshift("B"); // ["A","B"]
// stack.unshift("C"); // ["A","B","C"]
//
// stack.shift(); // ["A","B"]
// stack.shift(); // ["A"]
// stack.shift(); // []


// LINKED LIST IMPLEMENTATION OF STACK

// SINGLY LINKED LIST
// PUSH & POP WILL BE FASTER WITH UNSHIFT AND SHIFT
// IF WE USE PUSH AND POP THAT WILL BE SLOW AS WE NEED TO TRAVERSE OVER THE SINGLY LINKED LIST

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null
//     }
// }
//
// class Stack {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//
//     // THIS IS SHIFT JUST RENAME TO POP
//     pop() {
//         // REMOVE FIRST NODE AND MAKE SECOND NODE AS NEW HEAD
//         if (this.first === null) return undefined;
//         let currentHead = this.first;
//         this.first = currentHead.next;
//         this.size--;
//         if (this.size === 0) {
//             this.last = null;
//         }
//         return currentHead.val;
//     }
//
//     // THIS IS UNSHIFT JUST RENAME TO PUSH
//     push(val) {
//         // ADD NEW NODE AS HEAD
//         const newNode = new Node(val);
//         if (this.first === null) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             const currentHead = this.first
//             newNode.next = currentHead;
//             this.first = newNode;
//         }
//         this.size++;
//         return this.first.val;
//     }
// }
// let stack = new Stack();
// console.log(stack.push(1));
// console.log(stack.push(2));
//
// console.log(stack.pop());
// console.log(stack.pop());


// DOUBLE LINKED LIST
// WE CAN EITHER USE PUSH & POP OR UNSHIFT & SHIFT

// INSERT/REMOVE O(1)
// SEARCH/ACCESS O(N)

///////////////////
// QUEUE
///////////////////

// FIFO

// let queue = [];
//
// // USING PUSH & SHIFT : ADD TO END AND REMOVE FIRST
// queue.push("A"); // ["A"]
// queue.push("B"); // ["A","B"]
// queue.push("C"); // ["A","B","C"]
//
// queue.shift(); // ["B","C"]
// queue.shift(); // ["C"]
// queue.shift(); // []
//
// // USING UNSHIFT & POP: ADD TO FIRST AND REMOVE FROM LAST
// queue.unshift("A"); // ["A"]
// queue.unshift("B"); // ["B","A"]
// queue.unshift("C"); // ["C","B","A"]
//
// queue.pop(); // ["C","B"]
// queue.pop(); // ["C"]
// queue.pop(); // []


// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null
//     }
// }
//
// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//
//     push(val) {
//         // ADD NEW NODE AT END
//         let newNode = new Node(val);
//         if (this.first === null) {
//             this.first = newNode;
//             this.last = this.first;
//         } else {
//             // ADD NEW NODE TO TAIL.NEXT
//             this.last.next = newNode;
//             // MAKE NEW NODE AS LAST ELEMENT
//             this.last = newNode;
//         }
//         this.size = this.size + 1;
//         return this.last.val;
//     }
//
//     shift() {
//         // REMOVE FIRST NODE AND MAKE SECOND NODE AS NEW HEAD
//         if (this.first === null) return undefined;
//         let currentHead = this.first;
//         this.first = currentHead.next;
//         this.size--;
//         if (this.size === 0) {
//             this.last = null;
//         }
//         return currentHead.val;
//     }
//
//     unshift(val) {
//         // ADD NEW NODE AS HEAD
//         const newNode = new Node(val);
//         if (this.first === null) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             const currentHead = this.first
//             newNode.next = currentHead;
//             this.first = newNode;
//         }
//         this.size++;
//         return this.first.val;
//     }
//
//     pop() {
//         // REMOVE LAST NODE AND MAKE SECOND LAST AS NEW LAST NODE
//         // WE FIND THE TAIL-PREVIOUS AND MAKE IT AS TAIL
//         if (this.size === 0) return undefined;
//
//         let current = this.first;
//         let newTail = current;
//         // WE DON'T HAVE TAIL-PREVIOUS IN SINGLY LINKED LIST
//         // WE NEED TO TRAVERSE FROM START TO END
//         while (current.next !== null) {
//             newTail = current;
//             current = current.next;
//         }
//         this.last = newTail;
//         this.last.next = null;
//         this.size--;
//         if (this.size === 0) {
//             this.first = null;
//             this.last = null;
//         }
//         return current.val;
//     }
// }
// let queue = new Queue();
// console.log("Adding to queue")
// console.log(queue.push("A")); // A
// console.log(queue.push("B")); // A -> B
// console.log(queue.push("C")); // A -> B -> C
//
// console.log("Removing from queue")
// console.log(queue.shift()); // B -> C
// console.log(queue.shift()); // C
// console.log(queue.shift()); //
//
// // OR (USING UNSHIFT & POP: THIS WILL BE SLOW AS WE NEED TO ITERATE OVER EACH ELEMENT)
// console.log("Adding to queue")
// console.log(queue.unshift("A")); // A
// console.log(queue.unshift("B")); // B -> A
// console.log(queue.unshift("C")); // C -> B -> A
//
// console.log("Removing from queue"); // THIS WILL BE SLOW AS WE NEED TO ITERATE OVER EACH ELEMENT
// console.log(queue.pop()); // C -> B
// console.log(queue.pop()); // C
// console.log(queue.pop());//

// WE CAN CHANGE FUNCTION NAME TO ENQUEUE (PUSH) & DEQUEUE (SHIFT)

// INSERT/REMOVE O(1)
// SEARCH/ACCESS O(N)




















