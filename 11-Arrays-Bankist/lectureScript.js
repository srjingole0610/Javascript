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

console.log(arr.slice(2)); // ['c', 'd', 'e']      (from index 2 to end)
console.log(arr.slice(2, 4)); // ['c', 'd']           (from index 2 up to, but not including, 4)
console.log(arr.slice(-2)); // ['d', 'e']           (last 2 elements)
console.log(arr.slice(-1)); // ['e']                (last element)
console.log(arr.slice(1, -2)); // ['b', 'c']           (from index 1 to index -2, i.e., up to 'c')
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e'] (handy for making a shallow copy)
console.log(arr); // Original array remains unchanged

// Practical example: Getting the last n items without changing the original array
const lastTwo = arr.slice(-2); // Use to get last elements for e.g. recent messages

// ===================== SPLICE =====================
console.log('-----------------SPLICE-----------------');
/*
  .splice(start, deleteCount) changes (mutates) the contents of an array by removing, replacing or adding elements
  - Returns an array of removed elements
  - Modifies the original array!
*/

console.log(arr.splice(2)); // ['c', 'd', 'e'] (removes from index 2 to end, returns them)
console.log(arr); // ['a', 'b']      (original array is now just first two elements)
arr.splice(-1); // removes the last element (mutates the array)
console.log(arr); // ['a']

// Practical Example: Removing a user from a list by index
let users = ['Alice', 'Bob', 'Charlie'];
users.splice(1, 1); // Removes 'Bob'
console.log(users); // ['Alice', 'Charlie']

// ===================== REVERSE =====================
console.log('-----------------REVERSE-----------------');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
/*
  .reverse() reverses the order of the elements in place (mutates the array)
  - Returns the reversed array
*/
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// Use-case: Sorting scores descending
let scores = [1, 3, 5, 7, 9];
scores.reverse(); // Now [9,7,5,3,1]
console.log(scores);

// ===================== CONCAT =====================
console.log('-----------------CONCAT-----------------');
/*
  .concat() is used to merge two or more arrays, returns a new array without changing the originals
  - Also possible with spread syntax [...]
*/
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); // (Same as above, using modern spread syntax)

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
console.log(letters.join(' - ')); // 'a - b - c - d - e - f - g - h - i - j'

// Example: Building a CSV line
const fields = ['ID', 'Name', 'Email'];
console.log(fields.join(',')); // 'ID,Name,Email'

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
console.log(randomArr[0]); // 23 - Traditional bracket notation
console.log(randomArr.at(0)); // 23 - Modern at() method

// ACCESSING LAST ELEMENT
console.log(randomArr[randomArr.length - 1]); // 102 - Traditional way (verbose)
console.log(randomArr.at(-1)); // 102 - Clean way with at()

// NEGATIVE INDEXING - The real power of at()
console.log(randomArr.at(-2)); // 89  - Second last element
console.log(randomArr.at(-3)); // 64  - Third last element
console.log(randomArr.at(-4)); // 11  - Fourth last element
console.log(randomArr.at(-5)); // 23  - Fifth last element (first element)

// OUT OF BOUNDS BEHAVIOR
console.log(randomArr.at(10)); // undefined - Index doesn't exist
console.log(randomArr.at(-10)); // undefined - Negative index out of bounds

console.log(
  '---------------------------STRING AT METHOD-----------------------------',
);

let sampleString = 'JavaScript';

// POSITIVE INDEXING
console.log(sampleString.at(0)); // 'J' - First character
console.log(sampleString.at(4)); // 'S' - Fifth character

// NEGATIVE INDEXING
console.log(sampleString.at(-1)); // 't' - Last character
console.log(sampleString.at(-2)); // 'p' - Second last character
console.log(sampleString.at(-4)); // 'r' - Fourth last character

// COMPARISON: Traditional vs at() method
console.log('Traditional:', sampleString[sampleString.length - 1]); // 't'
console.log('at() method:', sampleString.at(-1)); // 't'

//==========================================================
// PRACTICAL REAL-WORLD EXAMPLES
//==========================================================

console.log(
  '---------------------------PRACTICAL REAL-WORLD EXAMPLES-----------------------------',
);
// Example 1: Processing User Data
const bankUsers = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

function getFirstAndLastUser(userArray) {
  console.log(`First user: ${userArray.at(0)}`); // Alice
  console.log(`Last user: ${userArray.at(-1)}`); // Eve
  console.log(`Second last: ${userArray.at(-2)}`); // Diana
}
getFirstAndLastUser(bankUsers);

// Example 2: File Extension Checker
function getFileExtension(filename) {
  const parts = filename.split('.');
  return parts.at(-1); // Get the last part (extension)
}
console.log(getFileExtension('document.pdf')); // 'pdf'
console.log(getFileExtension('archive.tar.gz')); // 'gz'

// Example 3: Recent Activity Tracker
const activityLog = [
  'User logged in',
  'File uploaded',
  'Settings changed',
  'Password updated',
  'User logged out',
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
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false

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

console.log(
  '-----------------LOOPING ARRAYS : FOREACH METHOD-----------------',
);

// Example array of bank movements: positive values for deposits, negative for withdrawals.
const movementsArray = [200, 450, -400, 3000, -650, -130, 70, 1300];

//-----------------------
// Using for...of loop
//-----------------------

console.log('-----------------USING FOR ...OF LOOP-----------------');

// The for...of loop lets you iterate over elements.
// To get the index, use .entries() which gives [index, element] pairs.
for (const [i, mov] of movementsArray.entries()) {
  // If movement is positive, it means deposit; otherwise, it's a withdrawal (take the absolute value)
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}

//-----------------------
// Using forEach method
//-----------------------

console.log('-----------------USING FOREACH METHOD-----------------');

// forEach is a modern way to loop through arrays.
// It uses a callback function, which gets value, index, and the whole array as parameters.
movementsArray.forEach(function (mov, index, arr) {
  // mov    -> current element (movement value)
  // index  -> current index
  // arr    -> entire movementsArray
  if (mov > 0) {
    console.log(`Movement ${index + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(mov)}`);
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

console.log(
  '----------------REAL-WORLD EXAMPLE: ORDER PROCESSING-----------------',
);

const customerOrders = [
  { id: 1, customer: 'Alice', amount: 250 },
  { id: 2, customer: 'Bob', amount: 450 },
  { id: 3, customer: 'Carol', amount: 120 },
];

// Let's iterate over each order and print a summary message
customerOrders.forEach(function (order, idx) {
  console.log(
    `Order ${order.id} for ${order.customer}: Amount $${order.amount}`,
  );
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
currencies.forEach(function (value, key, map) {
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
currenciesUnique.forEach(function (value, valueAgain, set) {
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

console.log(
  '----------------REAL-WORLD EXAMPLE: PROCESSING STOCKS-----------------',
);

// Example with a Map: ticker->company name pairing
const stocks = new Map([
  ['AAPL', 'Apple Inc.'],
  ['TSLA', 'Tesla Inc.'],
  ['GOOG', 'Alphabet Inc.'],
]);

// Display info for each stock
stocks.forEach(function (company, ticker) {
  console.log(`Stock: ${ticker}, Company: ${company}`);
});
// Output: Each stock and its corresponding company

// Example with a Set: storing enrolled user IDs uniquely
const enrolledUsers = new Set([101, 203, 101, 405, 203]);
console.log('Unique User IDs:', enrolledUsers); // Only unique IDs

// Send message to each unique user
enrolledUsers.forEach(function (userId) {
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

////////////////////////////////////////////////////////////////////////////////////
// DATA TRANSFORMATION USING MAP, FILTER, REDUCE
////////////////////////////////////////////////////////////////////////////////////

console.log(
  '----------------DATA TRANSFORMATION USING MAPS, FILTERS, REDUCE-----------------',
);

const movementsArrayNew = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

//=============================================================================
// MAP - Transforms arrays (returns a new array of same length)
//=============================================================================
console.log('----------------USING MAPS-----------------');

// Example: Convert each Euro movement value to USD
const movementsUSD = movementsArrayNew.map(mov => mov * euroToUsd);
// Print original and mapped arrays
console.log('Original (EUR):', movementsArrayNew);
console.log('To USD:', movementsUSD);

//=============================================================================
// Alternative approaches to transformation: for...of and forEach
//=============================================================================
console.log('----------------USING For ...of-----------------');
const movementsUSD2 = [];
for (const mov of movementsArrayNew) {
  movementsUSD2.push(mov * euroToUsd);
}
console.log('USD using for...of:', movementsUSD2);

console.log('----------------USING forEach-----------------');
const movementsUSD3 = [];
movementsArrayNew.forEach(function (mov) {
  movementsUSD3.push(mov * euroToUsd);
});
console.log('USD using forEach:', movementsUSD3);

//=============================================================================
// Another MAP Example: Describe each movement
//=============================================================================
console.log('---------------USING MAP Example 2-----------------');
const movementsDescription = movementsArrayNew.map((mov, i) => {
  const type = mov > 0 ? 'deposited' : 'withdrew';
  return `Movement ${i + 1}: You ${type} ${Math.abs(mov)}`;
});
console.log(movementsDescription);

//=============================================================================
// REAL-WORLD EXAMPLE: Transform & summarize an order's data
//=============================================================================
console.log('----------------REAL-WORLD EXAMPLE-----------------');
const orders = [
  { id: 1, amountEUR: 120 },
  { id: 2, amountEUR: 50 },
  { id: 3, amountEUR: 400 },
  { id: 4, amountEUR: 85 },
];

// MAP: Convert all order amounts to USD
const orderAmountsUSD = orders.map(order => ({
  id: order.id,
  amountUSD: order.amountEUR * euroToUsd,
}));
console.log('Orders in USD:', orderAmountsUSD);

//=============================================================================
// FILTER - Returns a new array of filtered values
//=============================================================================
console.log('----------------USING FILTERS-----------------');

// The filter method creates a new array containing only the elements that pass a test.
// Here: Keep only DEPOSIT values (positive numbers)
const depositValue = movementsArrayNew.filter(function (mov) {
  // Only keep movements greater than 0 (deposits)
  return mov > 0;
});
console.log('Deposits (filter):', depositValue);
// Original array remains unchanged:
console.log('Original array:', movementsArrayNew);

//=============================================================================
// Alternative: for...of loop for filtering (traditional way)
//=============================================================================
console.log('----------------USING For ...of-----------------');
// Create a new array to store deposits
const depositValue2 = [];
for (const mov of movementsArrayNew) {
  if (mov > 0) {
    depositValue2.push(mov);
  }
}
console.log('Deposits (for...of):', depositValue2);

//=============================================================================
// Alternative: forEach for filtering (less common, more manual)
//=============================================================================
console.log('----------------USING forEach-----------------');
const depositValue3 = [];
movementsArrayNew.forEach(function (mov) {
  if (mov > 0) {
    depositValue3.push(mov);
  }
});
console.log('Deposits (forEach):', depositValue3);

//=============================================================================
// REAL-WORLD EXAMPLE: Filtering active users from a user list
//=============================================================================
console.log('---------------REAL-WORLD FILTER EXAMPLE-----------------');

// Example array: user records with isActive property
const newUsers = [
  { id: 1, name: 'Alice', isActive: true },
  { id: 2, name: 'Bob', isActive: false },
  { id: 3, name: 'Carol', isActive: true },
];

// Filter out only active users:
const activeUsers = newUsers.filter(user => user.isActive);
console.log('Active Users:', activeUsers);
/*
Output:
[
  { id: 1, name: 'Alice', isActive: true },
  { id: 3, name: 'Carol', isActive: true },
]
*/

//=============================================================================
// KEY LEARNING POINTS:
// - .filter() keeps elements where the callback returns TRUE.
// - Returns a NEW array; original array is unchanged.
// - Common use: filter records by condition (status, value, etc).
//=============================================================================

////////////////////////////////////////////////////////////////////////////////
//=============================================================================
// REDUCE - Returns a single value (like a sum, average, etc.)
//=============================================================================
console.log('----------------USING REDUCE-----------------');

// The reduce method processes an array from left-to-right, running a function for each value
// and "accumulating" it to a single result (like sum, product, max, etc).

const balance = movementsArrayNew.reduce(function (acc, mov, i) {
  // acc: Accumulator - holds the ongoing total/result
  // mov: Current element (movement) in the array
  // i:   Current iteration index
  console.log(`Iteration ${i} : Accumulator = ${acc}`);
  return acc + mov; // Add current movement to accumulator
}, 0); // 0 is the initial value of the accumulator

console.log('Balance (using reduce):', balance);

//=============================================================================
// Equivalent calculation using for...of loop (traditional approach)
//=============================================================================
console.log('----------------USING For ...of-----------------');
let balance2 = 0;
for (const mov of movementsArrayNew) {
  balance2 += mov; // Add each movement to balance2
}
console.log('Balance using for...of:', balance2);

//=============================================================================
// REDUCE - Find the maximum movement value
//=============================================================================
console.log('----------------USING REDUCE TO FIND MAX VALUE-----------------');
const maxMovement = movementsArrayNew.reduce((max, mov) => {
  // Compare current max to the current movement value
  return mov > max ? mov : max;
}, movementsArrayNew[0]); // Initial value: first array element
console.log('Maximum movement:', maxMovement);

//=============================================================================
// REAL-WORLD EXAMPLE: Find total sales from orders
//=============================================================================
console.log('----------------REAL-WORLD REDUCE EXAMPLE-----------------');

const newOrders = [
  { id: 101, amount: 300 },
  { id: 102, amount: 120 },
  { id: 103, amount: 450 },
  { id: 104, amount: 80 },
];

// Use reduce to sum up all amounts from the orders array
const totalSales = newOrders.reduce((total, order) => total + order.amount, 0);
console.log('Total sales from all orders:', totalSales);

//=============================================================================
// KEY LEARNING POINTS
//=============================================================================
// - .reduce() takes a callback and an initial value for the accumulator.
// - It returns a SINGLE value (number, string, object, etc.)
// - Callback signature: (accumulator, currentValue, index, array) => result
// - Most commonly used for totals, averaging, finding min/max, flattening arrays, etc.
// - For more complex reductions, the accumulator can even be an object or array.
//=============================================================================

////////////////////////////////////////////////////////////////////////////////
//CHAINING METHODS
console.log('----------------CHAINING METHODS-----------------');

// Chaining: Each array method returns a new array (or value, for reduce),
// so you can link one after the other for powerful data transformations!

// 1. .filter(mov => mov > 0): Keeps only DEPOSIT values (>0) from movementsArrayNew.
// 2. .map((mov, i) => mov * euroToUsd): Converts each deposit from EUR to USD.
// 3. .reduce((acc, mov) => acc + mov, 0): Sums up all converted deposits to get total deposits in USD.
const totalDepositsUSD = movementsArrayNew
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log('Total deposits in USD:', totalDepositsUSD);

//-------------------------------------------------------------------------------
// What you learn:
// - Chaining keeps code concise and logical: filter > map > reduce
// - Each method does one thing: select, transform, then summarize
// - No temporary variables or intermediate arrays are needed!
//-------------------------------------------------------------------------------

//===============================================================================
// REAL-WORLD EXAMPLE: Calculate total paid orders over $100 (including 5% tax)
//===============================================================================

const chainingOrders = [
  { id: 1, amount: 120, paid: true },
  { id: 2, amount: 50, paid: true },
  { id: 3, amount: 400, paid: true },
  { id: 4, amount: 85, paid: false },
];

// Chain: Only paid ("paid: true"), amounts > $100, add tax, then total
const totalHighValuePaidOrders = chainingOrders
  .filter(order => order.paid && order.amount > 100) // Only paid orders above $100
  .map(order => order.amount * 1.05) // Add 5% tax to each order
  .reduce((sum, orderWithTax) => sum + orderWithTax, 0); // Sum up all qualifying orders

console.log(
  'Total of high-value paid orders (with tax):',
  totalHighValuePaidOrders,
);

//===============================================================================
// KEY TAKEAWAYS
//===============================================================================
// - Chaining .filter(), .map(), .reduce() is a best-practice for expressive, readable code[1][4][5].
// - Use chaining when you need to transform, filter, and summarize data in a single flow.
// - Every method returns a new array (except .reduce(), which returns a single value).
//===============================================================================

//=============================================================================
// FIND - Returns the FIRST element in the array that matches a given condition
//=============================================================================
console.log('----------------USING FIND-----------------');

// The .find() method searches the array element by element.
// It stops and returns the FIRST value for which the callback returns TRUE.
// If no element matches, it returns undefined.

const firstWithdrawal = movementsArrayNew.find(mov => mov < 0);
// In this example: Find the first negative movement from movementsArrayNew

console.log('First withdrawal:', firstWithdrawal); // e.g., -400
console.log('Original movements array:', movementsArrayNew);

//=============================================================================
// FIND vs FILTER
//=============================================================================
// - .filter() returns ALL elements that match the condition (as an array).
// - .find() returns ONLY the FIRST match (as a single value).
// Example:
console.log('----------------FIND vs FILTER-----------------');
const allWithdrawals = movementsArrayNew.filter(mov => mov < 0);
console.log('All withdrawals (filter):', allWithdrawals);
console.log('First withdrawal (find):', firstWithdrawal);

//=============================================================================
// REAL-WORLD EXAMPLE: Find a user by username
//=============================================================================
console.log(
  '----------------REAL-WORLD EXAMPLE: Find a user by username-----------------',
);
const userAccounts = [
  { owner: 'Jonas Schmedtmann', username: 'js', pin: 1111 },
  { owner: 'Jessica Davis', username: 'jd', pin: 2222 },
  { owner: 'Steven Thomas Williams', username: 'stw', pin: 3333 },
];

// Suppose we want to find the account object for username 'jd'
const accountJD = userAccounts.find(acc => acc.username === 'jd');

console.log('Found account JD:', accountJD);
// Output:
// {
//   owner: 'Jessica Davis',
//   username: 'jd',
//   pin: 2222
// }

//=============================================================================
// KEY LEARNING POINTS:
//=============================================================================
// - .find() returns the first match, not an array.
// - Stops searching as soon as it finds a match, making it efficient.
// - Useful when you want ONE item (object or primitive) based on a condition.
// - If nothing matches, it returns undefined.
//=============================================================================

//=============================================================================
// FINDINDEX - Returns the INDEX of the first element that matches a condition
//=============================================================================
console.log('----------------USING FINDINDEX-----------------');

/*
The findIndex() method searches an array and returns the index (position)
of the first element that satisfies the provided testing function (condition).
If no element matches, it returns -1.
*/

// Example: Find the index of the first negative movement (withdrawal) in an array
const movementsArrayNewest = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawalIndex = movementsArrayNewest.findIndex(mov => mov < 0);
console.log('Index of first withdrawal:', firstWithdrawalIndex);
// Output: e.g., 2 (because -400 is at index 2)

// To prove it, show the element at that index
console.log(
  'First withdrawal amount:',
  movementsArrayNewest[firstWithdrawalIndex],
);

//==============================================================================
// Real-world example: Find the position of a user account with a certain username
//==============================================================================
console.log(
  '----------------REAL-WORLD EXAMPLE: Find the position of a user account with a certain username-----------------',
);
const userAccountsNew = [
  { owner: 'Jonas Schmedtmann', username: 'js', pin: 1111 },
  { owner: 'Jessica Davis', username: 'jd', pin: 2222 },
  { owner: 'Steven Thomas Williams', username: 'stw', pin: 3333 },
  { owner: 'Sarah Smith', username: 'ss', pin: 4444 },
];

// Suppose we want the INDEX of the account with username 'stw'
const index = userAccountsNew.findIndex(acc => acc.username === 'stw');
console.log('Index of account with username "stw":', index);

// This index can be used to directly access or modify that account
if (index !== -1) {
  console.log('Found account:', userAccountsNew[index]);
} else {
  console.log('Account not found!');
}

/*
LEARNING POINTS:
- findIndex() returns the position of the first element satisfying the condition.
- Returns -1 if no element is found.
- Useful for updating or deleting elements at a known position in arrays.
- Different from .find(), which returns the element itself.
- Works well with complex conditions and arrays of objects.
*/

//=============================================================================
// FINDLAST and FINDLASTINDEX
//=============================================================================

/*
 findLast()      → Returns the VALUE of the last element that matches a condition.
 findLastIndex() → Returns the INDEX of the last element that matches a condition.

 These methods work similarly to find() / findIndex(), but start searching from the END
 of the array moving backwards.
*/

// ------------------- findLast -------------------
console.log('----------------FINDLAST-----------------');
const lastWithdrawal = movementsArrayNew.findLast(mov => mov < 0);
console.log('Last withdrawal (value):', lastWithdrawal);
// -130 in this case

// ------------------- findLastIndex -------------------
console.log('----------------FINDLASTINDEX-----------------');
const lastWithdrawalIndex = movementsArrayNew.findLastIndex(mov => mov < 0);
console.log('Last withdrawal index:', lastWithdrawalIndex);
// 5 in this case (because -130 is at index 5)

// Example output message for user
console.log(
  `Your last withdrawal of ${lastWithdrawal}€ happened at index ${lastWithdrawalIndex} in your transaction history.`,
);

//=============================================================================
// FINDLAST vs FINDLASTINDEX vs FILTER DEMO
//=============================================================================
console.log(
  '----------------FINDLAST vs FINDLASTINDEX vs FILTER-----------------',
);

// filter() → returns ALL matching values
const allWithdrawalsNew = movementsArrayNew.filter(mov => mov < 0);
console.log('All withdrawals (filter):', allWithdrawalsNew);

// findLast() → returns ONLY the last matching value
console.log('Last withdrawal (findLast):', lastWithdrawal);

// findLastIndex() → returns ONLY the index of the last matching value
console.log('Index of last withdrawal (findLastIndex):', lastWithdrawalIndex);

//=============================================================================
// REAL-WORLD EXAMPLE: Finding the last failed login attempt
//=============================================================================
const loginAttempts = [
  { time: '2025-08-09T10:15:00', success: true },
  { time: '2025-08-10T14:30:00', success: false },
  { time: '2025-08-10T15:00:00', success: true },
  { time: '2025-08-11T09:45:00', success: false }, // Last failed attempt
];

// findLast: Get the OBJECT of the last failed attempt
const lastFailedAttempt = loginAttempts.findLast(
  attempt => attempt.success === false,
);
console.log('Last failed attempt:', lastFailedAttempt);

// findLastIndex: Get the position of the last failed attempt
const lastFailedAttemptIndex = loginAttempts.findLastIndex(
  attempt => attempt.success === false,
);
console.log('Last failed attempt index:', lastFailedAttemptIndex);

// Nice UI message
if (lastFailedAttempt) {
  console.log(
    `Your last failed login was on ${new Date(
      lastFailedAttempt.time,
    ).toLocaleString()}`,
  );
}

/*
LEARNING POINTS:
----------------
1. .findLast() starts from the END of the array and returns the last matching VALUE.
2. .findLastIndex() starts from the END and returns the last matching INDEX.
3. Use findLast when you care about the data itself, findLastIndex when you care where it is.
4. Both stop searching once they find the last match — more efficient than reversing the array + find().
5. These are NEWER methods (ES2023), so may need polyfills in older environments.
*/

//=============================================================================
// Polyfill example for older browsers:
//=============================================================================
if (!Array.prototype.findLast) {
  Array.prototype.findLast = function (callback, thisArg) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (callback.call(thisArg, this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };
}

//=============================================================================
// SOME vs EVERY
//=============================================================================

/*
 some()  → Returns TRUE if at least one element in the array passes the given test.
 every() → Returns TRUE if ALL elements in the array pass the given test.

 IMPORTANT:
 - Both stop checking as soon as the result is determined (short-circuiting).
 - .some() is like "OR" logic — needs just ONE match.
 - .every() is like "AND" logic — needs ALL matches.
*/

// ---------------- USAGE OF some() ----------------
console.log('----------------USING SOME-----------------');

// At least one deposit?
const anyDeposits = movementsArrayNew.some(mov => mov > 0);
console.log('Any deposits?', anyDeposits); // true (there are positive numbers)

// Any deposits over 5000?
const anyDepositsOver5000 = movementsArrayNew.some(mov => mov > 5000);
console.log('Any deposits over 5000?', anyDepositsOver5000); // false (no such case)

// ---------------- USAGE OF every() ----------------
console.log('----------------USING EVERY-----------------');

// Are all movements deposits (positive)?
const allDeposits = movementsArrayNew.every(mov => mov > 0);
console.log('All deposits?', allDeposits); // false (there are withdrawals)

// Are all movements less than 5000?
const allMovementsUnder5000 = movementsArrayNew.every(mov => mov < 5000);
console.log('All movements under 5000?', allMovementsUnder5000); // true

//=============================================================================
// REAL-WORLD EXAMPLE: E-commerce Cart Validation
//=============================================================================

const shoppingCart = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Headphones', price: 199, inStock: true },
  { id: 3, name: 'Mouse', price: 49, inStock: true },
];

// Check if at least one item costs more than $500
const hasExpensiveItem = shoppingCart.some(item => item.price > 500);
console.log('Cart contains expensive item?', hasExpensiveItem); // true

// Check if all items are in stock
const allItemsInStock = shoppingCart.every(item => item.inStock === true);
console.log('All items in stock?', allItemsInStock); // true

/*
LEARNING POINTS:
----------------
1. some() → Great when you just need to know if ANY element meets a condition.
   e.g., "Does the cart have any expensive items?"
2. every() → Great when all data must meet the condition for it to be valid.
   e.g., "Are all cart items available in stock?"
3. Both methods:
   - Don’t change the original array.
   - Return a boolean (true/false).
   - Stop checking early (short-circuit) for performance.
4. Real-life uses:
   - some(): Security checks like "Has the password any special characters?"
   - every(): Form validation like "Have all required fields been filled?"
*/

//=============================================================================
// FLAT and FLATMAP
//=============================================================================

/*
flat()   → Creates a new array with all sub-array elements concatenated into it,
           up to the specified depth.
flatMap()→ First maps each element, then flattens the result by ONE level.
*/

// -----------------------------------------------------------------------------
// USING flat()
// -----------------------------------------------------------------------------
console.log('----------------USING FLAT-----------------');

const nestedArray = [[1, 2], [3, 4], [5, 6], 7, 8];
console.log('Original nested array:', nestedArray);

// Flatten by 1 level (default)
console.log('Flattened 1 level:', nestedArray.flat());
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

// -----------------------------------------------------------------------------
// Deeply nested array example
// -----------------------------------------------------------------------------
const deepNestedArray = [
  [
    [1, 2],
    [
      [3, 4],
      [5, 6],
    ],
  ],
  7,
  8,
];

// flat(depth) → specify how many levels should be flattened
console.log('Deep flattened (3 levels):', deepNestedArray.flat(3));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

//=============================================================================
// USING flatMap()
//=============================================================================
console.log('----------------USING FLATMAP-----------------');

/*
flatMap() = map() + flat(1) combined in one call
- Runs a mapping function on each element
- Flattens the result by ONE LEVEL (depth is fixed to 1)
- More performant than doing map().flat()
*/

const bankDeposits = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
console.log('Bank deposits:', bankDeposits);

// Example: compute 10% interest for each deposit, then flatten (though here it's already flat)
console.log(
  'Interest amounts (flatMap):',
  bankDeposits.flatMap(mov => mov * 0.1),
);
// Output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

//=============================================================================
// REAL-WORLD EXAMPLE 1: Nested transaction arrays
//=============================================================================
console.log('----------------REAL-WORLD EXAMPLE 1-----------------');

const accountJonas = { owner: 'Jonas', movements: [200, -100, 340] };
const accountJessica = { owner: 'Jessica', movements: [5000, -500, -1500, 300] };
const accountSteven = { owner: 'Steven', movements: [430, 1000, -50] };

// Array of accounts
const allAccounts = [accountJonas, accountJessica, accountSteven];

// Get all movements from all accounts into a single flat array
const allMovements = allAccounts.map(acc => acc.movements).flat();
console.log('All movements (map + flat):', allMovements);

// Same using flatMap (shorter & slightly faster)
const allMovementsFM = allAccounts.flatMap(acc => acc.movements);
console.log('All movements (flatMap):', allMovementsFM);

// Calculate total balance from all accounts
const overallBalance = allAccounts
  .flatMap(acc => acc.movements)
  .reduce((sum, mov) => sum + mov, 0);

console.log('Overall balance from all accounts:', overallBalance);

//=============================================================================
// REAL-WORLD EXAMPLE 2: Breaking paragraphs into words
//=============================================================================
console.log('----------------REAL-WORLD EXAMPLE 2-----------------');

const paragraphs = [
  'JavaScript is awesome',
  'Flat and FlatMap make life easier',
  'Coding is fun',
];

// flatMap to split by spaces → array of all words
const words = paragraphs.flatMap(sentence => sentence.split(' '));
console.log('All words from paragraphs:', words);

//=============================================================================
// LEARNING POINTS:
//=============================================================================
/*
1. flat():
   - Flattens nested arrays.
   - Accepts depth argument (default = 1).
   - Useful for merging 2D/3D data into a single list.

2. flatMap():
   - Combines map() + flat(1) in one step.
   - Faster than map().flat() because it avoids creating an intermediate array.
   - Always flattens by exactly ONE level.
   - Perfect for extracting & transforming data in one pass.

3. When to use:
   - flat(): when you ONLY need flattening (choose depth as needed).
   - flatMap(): when you need to transform AND flatten right after.

4. Real-world banking example:
   - Extract all movements from multiple accounts using flatMap.
   - Process and sum all transactions for reporting.
*/

//=============================================================================
// USING SORTING
//=============================================================================

console.log('----------------USING SORTING-----------------');

// Sorting with Strings
const owners1 = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log('Original array:', owners1);

// Default .sort() → sorts elements lexicographically (as strings, by Unicode code points)
console.log('Sorted array (default):', owners1.sort());
// ✅ Output: [ "Adam", "Jonas", "Martha", "Zach" ]

// ⚠️ Warning: .sort() MUTATES the original array!
// owners1 is now permanently reordered

// -----------------------------------------------------------------------------
// Sorting Numbers
// -----------------------------------------------------------------------------
console.log('Original movements:', movementsArrayNew);

// Default .sort() treats numbers as strings → not reliable for numeric sorting
console.log('Default sort (wrong for numbers):', movementsArrayNew.slice().sort());
// Fix: Provide a compare function (a, b)
// ASCENDING (Lowest → Highest)
console.log(
  'Sorted ascending:',
  movementsArrayNew.slice().sort((a, b) => a - b)
);
// DESCENDING (Highest → Lowest)
console.log(
  'Sorted descending:',
  movementsArrayNew.slice().sort((a, b) => b - a)
);

/*
Compare Function Explained:
- (a, b) => a - b
   -> If result < 0, a comes before b
   -> If result > 0, b comes before a
   -> If result === 0, order unchanged

- (a, b) => b - a (reverses the order for descending sort)
*/

//=============================================================================
// REAL-WORLD EXAMPLE 1: Sorting transactions
//=============================================================================
console.log('----------------REAL-WORLD EXAMPLE 1: Transactions-----------------');

const accountMovements = [200, -100, 500, 1200, -50, 3000];

// Sort from highest to lowest (to show top transactions first)
const sortedTransactions = accountMovements.slice().sort((a, b) => b - a);
console.log('Transactions sorted high → low:', sortedTransactions);

// Slice() used to copy first → so original array is not mutated

//=============================================================================
// REAL-WORLD EXAMPLE 2: Sorting products by price
//=============================================================================
console.log('----------------REAL-WORLD EXAMPLE 2: Products-----------------');

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Headphones', price: 200 },
  { name: 'Phone', price: 800 },
  { name: 'Monitor', price: 300 },
];

// Sort ascending by price
const productsAsc = products.slice().sort((a, b) => a.price - b.price);
console.log('Products sorted by price (Low → High):', productsAsc);

// Sort descending by price
const productsDesc = products.slice().sort((a, b) => b.price - a.price);
console.log('Products sorted by price (High → Low):', productsDesc);

//=============================================================================
// KEY LEARNING POINTS
//=============================================================================
/*
1. .sort() by default sorts values as strings (lexicographically).
   → "200" comes before "50" because "2" < "5" (string comparison).
2. For numbers, always use a compare callback:  (a, b) => a - b
3. Remember: .sort() MUTATES the original array. 
   → Use .slice().sort() if you want a sorted copy while keeping the original intact.
4. Real-world use:
   - Sort transactions (highest deposits or withdrawals first)
   - Sort product lists by price
   - Sort customers alphabetically
*/


//=============================================================================
// ARRAY GROUPING with Object.groupBy (ES2023 feature)
//=============================================================================

console.log('----------------ARRAY GROUPING-----------------');

/*
 Object.groupBy(iterable, callbackFn):
 -------------------------------------
 - Takes an array (iterable) and a grouping function (callback).
 - Returns an object where:
     → Keys = group names (as returned by callback function).
     → Values = arrays of elements that belong to those groups.
*/

// Example: Bank movements
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Group movements into 'deposit' (positive) and 'withdrawal' (negative)
const groupedMovements = Object.groupBy(movements, mov => mov > 0 ? 'deposit' : 'withdrawal');

console.log('Grouped movements:', groupedMovements);

// Output:
// {
//   deposit: [200, 450, 3000, 70, 1300],
//   withdrawal: [-400, -650, -130]
// }

//=============================================================================
// REAL-WORLD EXAMPLE: Group products by category
//=============================================================================
console.log('----------------REAL-WORLD EXAMPLE-----------------');

const shopItems = [
  { name: 'Apple', category: 'fruits', price: 1.5 },
  { name: 'Carrot', category: 'vegetables', price: 0.9 },
  { name: 'Banana', category: 'fruits', price: 1.2 },
  { name: 'Broccoli', category: 'vegetables', price: 2.1 },
  { name: 'Steak', category: 'meat', price: 12 },
  { name: 'Chicken', category: 'meat', price: 7.5 }
];

// Group items by category
const groupedByCategory = Object.groupBy(shopItems, item => item.category);

console.log('Grouped shop items:', groupedByCategory);

// Output looks like:
// {
//   fruits: [
//     { name: 'Apple', category: 'fruits', price: 1.5 },
//     { name: 'Banana', category: 'fruits', price: 1.2 }
//   ],
//   vegetables: [
//     { name: 'Carrot', category: 'vegetables', price: 0.9 },
//     { name: 'Broccoli', category: 'vegetables', price: 2.1 }
//   ],
//   meat: [
//     { name: 'Steak', category: 'meat', price: 12 },
//     { name: 'Chicken', category: 'meat', price: 7.5 }
//   ]
// }

//=============================================================================
// REAL-WORLD EXAMPLE 2: Group transactions by type (large vs small)
//=============================================================================
const groupedBySize = Object.groupBy(movements, mov => Math.abs(mov) > 1000 ? 'large' : 'small');
console.log('Grouped by size:', groupedBySize);

// Example output:
// {
//   small: [200, 450, -400, -650, -130, 70],
//   large: [3000, 1300]
// }

//=============================================================================
// LEARNING POINTS
//=============================================================================
/*
1. Object.groupBy() replaces common "manual grouping" loops with a concise API.
2. Groups are created based on a callback function condition.
   - Return 'deposit' → goes into deposit group
   - Return 'withdrawal' → goes into withdrawal group
3. Groups are stored in plain objects with properties as group keys.
4. Very useful in real-world projects for:
   - Banking apps → group deposits vs withdrawals, or large vs small transactions
   - E-commerce → group products by categories
   - Analytics → group users by subscription level or region
*/


