//////////////////////
// TREE DATA STRUCTURE
//////////////////////

// CONSIST OF NODES IN A PARENT/CHILD RELATIONSHIP

// ROOT, CHILD, PARENT, SIBLING (Node with same parent),
// LEAF (Node with no children), EDGE (Connection between node)

// USES: HTML DOM, NETWORK ROUTING, FOLDER STRUCTURE IN COMPUTER

// BINARY TREE & BINARY SEARCH TREE

// BINARY TREE:
// EVERY PARENT NODE HAS AT MOST 2 CHILDREN

// BINARY SEARCH TREE
// EVERY PARENT NODE HAS AT MOST 2 CHILDREN
// EVERY NODE LEFT TO THE PARENT NODE IS ALWAYS LESS THAN THE PARENT
// EVERY NODE RIGHT TO THE PARENT NODE IS ALWAYS GREATER THAN THE PARENT

// Insertion O(log n)
// Searching O(log n)

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {

        if(this.root === null) return false;

        let current = this.root;
        let found = false;

        while (current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        if(!found) return undefined;
        return current;
    }
}

//      10
//   5      13
// 2   7  11  16
let bst = new BinarySearchTree(10);
console.log(bst.insert(5));
console.log(bst.insert(13));
console.log(bst.insert(2));
console.log(bst.insert(7));
console.log(bst.insert(11));
console.log(bst.insert(16));

console.log(bst.find(2));
console.log(bst.find(21));