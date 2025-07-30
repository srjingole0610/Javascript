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