///////////////////
// SEARCHING
///////////////////


/////////////////////
// LINEAR SEARCH O(n)
////////////////////

// SEARCH 1 BY 1 EACH ELEMENT IF FOUND RETURN TRUE/INDEX, IF NOT FOUND RETURN FALSE/-1
// JAVASCRIPT HAS SEARCH
// indexOf, includes, find, findIndex
// ALL THESE ARE USING LINER SEARCH

// function linearSearch(arr,val) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === val) return i;
//     }
//     return -1;
// }
//
// console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5

// BEST CASE O(1)
// WORST CASE O(n)
// AVG CASE O(n)


/////////////////////
// BINARY SEARCH O(n)
////////////////////

// MUCH FASTER
// IT ONLY WORKS ON SORTED ARRAY
// DIVIDE AND CONQUER


// function binarySearch(arr,val) {
//
//     // IF ARRAY OF LENGTH 0 RETURN -1
//     if(arr.length === 0) return -1;
//
//     // IF ARRAY OF LENGTH 1
//     if((arr.length === 1) && arr[0] === val) return 0;
//
//     // DIVIDE & CONQUER
//     let min = 0;
//     let max = arr.length-1;
//
//     while (min <= max) {
//         let middle = Math.floor((min+max)/2);
//
//         if(arr[middle] < val) {
//             min = middle + 1;
//         } else if (arr[middle] > val) {
//             max = middle - 1;
//         } else {
//             return middle;
//         }
//     }
//
//     // RETURN
//     return -1;
// }
// console.log(binarySearch([10, 15, 20, 25, 30], 15)); // 1

// IF WE HAVE ARRAY OF SIZE 16 WE FIND IT IN 4 STEPS - 2 POWER 4 = 16
// IF WE HAVE ARRAY OF SIZE 32 WE FIND IT IN 5 STEPS - 2 POWER 5 = 32

// BEST CASE O(1)
// WORST CASE O(log n)
// AVG CASE O(log n)


// SEARCH IN STRING
// SEARCH A CHAR IS EASY WE CAN JUST ITERATE OVER EACH CHAR AND MATCH

// SEARCH A SUBSTRING IN A GIVEN STRING
// GIVEN STRING "wowomgqweomg" SUBSTRING "omg"

function findSubString(str, subStr) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < subStr.length; j++) {
            if (subStr[j] !== str[j+i]) break;
            if (j === subStr.length - 1) counter++;
        }
    }
    return counter > 0 ? true : false;
}

console.log(findSubString("wowomgqweomg", "omg"));