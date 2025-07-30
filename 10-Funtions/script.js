'use strict';
//////////////////////////////////////////////////////////////////////
//-------------------- DEFAULT PARAMETERS IN JAVASCRIPT FUNCTIONS -----------------------//
// Default parameters allow you to set default values for function parameters.
// If an argument isn't provided when the function is called, the default value is used.

// This is very useful for making your functions more flexible and reducing redundant code.

console.log(
  '------------------------ DEFAULT PARAMETERS ---------------------------',
);
const flightBooking = [];

// Example function using default parameters
const createBooking = function (
  flightNum,
  numPassengers = 1, // Default: 1 passenger if not specified
  price = 199 * numPassengers, // Default: price calculated based on passengers
) {
  // In ES5 (before default parameters), you'd often see:
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  flightBooking.push(booking);
};

// Let's see some real-time examples of how default parameters work:
createBooking('LH123', 2, 800); // 2 passengers, custom price
createBooking('LH123', 2); // 2 passengers, price defaults to 199*2 = 398
createBooking('LH123'); // 1 passenger (default), price 199*1 = 199
createBooking('LH123', undefined, 1000); // "undefined" triggers the default for numPassengers (=1), price set to 1000

console.log(flightBooking);

/*
    Real-time Example: Imagine you are booking airline tickets online.
    - If you choose the number of passengers, the system calculates price accordingly.
    - If you skip entering number of passengers, it assumes 1 passenger.
    - If you provide a price, system uses it; otherwise, it calculates based on default rate.
    Default parameters simplify situations like these and prevent errors in your code.
*/

///////////////////////////////////////////////////////////////////////////
//----------------- HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE ----------------------//
// In JavaScript:
// - Primitive values (like strings, numbers, booleans) are passed BY VALUE: the function gets a copy.
// - Objects (including arrays, functions) are passed BY REFERENCE: the function gets a reference to the original object.

// This means changes to primitives inside the function do NOT affect the original value,
// but changes to objects INSIDE a function DO affect the original object outside.

// Real-World Analogy:
// Imagine you give your friend a copy of a ticket (primitive value) -- whatever they do with their copy doesn't affect your original.
// But if you give them your car keys (object reference), whatever they do with the car affects your actual car!

console.log(
  '------------------------ VALUE VS. REFERENCE ---------------------------',
);

// Primitive value (string)
const flightNum = 'LH234';

// Object (passenger)
const passenger = {
  fullName: 'Suraj Ingole',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // This only changes the local copy. Original flightNum is unchanged.
  passenger.fullName = 'Mr. ' + passenger.fullName; // This changes the passed-in object's property (will be visible outside).

  if (passenger.passport === 123456789) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flightNum, passenger);
console.log(flightNum); // Output: 'LH234' --> Unchanged, because primitives are passed by value.
console.log(passenger); // Output: fullName has changed, as objects are passed by reference.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(passenger); // The passport property is changed permanently.
checkIn(flightNum, passenger); // This time the passport is different, so the check-in alert will show "Wrong passport!"
console.log(passenger);

/*
    Real-Time Example:
    - Let's say you're registering a passenger for a flight.
    - The flight number they book is stored as a primitive value; if you change it inside a function, the outside value doesn't update.
    - The passenger's data (as an object) is updated inside functions (e.g. adding "Mr."), and those changes persist everywhere.
    - If the passport number is changed, the check-in system will detect the mismatch.
*/
///////////////////////////////////////////////////////////////////////////////////
//FIRST CLASS AND HIGHER-ORDER FUNCTIONS
//------------------ FIRST-CLASS FUNCTIONS & HIGHER-ORDER FUNCTIONS ------------------------//
// In JavaScript, functions are "first-class citizens":
// - They can be stored in variables, passed as arguments, returned from other functions, etc.
// - This allows for powerful programming patterns like callbacks and function composition.
//
// A function that takes another function as an argument, or returns a function, is called a "higher-order function".

// Example 1: First-class functions (assign to variables, pass as argument, return from function)
console.log(
  '------------------------ FIRST-CLASS FUNCTIONS ---------------------------',
);
const greet = function (name) {
  return `Hello, ${name}!`;
};

// Assigning a function to another variable
const greeter = greet; // No parentheses! Just reference.
console.log(greeter('Suraj')); // Output: "Hello, Suraj!"

// Passing a function as an argument (callback)
function processUserInput(callback) {
  const name = 'Priya';
  return callback(name);
}

console.log(processUserInput(greet)); // Output: "Hello, Priya!"

// Returning a function from another function (higher-order function)
console.log(
  '------------------------ HIGHER-ORDER FUNCTIONS ---------------------------',
);
function multiplier(factor) {
  // Returns a new function which multiplies any input by `factor`
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2); // double is now a function that will multiply any input by 2
console.log(double(5)); // Output: 10

// Example of callback functions & higher-order functions

// This function transforms a string: removes all spaces and converts to lowercase
const oneWord = function (str) {
  // Regex `/ /g` matches all spaces, '' replaces with nothing
  return str.replace(/ /g, '').toLowerCase();
};

// This function transforms a string: uppercases only the first word
const upperFirstWord = function (str) {
  // Split the string into first word and the rest
  const [first, ...others] = str.split(' ');
  // Uppercase the first word, join back with the rest
  return [first.toUpperCase(), ...others].join(' ');
};

//------------------ HIGHER-ORDER FUNCTION EXAMPLE --------------------//
// "transformer" is a higher-order function: it accepts a function (fn) as an argument
// Higher-order functions can take other functions (callbacks) and use or execute them
const transformer = function (str, fn) {
  // Log the original string
  console.log('Original string: ', str);
  // Call/execute the passed-in function and log result
  console.log('Transformed string: ', fn(str));
  // Log the name of the function used as callback
  console.log('Transformed by: ', fn.name);
};

//------------------ Passing upperFirstWord as a callback --------------------//
// Here, we pass upperFirstWord (a function) as an argument to transformer
// transformer calls upperFirstWord on the original string
transformer('Javascript is the best!', upperFirstWord);

//------------------ Passing oneWord as a callback --------------------//
// This time, we use oneWord as the callback, showing how easily we can change logic!
transformer('Javascript is the best!', oneWord);

//------------------ Event Listener as Higher-Order Function Example --------------------//
// Event listeners are a real-world example of higher-order functions in action!
// addEventListener expects a function as its second argument; it will run that function WHEN the event happens
const highFive = function () {
  console.log('👋');
};

// Whenever the user clicks anywhere on the page, highFive function runs
document.body.addEventListener('click', highFive);

/*
    What you'll learn from this code:
    - You can pass functions as arguments (callbacks) to other functions.
    - Functions that accept other functions as input or output are called higher-order functions.
    - Browser methods like addEventListener are higher-order functions, using callbacks to respond to user actions.
    - This makes your programs much more flexible and reusable!
*/

// Real-time Example: An event handler in the browser
/*
document.getElementById('myBtn').addEventListener('click', greetUser);
function greetUser() {
    alert('Welcome!');
}
*/
// Here, the 'addEventListener' is a higher-order function because it takes another function as an argument!

/*
    Real-Life Analogy:
    - Imagine you can write a recipe and hand it to a chef (the function is a value, just like a recipe).
    - You can give the recipe (function) to someone, ask them to follow it, or create a new recipe based on their preferences.
    - In JavaScript, functions are this flexible!
*/

// Summary:
// - First-class functions: Functions are treated as values (store, pass, return).
// - Higher-order functions: Functions that operate on other functions (take them as params or return them).

//////////////////////////////////////////////////////////////////////////////////////////////
