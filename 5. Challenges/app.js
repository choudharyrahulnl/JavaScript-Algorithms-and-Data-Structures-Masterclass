/////////////////////////////////////////
// CHALLENGE 1
/////////////////////////////////////////

// EX Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
//
// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// function sameFrequency(num1,num2) {
//
//     // GET ARRAY FROM NUM1 & NUM2
//     const arr1 = Array.from(String(num1), x => Number(x));
//     const arr2 = Array.from(String(num2), x => Number(x));
//
//     // CREATE FREQUENCY COUNTER
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//
//     // LOOP OVER ARRAYS
//     for (const val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 1) + 1;
//     }
//     for (const val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 1) + 1;
//     }
//
//     // LOOP OVER frequencyCounter2
//     for (const key in frequencyCounter2) {
//         // CHECK IF KEY IS PRESENT
//         if(frequencyCounter2[key] === -1) return false;
//
//         // CHECK IF VALUE IS SAME
//         if(frequencyCounter2[key] !== frequencyCounter1[key]) return false;
//     }
//
//     return true;
//
// }
// console.log(sameFrequency(182,281)); // true
// console.log(sameFrequency(34,14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22,222)); // false


/////////////////////////////////////////
// CHALLENGE 2
/////////////////////////////////////////


// EX implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// function areThereDuplicates(...arr) {
//
//     // IF ARRAY NO ELEMENT
//     if(arr.length === 0) return false;
//     // IF ARRAY 1 ELEMENT
//     if(arr.length === 1) return false;
//
//     // USING FREQUENCY COUNTER
//     let frequencyCounter = {};
//     for (const val of arr) {
//         if (frequencyCounter[val]) {
//             return true;
//         } else {
//             frequencyCounter[val] = 1;
//         }
//     }
//     return false;
// }
// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true


// IN 1 LINE
// function areThereDuplicates2() {
//     return new Set(arguments).size !== arguments.length;
// }
// console.log(areThereDuplicates2(1, 2, 3)); // false
// console.log(areThereDuplicates2(1, 2, 2)); // true
// console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // true


/////////////////////////////////////////
// CHALLENGE 3
/////////////////////////////////////////


// EX Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals
// the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)
//
// Sample Input:
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

// function averagePair(arr,avg) {
//
//     // IF ARRAY OF LENGTH 0 THEN RETURN 0
//     if(arr.length === 0) return false;
//
//     let start = 0;
//     let end = arr.length-1;
//
//     while (start < end) {
//         let sum = arr[start]+arr[end];
//         let avgSum = avg * 2;
//
//         // if start + end sum  = average * 2 return true
//         if(sum === avgSum) return true
//
//         // start + end sum > average * 2 then end --
//         if(sum > avgSum) {
//             end--;
//         }
//         // start + end sum < average * 2 then start ++
//         else if (sum < avgSum) {
//             start++;
//         }
//     }
//
//     return false;
// }
//
// console.log(averagePair([1,2,3],2.5)); // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
// console.log(averagePair([], 4)); // false


/////////////////////////////////////////
// CHALLENGE 4
/////////////////////////////////////////

// Ex Write a function called isSubsequence which takes in two strings and checks whether the
// characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.
// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:
//
// Time Complexity - O(N + M)
// Space Complexity - O(1)

// function isSubsequence(str1, str2) {
//
//     // CHECK OF str2 LENGTH IS LESS THAN str1 RETURN false
//     if(str2.length < str1.length) return false;
//
//     const arr1 = Array.from(str1,x => x);
//     const arr2 = Array.from(str2,x => x);
//
//     let first = 0;
//     let second = 0;
//     let totalMatchCount = 0;
//
//     while (first < arr1.length && second < arr2.length) {
//         if (arr1[first] !== arr2[second]) {
//             second++;
//         } else {
//             totalMatchCount++;
//             first++;
//             second++;
//         }
//     }
//
//     if(totalMatchCount === arr1.length) return true;
//     else return false;
//
// }
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false


// RECURSIVE SOLUTION
// function isSubsequence(str1, str2) {
//     if(str1.length === 0) return true
//     if(str2.length === 0) return false
//     if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
//     return isSubsequence(str1, str2.slice(1))
// }
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false


/////////////////////////////////////////
// CHALLENGE 5
/////////////////////////////////////////

// EX Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.
//
// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array,
// but [100, 300] is not.
//
// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:
//
// Time Complexity - O(N)
// Space Complexity - O(1)

// function maxSubarraySum(arr, num) {
//
//     // IF ARRAY IS EMPTY RETURN NULL
//     if( arr.length === 0) return null;
//
//     // IF ARRAY LENGTH IS SMALLER THEN NUM RETURN NULL
//     if(arr.length < num) return null;
//
//     let maxSum = 0;
//     let tempSum = 0;
//
//     for (let i = 0; i < num; i++) {
//         maxSum +=arr[i];
//     }
//
//     tempSum = maxSum;
//
//     for (let i = num; i < arr.length; i++) {
//         tempSum = tempSum + arr[i] - arr[i-num];
//         if (maxSum < tempSum) maxSum = tempSum;
//     }
//
//     return maxSum;
// }
// console.log(maxSubarraySum([100,200,300,400], 2)); // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); // 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
// console.log(maxSubarraySum([2,3], 3)); // null

/////////////////////////////////////////
// CHALLENGE 6
/////////////////////////////////////////

// EX Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.
//
// This function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.
//
// Examples:
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
//
// Time Complexity - O(n)
// Space Complexity - O(1)

// function minSubArrayLen(nums, sum) {
//     let total = 0;
//     let start = 0;
//     let end = 0;
//     let minLen = Infinity;
//
//     while (start < nums.length) {
//         // if current window doesn't add up to the given sum then
//         // move the window to right
//         if(total < sum && end < nums.length){
//             total += nums[end];
//             end++;
//         }
//             // if current window adds up to at least the sum given then
//         // we can shrink the window
//         else if(total >= sum){
//             minLen = Math.min(minLen, end-start);
//             total -= nums[start];
//             start++;
//         }
//         // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//         else {
//             break;
//         }
//     }
//
//     return minLen === Infinity ? 0 : minLen;
// }
// console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2
// console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)); // 3



/////////////////////////////////////////
// CHALLENGE 7
/////////////////////////////////////////

// EX Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the
// length of the longest substring with all distinct characters.
//
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

// function findLongestSubstring(str) {
//     let longest = 0;
//     let seen = {};
//     let start = 0;
//
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (seen[char]) {
//             start = Math.max(start, seen[char]);
//         }
//         // index - beginning of substring + 1 (to include current in count)
//         longest = Math.max(longest, i - start + 1);
//         // store the index of the next char so as to not double count
//         seen[char] = i + 1;
//     }
//     return longest;
// }
// console.log(findLongestSubstring('')); // 0
// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
// console.log(findLongestSubstring('bbbbbb')); // 1
// console.log(findLongestSubstring('longestsubstring')); // 8
// console.log(findLongestSubstring('thisishowwedoit')); // 6