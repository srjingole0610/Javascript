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

/////////////////////////////////////////////////////////
// ----------- "this" KEYWORD -----------

// In the global scope, 'this' refers to the global object (the window object in browsers)
console.log(this); // window object

/**
 * Regular function: 'this' is undefined in strict mode (default in ES6 modules).
 * In non-strict mode, 'this' would refer to the global object (window).
 */
const calcAgeThis = function (birthYear) {
  console.log(2025 - birthYear);
  // In a regular function, when called as a standalone function:
  // - 'this' is undefined (in strict mode)
  // - 'this' is the global object (window) in non-strict mode
  console.log(this); // undefined (in strict mode)
};
calcAgeThis(1996);

/**
 * Arrow function: Arrow functions do NOT have their own 'this'.
 * They inherit 'this' from their surrounding (lexical) scope.
 * In the global scope, 'this' is the window object.
 */
const calcAgeThisArrow = birthYear => {
  console.log(2025 - birthYear);
  // Arrow functions use "this" from their parent scope
  // (here, the global scope, so 'this' is window)
  console.log(this); // window object
};
calcAgeThisArrow(1996);

const suraj = {
  birthYear: 1996,

  /**
   * In a method (a function inside an object),
   * 'this' refers to the object that "calls" the method.
   */
  calcAge: function () {
    // Here, 'this' points to the 'suraj' object
    console.log(this); // suraj object
    console.log(2025 - this.birthYear); // 29
  },
};
suraj.calcAge();

/**
 * Method borrowing:
 * You can copy a method from one object to another.
 * 'this' will refer to the object that calls the method, not where the function was originally defined!
 */
const matilda = { birthYear: 2017 };
matilda.calcAge = suraj.calcAge; // method borrowing

console.log(matilda); // shows matilda with a 'calcAge' method

matilda.calcAge(); // 8; Here 'this' refers to matilda, so 'this.birthYear' is 2017

/**
 * Standalone function reference:
 * If you take a method and store it in a separate variable, then call it without an object,
 * 'this' is undefined (in strict mode) when you call the function.
 * This happens even though the original method used 'this'.
 */
const f = suraj.calcAge;
// f(); // TypeError: Cannot read properties of undefined (reading 'birthYear') because 'this' is now undefined

/* 
  === SUMMARY OF "this" BEHAVIOR ===

  - In the global scope: 'this' is the global object (window in browsers)
  - In a regular function: 'this' is undefined (strict mode) or window (non-strict mode)
  - In an arrow function: 'this' is inherited from the parent scope (lexical scoping)
  - In a method (function inside an object): 'this' is the object that calls the method
  - When borrowing a method: 'this' is the object that calls the borrowed method
  - In a function called as a standalone (not attached to an object): 'this' is undefined (strict) or window (non-strict)
*/

//////////////////////////////////////////////////////////////////////////
// -------- Regular Functions vs. Arrow Functions --------

// Avoid using 'var' for global variables to prevent polluting the global object.
var firstNameNew = 'matilda'; // This actually becomes a property of the global object (window.firstNameNew)

// Object with methods using both regular function and arrow function to illustrate 'this' behavior
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1996,

  // Regular function method: 'this' points to the object 'jonas' when called as a method
  calcAge: function () {
    console.log(this); // jonas object
    console.log(2037 - this.birthYear); // Correctly prints 41
  },

  // Arrow function method: Arrow functions do NOT have their own 'this',
  // so 'this' refers to lexical/surrounding scope — here likely the global object (window)
  greet: () => console.log(`Hey ${this.firstName}`), // 'this.firstName' is undefined in global scope

  // Regular function: 'this' correctly points to 'jonas'
  greetNew: function () {
    console.log(this); // jonas object
    console.log(`Hey ${this.firstName}`); // 'Hey Jonas'
  },
};

jonas.greet(); // Hey undefined
console.log(this.firstNameNew); // matilda (global variable accessible on window)
console.log(this.firstName); // undefined (no such global variable)
jonas.greetNew(); // Hey Jonas

const harry = {
  firstName: 'Harry',
  birthYear: 1996,
  calcAge: function () {
    console.log(this); // harry object
    console.log(2037 - this.birthYear); // 41

    // Solution 1: Preserve 'this' by using 'self' (classic workaround)
    const self = this;
    const isMillenial = function () {
      console.log(this); // undefined (regular function, called as standalone)
      // Cannot use 'this' here correctly, because it loses context

      // Using 'self' correctly points to harry object
      console.log(self); // harry object
      console.log(self.birthYear >= 1981 && self.birthYear <= 1996); // true
    };

    // Solution 2: Use arrow function, which inherits 'this' lexically
    const isMillenialArrow = () => {
      console.log(this); // harry object (inherited from calcAge)
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996); // true
    };

    isMillenial();
    isMillenialArrow();
  },
  greetNew: function () {
    console.log(this); // harry object
    console.log(`Hey ${this.firstName}`); // Hey Harry
  },
};

harry.calcAge();

// --- Arguments object ---

// Regular function expressions have access to 'arguments' object containing all arguments passed
const addExprNew = function (a, b) {
  console.log(arguments); // prints all arguments passed
  return a + b;
};
addExprNew(2, 5, 7, 9); // logs: [2, 5, 7, 9]
addExprNew(2, 5); // logs: [2, 5]

// Arrow functions do NOT have their own 'arguments' object
const addArrowNew = (a, b) => {
  // console.log(arguments); // Uncaught ReferenceError: arguments is not defined
  return a + b;
};

// addArrowNew(2, 5, 8); // would throw ReferenceError if uncommented

// --- Additional examples to reinforce ---

// Example 1: Lexical 'this' in arrow functions inside objects
const person = {
  name: 'Alice',
  greet: function () {
    const innerArrow = () => {
      // arrow inherits 'this' from greet() method, so 'this' points to 'person'
      console.log(`Hello, ${this.name}`); // Hello, Alice
    };
    innerArrow();
  },
};

person.greet();

// Example 2: Using a regular function loses 'this' context inside callbacks:
const timer = {
  seconds: 0,
  start: function () {
    setInterval(function () {
      this.seconds++; // 'this' here refers to global or undefined, NOT timer obj!
      console.log(this.seconds); // NaN or error
    }, 1000);
  },
};

// Fix with arrow function:
const timerFixed = {
  seconds: 0,
  start: function () {
    setInterval(() => {
      this.seconds++; // 'this' inherited from timerFixed object
      console.log(this.seconds); // 1, 2, 3, ...
    }, 1000);
  },
};

// timer.start(); // buggy
// timerFixed.start(); // works correctly

/*
  ===== SUMMARY =====
  - Regular functions have their own 'this' and 'arguments'.
  - Arrow functions do NOT have their own 'this' or 'arguments'.
  - 'this' in regular functions depends on how the function is called.
  - Arrow functions capture 'this' lexically from surrounding code.
  - Avoid arrow functions as object methods if you need 'this' to point to the object.
  - Use arrow functions to preserve 'this' inside callbacks or nested functions.
  - The 'arguments' object exists ONLY in regular functions.
*/

//////////////////////////////////////////////////////////////////////////
// -------- Object References in Practice (Shallow vs. Deep Copies) --------

// Original object
const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};

console.log(jessica); 
// Outputs: {firstName: "jessica", lastName: "williams", age: 27}


// Assigning an object to a new variable copies the REFERENCE, NOT the object itself
const marriedJessica = jessica;

// Changing property on 'marriedJessica' also changes 'jessica' because both point to the SAME object in memory
marriedJessica.lastName = 'Davis';

console.log('Before: ', jessica); 
// Outputs: {firstName: "jessica", lastName: "Davis", age: 27}

console.log('After: ', marriedJessica);
// Outputs: {firstName: "jessica", lastName: "Davis", age: 27}


// Function that modifies object's property directly affects original object, because object is passed by reference
function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessicaNew = marryPerson(jessica, 'Davidson');

console.log(jessica);          
// Outputs: {firstName: "jessica", lastName: "Davidson", age: 27}
console.log(marriedJessica);   
// Outputs: {firstName: "jessica", lastName: "Davidson", age: 27}
console.log(marriedJessicaNew);
// Outputs: {firstName: "jessica", lastName: "Davidson", age: 27}
// All 3 variables point to the same object!


const jessicaNew = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['Alice', 'Bob'],  // Nested object (array)
};

// --- Shallow Copy ---

// Using spread operator to create a shallow copy of the object
const jessicaNewCopy = { ...jessicaNew };

console.log(jessicaNew);      // Original object
console.log(jessicaNewCopy);  // Shallow copy

// Changing primitive property in copy does NOT affect original
jessicaNewCopy.lastName = 'Hamm';

console.log(jessicaNew);     
// lastName remains "williams"

console.log(jessicaNewCopy); 
// lastName is changed to "Hamm"

// However, nested objects (like the family array) are still shared BETWEEN the original and shallow copy

// Mutating the nested array inside the copy affects the original as well:
jessicaNewCopy.family.push('Mary');
jessicaNewCopy.family.push('John');

console.log(jessicaNew);     
// family array now includes Mary and John! Shared reference.

console.log(jessicaNewCopy); 
// family array includes Mary and John as well.


// --- Deep Copy or Deep Clone ---

// To avoid shared nested references, create a DEEP clone using structuredClone() available in modern environments

const jessicaDeepClone = structuredClone(jessicaNew);

// Now mutate the deep clone's nested array
jessicaDeepClone.family.push('James');
jessicaDeepClone.family.push('Maria');

console.log(jessicaNew);       
// family remains unchanged: ["Alice", "Bob", "Mary", "John"]

console.log(jessicaDeepClone); 
// family: ["Alice", "Bob", "Mary", "John", "James", "Maria"]


// --- Additional Examples ---

// Example: shallow copy with nested object and JSON workaround (not recommended if methods or special types)
const obj = {
  a: 1,
  b: { c: 2 }
};
const shallowCopy = { ...obj };
shallowCopy.b.c = 42;
console.log(obj.b.c); // 42 -> still affected because nested object shared

// Deep clone using JSON methods — works only with pure data (no functions, undefined, etc.)
const deepCloneJSON = JSON.parse(JSON.stringify(obj));
deepCloneJSON.b.c = 99;
console.log(obj.b.c); // 42 -> original unchanged


/*
  ===== SUMMARY =====

  - Objects are assigned and passed by REFERENCE in JavaScript.
  - Simple assignment copies reference, NOT the object.
  - Shallow copy (e.g., spread operator) copies only the first level.
    Nested objects/arrays are still shared references.
  - Mutating nested objects in shallow copies affects the original.
  - Deep copying creates a full clone: all nested objects are separately copied.
  - Use 'structuredClone()' (modern, recommended), or JSON parse/stringify (limited).
  - Be careful with methods or non-serializable properties when deep cloning with JSON.
*/ 


//////////////////////////////////////////////////////////////////////////
