/////////////////////
// ARRAYS PERFORMANCE
/////////////////////


/////////////////////////////////
// OBJECTS (USE HASHING NO ORDER)
/////////////////////////////////

// WHEN WE DON'T NEED ORDER
// WHEN WE NEED FAST ACCESS, INSERTION, DELETION
// INSERTION O(1), DELETION O(1), ACCESS(1) (SEARCHING WITH KEY), SEARCHING O(N) SEARCH VALUE IN OBJECT
// Object.keys = Object.values = Object.entries = O(n) AND Object.hasOwnProperty O(1) IT USES KEY AND CHECK IF KEY PRESENT OT NOT


////////////////////////
// ARRAYS (ORDERED LIST)
////////////////////////

// INSERTION - IT DEPENDS, AT LAST O(1) , IN BEGINNING OR MIDDLE O(n)
// REMOVAL - IT DEPENDS, AT LAST O(1) , IN BEGINNING OR MIDDLE O(n)
// SEARCHING - O(n)
// ACCESS - O(1) USING INDEX

// ARRAY OPERATIONS
// PUSH - O(1)
// POP - O(1)
// SHIFT - O(n)
// SHIFT - O(n)
// CONCAT - O(n)
// SPLICE - O(n)
// SLICE - O(n)
// SORT - O((n * log n)
// FOREACH/MAP/FILTER/REDUCE... - O(n)