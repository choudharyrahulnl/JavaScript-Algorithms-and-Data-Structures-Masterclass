///////////////////////////////////
//  MERGE SORT
///////////////////////////////////


// 8 ITEMS IN ARRAY IT TAKES 3 STEPS
// 32 ITEMS IN ARRAY IT TAKES 5 STEPS
// THIS MEAN IT'S A O(log n)

// MERGE SORT DECOMPOSITION O(log n)
// MERGE SORT COMPARISON  O(n)
// MERGE SORT TOTAL O(n log n)

// MERGE SORT BEST O(n log n)
// MERGE SORT AVG O(n log n)
// MERGE SORT WORST O(n log n)
// QUICK SORT SPACE O(log n)

// SPLIT UNTIL WE GET 1 ELEMENT IN ARRAY
// MERGE BACK AND SORT

function merge(arr1,arr2) {

    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(merge([1,10,50],[2,14,99,100]));


function mergeSort(arr) {

    if(arr.length === 1) return arr;

    // SPLIT RECURSIVE
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);

}
console.log(mergeSort([1,30,4,21]));
console.log(mergeSort([4,2,1,3]));
console.log(mergeSort([8,1,2,3,4,5,6,7]));
console.log(mergeSort([10,9,8,7,6,5,4,3,2,1]));

// [10,24,76,73]
// mergeSort([10,24])
    // LEFT mergeSort([10])
    // RETURN [10]
    // RIGHT mergeSort([24])
    // RETURN [24]
    // MERGE LEFT & RIGHT
    // [10,24]
// LEFT [10,24] *************
// RIGHT mergeSort([76,73])
    // mergeSort([76])
    // RETURN [76]
    // mergeSort([73])
    // RETURN [73]
    // MERGE LEFT & RIGHT [76] & [73]
    // RETURN [73,76]
// RIGHT [73,76] *************
// MERGE LEFT & RIGHT  [10,24] & [73,76]
// [10,24,73,76]


