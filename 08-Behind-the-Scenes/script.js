'use strict';

//High-level
// Garbage-collected
//Interpreted or JIT complied
//Multi-paradigm
// Prototype-based object-oriented
//First-class functions
//Dynamic Typed
//Single-threaded
//Non-blocking event loop
// //JavaScript Engine and runtime :
// 	call stack :  execution context : variable Env, scope chain, this keyword
// 	Heap
// 	callback Queue
//scoping, lexical scoping, scope and scope of variable

///////////////////////////////////////
// Scoping in Practice

function calcAge(birthYear) {
  const age = 2025 - birthYear;
  //Uncaught ReferenceError: lastName is not defined
  // console.log(lastName);
  console.log(firstName);

  function printAge() {
    let output = `${firstName} is ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;

      //Creating NEW variale with same name as outer scope's variable
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Reassigninng outer scope's variable
      output = 'NEW OUTPUT!!';
    }

    //Uncaught ReferenceError: str is not defined
    //console.log(str);
    console.log(millenial);
    console.log(output);
  }
  //Uncaught ReferenceError: add is not defined. FUnctions are blocked scope in ES6, but only in strict mode
  // add(2,3);

  printAge();
  return age;
}

const firstName = 'Suraj';
calcAge(1996);
// Uncaught ReferenceError: age is not defined
// console.log(age);
// Uncaught ReferenceError: printAge is not defined
// printAge();

///////////////////////////////////////
// Hoisting and TDZ in Practice
// --- Variable Hoisting ---

// 'var' declarations are hoisted and initialized as undefined
console.log(me); // undefined (because 'var me' is hoisted, but not its value)

// 'let' and 'const' are also hoisted but NOT initialized.
// Accessing them before their declaration throws a ReferenceError (temporal dead zone).
// console.log(job);  // Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year); // Uncaught ReferenceError: Cannot access 'year' before initialization

var me = 'Suraj';
let job = 'developer';
const year = 2025;

// --- Function Hoisting ---

// Function declarations ARE hoisted entirely.
// You can call them before their definition in the code.
console.log(addDecl(2, 3)); // 5

// Function expressions and arrow functions assigned to 'const' or 'let' are NOT hoisted (or not initialized).
// Accessing them before assignment leads to a ReferenceError (if 'const' or 'let') or TypeError (if 'var').

// console.log(addExpr(2, 3)); // Uncaught ReferenceError: Cannot access 'addExpr' before initialization

// 'var addArrow;' is hoisted as 'undefined', so calling it as a function throws a TypeError
// console.log(addArrow(2, 3)); // Uncaught TypeError: addArrow is not a function

console.log(addArrow); // undefined (because 'var addArrow' is hoisted as undefined)

function addDecl(a, b) {
  return a + b;
}

// Function expression assigned to const - Not hoisted
const addExpr = function (a, b) {
  return a + b;
};

// Arrow function assigned to var - The variable is hoisted but not its value (remains undefined until assignment)
var addArrow = (a, b) => a + b;

// Example

// Due to JavaScript's hoisting behavior,
// variable declarations (but not initializations) are moved to the top of their scope.
// In this case, 'var numProducts;' is hoisted to the top with an initial value of 'undefined'.
// Therefore, during the condition check below, 'numProducts' is undefined.

if (!numProducts) {
  // At this point, numProducts is undefined, so the condition is true!
  deleteShoppingCart(); // This function is called, even though numProducts is assigned a value later.
}

var numProducts = 10; // Only the declaration is hoisted, not the initialization.

// Function declarations, like 'deleteShoppingCart', are also hoisted,
// so this function can be called before its actual definition.
function deleteShoppingCart() {
  console.log('All product deleted!');
}
// Lesson: Be aware that var declarations are hoisted and initialized as undefined at the start of their scope, which can lead to unexpected behavior like this. To avoid such issues, use let or const, which are not initialized until their declaration is evaluated (temporal dead zone).

var x = 1;
let y = 2;
const z = 3;

// In the global scope (browser), global variables declared with 'var' become properties of the 'window' object.
// Variables declared with 'let' and 'const' DO NOT become window properties.

// true: 'x' is a property of 'window'
console.log(x === window.x); // true

// false: 'y' (declared with 'let') is NOT a property of 'window'
console.log(y === window.y); // false

// false: 'z' (declared with 'const') is NOT a property of 'window'
console.log(z === window.z); // false

/*
  Summary:
  - var-declared globals: accessible as window.<name>
  - let/const-declared globals: NOT properties of window
  - This is an important difference when working with global variables!
*/
