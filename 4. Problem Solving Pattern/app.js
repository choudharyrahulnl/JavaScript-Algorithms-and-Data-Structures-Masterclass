
// HOW TO IMPROVE
// DEVISE A PLAN FOR SOLVING PROBLEMS :  DONE WITH THIS
// MASTER COMMON PROBLEM-SOLVING PATTERNS


/////////////////////////////////////////
// MASTER COMMON PROBLEM-SOLVING PATTERNS
/////////////////////////////////////////

// SOME PATTERNS
// FREQUENCY COUNTER
// MULTIPLE POINTER
// SLIDING WINDOW
// DIVIDE & CONQUER
// DYNAMIC PROGRAMMING
// GREEDY ALGORITHM
// BACKTRACKING
// MANY MORE...

////////////////////
// FREQUENCY COUNTER
////////////////////

// THIS PATTERN USES OBJECTS OR SETS TO COLLECT VALUES/FREQUENCIES OF VALUES
// THIS CAN OFTEN AVOID NEED OF NESTED LOOPS OR O(n^2) OPERATIONS WITH ARRAYS AND STRINGS

// EX: WRITE A FUNCTION CALLED same() WHICH ACCEPTS 2 ARRAYS. THE FUNCTION SHOULD RETURN TRUE IF EVERY VALUE
// IN THE ARRAY HAS ITS CORRESPONDING VALUE SQUARED IN SECOND ARRAY
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false


 // TIME COMPLEXITY: O(n^2)
// function same(arr1,arr2) {
//     // IF ARRAYS OF DIFFERENT SIZES RETURN FALSE
//     if (arr1.length !== arr2.length) return false;
//
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) return false;
//         arr2.splice(correctIndex,1);
//     }
//
//     // RETURN RESULT
//     return true;
// }
// console.log(same([1,2,3], [1,2]));
// console.log(same([1,2,3], [1,4,9]));
// console.log(same([1,2,3], [4,4,9]));

// TIME COMPLEXITY: O(n)
// function same(arr1,arr2) {
//     // IF ARRAYS OF DIFFERENT SIZES RETURN FALSE
//     if (arr1.length !== arr2.length) return false;
//
//     // CREATE frequencyCounter OBJETS
//     const frequencyCounter1 = {};
//     const frequencyCounter2 = {};
//
//     // LOOP OVER BOTH ARRAY AND POPULATE OBJECT
//     for (const val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 1) + 1;
//     }
//     for (const val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 1) + 1;
//     }
//
//     // LOOP OVER frequencyCounter1 OBJECT
//     for (const key in frequencyCounter1) {
//         // IF KEY IS NOT PRESENT IN frequencyCounter2
//         if (frequencyCounter2[key ** 2] === -1) return false
//
//         // IF KEY IS PRESENT BUT VALUE IS NOT SAME
//         if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
//     }
//
//     // RETURN RESULT
//     return true;
// }
// console.log(same([1,2,3], [1,2]));
// console.log(same([1,2,3], [1,4,9]));
// console.log(same([1,2,3], [4,4,9]));
// console.log(same([1,2,3,2], [9,1,4,4]));

// EX : ANAGRAM "rat" = "car"
// function isAnagram(str1,str2) {
//
//     // CHECK LENGTH OF BOTH IF NOT MATCHED RETURN FALSE
//     if(str1.length !== str2.length) return false;
//
//     // READ STRING 1 AND PUT IT INTO OBJECT, KEY WILL BE CHAR AND VALUE WILL BE ITS OCCURANCE
//     const frequencyCounter1 = {}
//     for (const val of str1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 1) + 1;
//     }
//
//     // READ STRING 2 AND PUT IT INTO OBJECT, KEY WILL BE CHAR AND VALUE WILL BE ITS OCCURANCE
//     const frequencyCounter2 = {}
//     for (const val of str2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 1) + 1;
//     }
//
//     // LOOP OVER AND CHECK KEY AND VALUE, IF BOTH MATCH THEY ARE ANAGRAM
//     for (const key in frequencyCounter2) {
//         // IF KEY IS NOT PRESENT, RETURN FALSE
//         if(frequencyCounter2[key] === -1) return false;
//
//         // IF VALUE NOT MATCHED, RETURN FALSE
//         if(frequencyCounter2[key] !== frequencyCounter1[key]) return false;
//     }
//
//     // RETURN RESULT
//     return true;
//
// }
// console.log(isAnagram("",""));
// console.log(isAnagram("aaz","zza"));
// console.log(isAnagram("rat","car"));
// console.log(isAnagram("qwerty","qeywrt"));
// console.log(isAnagram("fried","fired"));
// console.log(isAnagram("listen","silent"));


////////////////////
// MULTIPLE POINTER
////////////////////

// CREATING POINTER/VALUE THAT CORRESPOND TO AN INDEX/POSITION AND MOVE TOWARDS
// THE BEGINNING, END OR MIDDLE BASED ON CERTAIN CONDITION
// VERY EFFICIENT FOR SOLVING PROBLEMS WITH MINIMAL SPACE COMPLEXITY

// USE IT WHEN WE NEED TO FIND THE PAIR

// EX: WRITE A FUNCTION WHICH ACCEPTS SORTED ARRAY OF INTEGER, FUNCTION SHOULD FIND
// THE FIRST PAIR WHERE SUM IS 0, RETURN AN ARRAY THAT CONTAINS BOTH VALUE THAT SUM TO 0 OR UNDEFINED
// IF PAIR DOESN'T EXIST : sumZero([-3,-2,-1,0,1,2,3])
// function sumZero(arr) {
//     let start = 0;
//     let end = arr.length-1;
//     while (start < end) {
//         let sum = arr[start] + arr[end];
//         if (sum === 0) return [arr[start],arr[end]];
//         if (sum > 0) start++;
//         else end--;
//     }
//     return undefined;
// }
// console.log(sumZero([-3,-2,-1,0,1,2,3]));
// console.log(sumZero([-2,0,1,3]));
// console.log(sumZero([1,2,3]));

// EX: WRITE A FUNCTION countUniqueValues WHICH ACCEPTS A SORTED ARRAY AND COUNTS THE UNIQUE VALUES IN THE
// ARRAY, THERE CAN BE NEGATIVE NUMBERS IN THE ARRAY
// function countUniqueValues(arr) {
//     // IF ARRAY IS EMPTY RETURN 0
//     if (arr.length === 0) return 0;
//
//     // TAKE 2 POINTER
//     let first = 0;
//     let second = 1;
//     let uniqueCount = 1;
//
//     while (second < arr.length) {
//         if (arr[first] !== arr[second]) uniqueCount++;
//         first++;
//         second++;
//     }
//     return uniqueCount;
// }
//
// console.log(countUniqueValues([1,1,1,1,1,1,2])); // 2
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
// console.log(countUniqueValues([0])); // 1
// console.log(countUniqueValues([-2,-1,-1,0,1])); // 4


// TIME COMPLEXITY O(n)
// function countUniqueValues(arr) {
//     // IF ARRAY IS EMPTY RETURN 0
//     if (arr.length === 0) return 0;
//
//     // TAKE 2 POINTER
//     let first = 0;
//     let second = 1;
//
//     // LOOP OVER ARRAY WHERE 'i' WILL BE POINT TO ALL UNIQUE
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[first] !== arr[second]) {
//             first++;
//             arr[first] = arr[second];
//             second++
//         } else {
//             second++;
//         }
//     }
//     return first;
// }
// console.log(countUniqueValues([1,1,1,1,1,1,2]));
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
// console.log(countUniqueValues([0]));
// console.log(countUniqueValues([-2,-1,-1,0,1]));



/////////////////////////
// WINDOW SLIDER PATTERN
/////////////////////////

// THIS PATTERN INVOLVES CREATING A WINDOW WHICH CAN EITHER BE AN ARRAY OR
// A NUMBER FROM ONE POSITION TO OTHER
// DEPENDING ON A CERTAIN CONDITION, WINDOW CAN EITHER BE INCREASES OR CLOSES (AND NEW WINDOW IS CREATED)
// VERY USEFUL TO KEEP TRACK OF SUBSET OF DATA IN AN ARRAY/STRING etc

// EX: WRITE A FUNCTION maxSubArraySum WHICH ACCEPTS AN ARRAY OF INTEGERS AND A NUMBER CALLED n
// THE FUNCTION SHOULD CALCULATE THE MAXIMUM SUM OF n CONSECUTIVE ELEMENTS IN THE ARRAY
// maxSumArraySum([1,2,5,2,8,1,5],2); // 10

// function maxSumArraySum(arr,num) {
//     // IF NUMS IS GREATER THEN ARRAY LENGTH RETURN NULL
//     if(num > arr.length) return null;
//
//     // CREATE MAX
//     let maxSum = 0;
//     let tempSum = 0;
//
//     // LOOP OVER THE ARRAY FOR NUM TIMES
//     // THIS WILL GIVE SUM FOR FIRST N NUMBERS
//     for (let i = 0; i < num; i++) {
//         maxSum += arr[i];
//     }
//
//     tempSum = maxSum;
//
//     // LOOP OVER THE ARRAY STARTING NUM, ADD NEXT ELEMENT & REMOVE PREVIOUS ELEMENT
//     for (let i = num; i < arr.length; i++) {
//         tempSum = tempSum + arr[i] - arr[i-num];
//         maxSum = Math.max(maxSum,tempSum);
//     }
//
//     // RETURN MAX
//     return maxSum;
// }
// console.log(maxSumArraySum([1,2,5,2,8,1,5],2)); // 10
// console.log(maxSumArraySum([1,2,5,2,8,1,5],4)); // 17
// console.log(maxSumArraySum([4,2,1,6],1)); // 6
// console.log(maxSumArraySum([4,2,1,6,2],4)); // 13
// console.log(maxSumArraySum([],4)); // null



//////////////////////
// DIVIDE AND CONQUER
/////////////////////

// THIS PATTERN INVOLVES DIVIDING A DATA SET INTO SMALLER CHUNKS &
// THEN REPEATING A PROCESS WITH A SUBSET OF DATA
// THIS PROCESS TREMENDOUSLY DECREASE TIME COMPLEXITY

// EX GIVEN A SORTED ARRAY OF INTEGERS, WRITE A FUNCTION CALLED search,THAT ACCEPTS A VALUE
// AND RETURNS THE INDEX WHERE THE VALUE IS LOCATED, IF VALUE IS NOT FOUND RETURN -1
// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

// TIME COMPLEXITY log(n)
// function search(arr,val) {
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
//
// console.log(search([1,2,3,4,5,6],4)); // 3
// console.log(search([1,2,3,4,5,6],6)); // 5
// console.log(search([1,2,3,4,5,6],11)); // -1

