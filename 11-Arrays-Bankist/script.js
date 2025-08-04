'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


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
