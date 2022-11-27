/////////////////////////////////////////
// DATA STRUCTURE: SINGLY LINKED LIST
/////////////////////////////////////////

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(props) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // ADD NEW NODE AT END
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // ADD NEW NODE TO TAIL.NEXT
            this.tail.next = newNode;
            // MAKE NEW NODE AS LAST ELEMENT
            this.tail = newNode;
        }
        this.length = this.length + 1;
    }

    pop() {
        // REMOVE LAST NODE AND MAKE SECOND LAST AS NEW LAST NODE
        // WE FIND THE TAIL-PREVIOUS AND MAKE IT AS TAIL
        if (this.length === 0) return undefined;

        let current = this.head;
        let newTail = current;
        // WE DON'T HAVE TAIL-PREVIOUS IN SINGLY LINKED LIST
        // WE NEED TO TRAVERSE FROM START TO END
        while (current.next !== null) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        // REMOVE FIRST NODE AND MAKE SECOND NODE AS NEW HEAD
        if (this.head === null) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        // ADD NEW NODE AS HEAD
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentHead = this.head
            newNode.next = currentHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        // RETURN NODE AT GIVEN INDEX
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter != index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        // UPDATE VAL FOR A NODE
        let node = this.get(index);
        if (node !== null) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
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
        } else {
            let newNode = new Node(val);
            let oldNode = this.get(index - 1);
            if (oldNode !== null) {
                newNode.next = oldNode.next;
                oldNode.next = newNode;
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
        } else {
            let oldNode = this.get(index - 1);
            if (oldNode !== null) {
                let temp = oldNode.next.next;
                oldNode.next = temp;
            }
            this.length--;
        }
        return true;
    }

    reverse() {
        // https://www.youtube.com/watch?v=O0By4Zq0OFc
        // INTERVIEW QUESTION
        // HEAD       NODE      NODE     TAIL
        // 13    ->   27   ->   32   ->  71

        // REVERSE WILL BE
        // HEAD       NODE      NODE     TAIL
        // 71    ->   32   ->   27   ->  13

        let next = null;
        let prev = null;
        let current = this.head;

        // SWAP HEAD AND TAIL
        this.head = this.tail;
        this.tail = current;

        // LOOP OVER LINKED LIST
        for (let i = 0; i < this.length; i++) {
            // SAVE NEXT VALUE
            next = current.next;

            // WE NEED TO REVERSE
            // current: 13    ->   27   ->   32   ->  71
            // after below assignment (current.next = prev)
            // current: 13    ->   null
            current.next = prev;

            // UPDATE PREV AND CURRENT
            prev = current;
            current = next;
        }

        // USING WHILE LOOP
        // let prev = null;
        // let next = null;
        // let current = this.head;
        // while (current != null) {
        //
        //     // SAVE NEXT VALUE
        //     next = current.next;
        //
        //     // WE NEED TO REVERSE
        //     // current: 13    ->   27   ->   32   ->  71
        //     // after below assignment (current.next = prev)
        //     // current: 13    ->   null
        //     current.next = prev;
        //
        //     // UPDATE PREV AND CURRENT
        //     prev = current;
        //     current = next;
        // }
        //
        // return prev;

    }

    // USING RECURSION
    reverseUsingRecursion(head) {
        if (head === null || head.next === null) return head;

        let reversedListHead = this.reverseUsingRecursion(head.next);
        head.next.next = head;
        head.next = null;
        return reversedListHead;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next
        }
        console.log(arr);
    }

}

// const firstVal = new SinglyLinkedList();

// PUSH & POP
// firstVal.push("How");
// firstVal.push("are");
// firstVal.push("you");
// firstVal.push("doing");
// console.log(firstVal);
// console.log(firstVal.pop()); // doing
// console.log(firstVal);
// console.log(firstVal.pop()); // you
// console.log(firstVal);
// console.log(firstVal.pop()); // are
// console.log(firstVal);
// console.log(firstVal.pop()); // how
// console.log(firstVal);
// console.log(firstVal.pop()); // undefined
// console.log(firstVal);

// SHIFT & UNSHIFT
// firstVal.push("How");
// firstVal.push("are");
// firstVal.push("you");
// console.log(firstVal);
// firstVal.shift();
// console.log(firstVal);
// firstVal.unshift("There");
// console.log(firstVal);

// GET & SET
// firstVal.push("How");
// firstVal.push("are");
// firstVal.push("you");
// console.log(firstVal.get(0));
// console.log(firstVal.get(1));
// console.log(firstVal.get(2));
// console.log(firstVal.set(0,'There'));
// console.log(firstVal);

// INSERT & DELETE
// firstVal.push("How");
// firstVal.push("are");
// firstVal.push("you");
// console.log(firstVal);

// INSERT
// console.log(firstVal.insert(0, 'Hey, '));
// console.log(firstVal.insert(1, 'Rahul '));
// console.log(firstVal);
// console.log(firstVal.get(0));
// console.log(firstVal.get(1));
// console.log(firstVal.get(2));
// console.log(firstVal.get(3));
// console.log(firstVal.get(4));

// DELETE
// console.log(firstVal.remove(2));
// console.log(firstVal);
// console.log(firstVal.remove(1));
// console.log(firstVal);


// REVERSE
// firstVal.push("How");
// firstVal.push("are");
// firstVal.push("you");
// console.log(firstVal.print());
// console.log(firstVal.reverse());
// console.log(firstVal.print());
// console.log(firstVal.reverseUsingRecursion(firstVal.head));


////////////////////////////
//   BIG O
////////////////////////////

// Insertion O(1) & Removal O(1) OR O(N)
// Search O(N) & Access O(N)


