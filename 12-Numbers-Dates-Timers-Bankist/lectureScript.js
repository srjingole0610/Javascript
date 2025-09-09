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
console.log(Number('23')); // 23
console.log(+'23'); // 23

/*
4. Parsing integers and floats from strings:
- parseInt tries to parse integer from start of string, stops at first non-digit.
- parseFloat parses floating-point numbers.
- Both ignore trailing non-numeric characters.
*/
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e30', 10)); // NaN (not a number; 'e' invalid start)

console.log(Number.parseInt('2.5rem')); // 2 (stops at decimal)
console.log(Number.parseFloat('2.5rem')); // 2.5 (parses float correctly)

/*
5. Checking for NaN (Not a Number):
- Number.isNaN returns true only for actual NaN values.
- String and other non-numbers convert differently and are not NaN.
*/
console.log(Number.isNaN(20)); // false (20 is a number)
console.log(Number.isNaN('20')); // false ('20' is a string, not NaN)
console.log(Number.isNaN(+'20x')); // true (+'20x' results in NaN)
console.log(Number.isNaN(23 / 0)); // false (23/0 is Infinity, not NaN)

/*
6. Checking finite numbers:
- Number.isFinite returns true only for finite numbers (no Infinity or NaN).
- Coerces strings or invalid numbers to false.
*/
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false (string, not number)
console.log(Number.isFinite(+'20x')); // false (NaN)
console.log(Number.isFinite(23 / 0)); // false (Infinity)

/*
7. Checking integers:
- Number.isInteger returns true if value is an integer (no decimals).
- 23 and 23.0 count as integers.
- Infinity is not integer.
*/
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true (23.0 is integer)
console.log(Number.isInteger(23 / 0)); // false (Infinity is not integer)

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
validateTransactionAmount('250'); // Valid amount: 250
validateTransactionAmount('250.5'); // Invalid amount: Must be a whole number
validateTransactionAmount('abc'); // Invalid amount: Not a finite number
validateTransactionAmount('-100'); // Invalid amount: Must be positive

///////////////////////////////////////////////////////////////////////
// MATH AND ROUNDING
///////////////////////////////////////////////////////////////////////

/*
1. Square root and powers:
- Math.sqrt(x) returns the square root of x.
- x ** (1/2) is another way to calculate square root.
- x ** (1/3) calculates cube root.
*/
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

/*
2. Math.max() and Math.min():
- Returns the maximum or minimum value from a list of numbers.
- Converts string numbers like '23' to 23 automatically.
- Returns NaN if any argument is invalid (e.g., '23px').
*/
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23 (string converted to number)
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN (invalid string)

console.log(Math.min(5, 18, 23, 11, 2)); // 2
console.log(Math.min(5, 18, '23', 11, 2)); // 2
console.log(Math.min(5, 18, '23px', 11, 2)); // NaN

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
console.log(Math.trunc(23.3)); // 23
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.6)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.ceil(23.3)); // 24

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

/*
6. toFixed():
- Formats number to fixed decimal places, returns string.
- You can convert back to number with unary plus (+).
*/
console.log((2.7).toFixed(0)); // '3'
console.log((2.7).toFixed(3)); // '2.700'
console.log((2.345).toFixed(2)); // '2.35'
console.log(+(2.345).toFixed(2)); // 2.35 (number)

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

// Using separators for prices can be tricky. The underscore is NOT a decimal point.
const priceAsInteger = 345_99; // This is the integer 34599, not 345.99
console.log(priceAsInteger);
// A common pattern for currency is to store the value in cents.
const priceInCents = 345_99; // Represents $345.99 by storing 34599 cents
console.log(`The price in dollars is $${priceInCents / 100}.`);

// Two ways to write 1500 using numeric separators
const transferFee1 = 15_00;
const transferFee2 = 1_500;

console.log(transferFee1, transferFee2); // 1500 1500

// Numeric separator can also be used in floating point numbers
const PI = 3.14_159;
console.log(PI); // 3.14159

// Parsing strings with underscores does NOT work - underscore is not valid in string numbers
console.log(Number.parseFloat('3.14_159')); // 3.14 (stops parsing at underscore)
console.log(Number('23000')); // 23000
console.log(Number('23_000')); // NaN - invalid number format in string

///////////////////////////////////////////////////////////////////////
// REAL-WORLD EXAMPLE: Bank Account Balance Constants
///////////////////////////////////////////////////////////////////////

/*
Imagine you are defining constants for min/max allowed balances and transfer limits.
Using numeric separators makes these large numbers readable and understandable at a glance.
*/

const MIN_BALANCE = 500_00; // minimum balance (cents)
const MAX_BALANCE = 1_000_000_00; // maximum balance (in cents)
const MAX_TRANSFER = 25_000_00; // max transfer amount (in cents)

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
- At the start or end of a number literal.
- Next to decimal points.
- In strings representing numbers.
*/

///////////////////////////////////////////////////////////////////////
// WORKING WITH BigInt (for handling very large integers)
///////////////////////////////////////////////////////////////////////

/*
1. JavaScript Numbers are accurate and safe up to Number.MAX_SAFE_INTEGER (2^53 - 1)
   Beyond this limit, precision is lost because numbers are stored in 64-bit float.
*/

console.log(2 ** 53 - 1); // 9007199254740991 (max safe integer)
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Adding beyond max safe integer causes precision errors:
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992 (correct)
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (incorrect, repeated)
console.log(Number.MAX_SAFE_INTEGER + 3); // 9007199254740994 (skipped 9007199254740993)

//=============================================================================
// BigInt: Represents integers beyond the safe integer range with arbitrary precision
//=============================================================================

// Create a BigInt by appending 'n' to the end of an integer literal
console.log(454546246426426575246447425243626n); // very large number as BigInt

// Or create BigInt from number or string using BigInt()
console.log(BigInt(45)); // converts 45 to BigInt 45n

// Arithmetic with BigInt:
console.log(10000n + 20000n); // 30000n
console.log(335353n * 3531513n); // big number result

// Note: Mixing Number and BigInt directly causes an error
// console.log(2 * 3453535n); // Throws TypeError

// Use both as BigInt explicitly:
console.log(2n * 3453535n); // 6907070n

//=============================================================================
// Comparison with BigInt:
console.log(20n > 15); // true (BigInt compares with Number correctly)
console.log(20n === 20); // false (different types, strict equality fails)

//=============================================================================
// BigInt and string concatenation implicitly converts BigInt to string:
console.log(5353535325354n + ' is REALLY big!!!!'); // "5353535325354 is REALLY big!!!!"

//=============================================================================
// Some Math operations (like Math.sqrt) don't support BigInt and will throw errors:
// console.log(Math.sqrt(2n)); // Uncaught TypeError

//=============================================================================
// Division with BigInt rounds down (truncates fractional part):
console.log(11n / 3n); // 3n
console.log(11 / 3); // 3.6666666666666665 (normal floating point division)

//=============================================================================
// REAL-WORLD BANKING EXAMPLE:
///////////////////////////////////////////////////////////////////

/*
A banking app for very wealthy clients needs to handle extraordinarily large account balances without losing precision.
BigInt ensures exact calculations for operations like transfers or interest computation.

Example: Adding large balances safely
*/

const richClientBalance1 = 9007199254740995n; // safely beyond Number.MAX_SAFE_INTEGER
const richClientBalance2 = BigInt('123456789012345678901234567890');

const totalRichBalance = richClientBalance1 + richClientBalance2;
console.log('Total BigInt balance:', totalRichBalance);

// Trying normal number arithmetic would lose precision here!

/*
LEARNING POINTS:
- BigInt is for integers larger than Number.MAX_SAFE_INTEGER
- Use 'n' postfix or BigInt() constructor to create BigInts
- BigInts can’t be mixed with Numbers directly; convert explicitly if needed.
- Division with BigInt truncates decimals.
- Some Math methods don’t support BigInt.
- Useful in financial apps requiring arbitrary large values precision.
*/

///////////////////////////////////////////////////////////////////////
// Creating Dates: Demonstrating Various Ways
///////////////////////////////////////////////////////////////////////

// Create current date and time
const currentDate = new Date(); // Returns current date and time
console.log(currentDate);

// Create date from string formats (browser-compatible)
// Month names or ISO format can be used
console.log(new Date('December 24, 2015')); // Human-readable format (slightly browser-dependent)
console.log(new Date('2015-12-24')); // ISO format (YYYY-MM-DD)—recommended for reliability

// Create date specifying year, month, day, hours, minutes, seconds
// Note: Month is 0-indexed (January=0, November=10)
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Nov 19, 2037 at 15:23:05
console.log(new Date(2037, 10, 31)); // Nov 31, 2037 (will overflow to Dec 1)

// Create date from milliseconds since Unix Epoch (Jan 1, 1970, 00:00:00)
console.log(new Date(0)); // Returns Unix Epoch start
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days after Unix Epoch

///////////////////////////////////////////////////////////////////////
// Extracting Date Components
///////////////////////////////////////////////////////////////////////

const futureDate = new Date(2037, 10, 19, 15, 23); // Custom future date
console.log(futureDate);

// Get year, month, day, etc.
console.log(`Future year: ${futureDate.getFullYear()}`); // 2037
console.log(`Future month: ${futureDate.getMonth()}`); // 10 (November)
console.log(`Future day: ${futureDate.getDate()}`); // 19
console.log(`Future day of week: ${futureDate.getDay()}`); // 4 (Thursday)
console.log(`Future hours: ${futureDate.getHours()}`); // 15
console.log(`Future minutes: ${futureDate.getMinutes()}`); // 23
console.log(futureDate.getSeconds()); // 0
console.log(futureDate.toISOString()); // ISO string format
console.log(futureDate.getTime()); // Milliseconds since Unix Epoch

///////////////////////////////////////////////////////////////////////
// Setting Date Components (Mutating)
///////////////////////////////////////////////////////////////////////

futureDate.setFullYear(2040); // Mutate year (now 2040)
console.log(futureDate);

///////////////////////////////////////////////////////////////////////
// Real-Time Example: Countdown to Future Date
///////////////////////////////////////////////////////////////////////

// Let's create a dynamic countdown timer to a future event (e.g. New Year's Eve)
const countdownTarget = new Date('2025-12-31T23:59:59');

function showCountdown() {
  const now = new Date();
  const diff = countdownTarget - now; // ms difference

  // Calculate remaining days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  console.log(
    `Countdown to New Year: ${days}d ${hours}h ${minutes}m ${seconds}s`,
  );
}

// Call every second to update countdown (in real app, use setInterval)
showCountdown();

///////////////////////////////////////////////////////////////////////
// Key Learning Highlights
///////////////////////////////////////////////////////////////////////
// - Various Date constructor usages: empty (now), string, numbers, date components[1][3][6]
// - Extract and set year, month, etc. via get/set methods[1][3]
// - Real-time scenarios: timers, scheduling, and duration calculations[6]

///////////////////////////////////////////////////////////////////////
// Operations with Dates
///////////////////////////////////////////////////////////////////////

// Create a specific future date using the Date constructor
const futureDateNew = new Date(2037, 10, 19, 15, 23);

// Convert Date object to timestamp (number of milliseconds since Jan 1, 1970)
// The unary plus operator (+) before a Date converts it to a number (timestamp)
console.log(+futureDateNew); // e.g. 2142237180000

///////////////////////////////////////////////////////////////////////
// Calculating Difference Between Dates
///////////////////////////////////////////////////////////////////////

// Function demonstrating date subtraction to get number of days between two dates
// Subtracting two dates returns milliseconds difference
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); // Divide ms by ms per day

// Example: Find days between March 14, 2037 and Feb 22, 2037
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 2, 22));
console.log(days1); // Prints difference in days (e.g. 20)

///////////////////////////////////////////////////////////////////////
// Real-Time Example: Days Until a Birthday
///////////////////////////////////////////////////////////////////////

// Calculate how many days until a user's next birthday
function daysUntilBirthday(birthMonth, birthDay) {
  const today = new Date();
  let nextBirthday = new Date(today.getFullYear(), birthMonth - 1, birthDay);
  if (nextBirthday < today) {
    // If birthday already passed this year, set to next year
    nextBirthday = new Date(today.getFullYear() + 1, birthMonth - 1, birthDay);
  }
  const daysLeft = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24)); // Round up to whole days
  return daysLeft;
}

// Example usage for birthday on October 6 (month=10):
const results = daysUntilBirthday(10, 6);
console.log(`Days until next birthday: ${results}`);

///////////////////////////////////////////////////////////////////////
// Key Learning Highlights
///////////////////////////////////////////////////////////////////////
// - Date objects can be subtracted to get millisecond differences[5][6]
// - Timestamps (ms since Unix Epoch) allow precise arithmetic[7]
// - To convert ms to days, divide by (1000*60*60*24)
// - Date comparisons work with <, >, == for logic and branching[6]
// - Real use case: calculating days to future events, durations, or age

///////////////////////////////////////////////////////////////////////
// Internationalizing Numbers (Currency Formatting)
///////////////////////////////////////////////////////////////////////

// Example number to format as a currency amount
const num = 3884764.23;

// Options object for Intl.NumberFormat.
// 'style' set to 'currency' to enable currency formatting.
// 'currency' must be specified per locale—for demo, it will be added in spread/rest pattern below.
const options = {
  style: 'currency',
  currency: 'USD' // Set default currency
  // Extra: You could use 'unit' and 'unitDisplay' for unit formatting (e.g. 'celsius'), see below.
  // useGrouping: false, // (Optional) disables thousands separator/grouping if set to false
};

// Format currency for multiple locales:
// Each line creates a NumberFormat object for the given locale and currency,
// then formats the number as a proper localized currency string.
console.log(
  'US:      ',
  new Intl.NumberFormat('en-US', { ...options, currency: 'USD' }).format(num)
);
console.log(
  'Germany: ',
  new Intl.NumberFormat('de-DE', { ...options, currency: 'EUR' }).format(num)
);
console.log(
  'Syria:   ',
  new Intl.NumberFormat('ar-SY', { ...options, currency: 'SYP' }).format(num)
);
console.log(
  'China:   ',
  new Intl.NumberFormat('zh-CN', { ...options, currency: 'CNY' }).format(num)
);
console.log(
  'India:   ',
  new Intl.NumberFormat('hi-IN', { ...options, currency: 'INR' }).format(num)
);
// Use the user's browser language for formatting as a fallback
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, { ...options }).format(num)
);

///////////////////////////////////////////////////////////////////////
// Real-Time Example: Product Price Display in E-commerce
///////////////////////////////////////////////////////////////////////

// Practical scenario: Display product prices customized to the user's location/currency
function displayProductPrice(price, locale, currency) {
  // Automatically formats the price for currency with correct separators, symbols, and decimal
  let formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(price);
  console.log(`Price for ${locale} (${currency}): ${formatted}`);
}

// Simulate showing the price in different stores
displayProductPrice(14999.5, 'en-US', 'USD'); // US
displayProductPrice(14999.5, 'en-GB', 'GBP'); // UK
displayProductPrice(14999.5, 'de-DE', 'EUR'); // Germany
displayProductPrice(14999.5, 'hi-IN', 'INR'); // India

///////////////////////////////////////////////////////////////////////
// Key Learning Highlights
///////////////////////////////////////////////////////////////////////
// - Use Intl.NumberFormat to instantly format any number as currency based on locale[1][2][6]
// - 'currency' style adds appropriate currency sign, thousands separator, and decimals[1][6]
// - Works for any currency code and locale supported by JavaScript[1]
// - Real-world application: pricing in e-commerce, international invoices, UI display localization[6]


///////////////////////////////////////////////////////////////////////
