'use strict';
//////////////////////////////////////////////////////////////////////
//-------------------- DEFAULT PARAMETERS IN JAVASCRIPT FUNCTIONS -----------------------//
// Default parameters allow you to set default values for function parameters.
// If an argument isn't provided when the function is called, the default value is used.

// This is very useful for making your functions more flexible and reducing redundant code.

console.log('------------------------ DEFAULT PARAMETERS ---------------------------');
const flightBooking = [];

// Example function using default parameters
const createBooking = function(
    flightNum, 
    numPassengers = 1,                       // Default: 1 passenger if not specified
    price = 199 * numPassengers              // Default: price calculated based on passengers
){
    // In ES5 (before default parameters), you'd often see:
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    flightBooking.push(booking);
}

// Let's see some real-time examples of how default parameters work:
createBooking('LH123', 2, 800);              // 2 passengers, custom price
createBooking('LH123', 2);                   // 2 passengers, price defaults to 199*2 = 398
createBooking('LH123');                      // 1 passenger (default), price 199*1 = 199
createBooking('LH123', undefined, 1000);     // "undefined" triggers the default for numPassengers (=1), price set to 1000

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

console.log('------------------------ VALUE VS. REFERENCE ---------------------------');

// Primitive value (string)
const flightNum = 'LH234';

// Object (passenger)
const passenger = {
    fullName: 'Suraj Ingole',
    passport: 123456789
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';                           // This only changes the local copy. Original flightNum is unchanged.
    passenger.fullName = 'Mr. ' + passenger.fullName; // This changes the passed-in object's property (will be visible outside).

    if(passenger.passport === 123456789){
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
}

checkIn(flightNum, passenger);
console.log(flightNum);    // Output: 'LH234' --> Unchanged, because primitives are passed by value.
console.log(passenger);    // Output: fullName has changed, as objects are passed by reference.

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(passenger);    // The passport property is changed permanently.
checkIn(flightNum, passenger); // This time the passport is different, so the check-in alert will show "Wrong passport!"
console.log(passenger);

/*
    Real-Time Example:
    - Let's say you're registering a passenger for a flight.
    - The flight number they book is stored as a primitive value; if you change it inside a function, the outside value doesn't update.
    - The passenger's data (as an object) is updated inside functions (e.g. adding "Mr."), and those changes persist everywhere.
    - If the passport number is changed, the check-in system will detect the mismatch.
*/