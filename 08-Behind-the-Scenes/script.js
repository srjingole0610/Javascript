'use strict';

///////////////////////////////////////
// -------- Scoping in Practice --------

/**
 * Calculates the age of a person based on their birth year
 * @param {number} birthYear the year of birth
 * @returns {number} the age of the person
 */
function calcAge(birthYear) {
  // 'age' is scoped to 'calcAge' (function scope)
  const age = 2025 - birthYear;

  // Uncommenting the line below will throw a ReferenceError, 
  // because 'lastName' is not defined in any accessible scope.
  // console.log(lastName);

  // 'firstName' is declared in the global scope (see below)
  console.log(firstName); // 'Suraj' (accessed via scope chain)

/**
 * Prints the age and birth year of a person, along with additional information
 * if they are a millennial. The function accesses and modifies variables
 * within its scope and demonstrates block scoping and shadowing.
 * 
 * It logs a message indicating the person's name and age, and if the birth year
 * is between 1991 and 1996, it additionally logs a message indicating they are
 * a millennial, using a shadowed variable for the name. It also demonstrates
 * function-level scoping with `var` and block scoping of functions in strict mode.
 */

  function printAge() {
    // 'output' is scoped to 'printAge'
    let output = `${firstName} is ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      // 'millenial' uses 'var': function scoped (visible in entire 'printAge')
      var millenial = true;

      // 'firstName' (declared with 'const') is BLOCK scoped, 
      // so it SHADOWS the outer 'firstName' within this block only.
      const firstName = 'Steven';  
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str); // will print 'Steven'

      // A function declaration: 'add' is block-scoped in ES6 ('strict mode')
      function add(a, b) {
        return a + b;
      }

      // reassigning 'output' from outer scope
      output = 'NEW OUTPUT!!';
    }

    // Uncommenting the line below will throw a ReferenceError, 
    // because 'str' is block-scoped and not accessible here.
    // console.log(str);

    // 'millenial' declared with 'var' is function-scoped, 
    // so it is accessible here, even outside the if block.
    console.log(millenial); // true

    // 'output' is accessible and has been reassigned inside the 'if' block.
    console.log(output); // 'NEW OUTPUT!!' if birthYear in range
  }

  // Uncommenting the line below will throw a ReferenceError,
  // in strict mode, because 'add' is block scoped within 'if'
  // add(2, 3);

  printAge();
  return age;
}

// 'firstName' is declared in the global scope.
const firstName = 'Suraj';

calcAge(1996);

// Uncommenting the lines below will throw ReferenceErrors:
// because 'age' and 'printAge' are scoped to inside 'calcAge' and can't be accessed here outside.
/*
console.log(age);
printAge();
*/

/*
  --- Scoping Lessons ---
  - Variables declared with let and const have block scope (exist only inside the block).
  - Variables declared with var have function scope (exist throughout the function).
  - Inner variables ('const firstName = "Steven"') can shadow outer variables of the same name.
  - Function declarations inside blocks ({ ... }) are block-scoped in 'strict mode'.
  - Variables and functions declared inside a function are NOT accessible outside.
  - The scope chain determines how variable lookups work (upwards through nested scopes until found or undefined).
*/

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
