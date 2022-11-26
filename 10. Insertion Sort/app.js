///////////////////////////////////
//  BUBBLE, SELECTION & INSERT SORT
///////////////////////////////////

// THESE ARE RARELY USED
// EASY TO IMPLEMENT AND HELP TO UNDERSTAND HOW SORTING WORKS


// INSERTION SORT: BUILDS UP THE SORT BY GRADUALLY CREATING A LARGER LEFT HALF WHICH IS ALWAYS SORTED

function insertionSort(arr) {

    let i, key, j;
    let n = arr.length;
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    return arr;
}
console.log(insertionSort([1,30,4,21]));
console.log(insertionSort([4,2,1,3]));
console.log(insertionSort([8,1,2,3,4,5,6,7]));

// INSERTION SORT AVG O(n^2)
// INSERTION SORT BEST O(n)
