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

