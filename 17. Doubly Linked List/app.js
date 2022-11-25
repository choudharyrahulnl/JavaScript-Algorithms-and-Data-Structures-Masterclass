/////////////////////////////////////////
// DATA STRUCTURE: DOUBLY LINKED LIST
/////////////////////////////////////////

// TAKES MORE MEMORY THAN SINGLY LINKED LIST

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.head === null) return undefined;

        let poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        // REMOVE FROM BEGINNING
        if(this.length === 0) return undefined;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const oldHead = this.head;
            this.head = oldHead.next;

            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return this;
    }

    unshift() {
        // REMOVE FROM END
        if(this.length === 0) return undefined;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const oldTail = this.tail;
            this.tail = oldTail.prev;
            this.tail.next = null;

            oldTail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return this;
    }


}
let doublyLL = new DoublyLinkedList();
console.log(doublyLL);

console.log('##### PUSH ####');
console.log(doublyLL.push(1));
console.log(doublyLL.push(2));
console.log(doublyLL.push(3));
console.log(doublyLL.push(4));

// console.log('##### POP ####');
// console.log(doublyLL.pop());
// console.log(doublyLL);

console.log('##### SHIFT ####');
console.log(doublyLL.shift());
console.log(doublyLL.unshift());
