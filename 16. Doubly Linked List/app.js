/////////////////////////////////////////
// DATA STRUCTURE: DOUBLY LINKED LIST
/////////////////////////////////////////

// TAKES MORE MEMORY THAN SINGLY LINKED LIST

////////////////////////////
//   BIG O
////////////////////////////

// Insertion O(1) & Removal O(1) OR O(N)
// Search O(N) & Access O(N)
// NOTE: Search is O(N/2) but that is still )(N)

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
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        // ADD TO BEGINNING
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        // THIS SOLUTION IS FOR SINGLY LINKED LIST
        if (index < 0 || index >= this.length) return null;

        // FOR DOUBLY LINKED LIST WE CAN START FROM EITHER START OR END
        // WE CAN CHECK THE INDEX IS CLOSER TO START OR END
        // THAN START FROM THERE


        let counter;
        let current;
        // WORKING FROM START
        if(index <=  this.length/2) {
            counter = 0;
            current = this.head;
            while (counter != index) {
                current = current.next;
                counter++;
            }
        }
        // WORKING FROM END
        else {
            counter = this.length - 1;
            current = this.tail;
            while (counter != index) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }

    set(index,val) {
        // UPDATE VAL FOR A NODE
        let node = this.get(index);
        if (node !== null) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index,val) {
        // INSERT AT INDEX WITH NEW NODE WITH GIVEN VAL

        // IF INDEX < 0 OR INDEX > LENGTH RETURN FALSE
        if (index < 0 || index > this.length) return false;

        // IF INDEX IS SAME AS LENGTH PUSH NEW NODE AT END
        else if (index === this.length) {
            this.push(val);
        }

        // IF INDEX IS 0 THEN UNSHIFT NEW NODE
        else if (index === 0) {
            this.unshift(val);
        }

        else {
            let newNode = new Node(val);
            let beforeNode = this.get(index - 1);
            let afterNode = beforeNode.next;
            if (beforeNode !== null) {
                // BEFORE NODE, AFTER NODE, NEW NODE

                // BEFORE NODE -> NEXT -> NEW NODE
                beforeNode.next = newNode;
                newNode.prev = beforeNode;

                // AFTER NODE -> PREVIOUS -> NEW NODE
                newNode.next = afterNode;
                afterNode.prev = newNode;
            }
            this.length++;
        }
        return true;
    }

    remove(index) {
        // REMOVE NODE FROM GIVEN INDEX

        // IF INDEX < 0 OR INDEX > LENGTH RETURN FALSE
        if (index < 0 || index > this.length) return undefined;

        // IF INDEX IS SAME AS LENGTH PUSH NEW NODE AT END
        else if (index === this.length - 1) {
            this.pop();
        }

        // IF INDEX IS 0 THEN UNSHIFT NEW NODE
        else if (index === 0) {
            this.shift();
        }

        else {
            let removedNode = this.get(index);
            let beforeNode = this.get(index - 1);
            let afterNode = beforeNode.next.next;
            if (beforeNode !== null) {
                // BEFORE AND AFTER NODE
                beforeNode.next = afterNode;
                afterNode.prev = beforeNode;

                removedNode.next = null;
                removedNode.prev = null;
            }
            this.length--;
        }
        return true;
    }

    reverseUsingRecursion() {
        let head = this.head;
        if (head === null || head.next === null) return head;

        let reversedListHead = this.reverseUsingRecursion(head.next);
        head.next.next = head;
        head.next = null;
        return reversedListHead;
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

// console.log('##### SHIFT ####');
// console.log(doublyLL.shift());
// console.log(doublyLL.unshift());

// console.log(doublyLL.get(0));
// console.log(doublyLL.get(3));
//
// console.log(doublyLL.remove(2));
// console.log(doublyLL);

console.log(doublyLL.reverseUsingRecursion(doublyLL.head));
