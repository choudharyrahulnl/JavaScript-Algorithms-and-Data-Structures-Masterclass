//////////////////
// PROBLEM SOLVING
//////////////////

// HOW TO IMPROVE
// DEVISE A PLAN FOR SOLVING PROBLEMS
// MASTER COMMON PROBLEM SOLVING PATTERNS

//////////////////////////////////////
// DEVISE A PLAN FOR SOLVING PROBLEMS
//////////////////////////////////////

// UNDERSTAND THE PROBLEM
// EXPLORE CONCRETE EXAMPLES
// BREAK IT DOWN
// SOLVE/SIMPLIFY
// LOOK BACK AND REFACTOR

/////////////////////////
// UNDERSTAND THE PROBLEM
/////////////////////////

// CAN I RESTATE THE PROBLEM IN MY OWN WORDS
// WHAT ARE THE INPUT THAT GO INTO THE PROBLEM
// WHAT ARE THE OUTPUTS THAT COMES FROM THE SOLUTION TO THE PROBLEM
// DO I HAVE ENOUGH INFORMATION TO SOLVE THE PROBLEM
// HOW SHOULD I LABEL IMPORTANT PIECES OF DATA THAR ARE PART OF THE PROBLEM

// EX: WRITE A FUNCTION THAT TAKES 2 NUMBER AND RETURN THERE SUM

// CAN I RESTATE THE PROBLEM IN MY OWN WORDS
// IMPLEMENT ADDITION

// WHAT ARE THE INPUT THAT GO INTO THE PROBLEM
// 2 NUMBERS, A AND B, 2,3 OR DECIMAL NUMBERS OR STRING

// WHAT ARE THE OUTPUTS THAT COMES FROM THE SOLUTION TO THE PROBLEM
// TOTAL SUM 5

// DO I HAVE ENOUGH INFORMATION TO SOLVE THE PROBLEM
// CAN SUM BE NEGATIVE, WHAT IF SOMEONE PASS ONLY 1 NUMBER OR PASS 3 NUMBER

// HOW SHOULD I LABEL IMPORTANT PIECES OF DATA THAR ARE PART OF THE PROBLEM
// MAKE FUNCTION NAME AS add(), INPUTS AS num1, num2


////////////////////////////
// EXPLORE CONCRETE EXAMPLES
////////////////////////////

// COME UP WITH EXAMPLES SO THAT YOU CAN UNDERSTAND THE PROBLEM
// EXAMPLES ALSO PROVIDE SANITY CHECK THAT YOU SOLUTION WORKS

// COME UP WITH EXAMPLES SO THAT YOU CAN UNDERSTAND THE PROBLEM
// START WITH SIMPLE EXAMPLES
// PROGRESS TO MORE COMPLEX EXAMPLES
// EXPLORE EXAMPLES WITH EMPTY INPUT
// EXPLORE EXAMPLES WITH INVALID INPUT

// EX: WRITE A FUNCTION THAT TAKES A STRING AND RETURNS COUNT OF EACH CHAR IN THE STRING

// START WITH SIMPLE EXAMPLES
// charCount("aaa") -> {a:3}

// PROGRESS TO MORE COMPLEX EXAMPLES
// charCount("hello") -> {h:1, e:1, l:2, o:1}
// charCount("my phone number is 8989") -> {h:1, e:1, l:2, o:1}
//  charCount("Hello hi") - ARE WE GOING TO HAVE {H:1. h:1} OR {h:2}

// EXPLORE EXAMPLES WITH EMPTY INPUT
// charCount("") -> DO WE WANT TO RETURN {}, null, error

// EXPLORE EXAMPLES WITH INVALID INPUT
// charCount(12) -> DO WE WANT TO RETURN {}, null, error

////////////////
// BREAK IT DOWN
////////////////

// THIS SHOWS THAT YOU HAVE SOME APPROACH EVEN IF YOU DIDN'T FINISH THE TASK

// EX WRITE DOWN THE STEPS YOU NEED TO TAKE
// function charCount(str) {
//     // MAKE OBJECT TO RETURN
//     // WE NEED TO GO THOROUGH ALL THE CHAR - LOOP
//          // IF CHAR IS A NUMBER/LETTER AND IS KEY IN OUR OBJECT, ADD ONE TO COUNT/VALUE
//          // IF CHAR IS A NUMBER/LETTER AND IS NOT A KEY IN OUR OBJECT, ADD IT AND SET COUNT/VALUE TO 1
//          // IF CHAR IS SOMETHING ELSE (SPACE, PERIOD...) DON'T DO ANYTHING
//     // RETURN AN OBJECT WITH KEY AS CHAR AND COUNT AS VALUE
// }

/////////////////
// SOLVE/SIMPLIFY
/////////////////

// FIND THE CORE DIFFICULTY IN WHAT YOU ARE TRYING TO DO
// TEMPORARILY IGNORE THAT DIFFICULTY
// WRITE A SIMPLIFIED SOLUTION
// THEN INCORPORATE THAT DIFFICULTY BACK

// EX ABOVE EXAMPLE charCount(str) FIND YOUR DIFFICULTY & START WILL EASY ONE
// function charCount(str) {
//     // MAKE OBJECT TO RETURN
//     const result = {}
//     // WE NEED TO GO THOROUGH ALL THE CHAR - LOOP
//     for (const char of str.toLowerCase()) {
//         // IF CHAR IS SOMETHING ELSE (SPACE, PERIOD...) DON'T DO ANYTHING
//         if(/[a-z0-9]/.test(char)) {
//             // IF CHAR IS A NUMBER/LETTER AND IS KEY IN OUR OBJECT, ADD ONE TO COUNT/VALUE
//             if(result[char] > 0) {
//                 result[char]++;
//             }
//             // IF CHAR IS A NUMBER/LETTER AND IS NOT A KEY IN OUR OBJECT, ADD IT AND SET COUNT/VALUE TO 1
//             else {
//                 result[char] = 1;
//             }
//         }
//     }
//     // RETURN AN OBJECT WITH KEY AS CHAR AND COUNT AS VALUE
//     return result;
// }
// console.log(charCount("hi"));
// console.log(charCount("hello"));
// console.log(charCount("Hello there"));

// YOU HAVE SOLVED 90% OF PROBLEM AND ASK INTERVIEWER THAT YOU DON'T KNOW, OR IF YOU KNOW SOLUTION LIKE
// CHAR CODE BUT YOU DON'T REMEMBER THE CHAR CODE

/////////////////////////
// LOOK BACK AND REFACTOR
/////////////////////////

// CAN YOU DERIVE THE RESULT DIFFERENTLY
// CAN YOU UNDERSTAND IT AT A GLANCE
// CAN YOU USE THIS SOLUTION FOR SOME OTHER PROBLEM
// CAN YOU IMPROVE THE PERFORMANCE
// CAN YOU THINK OF OTHER WAY OF REFACTOR
// HOW HAVE OTHER PEOPLE SOLVED THE PROBLEM

// EX for charCount(str) IF WE ARE USING FOR-LOOP THEN WE CAN REFACTOR USING FOR-OF LOOP
// COMBINE IF ELSE IN 1 LINE

// function charCount(str) {
//     const result = {}
//     for (const char of str.toLowerCase()) {
//         if(/[a-z0-9]/.test(char)) {
//             result[char] = ++result[char] || 1
//         }
//     }
//     return result;
// }
// console.log(charCount("Hello there"));



// AFTER GOOGLE FIND REGEX IS 55% SLOWER THAN THIS APPROACH
// NOW WE ARE DOING LOWER CASE WHEN WE KNOW ITS ALPHANUMERIC ONLY

// function charCount(str) {
//     const result = {}
//     for (let char of str) {
//         if(isAlphaNumeric(char)) {
//             char = char.toLowerCase();
//             result[char] = ++result[char] || 1
//         }
//     }
//     return result;
// }
// function isAlphaNumeric(char) {
//     const code = char.charCodeAt(0);
//     if (!(code > 47 && code < 58) && // numeric [0-9]
//         !(code > 64 && code < 91) && // upper alpha [A-Z]
//         !(code > 96 && code < 123) // lower alpha [a-z]
//     ) {
//         return false;
//     }
//     return true;
// }
// console.log(charCount("Hello there"));