///////////////////////////////////
//  BUBBLE, SELECTION & INSERT SORT
///////////////////////////////////

// THESE ARE RARELY USED
// EASY TO IMPLEMENT AND HELP TO UNDERSTAND HOW SORTING WORKS


// SELECTION SORT: SIMILAR TO BUBBLE SORT BUT INSTEAD OF FIRST PLACING THE LARGEST AT END
// IT PLACES THE SMALLEST VALUES 1 AT A TIME IN BEGINNING

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([1,30,4,21]));
console.log(selectionSort([4,2,1,3]));
console.log(selectionSort([8,1,2,3,4,5,6,7]));

// SELECTION SORT AVG O(n^2)
