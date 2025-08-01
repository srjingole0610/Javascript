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
  // This changes the passed-in object's property, but we first check to avoid adding "Mr. " multiple times.
  if (!passenger.fullName.startsWith('Mr. ')) {
    passenger.fullName = 'Mr. ' + passenger.fullName;
  }

  if (passenger.passport === 123456789) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
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
//------------------------ FUNCTIONS RETURNING FUNCTIONS ---------------------------//
// In JavaScript, functions are "first-class citizens," which means:
// - You can return a function from another function.
// - The returned function can be called later, with its original context (closure).
//
// Why is this useful?
// - You can create more specific functions from general ones.
// - Enables patterns like "function factories" and "partial application".

const greetNew = function (greeting) {
  // greetNew returns a function that remembers the 'greeting' argument!
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greetNew('Hey'); // greeterHey is now a function expecting just a name
greeterHey('Suraj'); // Output: "Hey Suraj"
greeterHey('Priya'); // Output: "Hey Priya"
// You can also call both functions at once:
greetNew('Hello')('Suraj'); // Output: "Hello Suraj"

// Real-time Example:
// Imagine you want to create personalized greeting functions for a website:
// - One for morning: greetNew('Good morning')
// - One for evening: greetNew('Good evening')
// - Now you only need to pass the name each time, keeping code DRY and readable.

//------------------------ ARROW FUNCTIONS RETURNING FUNCTIONS ---------------------------//
// The same logic, but with ES6 arrow function shortcut!
const greetNewArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetNewArrow('Hi') returns a function, then ('Suraj') calls it:
greetNewArrow('Hi')('Suraj'); // Output: "Hi Suraj"

/*
    What you'll learn from this code:
      - You can return a function from another function.
      - The inner (returned) function "remembers" values from the outer function (closure).
      - This is useful for creating partially-applied or specialized functions.
      - Common in event handling, configuration, or when building APIs.
*/
//////////////////////////////////////////////////////////////////////////////////////////////
//------------------------ CALL, APPLY, AND BIND METHODS ---------------------------//

// Example airline objects with booking functionality using 'this' keyword
const lufthansaAirlines = {
  airlineName: 'Lufthansa',
  iataCode: 'LH',
  flightBookings: [],
  book(flightNum, passengerName) {
    // 'this' refers to the airline object calling this method
    console.log(
      `${passengerName} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`,
    );
    this.flightBookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};

// Calling the method normally on lufthansaAirlines object
lufthansaAirlines.book(239, 'Suraj Ingole');
lufthansaAirlines.book(635, 'John Smith');
console.log(lufthansaAirlines);

const eurowingAirlines = {
  airlineName: 'Eurowings',
  iataCode: 'EW',
  flightBookings: [],
};

// Extracting the book method from lufthansaAirlines
const bookingFlight = lufthansaAirlines.book;
// bookingFlight(23, 'Sarah Williams'); // ❌ This would fail because 'this' is undefined in this context.

//------------------------ CALL METHOD ---------------------------//
// 'call' allows you to call a function and explicitly set 'this' keyword
// Syntax: function.call(thisArg, arg1, arg2, ...)

console.log('------------------------ CALL METHOD ---------------------------');
bookingFlight.call(lufthansaAirlines, 23, 'Sarah Williams'); // Works because 'this' = lufthansaAirlines
console.log(lufthansaAirlines);
bookingFlight.call(eurowingAirlines, 239, 'Mary Cooper'); // 'this' = eurowingAirlines
console.log(eurowingAirlines);

const swissAirlines = {
  airlineName: 'Swiss Air Lines',
  iataCode: 'LX',
  flightBookings: [],
};

bookingFlight.call(swissAirlines, 583, 'Steven Gerrard'); // 'this' = swissAirlines
console.log(swissAirlines);

//------------------------ APPLY METHOD ---------------------------//
// Similar to call method, but accepts arguments as an array
// Syntax: function.apply(thisArg, [arg1, arg2, ...])
console.log(
  '------------------------ APPLY METHOD ---------------------------',
);

const flightData = [583, 'George Cooper'];
bookingFlight.apply(swissAirlines, flightData);
console.log(swissAirlines);

//------------------------ CALL METHOD using spread operator ---------------------------//
// Modern ES6 features allow call usage with spread to mimic apply
console.log(
  '------------------------ CALL METHOD using Array ---------------------------',
);

const flightData1 = [683, 'Lando Norris'];
bookingFlight.call(swissAirlines, ...flightData1);
console.log(swissAirlines);

//------------------------ BIND METHOD ---------------------------//
// bind returns a new function where 'this' keyword is permanently bound to the provided object
// Useful to create copies of functions with preset 'this' or preset parameters (partial application)

console.log('------------------------ BIND METHOD ---------------------------');

const bookFlightEW = bookingFlight.bind(eurowingAirlines);
const bookFlightLH = bookingFlight.bind(lufthansaAirlines);
const bookFlightLX = bookingFlight.bind(swissAirlines);

// Now we can call these bound functions normally
bookFlightEW(14, 'Mark Zuckerberg');
console.log(eurowingAirlines);
bookFlightLH(561, 'Bill Gates');
console.log(lufthansaAirlines);
bookFlightLX(141, 'Elon Musk');
console.log(swissAirlines);

// Partial application example: presetting the flight number 23 for Eurowings
const bookFlightEW23 = bookingFlight.bind(eurowingAirlines, 23);
bookFlightEW23('Suraj Ingole');
bookFlightEW23('Priya Ingole');
bookFlightEW23('John Doe');
console.log(eurowingAirlines);

//------------------------ BIND WITH EVENT LISTENER ---------------------------//
// When passing methods as callbacks (such as event handlers),
// they lose their original 'this' binding unless bound explicitly.
// Hence, we use bind to ensure 'this' inside buyPlane refers to lufthansaAirlines object.

console.log(
  '------------------------ BIND WITH EVENT LISTENER ---------------------------',
);

lufthansaAirlines.planes = 300;
lufthansaAirlines.buyPlane = function () {
  console.log(this); // Logs the lufthansaAirlines object
  this.planes++;
  console.log(this.planes); // Increments the planes count correctly
  alert('Plane Purchased!');
};

// Bind the method so that 'this' inside it refers to lufthansaAirlines
document
  .querySelector('.buy')
  .addEventListener(
    'click',
    lufthansaAirlines.buyPlane.bind(lufthansaAirlines),
  );

//------------------------ PARTIAL APPLICATION ---------------------------//
// Partial application means presetting some arguments for a function,
// making a new function that takes fewer parameters.

console.log(
  '------------------------ PARTIAL APPLICATION ---------------------------',
);

const addTaxValue = (rate, value) => value + value * rate;
console.log(addTaxValue(0.1, 200)); // 220

// Using bind to create a new function where rate is preset to 0.23 (i.e., VAT = 23%)
const addVAT = addTaxValue.bind(null, 0.23);
console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29
console.log(addVAT(19)); // 23.37

//------------------------ Using function returning function (alternative partial application) ---------------------------//
console.log(
  '------------------------ Using function returning function ---------------------------',
);

const addTaxRate = function (rate) {
  // Returns another function that expects the value and applies tax
  return function (value) {
    return value + value * rate;
  };
};

const addVATNew = addTaxRate(0.23); // Fixing rate 0.23
console.log(addVATNew(100)); // 123
console.log(addVATNew(23)); // 28.29
console.log(addVATNew(19)); // 23.37

/*
  Real-time Example for Call, Apply, and Bind:

  Imagine you own several airline companies and have a shared booking function.
  Each airline object has its own details ('this' context).

  1. call()
     - You have a function that belongs to Lufthansa but want to use it to book a flight for Eurowings, so you call it with Eurowings as the context.
     - Like borrowing the booking system temporarily.

  2. apply()
     - Similar to call, but the arguments are passed as an array.
     - Useful when data is already in array format (like user input).

  3. bind()
     - Returns a new function permanently bound to one airline.
     - Like creating a personalized booking function for each airline that you can reuse without setting context again.
     - Also, partial application lets you preset some arguments (e.g., default flight number).

  4. bind with event listeners
     - When handling browser events, 'this' often loses meaning.
     - bind keeps 'this' tied to the expected object even when used as a callback.
*/

////////////////////////////////////////////////////////////////////////////////////
//------------------------ IIFE (Immediately Invoked Function Expression) ---------------------------//
// IIFE is a function that runs immediately after it is defined.
// It is wrapped in parentheses to make it an expression, and then followed by () to invoke it.
// IIFEs are useful to create a new scope, avoid polluting the global namespace,
// and run code only once without needing to call the function again.

// CLASSIC FUNCTION - NOT IIFE:
// Here, runOnce is a function that you must explicitly call to run the code inside it.
const runOnce = function () {
  console.log('This will never run again');
};
runOnce(); // We call the function explicitly once

// IIFE - FUNCTION IS RUN IMMEDIATELY:
// This function runs directly as soon as JavaScript reads it, no explicit call needed.
(function () {
  console.log('This will never run again');
})();

// IIFE USING ARROW FUNCTION:
// Same as above but uses ES6 arrow function syntax.
// Useful for short inline code that runs immediately.
(() => console.log('This will never run again'))();

//------------------------ REAL-TIME EXAMPLE ---------------------------//
// Imagine you want to initialize some app settings or do some setup code
// that should only run once and not interfere or pollute other code variables or functions.
// Using an IIFE helps encapsulate your initialization logic safely.

// Example:
const app = (function () {
  const secretAPIKey = '1234567890'; // Private to this IIFE. WARNING: In a real app, never expose secrets on the client-side!
  console.log('App initialized with secret API key');

  return {
    // Public method to use within the app
    getKey: function () {
      return secretAPIKey;
    },
  };
})();

console.log(app.getKey()); // Access public method
// secretAPIKey is not accessible directly from outside; encapsulation achieved.

//------------------------ SUMMARY ---------------------------//
// - IIFEs are immediately invoked functions used to create private scopes.
// - They prevent polluting global namespace.
// - Useful for initialization code that runs once.
// - Modern JS modules reduce the need for IIFEs but they are still relevant in many scenarios.

///////////////////////////////////////////////////////////////////////////////////////
// CLOSURES IN JAVASCRIPT

console.log('-------------------------------CLOSURE------------------------------------------');

/*
  Closures allow functions to "remember" and access variables from their lexical scope,
  even after the outer function has finished executing.
*/

// secureBooking is an outer function
const secureBooking = function(){
  let passengerCount = 0;        // passengerCount is in the closure scope of the inner function
  
  // Inner function forms a closure over passengerCount
  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

// booker is a function returned by secureBooking, 
// and it "remembers" passengerCount even after secureBooking has finished executing.
const booker = secureBooking();
console.log(booker);           // Prints the function definition
booker();                      // 1 passengers
booker();                      // 2 passengers
booker();                      // 3 passengers
console.dir(booker);           // You can inspect the closure in the browser console


// Additional Example: Closures in Variable Reassignment
console.log('-------------------------------Additional Example-1 ------------------------------------------');

let logDoubleValue ;              // Declared in the global scope

const genericFunction = function(){
  const a = 23;                  // 'a' is in the closure of the returned function
  // Assigning to global variable logDoubleValue references 'a'
  logDoubleValue = function(){
    console.log(a*2);            // Accesses 'a' from outer scope (closure)
  }
}

// Changing what logDoubleValue "closes over"
const newGenericFunction = function(){
  const b = 777;
  logDoubleValue = function(){
    console.log(b*2);            // Now closes over 'b'
  }
}
genericFunction();               // Now logDoubleValue closes over 'a'
console.log(logDoubleValue);
logDoubleValue();                // Output: 46
console.dir(logDoubleValue);


// Reassigning logDoubleValue to close over a different variable
console.log('-------------------------------Reassigning logDoubleValue------------------------------------------');
newGenericFunction();
console.log(logDoubleValue);
logDoubleValue();                // Output: 1554
console.dir(logDoubleValue);


// Closure in Asynchronous Code (setTimeout)
console.log('-------------------------------Additional Example-2 ------------------------------------------');
/*
  Even after boardPassengers has finished executing,
  the callback function passed to setTimeout "remembers" the passengerNum and perGroup variables.
*/
const boardPassengers = function(passengerNum, waitTime){
  const perGroup = passengerNum/3;
  setTimeout(function(){
    // This function forms a closure over passengerNum and perGroup
    console.log(`We are now boarding all ${passengerNum} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  },waitTime*1000);

  console.log(`Will start boarding in ${waitTime} seconds`);
}
const perGroup = 900; // This is not used inside setTimeout (demonstrates closure selects correct scope)
boardPassengers(180,3);
boardPassengers(60,1);


// Real-world Closure Example: Simple Private Counter - Button Click Example
console.log('-------------------------------Real World Example ------------------------------------------');
function makeCounter() {
  let count = 0; // Private variable
  // Returns a function that can access and modify 'count' variable
  return function() {
    count++;
    console.log(`Button clicked ${count} times`);
  };
}

const counter = makeCounter();
// Simulate button clicks:
counter();     // Button clicked 1 times
counter();     // Button clicked 2 times
counter();     // Button clicked 3 times

/*
In a web application,
you could write:
  document.querySelector('button').addEventListener('click', counter);
Each click would increase the private count.
*/


// Additional Closure Example: Factory Function
console.log('-------------------------------Additional Closure Example - Factory Function ------------------------------------------');
function power(exponent) {
  // Returns a function that raises its argument to the captured exponent
  return function(base) {
    return Math.pow(base, exponent);
  };
}

const square = power(2);
const cube = power(3);

console.log("7 squared:", square(7));   // 49
console.log("3 cubed:", cube(3));       // 27

/*
Explanation:
  'square' remembers exponent=2, 'cube' remembers exponent=3.
  They each have their own closure scope.
*/
//////////////////////////////////////////////////////////////////////////////////////////////
