/////////////////////////////////////////////////
// ARRAY METHODS - JavaScript

console.log('-----------------ARRAY METHODS-----------------');

let arr = ['a', 'b', 'c', 'd', 'e'];

// ===================== SLICE =====================
console.log('-----------------SLICE-----------------');
/*
  .slice(start, end) returns a shallow copy of a portion of an array into a new array object
  - Does NOT modify (mutate) the original array
  - end is exclusive
*/

console.log(arr.slice(2));        // ['c', 'd', 'e']      (from index 2 to end)
console.log(arr.slice(2,4));      // ['c', 'd']           (from index 2 up to, but not including, 4)
console.log(arr.slice(-2));       // ['d', 'e']           (last 2 elements)
console.log(arr.slice(-1));       // ['e']                (last element)
console.log(arr.slice(1, -2));    // ['b', 'c']           (from index 1 to index -2, i.e., up to 'c')
console.log(arr.slice());         // ['a', 'b', 'c', 'd', 'e'] (handy for making a shallow copy)
console.log(arr);                 // Original array remains unchanged

// Practical example: Getting the last n items without changing the original array
const lastTwo = arr.slice(-2);    // Use to get last elements for e.g. recent messages

// ===================== SPLICE =====================
console.log('-----------------SPLICE-----------------');
/*
  .splice(start, deleteCount) changes (mutates) the contents of an array by removing, replacing or adding elements
  - Returns an array of removed elements
  - Modifies the original array!
*/

console.log(arr.splice(2));   // ['c', 'd', 'e'] (removes from index 2 to end, returns them)
console.log(arr);             // ['a', 'b']      (original array is now just first two elements)
arr.splice(-1);               // removes the last element (mutates the array)
console.log(arr);             // ['a']

// Practical Example: Removing a user from a list by index
let users = ['Alice', 'Bob', 'Charlie'];
users.splice(1, 1);           // Removes 'Bob'
console.log(users);           // ['Alice', 'Charlie']


// ===================== REVERSE =====================
console.log('-----------------REVERSE-----------------');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
/*
  .reverse() reverses the order of the elements in place (mutates the array)
  - Returns the reversed array
*/
console.log(arr2.reverse());   // ['f', 'g', 'h', 'i', 'j']
console.log(arr2);             // ['f', 'g', 'h', 'i', 'j']

// Use-case: Sorting scores descending
let scores = [1,3,5,7,9];
scores.reverse();              // Now [9,7,5,3,1]
console.log(scores);


// ===================== CONCAT =====================
console.log('-----------------CONCAT-----------------');
/*
  .concat() is used to merge two or more arrays, returns a new array without changing the originals
  - Also possible with spread syntax [...]
*/
const letters = arr.concat(arr2);
console.log(letters);               // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]);     // (Same as above, using modern spread syntax)

// Real-world: Combining multiple product lists
const fruits = ['apple', 'banana'];
const veggies = ['carrot', 'lettuce'];
const shopping = fruits.concat(veggies); // ['apple', 'banana', 'carrot', 'lettuce']
console.log(shopping);


// ===================== JOIN =====================
console.log('-----------------JOIN-----------------');
/*
  .join(separator) joins all elements of an array into a single string, separated by 'separator'
*/
console.log(letters.join(' - '));   // 'a - b - c - d - e - f - g - h - i - j'

// Example: Building a CSV line
const fields = ['ID', 'Name', 'Email'];
console.log(fields.join(','));      // 'ID,Name,Email'

/* 
  Summary: 
  - slice/splice let you select or remove items,
  - reverse lets you flip order,
  - concat/join let you combine and output arrays,
*/

///////////////////////////////////////////////////////////////
//==========================================================
// THE NEW AT() METHOD - COMPREHENSIVE EXAMPLES
//==========================================================

console.log('-----------------THE NEW AT METHOD-----------------');

// Basic array for demonstration
let randomArr = [23, 11, 64, 89, 102];

// POSITIVE INDEXING - Both methods work the same
console.log(randomArr[0]);     // 23 - Traditional bracket notation
console.log(randomArr.at(0));  // 23 - Modern at() method

// ACCESSING LAST ELEMENT
console.log(randomArr[randomArr.length - 1]); // 102 - Traditional way (verbose)
console.log(randomArr.at(-1));                // 102 - Clean way with at()

// NEGATIVE INDEXING - The real power of at()
console.log(randomArr.at(-2)); // 89  - Second last element
console.log(randomArr.at(-3)); // 64  - Third last element
console.log(randomArr.at(-4)); // 11  - Fourth last element
console.log(randomArr.at(-5)); // 23  - Fifth last element (first element)

// OUT OF BOUNDS BEHAVIOR
console.log(randomArr.at(10));  // undefined - Index doesn't exist
console.log(randomArr.at(-10)); // undefined - Negative index out of bounds

console.log('---------------------------STRING AT METHOD-----------------------------');

let sampleString = 'JavaScript';

// POSITIVE INDEXING
console.log(sampleString.at(0));  // 'J' - First character
console.log(sampleString.at(4));  // 'S' - Fifth character

// NEGATIVE INDEXING
console.log(sampleString.at(-1)); // 't' - Last character
console.log(sampleString.at(-2)); // 'p' - Second last character
console.log(sampleString.at(-4)); // 'r' - Fourth last character

// COMPARISON: Traditional vs at() method
console.log('Traditional:', sampleString[sampleString.length - 1]); // 't'
console.log('at() method:', sampleString.at(-1));                  // 't'

//==========================================================
// PRACTICAL REAL-WORLD EXAMPLES
//==========================================================

console.log('---------------------------PRACTICAL REAL-WORLD EXAMPLES-----------------------------');
// Example 1: Processing User Data
const bankUsers = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

function getFirstAndLastUser(userArray) {
    console.log(`First user: ${userArray.at(0)}`);     // Alice
    console.log(`Last user: ${userArray.at(-1)}`);     // Eve
    console.log(`Second last: ${userArray.at(-2)}`);   // Diana
}
getFirstAndLastUser(bankUsers);

// Example 2: File Extension Checker
function getFileExtension(filename) {
    const parts = filename.split('.');
    return parts.at(-1); // Get the last part (extension)
}
console.log(getFileExtension('document.pdf'));        // 'pdf'
console.log(getFileExtension('archive.tar.gz'));      // 'gz'

// Example 3: Recent Activity Tracker
const activityLog = [
    'User logged in',
    'File uploaded',
    'Settings changed',
    'Password updated',
    'User logged out'
];

function getRecentActivities(log, count = 3) {
    console.log('Most recent activities:');
    for (let i = 1; i <= count; i++) {
        const activity = log.at(-i);
        if (activity) {
            console.log(`${i}. ${activity}`);
        }
    }
}
getRecentActivities(activityLog);
// Output:
// 1. User logged out
// 2. Password updated
// 3. Settings changed

// Example 4: Palindrome Checker using at()
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');
    const length = cleanStr.length;
    
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (cleanStr.at(i) !== cleanStr.at(-i - 1)) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('racecar'));    // true
console.log(isPalindrome('hello'));      // false

// Example 5: Dynamic Array Processing
const numbers = [10, 20, 30, 40, 50];

function processArray(arr) {
    // Get elements from both ends moving inward
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
        const fromStart = arr.at(i);
        const fromEnd = arr.at(-i - 1);
        
        console.log(`Position ${i}: Start=${fromStart}, End=${fromEnd}`);
    }
}
processArray(numbers);

/////////////////////////////////////////////////////////////////
//======================================================================
// LOOPING ARRAYS : FOREACH METHOD - LEARN AND COMPARE
//======================================================================

console.log('-----------------LOOPING ARRAYS : FOREACH METHOD-----------------');

// Example array of bank movements: positive values for deposits, negative for withdrawals.
const movementsArray = [200, 450, -400, 3000, -650, -130, 70, 1300];

//-----------------------
// Using for...of loop
//-----------------------

console.log('-----------------USING FOR ...OF LOOP-----------------');

// The for...of loop lets you iterate over elements. 
// To get the index, use .entries() which gives [index, element] pairs.
for (const [i, mov] of movementsArray.entries()){
  // If movement is positive, it means deposit; otherwise, it's a withdrawal (take the absolute value)
  if(mov > 0){
    console.log(`Movement ${i+1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)}`);
  }
}

//-----------------------
// Using forEach method
//-----------------------

console.log('-----------------USING FOREACH METHOD-----------------');

// forEach is a modern way to loop through arrays.
// It uses a callback function, which gets value, index, and the whole array as parameters.
movementsArray.forEach(function(mov, index, arr) {
  // mov    -> current element (movement value)
  // index  -> current index
  // arr    -> entire movementsArray
  if(mov > 0){
    console.log(`Movement ${index+1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${index+1}: You withdrew ${Math.abs(mov)}`);
  }
});

//----------------------------
// Differences and notes:
//----------------------------
//
// - forEach always loops through the **entire** array (can't use 'break' or 'continue').
// - for...of can be used with 'break' or 'continue'.
// - forEach is often preferred for concise operations on each element.

//======================================================================
// REAL-WORLD EXAMPLE: PROCESSING ORDERS WITH forEach
//======================================================================

console.log('----------------REAL-WORLD EXAMPLE: ORDER PROCESSING-----------------');

const customerOrders = [
  { id: 1, customer: 'Alice', amount: 250 },
  { id: 2, customer: 'Bob', amount: 450 },
  { id: 3, customer: 'Carol', amount: 120 }
];

// Let's iterate over each order and print a summary message
customerOrders.forEach(function(order, idx) {
  console.log(`Order ${order.id} for ${order.customer}: Amount $${order.amount}`);
  // You can also access the index (idx) or the whole array if needed
});

// Example output:
// Order 1 for Alice: Amount $250
// Order 2 for Bob: Amount $450
// Order 3 for Carol: Amount $120

//======================================================================
// KEY TAKEAWAYS:
// - Use forEach when you want to run a function for every item in an array.
// - forEach provides its callback with: (element, index, array).
// - It's great for applying side effects (like logging or updating a DOM), not for creating new arrays.
// - If you need a new array, use .map() instead.
//======================================================================

///////////////////////////////////////////////////////////////////////////////////
//======================================================================
// FOREACH WITH MAPS AND SETS - EXPLAINED
//======================================================================

console.log('----------------FOREACH WITH MAPS AND SETS-----------------');

//======================== MAPS ========================

console.log('----------------FOREACH WITH MAPS-----------------');
// Maps store key-value pairs, and preserve the order of insertion.
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// forEach method for Maps
// The callback receives (value, key, map) as arguments.
currencies.forEach(function(value, key, map) {
  // value -> The currency name
  // key   -> The currency code
  // map   -> The entire Map object
  console.log(`${key}: ${value}`);
});
// Output Explanation:
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

//======================== SETS ========================

console.log('----------------FOREACH WITH SETS-----------------');
// Sets store **unique** values, no duplicates!
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'GBP', 'INR']);
console.log(currenciesUnique); // Set(4) { 'USD', 'EUR', 'GBP', 'INR' }

// forEach method for Sets
// The callback receives (value, valueAgain, set) as arguments; 
// value and valueAgain are identical.
currenciesUnique.forEach(function(value, valueAgain, set) {
  // value     -> The value in set
  // valueAgain-> Same as value (for compatibility, since Maps supply key,value)
  // set       -> The entire Set object
  console.log(`${value}: ${value}`);
});
// Output: Each unique currency code printed once

//======================== DIFFERENCE IN forEach ARGUMENTS ========================
//
// Map forEach:      (value, key, map)
// Set forEach:      (value, valueAgain, set) // value and valueAgain are the same
//
// This design allows methods to be used interchangeably for arrays, Maps, and Sets.

//======================================================================
// REAL-WORLD EXAMPLE: TRACKING STOCK SYMBOLS
//======================================================================

console.log('----------------REAL-WORLD EXAMPLE: PROCESSING STOCKS-----------------');

// Example with a Map: ticker->company name pairing
const stocks = new Map([
  ['AAPL', 'Apple Inc.'],
  ['TSLA', 'Tesla Inc.'],
  ['GOOG', 'Alphabet Inc.'],
]);

// Display info for each stock
stocks.forEach(function(company, ticker) {
  console.log(`Stock: ${ticker}, Company: ${company}`);
});
// Output: Each stock and its corresponding company

// Example with a Set: storing enrolled user IDs uniquely
const enrolledUsers = new Set([101, 203, 101, 405, 203]);
console.log('Unique User IDs:', enrolledUsers); // Only unique IDs

// Send message to each unique user
enrolledUsers.forEach(function(userId) {
  // Here, we could send notifications, emails, etc.
  console.log(`Send reminder to user #${userId}`);
});
// Output: Message for each unique user only

//======================================================================
// KEY TAKEAWAYS
//======================================================================
// - forEach iterates over all items in Maps (key-value pairs) and Sets (values only, unique).
// - Map forEach gives you (value, key, map), Set forEach gives you (value, value, set).
// - forEach with Maps is great for easily looping key-value pairs.
// - forEach with Sets allows for quickly processing all unique items (like user IDs, tags, etc.).
