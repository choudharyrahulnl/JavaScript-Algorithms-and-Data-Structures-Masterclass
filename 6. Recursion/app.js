/////////////////////////////////////////
// RECURSION
/////////////////////////////////////////

// STACK IS A DATA STRUCTURE, ANYTIME A FUNCTION IS INVOKED IT IS PUSHED ON THE TOP OF THE CALL STACK
// WHEN IT SEES RETURN OR WHEN FUNCTION ENDS IT WILL BE REMOVE FROM STACK
// RECURSIVE FUNCTIONS KEEP PUSHING ON STACK
// WE CAN DO ALL RECURSION USING ITERATIVE LOOP AS WELL

// BASE CASE IS THE CONDITION WHERE RECURSION STOPS
// EACH TIME WE GIVE DIFFERENT DATA TO RECURSION FUNCTION

// EX COUNT DOWN
// countDown(5) // 5 4 3 2 1
// function countDown(num) {
//     // BASE CASE
//     if (num <= 0 ) {
//         console.log("All Done");
//         // RETURN
//         return;
//     }
//
//     console.log(num);
//
//     // CHANGE INPUT
//     num--;
//
//     // CALL SAME FUNCTION AGAIN
//     countDown(num);
// }
//
// countDown(3);



// EX SUM RANGE
// function sumRange(num) {
//     if (num === 1) return 1;
//     return num + sumRange(num-1);
// }
// // FULL CALL STACK
// // return 4 + sumRange(3)
// //                return 3 + sumRange(2)
// //                             return 2 + sumRange(1)
// //                                            return 1
// //                             return 2 + 1
// //                return 3 + 3
// // return 4 + 6
// // 10
// console.log(sumRange(4)); // 10



// EX FACTORIAL !5 = 5*4*3*2*1
// function factorial(num) {
//     if(num === 0) return 1;
//     return num * factorial(num-1);
// }
// // return 5 * factorial(4)
// //              return 4 * factorial(3)
// //                              return 3 * factorial(2)
// //                                              return 2 * factorial(1)
// //                                                               return 1 * factorial(0)
// //                                                                               return 1
// //                                                               return 1 * 1
// //                                              return 2 * 1
// //                              return 3 * 2
// //              return 4 * 6
// // return 5 * 24
// // 120
// console.log(factorial(5)); // 120

// NOTE: CHECK YOU BASE CASE AND RETURN TYPE THESE 2 CAN CAUSE ISSUE WHILE CALLING RECURSIVE FUNCTION



/////////////////////////////////////////
// HELPER METHOD RECURSION PATTERN
/////////////////////////////////////////

// EX collectOddValues
// function collectOddValues(nums) {
//
//     // CREATE A ARRAY WHICH WILL STORE THE RESULT
//     const result = [];
//
//     // CREATE RECURSIVE FUNCTION
//     function helper(helperInput) {
//         // BASE CASE
//         if(helperInput.length === 0) return;
//
//         // CHECK FOR ODD AND ADD TO THE RESULT
//         if(helperInput[0] % 2 !== 0) {
//             result.push(helperInput[0]);
//         }
//         // CALL RECURSIVE FUNCTION
//         helper(helperInput.slice(1));
//     }
//
//     // CALL FUNCTION
//     helper(nums);
//
//     // RETURN RESULT
//     return result;
// }
// // collectOddValues([1,2,3,4,5])
// // result = []
// // helper([1,2,3,4,5])
// //         result = [1] & helper([2,3,4,5])
// //                              result = [1] & helper([3,4,5])
// //                                                  result = [1,3] & helper([4,5])
// //                                                                      result = [1,3] & helper([5,])
// //                                                                                          result = [1,3,5] & helper([])
// //                                                                                                                return;
// //                                                                                          return
// //                                                                      return
// //                              return
// // return result = [1,,3,5]
// console.log(collectOddValues([1,2,3,4,5])); // [1,3,5]


// SAME WITH PURE RECURSIVE FUNCTION
// function collectOddValues(nums) {
//     let result = [];
//
//     if (nums.length === 0) {
//         return result;
//     }
//
//     if (nums[0] % 2 !== 0) {
//         result.push(nums[0]);
//     }
//
//     result = result.concat(collectOddValues(nums.slice(1)));
//
//     return result;
// }
// // collectOddValues([1,2,3,4,5])
// //      [1].concat(collectOddValues([2,3,4,5]));
// //                      [].concat(collectOddValues([3,4,5]));
// //                                     [3].concat(collectOddValues([4,5]));
// //                                                      [].concat(collectOddValues([5]));
// //                                                                      [5].concat(collectOddValues([]));
// //                                                                                      [0].concat([]]);
// //                                                                      [5].concat([]);
// //                                                      [].concat([5]);
// //                                     [3].concat([5]);
// //                      [].concat([3,5]);
// //      [1].concat([3,5]);
// //      return [1,3,5]
// console.log(collectOddValues([1,2,3,4,5])); // [1,3,5]



// PURE RECURSIVE TIPS
// FOR ARRAYS USE SLICE, SPREAD, CONTACT FOR MAKING COPY
// FOR STRINGS USE SLICE, SUBSTR, SUBSTRING FOR MAKING COPY
// FOR OBJECTS USE OBJECT.ASSIGN, SPREAD FOR MAKING COPY


/////////////////////////////////////////
// CHALLENGE 1
/////////////////////////////////////////

// EX Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// function power(base, exponent) {
//     // 2,2 -> 2 * 2
//     // 2,3 -> 2 * 2 * 2
//     // 2,4 -> 2 * 2 * 2 * 2
//
//     // BASE CASE WHEN EXPONENT BECOME 1
//     if(exponent === 0) return 1;
//
//     // CALL RECURSIVE FUNCTION
//     return base * powerRecursive(base,exponent-1);
// }
// powerRecursive(2,4)
//      2 * powerRecursive(2,3)
//                  2 * powerRecursive(2,2)
//                              2 * powerRecursive(2,1)
//                                          2 * powerRecursive(2,0)
//                                                  1
//                                          2 * 1
//                              2 * 2
//                  2 * 4
//      2 * 8
// console.log(power(2,4)); // 16
// console.log(power(2,10)); // 16
// console.log(power(2,12)); // 16

/////////////////////////////////////////
// CHALLENGE 2
/////////////////////////////////////////

// EX Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; e.g.,
// factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

// function factorial(num) {
//     // BASE CASE
//     if(num === 0) return 1;
//     // CALL RECURSIVE
//     return num * factorial(num-1);
// }
//
// console.log(factorial(5)); // 120


/////////////////////////////////////////
// CHALLENGE 3
/////////////////////////////////////////

// EX Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// function productOfArray(arr) {
//     // [1,2,3] => 1 * 2 * 3
//     // [1,2,3,4] => 1 * 2 * 3 * 4
//
//     if(arr.length === 0) return 1;
//
//     return arr[0] * productOfArray(arr.slice(1));
// }
// // productOfArray([1,2,3,4])
// //  1 * productOfArray([2,3,4])
// //              2 * productOfArray([3,4])
// //                          3 * productOfArray([4])
// //                                          4 * productOfArray([])
// //                                          4 * 1
// //                          3 * 4
// //              2 * 12
// //  1 * 24
// // return 24
// console.log(productOfArray([1,2,3,4])); // 24
// console.log(productOfArray([1,2,3,4,5])); // 24 * 5 = 120


/////////////////////////////////////////
// CHALLENGE 4
/////////////////////////////////////////

// EX Write a function called recursiveRange which accepts a number and adds up all the numbers from 0
// to the number passed to the function

// function recursiveRange(num) {
//     if(num === 0 ) return 0;
//     return num + recursiveRange(num-1);
// }
// console.log(recursiveRange(0)); // 0
// console.log(recursiveRange(1)); // 1
// console.log(recursiveRange(2)); // 3
// console.log(recursiveRange(3)); // 6
// console.log(recursiveRange(4)); // 10


/////////////////////////////////////////
// CHALLENGE 5
/////////////////////////////////////////

// EX Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// function fib(num) {
//     // fib(1) => 1
//     // fib(2) => 1, 1
//     // fib(3) => 1, 1, 2
//     // fib(4) => 1, 1, 2 , 3
//     // fib(5) => 1, 1, 2 , 3, 5
//     // fib(6) => 1, 1, 2 , 3, 8
//     if(num === 1 || num === 2) return 1;
//     return fib(num-2) + fib(num-1);
// }
// // fib(4)
// //  fib(2)  +  fib(3)
// //  1       +  fib(1) + fib(2)
// //  1       +  1      + 1
// // 3
// console.log(fib(4)); //3
// console.log(fib(5)); //5
// console.log(fib(6)); //8


/////////////////////////////////////////
// CHALLENGE 6
/////////////////////////////////////////

// EX Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// function reverse(str) {
//     let reverseStr = [];
//     if(str.length === 0) return reverseStr;
//     reverseStr.push(str[0]);
//     reverseStr = reverse(str.substring(1)).concat(reverseStr);
//     return reverseStr.toString();
// }
// console.log(reverse('rahul'));

// NOTE: ARRAY OF STRING TO STRING => arrayOfString.toString();


/////////////////////////////////////////
// CHALLENGE 7
/////////////////////////////////////////

// EX Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise it returns false.
// function isPalindrome(str) {
//     let start = 0;
//     let end = str.length-1;
//
//     while (start <= end) {
//         if(str[start] !== str[end]) return false;
//         start++;
//         end--;
//     }
//
//     return true;
// }


// RECURSIVE SOLUTION
// function isPalindrome(str) {
//
//     let start = 0;
//     let end = str.length-1;
//
//     while(start < end) {
//         if(str[start] !== str[end]) return false;
//         start++;
//         end--;
//         isPalindrome(str.slice(start,end))
//     }
//
//     return true;
// }
//
// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('foobar')); // false
// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium')); // false
// console.log(isPalindrome('anna')); // false


/////////////////////////////////////////
// CHALLENGE 8
/////////////////////////////////////////

// EX Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

// function someRecursive(arr, callback) {
//     if(arr.length === 0) return false;
//
//     if(callback(arr[0])) return true;
//     return someRecursive(arr.slice(1),callback);
//
// }
// // someRecursive([1,2,3,4], callback)
// //         someRecursive([2,3,4], callback)
// //                  someRecursive([3,4], callback)
// //                          someRecursive([4], callback)
// //                                  someRecursive([], callback)
// //                                  return;
// //                          false
//
// const isOdd = val => val % 2 !== 0;
// console.log(someRecursive([4,6,8,9], isOdd)); // true
// console.log(someRecursive([1,2,3,4], isOdd)); // true
// console.log(someRecursive([4,6,8], isOdd)); // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false

/////////////////////////////////////////
// CHALLENGE 9
/////////////////////////////////////////

// EX Write a recursive function called flatten which accepts an array of arrays and
// returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3


// function flatten(array) {
//     // ([1, 2, 3, [4, 5] ]) => [1, 2, 3, 4, 5]
//     let result = [];
//
//     function helper(arr) {
//         if (arr.length === 0) return;
//
//         if(Array.isArray(arr[0])) {
//             helper(arr[0]);
//         } else {
//             result.push(arr[0]);
//         }
//         helper(arr.slice(1));
//     }
//
//     helper(array);
//
//     return result;
// }
// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]


/////////////////////////////////////////
// CHALLENGE 10
/////////////////////////////////////////

// EX Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array.
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


// function capitalizeFirst(array) {
//     let result = [];
//
//     function helper(arr) {
//         if(arr.length === 0) return;
//         arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].substring(1);
//         result.push(arr[0]);
//         helper(arr.slice(1));
//     }
//     helper(array);
//
//     return result;
// }
// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

/////////////////////////////////////////
// CHALLENGE 11
/////////////////////////////////////////

// EX Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }


// function nestedEvenSum (obj, sum=0) {
//     for (var key in obj) {
//         if (typeof obj[key] === 'object'){
//             sum += nestedEvenSum(obj[key]);
//         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
//             sum += obj[key];
//         }
//     }
//     return sum;
// }





/////////////////////////////////////////
// CHALLENGE 12 NOT SOLVED FROM HERE
/////////////////////////////////////////




// capitalizeFire Solution
//
// function capitalizeFirst (array) {
//     if (array.length === 1) {
//         return [array[0][0].toUpperCase() + array[0].substr(1)];
//     }
//     const res = capitalizeFirst(array.slice(0, -1));
//     const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//     res.push(string);
//     return res;
// }
// stringifyNumbers Solution
//
// function stringifyNumbers(obj) {
//     var newObj = {};
//     for (var key in obj) {
//         if (typeof obj[key] === 'number') {
//             newObj[key] = obj[key].toString();
//         } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             newObj[key] = stringifyNumbers(obj[key]);
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }
// collectStrings Solution: Helper Method Recursion Version
//
// function collectStrings(obj) {
//     var stringsArr = [];
//
//     function gatherStrings(o) {
//         for(var key in o) {
//             if(typeof o[key] === 'string') {
//                 stringsArr.push(o[key]);
//             }
//             else if(typeof o[key] === 'object') {
//                 return gatherStrings(o[key]);
//             }
//         }
//     }
//
//     gatherStrings(obj);
//
//     return stringsArr;
// }
// collectStrings Solution: Pure Recursion Version
//
// function collectStrings(obj) {
//     var stringsArr = [];
//     for(var key in obj) {
//         if(typeof obj[key] === 'string') {
//             stringsArr.push(obj[key]);
//         }
//         else if(typeof obj[key] === 'object') {
//             stringsArr = stringsArr.concat(collectStrings(obj[key]));
//         }
//     }
//
//     return stringsArr;
// }