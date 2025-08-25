'use strict';
///////////////////////////////////////////////////////////////////////
// CONVERTING AND CHECKING NUMBERS
///////////////////////////////////////////////////////////////////////

/*
1. Basic number equality:
- JavaScript treats 23 and 23.0 as equal (both are numbers).
*/
console.log(23 === 23.0); // true

/*
2. Floating-point precision issues:
- 0.1 + 0.2 is not exactly 0.3 due to binary floating-point arithmetic.
*/
console.log(0.1 + 0.2); // 0.30000000000000004 (approximation error)
console.log(0.1 + 0.2 === 0.3); // false

/*
3. Converting strings to numbers:
- Number() constructor converts string to number, returns NaN if invalid.
- Unary plus (+) also converts string to number.
*/
console.log(Number('23'));   // 23
console.log(+'23');          // 23

/*
4. Parsing integers and floats from strings:
- parseInt tries to parse integer from start of string, stops at first non-digit.
- parseFloat parses floating-point numbers.
- Both ignore trailing non-numeric characters.
*/
console.log(Number.parseInt('30px', 10));   // 30
console.log(Number.parseInt('e30', 10));    // NaN (not a number; 'e' invalid start)

console.log(Number.parseInt('2.5rem'));     // 2 (stops at decimal)
console.log(Number.parseFloat('2.5rem'));   // 2.5 (parses float correctly)

/*
5. Checking for NaN (Not a Number):
- Number.isNaN returns true only for actual NaN values.
- String and other non-numbers convert differently and are not NaN.
*/
console.log(Number.isNaN(20));         // false (20 is a number)
console.log(Number.isNaN('20'));       // false ('20' is a string, not NaN)
console.log(Number.isNaN(+'20x'));     // true (+'20x' results in NaN)
console.log(Number.isNaN(23 / 0));     // false (23/0 is Infinity, not NaN)

/*
6. Checking finite numbers:
- Number.isFinite returns true only for finite numbers (no Infinity or NaN).
- Coerces strings or invalid numbers to false.
*/
console.log(Number.isFinite(20));        // true
console.log(Number.isFinite('20'));      // false (string, not number)
console.log(Number.isFinite(+'20x'));    // false (NaN)
console.log(Number.isFinite(23 / 0));    // false (Infinity)

/*
7. Checking integers:
- Number.isInteger returns true if value is an integer (no decimals).
- 23 and 23.0 count as integers.
- Infinity is not integer.
*/
console.log(Number.isInteger(23));        // true
console.log(Number.isInteger(23.0));      // true (23.0 is integer)
console.log(Number.isInteger(23 / 0));    // false (Infinity is not integer)


//=============================================================================
// REAL-WORLD BANKING EXAMPLE: Validating User Input for Amounts
//=============================================================================

function validateTransactionAmount(input) {
  // Convert input string to number using Number()
  const amount = Number(input);

  // Check if amount is a valid finite number and integer
  if (!Number.isFinite(amount)) {
    console.log('Invalid amount: Not a finite number');
    return false;
  }
  if (!Number.isInteger(amount)) {
    console.log('Invalid amount: Must be a whole number');
    return false;
  }
  if (amount <= 0) {
    console.log('Invalid amount: Must be positive');
    return false;
  }
  console.log('Valid amount:', amount);
  return true;
}

// Test with valid and invalid inputs
validateTransactionAmount('250');    // Valid amount: 250
validateTransactionAmount('250.5');  // Invalid amount: Must be a whole number
validateTransactionAmount('abc');    // Invalid amount: Not a finite number
validateTransactionAmount('-100');   // Invalid amount: Must be positive

///////////////////////////////////////////////////////////////////////
// MATH AND ROUNDING
///////////////////////////////////////////////////////////////////////

/*
1. Square root and powers:
- Math.sqrt(x) returns the square root of x.
- x ** (1/2) is another way to calculate square root.
- x ** (1/3) calculates cube root.
*/
console.log(Math.sqrt(25));       // 5
console.log(25 ** (1 / 2));       // 5
console.log(8 ** (1 / 3));        // 2

/*
2. Math.max() and Math.min():
- Returns the maximum or minimum value from a list of numbers.
- Converts string numbers like '23' to 23 automatically.
- Returns NaN if any argument is invalid (e.g., '23px').
*/
console.log(Math.max(5, 18, 23, 11, 2));       // 23
console.log(Math.max(5, 18, '23', 11, 2));     // 23 (string converted to number)
console.log(Math.max(5, 18, '23px', 11, 2));   // NaN (invalid string)

console.log(Math.min(5, 18, 23, 11, 2));       // 2
console.log(Math.min(5, 18, '23', 11, 2));     // 2
console.log(Math.min(5, 18, '23px', 11, 2));   // NaN

/*
3. Calculating area of a circle:
- Parse the radius from a string with units.
- Use Math.PI and power for calculation.
*/
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.159...

/*
4. Random numbers:
- Math.random() generates float in [0, 1).
- To get integer in a range, multiply and floor.
- Custom function to get random int between min and max inclusive.
*/
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));

/*
5. Rounding functions:
- Math.trunc() removes decimal part (truncates).
- Math.round() rounds to nearest integer.
- Math.floor() rounds down to integer.
- Math.ceil() rounds up to integer.
- trunc and floor differ for negative numbers (floor rounds down more).
*/
console.log(Math.trunc(23.3));      // 23
console.log(Math.round(23.3));      // 23
console.log(Math.round(23.6));      // 24

console.log(Math.floor(23.3));      // 23
console.log(Math.ceil(23.3));       // 24

console.log(Math.trunc(-23.3));     // -23
console.log(Math.floor(-23.3));     // -24

/*
6. toFixed():
- Formats number to fixed decimal places, returns string.
- You can convert back to number with unary plus (+).
*/
console.log((2.7).toFixed(0));      // '3'
console.log((2.7).toFixed(3));      // '2.700'
console.log((2.345).toFixed(2));    // '2.35'
console.log(+(2.345).toFixed(2));   // 2.35 (number)

/*
REAL-WORLD BANKING EXAMPLE: Transaction Amount Processing
=========================================================

- You receive transaction amounts as strings with units or extra spaces.
- Use parseFloat to extract numeric parts.
- Calculate transaction fees (5% here) using Math methods.
- Rounding the fee properly using Math.ceil or toFixed ensures no loss of cents.
*/

function calculateTransactionFee(amountString) {
  // Parse numeric amount
  const amount = Number.parseFloat(amountString);
  if (Number.isNaN(amount) || amount <= 0) {
    console.log('Invalid amount!');
    return 0;
  }

  // Calculate 5% fee
  const fee = amount * 0.05;

  // Round fee up to nearest cent
  const roundedFee = Math.ceil(fee * 100) / 100;

  console.log(`Transaction amount: €${amount.toFixed(2)}`);
  console.log(`Transaction fee (5%): €${roundedFee.toFixed(2)}`);

  return roundedFee;
}

calculateTransactionFee('123.45 USD');
calculateTransactionFee('100abc');
calculateTransactionFee('-50');


///////////////////////////////////////////////////////////////////////
// REMAINDER OPERATOR (%)
///////////////////////////////////////////////////////////////////////

/*
- The remainder operator `%` returns the remainder after dividing one number by another.
- Useful for checking if a number is divisible by another (no remainder),
  for even/odd number checks, and for cyclic behaviors in applications.
*/

// Basic remainder and division examples
console.log(5 % 2); // 1 (5 divided by 2 leaves remainder 1)
console.log(5 / 2); // 2.5 (ordinary division)

console.log(8 % 3); // 2 (8 divided by 3 leaves remainder 2)
console.log(8 / 3); // 2.666...

// Check if a number is divisible by another (remainder zero means divisible)
console.log(5 % 2 === 0); // false (5 is odd)
console.log(8 % 3 === 0); // false (8 isn't divisible by 3)
console.log(6 % 2 === 0); // true (6 is even)

// Function to check if a number is even (remainder 0 when divided by 2)
const isEven = n => n % 2 === 0;
console.log(isEven(23)); // false
console.log(isEven(24)); // true

///////////////////////////////////////////////////////////////////////
// REAL-TIME EXAMPLE: Using remainder to assign cyclic categories
///////////////////////////////////////////////////////////////////////

/*
Imagine a banking app where we assign customers to different support groups in a cycle
(e.g., Group 0, Group 1, Group 2). This helps distribute workload evenly.
Using remainder operator %, we can cycle through groups based on user ID or position.
*/

const customerIDs = [101, 102, 103, 104, 105, 106];

// Assign each customer to one of 3 groups based on ID modulo 3
const totalGroups = 3;

customerIDs.forEach(id => {
  const groupNumber = id % totalGroups;
  console.log(`Customer ID ${id} is assigned to group ${groupNumber}`);
});

// Output:
// Customer ID 101 is assigned to group 2
// Customer ID 102 is assigned to group 0
// Customer ID 103 is assigned to group 1
// Customer ID 104 is assigned to group 2
// Customer ID 105 is assigned to group 0
// Customer ID 106 is assigned to group 1

/*
LEARNING POINTS:
- `%` finds remainder, enabling cyclic or repeating patterns.
- Used to evenly distribute entities across fixed "buckets" or groups.
- Common in scheduling, load balancing, game turns, or rotating features.
*/

///////////////////////////////////////////////////////////////////////
// NUMERIC SEPARATORS (_)
///////////////////////////////////////////////////////////////////////

/*
- Numeric separators underscore (_) were introduced to make large or complex numbers easier to read.
- You can place underscores inside numeric literals to group digits visually.
- These separators do NOT affect the numeric value itself.
- Examples include grouping thousands, currency amounts, or parts of floating-point numbers.
*/

// Large number representing diameter of the solar system in kilometers
const diameterSolarSystem = 245_800_000_000;
console.log(diameterSolarSystem); // 245800000000

// Price without decimal, using separator for readability
const price = 345_99; // This is actually 34599 (pay attention!)
console.log(price); // 34599

// Price in cents (multiply by 100)
const priceInCents = 345_99 * 100;
console.log(priceInCents); // 3459900

// Two ways to write 1500 using numeric separators
const transferFee1 = 15_00;
const transferFee2 = 1_500;

console.log(transferFee1, transferFee2); // 1500 1500

// Numeric separator can also be used in floating point numbers
const PI = 3.14_159;
console.log(PI); // 3.14159

// Parsing strings with underscores does NOT work - underscore is not valid in string numbers
console.log(Number.parseFloat('3.14_159')); // 3.14 (stops parsing at underscore)
console.log(Number('23000'));                // 23000
console.log(Number('23_000'));               // NaN - invalid number format in string

///////////////////////////////////////////////////////////////////////
// REAL-WORLD EXAMPLE: Bank Account Balance Constants
///////////////////////////////////////////////////////////////////////

/*
Imagine you are defining constants for min/max allowed balances and transfer limits.
Using numeric separators makes these large numbers readable and understandable at a glance.
*/

const MIN_BALANCE = 500_00;        // minimum balance (cents)
const MAX_BALANCE = 1_000_000_00;  // maximum balance (in cents)
const MAX_TRANSFER = 25_000_00;    // max transfer amount (in cents)

console.log(`Min balance is €${MIN_BALANCE / 100}`);
console.log(`Max balance is €${MAX_BALANCE / 100}`);
console.log(`Max transfer is €${MAX_TRANSFER / 100}`);

/*
LEARNING POINTS:
- Numeric separators are visual aids only; they don't change values.
- You cannot use numeric separators inside strings representing numbers.
- Useful when working with large numbers (money, distances, counts) for better readability.
- Supported in modern browsers and Node.js versions.

💡 Extra tip:
Avoid placing underscores:

At the start or end of a number literal.
Next to decimal points.
In strings representing numbers.
*/
