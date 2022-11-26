///////////////////////////////////
//  BUBBLE, SELECTION & INSERT SORT
///////////////////////////////////

// THESE ARE RARELY USED
// EASY TO IMPLEMENT AND HELP TO UNDERSTAND HOW SORTING WORKS

// BUILT IN JAVASCRIPT SORT Arrays.sort()
// THE DEFAULT SORT ORDER IS ACCORDING TO STRING UNICODE CODE
// ["B","A","C"].sort() -> ["A","B","C"]
// [1,30,4,21].sort() -> [1,21,30,4]
// SORT TAKE COMPARATOR FUNCTION:
// function compare(a,b) {
//  return a - b;
// }
// [1,30,4,21].sort(compare) -> [1,4,21,30]

function bubbleSort(arr) {
    // [1,30,4,21]

    // LOOP WILL GO ARRAY LENGTH TIMES
    for (let i = 0; i < arr.length; i++) {
        // THIS LOOP WILL MOVE LARGEST TO THE END
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function bubbleSortOptimized(arr) {
    // [1,30,4,21]

    // LOOP WILL GO ARRAY LENGTH TIMES
    for (let i = arr.length; i > 0; i--) {
        // THIS LOOP WILL MOVE LARGEST TO THE END
        for (let j = 0; j < i-1; j++) {
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function bubbleSortNearlySortedOptimized(arr) {
    let noSwaps;
    // LOOP WILL GO ARRAY LENGTH TIMES
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        // THIS LOOP WILL MOVE LARGEST TO THE END
        for (let j = 0; j < i-1; j++) {
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break
    }
    return arr;
}
console.log(bubbleSort([1,30,4,21]));
console.log(bubbleSort([4,2,1,3]));
console.log(bubbleSort([8,1,2,3,4,5,6,7]));

// BUBBLE SORT AVG O(n^2)
// BUBBLE SORT LINEAR SORTED O(n)