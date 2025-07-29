'use strict';

const restroOpeningHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ENCHANCED OBJECT LITERAL
  orderFood(starterIndex, mainIndex) {
    // This method returns an array consisting of a starter and a main dish
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //ENCHANCED OBJECT LITERAL
  restroOpeningHours,

  //ENCHANCED OBJECT LITERAL
  orderDelivery({
    starterIndex = 1, // default value if not provided in argument object
    mainIndex = 0,
    time = '20:00',
    address = 'Saint Petersburg, Russia',
  }) {
    console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`,
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Main ingredient: ${mainIngredient}`);
    if (otherIngredients.length > 0) {
      console.log(`Other ingredients: ${otherIngredients.join(', ')}`);
    }
  },
};

//////////////////////////////////////////
// DESTRUCTURING ON AN ARRAY

const arr = [2, 3, 4];

// Traditional way to extract array elements
const arr1 = arr[0];
const arr2 = arr[1];
const arr3 = arr[2];
console.log(arr1, arr2, arr3); // 2 3 4

// ES6 Destructuring syntax: extracts values from array into variables in one line!
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

// Original array remains unchanged
console.log(arr); // [2, 3, 4]

// Destructuring example with restaurant categories array
// Extract the first and second category into variables
const [firstCategory, secondCategory] = restaurant.categories;
console.log(firstCategory, secondCategory); // Italian Pizzeria

// Skipping items:
// Extract the first and third categories, skipping the second with a comma
let [mainCategory, , secondaryCategory] = restaurant.categories;
console.log(mainCategory, secondaryCategory); // Italian Vegetarian

// SWITCHING VARIABLES BEFORE DESTRUCTURING (traditional way)
// let temp = mainCategory;
// mainCategory = secondaryCategory;
// secondaryCategory = temp;
// console.log(mainCategory, secondaryCategory);

// SWITCHING VARIABLES USING DESTRUCTURING (clean and concise)
[mainCategory, secondaryCategory] = [secondaryCategory, mainCategory];
console.log(mainCategory, secondaryCategory); // Vegetarian Italian

// Receiving multiple return values from a function via array destructuring
const [starterFood, mainFood] = restaurant.orderFood(2, 0);
console.log(starterFood, mainFood); // Garlic Bread Pizza

// Nested Array Destructuring:
// Example nested array
const nestedArray = [2, 3, [5, 6]];

// Basic destructuring: pick first and third elements (nested array as whole)
const [i, , j] = nestedArray;
console.log(i, j); // 2 [5, 6]

// Nested destructuring: extract values inside the nested array as well
const [k, , [l, m]] = nestedArray;
console.log(k, l, m); // 2 5 6

// Default Values in Destructuring:
// If the array has fewer elements than variables, defaults are used
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1 (r uses default as input has only 2 items)

// --- ADDITIONAL EXAMPLES ---

// Example: Swapping variables in one line using array destructuring
let num1 = 10,
  num2 = 20;
[num1, num2] = [num2, num1];
console.log(num1, num2); // 20 10

// Example: Destructuring directly from an array returned by a function
function getCoordinates() {
  return [25.2345, 45.5678];
}
const [latitude, longitude] = getCoordinates();
console.log(latitude, longitude); // 25.2345 45.5678

/*
  ===== SUMMARY OF ARRAY DESTRUCTURING =====

  - Simplifies extracting values from arrays into individual variables.
  - You can skip unwanted elements by leaving extra commas.
  - Supports nested arrays and default values.
  - Can swap variables cleanly without a temporary variable.
  - Works excellently with functions that return arrays.
  - Supports rest pattern (...) to gather leftover elements into an array.
*/

///////////////////////////////////////////////////////////////////////////////
//--- Basic Object Destructuring ---
// Extract properties 'name', 'openingHours', and 'categories' from restaurant object
const { name, restroOpeningHours: openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//--- Rename Variables While Destructuring ---
// Assign properties to new variable names for clarity or to avoid naming conflicts
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//--- Setting Default Values ---
// If a property doesn't exist on the object, use default value to avoid undefined
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // menu is undefined in restaurant, so default [] is used

//--- Mutating Existing Variables Using Destructuring ---
// When reassigning variables via destructuring, wrap in parentheses to avoid syntax errors
let a = 11;
let b = 999;
console.log(a, b);

const obj = { a: 23, b: 7, c: 14 };
// Without parentheses, JS expects a block, causing syntax error
({ a, b } = obj);
console.log(a, b); // a and b reassigned to obj.a and obj.b values

//--- Nested Object Destructuring ---
// Extract nested properties from openingHours object
const { fri } = openingHours;
console.log(fri); // entire 'fri' object: {open: 11, close: 23}

const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11 23

// Rename variables while destructuring nested object
const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c); // 0 24

//--- Using the orderDelivery Method with Object Destructuring in Parameters ---

// Calling with all properties passed in argument object
restaurant.orderDelivery({
  time: '22:30',
  address: 'Dehuroad,Pune',
  mainIndex: 2,
  starterIndex: 2,
});

// Calling with some properties omitted; defaults will be used
restaurant.orderDelivery({
  address: 'Dehuroad,Pune',
  mainIndex: 2,
  // starterIndex and time use default values from the parameter destructuring
});

// --- Additional Examples ---

// Destructuring in function parameters to extract only needed properties
function printCategories({ categories }) {
  console.log('Categories:', categories.join(', '));
}

printCategories(restaurant); // Categories: Italian, Pizzeria, Vegetarian, Organic

// Setting default values and renaming combined in nested destructuring
const {
  fri: { open: openFri = 10, close: closeFri = 22 },
  mon: { open: openMon = 9, close: closeMon = 21 } = {}, // default empty object to avoid error
} = openingHours;

console.log('Friday:', openFri, closeFri); // Friday: 11 23
console.log('Monday:', openMon, closeMon); // Monday: 9 21 (defaults used because no 'mon' property)

// Key takeaways from object destructuring:

// Extract properties from objects into standalone variables for clean, readable code.
// Rename variables on extraction with propertyName: newVariableName.
// Provide default values to avoid undefined variables.
// Nested objects can be destructured deeply with syntax mirroring the object shape.
// Mutate existing variables carefully with surrounding parentheses.
// Use destructuring in function parameters to directly access properties of provided objects.
// Combine destructuring with rest (...) operator to separate certain properties from the rest.
// When calling functions that destructure parameters, any missing keys can use default values.
// ✨ Object destructuring makes accessing and managing data from objects much easier and your code cleaner! Play around with these examples to gain comfort.

/////////////////////////////////////////////////////////////////
// ---------- SPREAD OPERATOR (...) ----------

// Without spread: manually copying elements = tedious, error-prone, and not scalable
const arr4 = [1, 2, 3];
const badNewArray = [4, 5, arr4[0], arr4[1], arr4[2]];
console.log(badNewArray); // [4, 5, 1, 2, 3]

// With spread: automatically expands arr4 elements in-place
const newArr = [4, 5, ...arr4];
console.log(newArr); // [4, 5, 1, 2, 3]

// Spread elements individually to a function or output (not as an array, but as separate values)
console.log(...newArr); // 4 5 1 2 3

// ---- COMMON USE CASES FOR ARRAYS ----

// 1. Creating a new array by expanding another in place
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']
console.log(restaurant.mainMenu); // Original array is NOT mutated

// 2. Copying arrays (shallow copy, for new independent reference)
const mainMenuCopyArr = [...restaurant.mainMenu];
console.log(mainMenuCopyArr);

// 3. Joining (concatenating) arrays
const combineMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(combineMenu);

// 4. Using spread with strings
const newStr = 'Suraj';
// Strings are iterable, so spread turns each character into a separate element
const letters = [...newStr, ' ', 'I.'];
console.log(letters); // ['S','u','r','a','j',' ','I.']
console.log(...newStr); // S u r a j (spreads characters)

// ---- SPREAD OPERATOR IN FUNCTION CALLS ----

// Old way: pass each ingredient individually
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// // Modern ES6 way: Use spread to "explode" array into separate arguments
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1? `),
//   prompt(`Let's make pasta! Ingredient 2? `),
//   prompt(`Let's make pasta! Ingredient 3? `),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients); // Cleaner and scalable!

// ---- SPREAD OPERATOR WITH OBJECTS (ES2018+) ----

// Making a full (shallow) copy and adding/modifying properties
const newRestaurant = {
  ...restaurant, // copies all properties
  founder: 'Suraj Ingole', // adds new property
  foundingYear: 1998, // note: corrected spelling from 'foudingYear'
};
console.log(newRestaurant);

// Shallow cloning: same top-level structure, but not deep/nested clone
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);

// Changes to the copy do NOT affect the original
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name); // 'Classico Italiano'
console.log(restaurantCopy.name); // 'Ristorante Roma'

// But changing a nested object property will affect both (because of shallow copy)
restaurantCopy.restroOpeningHours.fri.open = 10;
console.log(restaurant.restroOpeningHours.fri.open); // 10 (changed in both!)

// ---- EXTRA EXAMPLES ----
// 1. Spreading to create a shallow copy of a nested array
const doubleArr = [
  [1, 2],
  [3, 4],
];
const shallowCopyDouble = [...doubleArr];
shallowCopyDouble[0][0] = 9;
console.log(doubleArr); // [[9,2], [3,4]] — shallow copy, so nested arrays are shared!

// 2. Spread for merging objects
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3, x: 7 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { x:7, y:2, z:3 } — last value for 'x' overwrites previous

// 3. Spread with Math functions:
const numArr = [12, 4, 23, 99];
console.log(Math.max(...numArr)); // 99

/*
  ==== SUMMARY: SPREAD OPERATOR ====

  - Spreads (expands) elements of iterables (arrays, strings) or enumerable object properties.
  - Useful for: combining, copying, passing as arguments, adding new properties.
  - Does not mutate original objects/arrays when copying.
  - Shallow copy: nested (inner) structures are still shared by reference!
  - Also works in object literals (since ES2018).

  ✨ Use spread for concise, clear, and modern JavaScript!
*/

/////////////////////////////////////////////////////////////////
// -------- REST Pattern and Parameters --------
console.log('-------- REST Pattern and Parameters --------');
// The REST pattern uses "..." on the LEFT SIDE of assignment (=) or parameter lists
// It collects the remaining elements into a new array (or object).

// Array destructuring with REST:
// Collect all remaining items in the array after the first two into "others"
const [first, second, ...others] = [1, 2, 3, 4, 5];
console.log(first, second, others); // 1 2 [3, 4, 5]

// Can only be used as the last element in a destructuring assignment!

// Example with skipping elements using commas and combining destructuring with REST
const [pizza, , rissoto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// Skipping the second item with only a comma: the third goes to 'rissoto', and everything after goes to 'otherFoods'
console.log(pizza, rissoto, otherFoods);

// ----- REST with Object Destructuring ------
// Collect all properties EXCEPT 'sat' into a separate object 'weekdays'
const { sat, ...weekdays } = restaurant.restroOpeningHours;
console.log(sat, weekdays);
// sat = { open: 0, close: 24 }
// weekdays = { thu: {open:12,close:22}, fri: {open:11,close:23} }

// ----- REST Parameters in Functions -----
// "..." in function parameter collects all remaining (multiple) arguments into a real array called 'numbers'
const add = function (...numbers) {
  console.log(numbers); // Array of arguments
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum); // Print the sum of all provided arguments
};

add(2, 3, 4); // [2, 3, 4] => 9
add(3, 5, 7, 2); // [3, 5, 7, 2] => 17
add(3, 4, 5, 1, 3, 6, 7, 8, 1); // [3, 4, 5, 1, 3, 6, 7, 8, 1] => 38

// REST can combine with SPREAD to pass arrays as arguments to such a function
const randomNum = [23, 5, 7];
add(...randomNum); // [23, 5, 7] => 35

// ---- Example: REST Parameters in Restaurant Method ----
console.log('---- Example: REST Parameters in Restaurant Method ----');
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('chicken');
restaurant.orderPizza('chicken', 'pepporini', 'corn');

// ========== EXTRA EXAMPLES ==========
console.log('========== EXTRA EXAMPLES ==========');

// 1. Mix REST pattern with default values
const [head, ...tail] = [];
console.log(head, tail); // undefined []

// 2. Use REST parameters to create a function that accepts any number of names
function greetAll(greeting, ...names) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
  }
}
greetAll('Hello', 'Asha', 'Ben', 'Carl'); // Hello, Asha! etc.

// =================== SUMMARY ===================
/*
REST PATTERN:
- In destructuring (arrays or objects): ... on LEFT side gathers the "rest" of the elements/properties
  - Arrays:     const [a, ...rest] = [1,2,3]; rest === [2,3]
  - Objects:    const {x, ...rest} = {x:1, y:2, z:3}; rest === {y:2, z:3}
- REST must be at the end of the destructuring assignment

REST PARAMETERS:
- In functions: ... in the parameter list collects all arguments into an array
  - function f(...args) { ... }
- Lets you define functions that can take any number of arguments (variadic functions)

- REST pattern is different from SPREAD: 
   - REST collects items into an array/object (destructuring or parameter)
   - SPREAD expands array/object into individual values (as arguments or elements)
*/

/////////////////////////////////////////////////////////////////
// -------- SHORT-CIRCUITING (|| and &&) --------

// The OR (||) operator returns the FIRST "truthy" value it finds, or the LAST value if none are truthy

console.log('-----------------OR-------------------');
console.log(3 || 'jonas'); // 3    (3 is truthy, returns 3 and stops evaluating further)
console.log('' || 'jonas'); // 'jonas' ('' is falsy, so returns the next - 'jonas')
console.log(true || 0); // true (true is truthy)
console.log(undefined || null); // null (both falsy => returns the LAST value)
console.log(undefined || null || 'Suraj'); // 'Suraj' (first two falsy, so 'Suraj' is returned)
console.log(undefined || null || 'Hello' || 23 || 0); // 'Hello' (first truthy in chain)

// --- Practical Use Case: providing default values ---

// Before ES2020, used OR for fallback default
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; // if undefined or 0, fallback to 10
console.log(guest1); // 10 (if no property set on restaurant)

// Setting a value and using short-circuit OR for fallback
restaurant.numGuests = 50;
const guest2 = restaurant.numGuests || 10;
console.log(guest2); // 50 (truthy, so no fallback needed)

// Note: If restaurant.numGuests = 0;
// '0 || 10' would give 10 (because 0 is falsy!)
// Use nullish coalescing (??) if you only want null or undefined as fallback! See example below

console.log('----------------------AND------------------');
// The AND (&&) operator returns the FIRST "falsy" value it finds, or the LAST value if all are truthy

console.log(0 && 'jonas'); // 0 (0 is falsy, so returns immediately)
console.log(3 && 'Suraj'); // 'Suraj' (3 is truthy, so returns last if all previous are truthy)
console.log(3 && 'Suraj' && null); // null (first falsy encountered in chain)
console.log(3 && 'Suraj' && 23 && undefined && 5 && null); // undefined (returned as soon as found, stops evaluating)

// --- Practical Use Case: executing code ONLY if a property/method exists ---

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'corn');
}

// The AND (&&) operator is often used as a shortcut for conditional execution:
restaurant.orderPizza &&
  restaurant.orderPizza('chicken', 'pepporni', 'corn', 'cheese');
// If orderPizza exists (truthy), the function is called; if falsy, nothing happens

// ----------- EXTRA EXAMPLES -----------
console.log('----------- EXTRA EXAMPLES -----------');

// OR chain for default fallback (first defined value)
let val = '' || 0 || undefined || null || 'Default';
console.log(val); // 'Default'

// AND chain: stops at first falsy value
console.log(true && 1 && 'hello' && [] && 0 && 'should not print'); // 0

// Using AND to guard function calls (classic pattern)
const user = {
  name: 'Suraj',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};
user.greet && user.greet(); // Hello, Suraj!
// If greet existed, it gets called

const anonymous = {};
anonymous.greet && anonymous.greet(); // (nothing happens, doesn't error!)

/*
    ==== SUMMARY: SHORT-CIRCUITING ====

    - The OR (||) operator returns the first TRUTHY value, or the last value if none are truthy.
    - Useful for: Providing default/fallback values.
    - Beware: 0, '', false are all falsy (use ?? for better fallback if you want to allow 0 or ''!)

    - The AND (&&) operator returns the first FALSY value, or the last value if all are truthy.
    - Useful for: Conditional execution (act only if all prior conditions are true).
    - If used as a guard, prevents errors when calling a method/property that may not exist.

    - Both OR and AND short-circuit: they stop as soon as their outcome is determined.

    === Practice combining them to streamline your logic! ===
*/

/////////////////////////////////////////////////////////////////
// ---- NULLISH COALESCING OPERATOR (??) ----
console.log(
  '---------------NULLISH COALESCING OPERATOR(??)---------------------',
);

// Scenario: You want a fallback value ONLY if the property is null or undefined,
// NOT if the value is 0, '', or false (which are all falsy with ||).

restaurant.numVipGuest = 0;

// Using || (OR) treats 0 as falsy, so you'd get 10 (not what you want):
const wrongGuest = restaurant.numVipGuest || 10;
console.log(wrongGuest); // 10 (INCORRECT if 0 is a valid value!)

// Using ?? (nullish coalescing), only null or undefined trigger the default:
const newGuestCorrect = restaurant.numVipGuest ?? 10;
console.log(newGuestCorrect); // 0 (CORRECT: 0 is a valid, intended value)

/**
 * The nullish coalescing operator (??) returns the right-hand value
 * only if the left-hand side is null or undefined -- NOT for 0, '', or false.
 */

// ----- More Examples -----
console.log('-------- More Examples --------');

// Example 1: Null or undefined fallbacks
let input;
console.log(input ?? 'Default'); // 'Default'
input = null;
console.log(input ?? 'Default'); // 'Default'
input = undefined;
console.log(input ?? 'Default'); // 'Default'

// Example 2: 0 and '' are not replaced
input = 0;
console.log(input ?? 100); // 0 (not replaced)
input = '';
console.log(input ?? 'Empty'); // '' (not replaced)
input = false;
console.log(input ?? 'Fallback'); // false

// Example 3: Chained ??
let a1 = null,
  b1 = undefined,
  c1 = 5;
console.log(a1 ?? b1 ?? c1 ?? 100); // 5 (first value that is NOT null or undefined)

// Example 4: ?? vs || (OR)
restaurant.numVipGuest = 0;
console.log(restaurant.numVipGuest || 10); // 10 (because 0 is falsy)
console.log(restaurant.numVipGuest ?? 10); // 0  (because only null/undefined trigger ??)

// Example 5: Use with function parameter fallback
function sayHello(name) {
  // If name is missing or null/undefined, use 'Guest'
  const userName = name ?? 'Guest';
  console.log(`Hello, ${userName}!`);
}
sayHello('Suraj'); // Hello, Suraj!
sayHello(null); // Hello, Guest!
sayHello(undefined); // Hello, Guest!
sayHello(''); // Hello, !

/*
======== SUMMARY ========
- || (OR) returns the right value for falsy left values (false, 0, '', null, undefined, NaN)
  - Useful for defaults, but can override valid 0, '' or false accidentally!
- ?? (nullish coalescing) returns the right value only when the left is null or undefined
  - Use ?? when you want to allow 0, '' or false as valid and only want to fallback on 'missing' (null/undefined).

-- This helps make your fallback logic much safer and more predictable!
*/

/////////////////////////////////////////////////////////////////
// Logical Assignment Operators
console.log('----------Logical Assignment Operators-----------');

const restaurantOne = {
  name: 'Capri',
  numGuest: 20,
  numVipGuest: 0,
};

const restaurantSecond = {
  name: 'La Pizzeria',
  owner: 'Suraj Roberto',
  followers: 0,
};

// Used short-circuiting (classic way):
console.log('-------------- using short circuiting ------------ ');
restaurantOne.numGuest = restaurantOne.numGuest || 10; // If falsy, assign 10 (so 0, '', null, undefined all replaced!)
restaurantSecond.numGuest = restaurantSecond.numGuest || 10;
console.log(restaurantSecond.numGuest); // 10 (property did not exist, so assigned)
console.log(restaurantOne.numGuest); // 20 (already truthy, stays the same)

// --- Logical OR Assignment (||=) ---
// If current value is falsy, assign right side (just like x = x || y, but shorter!)
console.log(
  '------------------- using logical OR assignment --------------------------',
);
// Does nothing, numGuest already 20 (truthy), but _would_ assign if 0, '', null, or undefined
restaurantOne.numGuest ||= 10;
restaurantSecond.numGuest ||= 10;
// Now, numVipGuest is 0 (falsy!) so || assigns 1 - CAUTION!
restaurantOne.numVipGuest ||= 1;
console.log(restaurantSecond.numGuest); // 10
console.log(restaurantOne.numGuest); // 20
console.log(restaurantOne.numVipGuest); // 1  (assigned, even though 0 is a valid value!)

// --- Logical Nullish Assignment (??=) ---
// Only assigns if current value is null or undefined (treats 0 and '' as valid!)
console.log(
  '------------------- using logical Nullish assignment --------------------------',
);
restaurantOne.followers ??= 10000; // not present (undefined), so assigns 10000
restaurantSecond.followers ??= 12000; // already 0 (NOT null/undefined!), so not assigned
console.log(restaurantOne); // followers: 10000
console.log(restaurantSecond); // followers: 0

// --- Logical AND Assignment (&&=) ---
// Only assigns if current value is truthy (x &&= y is x = x && y)
// Useful to change a value only when it is truthy (for example, redacting owner data if present)
console.log(
  '------------------- using logical AND assignment --------------------------',
);
restaurantOne.owner &&= '<ANONYMOUS>'; // undefined, so doesn't assign
restaurantSecond.owner &&= '<ANONYMOUS>'; // had value, so updates to '<ANONYMOUS>'
console.log(restaurantOne); // owner: still undefined
console.log(restaurantSecond); // owner: '<ANONYMOUS>'

// ------------------- EXTRA EXAMPLES! -----------------------
console.log(' ------------------- EXTRA EXAMPLES! -----------------------');
// Example 1: Why use ??= rather than ||= for some values?
let settings = { darkMode: false, volume: 0 };
settings.darkMode ||= true; // darkMode is false (falsy), so assigns TRUE! (not what you want!)
console.log(settings.darkMode); // true (probably NOT intended!)

settings = { darkMode: false, volume: 0 };
// Now, use nullish assignment (correct: only assigns if null/undefined)
settings.darkMode ??= true;
settings.volume ??= 100;
console.log(settings.darkMode); // false (remains, as it is not null/undefined)
console.log(settings.volume); // 0 (not overridden by 100, because it's not null/undefined)

// Example 2: AND assignment to redact info
const userProfile = { name: 'Sam', isAdmin: true };
userProfile.isAdmin &&= 'ACCESS-RESTRICTED';
console.log(userProfile.isAdmin); // "ACCESS-RESTRICTED" (only set because previous value was truthy)

// Example 3: Works with non-existing properties too
const obj3 = {};
obj3.views ??= 1; // undefined, so assigns 1
obj3.views ??= 5; // already exists, so does nothing
console.log(obj3.views); // 1

// Example 4: Combined
let x1 = 0;
x1 ||= 42; // x = x || 42, so 0 is falsy -> x becomes 42
console.log(x1); // 42

let y2 = 0;
y2 ??= 42; // y is 0, not null/undefined, so stays 0
console.log(y2); // 0

let z3 = false;
z3 &&= true; // z is false, so stays false
console.log(z3); // false

/*
======== SUMMARY: Logical Assignment Operators ========

- ||=   (OR Assign):          a ||= b   sets a to b if a is falsy (false, 0, '', null, undefined, NaN)
- ??=   (Nullish Assign):     a ??= b   sets a to b if a is null or undefined ONLY (not 0/'')
- &&=   (AND Assign):         a &&= b   sets a to b if a is truthy

Benefits:
- Short, declarative code for assigning fallback (default) values or _guarded_ assignment
- Prefer ??= when you want to allow 0 or '' or false as valid

✨ Try these in different patterns to enforce robust defaults or to update values only in the right cases!
*/
/////////////////////////////////////////////////////////////////
// FOR-OF Loop
console.log('----------FOR-OF Loop-----------');
// newMenuArray is created by combining restaurant.starterMenu and restaurant.mainMenu using the spread operator
// Based on the provided output, newMenuArray contains:
// ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']
const newMenuArray = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(newMenuArray); // Outputs: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// Basic for...of loop to iterate over each element in newMenuArray
// The for...of loop iterates over the iterable (newMenuArray), assigning each element to 'item'
// No index is needed, making it ideal for simple iteration over values
for (const item of newMenuArray) {
  console.log(item); // Outputs: 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto' (one per line)
}

// OLD SCHOOL METHOD
console.log('----------OLD SCHOOL METHOD-----------');
// newMenuArray.entries() returns an iterator of [index, element] pairs
// For newMenuArray, entries() yields: [0, 'Focaccia'], [1, 'Bruschetta'], ..., [6, 'Risotto']
// 'item' is an array [index, element], so item[0] is the index, item[1] is the element
for (const item of newMenuArray.entries()) {
  // Adding 1 to item[0] to display 1-based indices (e.g., 1 instead of 0)
  console.log(`${item[0] + 1}: ${item[1]}`);
  // Outputs: '1: Focaccia', '2: Bruschetta', '3: Garlic Bread', '4: Caprese Salad',
  //          '5: Pizza', '6: Pasta', '7: Risotto'
}

// USING DESTRUCTURING
console.log('----------USING DESTRUCTURING-----------');
// Using array destructuring to unpack [index, element] pairs from entries()
// This assigns the index to 'itemIndex' and the element to 'item', improving readability
for (const [itemIndex, item] of newMenuArray.entries()) {
  // Adding 1 to itemIndex for 1-based display
  console.log(`${itemIndex + 1}: ${item}`);
  // Outputs: '1: Focaccia', '2: Bruschetta', '3: Garlic Bread', '4: Caprese Salad',
  //          '5: Pizza', '6: Pasta', '7: Risotto'
}

// Spreading entries() into an array to show its structure
// newMenuArray.entries() is an iterator; spreading it creates an array of [index, element] pairs
console.log([...newMenuArray.entries()]);
// Outputs: [[0, 'Focaccia'], [1, 'Bruschetta'], [2, 'Garlic Bread'], [3, 'Caprese Salad'],
//          [4, 'Pizza'], [5, 'Pasta'], [6, 'Risotto']]

// Iterating over a string, where each iteration yields a character
const str = 'Hello';
for (const char of str) {
  console.log(char); // Outputs: 'H', 'e', 'l', 'l', 'o' (one per line)
}

// Using break to exit the loop early
const numbers = [10, 20, 30, 40, 50];
for (const num of numbers) {
  if (num > 30) break; // Exit the loop when a number greater than 30 is found
  console.log(num); // Outputs: 10, 20, 30
}
/*
1. Purpose: The for...of loop iterates over iterable objects (e.g., arrays, strings, sets, maps) to access their elements directly. In the code, it loops over newMenuArray to process menu items.
2. Syntax: for (const variable of iterable) { ... }. Here, variable (e.g., item) takes each element’s value in newMenuArray, like 'Focaccia', 'Bruschetta', etc.
3. Direct Element Access: It provides elements without needing manual index management. Example: for (const item of newMenuArray) logs each menu item directly.
4. Using entries(): The entries() method returns an iterator of [index, element] pairs (e.g., [0, 'Focaccia']). The code uses it to access both index and element, either as item[0] and item[1] or via destructuring ([itemIndex, item]).
5. Destructuring: Destructuring in for (const [itemIndex, item] of newMenuArray.entries()) cleanly assigns index and element, improving readability. Example output: 1: Focaccia, 2: Bruschetta.
6. Use Cases: Ideal for iterating over values (e.g., logging menu items) or with entries() for index-based tasks (e.g., numbered menu display).
7. Limitations: Only works with iterables, not plain objects. Supports break and continue for control flow.
*/
/////////////////////////////////////////////////////////////////
// ENHANCED OBJECT LITERALS
console.log('----------ENHANCED OBJECT LITERALS-----------');
// Define an array of weekdays to use as dynamic property names
// newWeekdays is an array: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const newWeekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Creating an object using enhanced object literals with computed property names
// Enhanced object literals allow concise syntax and dynamic property names using square brackets []
// The [expression] syntax (computed property names) evaluates the expression to determine the property name
const newOpeningHours = {
  // [newWeekdays[3]] evaluates to 'thu' (the 4th element at index 3), so the property name is 'thu'
  [newWeekdays[3]]: {
    open: 12, // Restaurant opens at 12 PM
    close: 22, // Restaurant closes at 10 PM
  },
  // [newWeekdays[4]] evaluates to 'fri', so the property name is 'fri'
  [newWeekdays[4]]: {
    open: 11, // Opens at 11 AM
    close: 23, // Closes at 11 PM
  },
  // [newWeekdays[5]] evaluates to 'sat', so the property name is 'sat'
  [newWeekdays[5]]: {
    open: 0, // Open 24 hours (0 represents midnight)
    close: 24, // Closes at midnight (24-hour format)
  },
};

// Logs the resulting object
// Output: { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 } }
console.log(newOpeningHours);

console.log('----------MORE EXAMPLES-----------');
// Additional example demonstrating shorthand properties and method definitions
// Define variables to use in the object
const newRestaurantName = 'Bella Italia';
const myLocation = 'Rome';
const rating = 4.5;

// Using enhanced object literals for concise syntax
const myNewRestaurant = {
  // Shorthand property names: when property name matches variable name, omit the value
  newRestaurantName, // Equivalent to newRestaurantName: newRestaurantName
  myLocation, // Equivalent to myLocation: myLocation
  rating, // Equivalent to rating: rating

  // Computed property name using a template literal
  ['status_' + (rating >= 4 ? 'excellent' : 'good')]: true,

  // Shorthand method definition: omit 'function' keyword and colon
  getDetails() {
    return `${this.newRestaurantName} in ${this.myLocation} has a rating of ${this.rating}`;
  },

  // Method with computed name (less common but possible)
  ['serve_' + 'food']() {
    return 'Serving delicious Italian cuisine!';
  },
};

// Logs the restaurant object
// Output: {
//   restaurantName: 'Bella Italia',
//   location: 'Rome',
//   rating: 4.5,
//   status_excellent: true,
//   getDetails: [Function: getDetails],
//   serve_food: [Function: serve_food]
// }
console.log(myNewRestaurant);

// Test the methods
console.log(myNewRestaurant.getDetails()); // Output: Bella Italia in Rome has a rating of 4.5
console.log(myNewRestaurant.serve_food()); // Output: Serving delicious Italian cuisine!
/////////////////////////////////////////////////////////////////
// OPTIONAL CHAINING
console.log('----------OPTIONAL CHAINING-----------');
// Optional chaining (?.) allows safe access to nested properties/methods/arrays
// If a property in the chain is undefined or null, it short-circuits and returns undefined
// Eliminates the need for verbose checks like if (obj.prop && obj.prop.subProp)

// OLD METHOD
console.log('----------OLD METHOD-----------');
// Traditional way to check if a nested property exists to avoid errors
// Assumes restaurant.restroOpeningHours is an object like:
// { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 } }
// Checks if 'mon' exists before accessing its 'open' property
if (restaurant.restroOpeningHours.mon) {
  console.log(restaurant.restroOpeningHours.mon.open); // No output, as 'mon' is undefined
}
// Checks if 'fri' exists before accessing its 'open' property
if (restaurant.restroOpeningHours.fri) {
  console.log(restaurant.restroOpeningHours.fri.open); // Outputs: 11
}

// ES2020 OPTIONAL CHAINING
console.log('----------ES2020 OPTIONAL CHAINING-----------');
// Using optional chaining to safely access nested properties
// If restroOpeningHours or mon is undefined/null, returns undefined instead of throwing an error
console.log(restaurant.restroOpeningHours.mon?.open); // Outputs: undefined (mon doesn't exist)
// Accesses fri.open safely; fri exists, so returns the value
console.log(restaurant.restroOpeningHours.fri?.open); // Outputs: 11
// Handles potential typo or different property name (openingHours instead of restroOpeningHours)
// Returns undefined if openingHours is undefined
console.log(restaurant.openingHours?.fri?.open); // Outputs: undefined (openingHours not defined)

// Example of using optional chaining with a loop
console.log(
  '----------Example of using optional chaining with a loop-----------',
);
// newdays is an array: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const newdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// Iterates over each day to check opening hours
for (const day of newdays) {
  // Uses optional chaining to safely access [day].open
  // If restroOpeningHours[day] is undefined (e.g., for 'mon'), open is undefined
  // Nullish coalescing operator (??) provides 'null' as a fallback if open is undefined
  const open = restaurant.restroOpeningHours[day]?.open ?? null;
  // Ternary operator to format output based on whether open is null
  console.log(
    `On ${day}, we ${open !== null ? `open at ${open}` : 'are closed all day'}`,
  );
  // Outputs:
  // On mon, we are closed all day
  // On tue, we are closed all day
  // On wed, we are closed all day
  // On thu, we open at 12
  // On fri, we open at 11
  // On sat, we open at 0
  // On sun, we are closed all day
}

// Example of using optional chaining with a method
console.log(
  '----------Example of using optional chaining with a method-----------',
);
// Optional chaining with methods: checks if the method exists before calling it
// If orderFood exists, calls it with arguments (0, 1); otherwise, returns undefined
// Nullish coalescing (??) provides a fallback message
console.log(restaurant.orderFood?.(0, 1) ?? 'Order is not available'); // Outputs: '['Focaccia', 'Pasta']'
// Tests a non-existent method
console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist'); // Outputs: 'Method does not exist'

// Example of using optional chaining with Array
console.log(
  '----------Example of using optional chaining with Array-----------',
);
// Array of user objects
const users = [
  { name: 'Suraj', email: 'bV5yJ@example.com' },
  { name: 'Asha', email: 'k6P2o@example.com' },
  { name: 'Sneha', email: 'bV5yJ@example.com' },
];
// Safely access the email of the first user
// If users[0] is undefined, returns undefined; ?? provides fallback
console.log(users[0]?.email ?? 'User not found'); // Outputs: 'bV5yJ@example.com'

// Additional example of optional chaining with nested objects and dynamic keys
console.log(
  '----------Additional example of optional chaining with nested objects and dynamic keys-----------',
);
const config = {
  settings: {
    theme: 'dark',
    notifications: {
      email: true,
      sms: false,
    },
  },
};

// Dynamic key to check notification settings
const notificationType = 'email';
// Safely access nested property with dynamic key
console.log(
  config.settings?.notifications?.[notificationType] ?? 'Setting not found',
); // Outputs: true

// Try accessing a non-existent notification type
console.log(
  config.settings?.notifications?.push ?? 'Push notifications not configured',
); // Outputs: 'Push notifications not configured'

// Safely access deeply nested property that doesn’t exist
console.log(config.settings?.appearance?.fontSize ?? 'Font size not set'); // Outputs: 'Font size not set'

//////////////////////////////////////////////////////////////////////
// Looping Objects: Object.keys(), Object.values(), Object.entries()
// These methods provide ways to iterate over an object's enumerable properties, values, or key-value pairs
// Assuming restroOpeningHours is an object like:
// { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 } }

// PROPERTY KEYS
console.log('----------Looping Objects : Object.keys()-----------');
// Object.keys() returns an array of the object's enumerable property names
// For restroOpeningHours, it returns ['thu', 'fri', 'sat']
const properties = Object.keys(restroOpeningHours);
console.log(properties); // Outputs: ['thu', 'fri', 'sat']

// Using for...of to iterate over the array of property names
// Each 'day' is a string (e.g., 'thu', 'fri', 'sat')
for (const day of Object.keys(restroOpeningHours)) {
  console.log(day); // Outputs: 'thu', 'fri', 'sat' (one per line)
}

// Building a string to list open days
// Starts with a base string and appends each day
let openDays = `We are open on ${properties.length} days: `;
// Iterates over the properties array to add each day with a comma
for (const day of properties) {
  openDays += ` ${day},`;
}
// Outputs: 'We are open on 3 days:  thu, fri, sat,'
console.log(openDays);

// PROPERTY VALUES
console.log('----------Looping Objects : Object.values()-----------');
// Object.values() returns an array of the object's enumerable property values
// For restroOpeningHours, it returns [{ open: 12, close: 22 }, { open: 11, close: 23 }, { open: 0, close: 24 }]
const values = Object.values(restroOpeningHours);
console.log(values);
// Outputs: [{ open: 12, close: 22 }, { open: 11, close: 23 }, { open: 0, close: 24 }]

// ENTIRE OBJECT
console.log('----------Looping Objects : Object.entries()-----------');
// Object.entries() returns an array of [key, value] pairs for the object's enumerable properties
// For restroOpeningHours, it returns:
// [['thu', { open: 12, close: 22 }], ['fri', { open: 11, close: 23 }], ['sat', { open: 0, close: 24 }]]
const entries = Object.entries(restroOpeningHours);
console.log(entries);
// Outputs: [['thu', { open: 12, close: 22 }], ['fri', { open: 11, close: 23 }], ['sat', { open: 0, close: 24 }]]

// Using for...of with destructuring to iterate over key-value pairs
// Each entry is an array [day, { open, close }], destructured into 'day' (string) and '{ open, close }' (object)
for (const [day, { open, close }] of entries) {
  // Formats a string using the key (day) and values (open, close)
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
  // Outputs:
  // On thu, we open at 12 and close at 22
  // On fri, we open at 11 and close at 23
  // On sat, we open at 0 and close at 24
}

// Additional example: Transforming object data using Object.keys(), Object.values(), Object.entries()
console.log(
  '------------------------------Additional Example------------------------------',
);
const menuItems = {
  pizza: { price: 10, category: 'Main' },
  pasta: { price: 8, category: 'Main' },
  salad: { price: 6, category: 'Starter' },
};

// Using Object.keys() to list item names
console.log('Menu Items:', Object.keys(menuItems)); // Outputs: ['pizza', 'pasta', 'salad']

// Using Object.values() to summarize prices
const prices = Object.values(menuItems).map(item => item.price);
console.log('Prices:', prices); // Outputs: [10, 8, 6]
console.log(
  'Total Price:',
  prices.reduce((sum, price) => sum + price, 0),
); // Outputs: 24

// Using Object.entries() to create a categorized menu
const categorizedMenu = {};
for (const [item, { price, category }] of Object.entries(menuItems)) {
  // Group items by category
  if (!categorizedMenu[category]) {
    categorizedMenu[category] = [];
  }
  categorizedMenu[category].push({ item, price });
}
console.log('Categorized Menu:', categorizedMenu);
// Outputs: {
//   Main: [{ item: 'pizza', price: 10 }, { item: 'pasta', price: 8 }],
//   Starter: [{ item: 'salad', price: 6 }]
// }
//////////////////////////////////////////////////////////////////////
// SETS
console.log('------------------------------Sets------------------------------');
// A Set is a collection of unique values; duplicates are automatically removed
// Values can be of any type (strings, numbers, objects, etc.), but each value appears only once
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
// Set removes duplicates, keeping only unique values
console.log(ordersSet); // Outputs: Set(3) { 'pasta', 'pizza', 'risotto' }

console.log('---------String to Set-----------');
// A string is iterable, so a Set created from a string treats each character as an element
// Duplicates (e.g., repeated 'a' in 'Suraj') are removed
console.log(new Set('Suraj')); // Outputs: Set(5) { 'S', 'u', 'r', 'a', 'j' }

console.log('----------Set size-----------');
// The size property returns the number of unique elements in the Set
console.log(ordersSet.size); // Outputs: 3 (for 'pasta', 'pizza', 'risotto')

console.log('----------Set has()-----------');
// The has() method checks if a value exists in the Set, returning true or false
console.log(ordersSet.has('pizza')); // Outputs: true ('pizza' is in the Set)
console.log(ordersSet.has('bread')); // Outputs: false ('bread' is not in the Set)

console.log('----------Set add()-----------');
// The add() method adds a new value to the Set; duplicates are ignored
ordersSet.add('garlic bread'); // Adds 'garlic bread'
ordersSet.add('garlic bread'); // Ignored, as 'garlic bread' already exists
console.log(ordersSet); // Outputs: Set(4) { 'pasta', 'pizza', 'risotto', 'garlic bread' }

console.log('----------Set delete()-----------');
// The delete() method removes a specified value from the Set
ordersSet.delete('risotto'); // Removes 'risotto'
console.log(ordersSet); // Outputs: Set(3) { 'pasta', 'pizza', 'garlic bread' }

// console.log('----------Set clear()-----------');
// The clear() method removes all elements from the Set
// ordersSet.clear();
// console.log(ordersSet); // Outputs: Set(0) {} (commented out to preserve Set contents)

console.log('----------Looping Sets-----------');
// Sets are iterable, so for...of can be used to loop over elements
// Each iteration yields a unique value in insertion order
for (const order of ordersSet) {
  console.log(order); // Outputs: 'pasta', 'pizza', 'garlic bread' (one per line)
}

console.log('----------Set of unique staff-----------');
// Creating a Set from an array with duplicates to get unique values
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = new Set(staff);
// Duplicates are removed, keeping only unique roles
console.log(uniqueStaff); // Outputs: Set(3) { 'Waiter', 'Chef', 'Manager' }

console.log('----------Array of unique staff-----------');
// Spreading a Set into an array converts it to an array of unique values
const newStaff = [...uniqueStaff];
console.log(newStaff); // Outputs: ['Waiter', 'Chef', 'Manager']

// SET METHODS
console.log('----------------Set Methods----------------');
// Sets store unique values, and ES2022 introduced methods for comparing and combining Sets
// italianFoods contains unique ingredients used in Italian cuisine
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

// mexicanFoods contains unique ingredients used in Mexican cuisine
const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

console.log(
  '---------------------Set intersection-----------------------------',
);
// intersection() returns a new Set with elements present in both Sets
// For italianFoods and mexicanFoods, it includes elements common to both
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods); // Outputs: Set(2) { 'tomatoes', 'garlic' }
// Convert the Set to an array using the spread operator for further use
const newCommonFoods = [...commonFoods];
console.log(newCommonFoods); // Outputs: ['tomatoes', 'garlic']

console.log('--------------------------Set union--------------------------');
// union() returns a new Set with all unique elements from both Sets
// Combines all elements, removing duplicates
const italianMexicanFoods = italianFoods.union(mexicanFoods);
console.log(italianMexicanFoods); // Outputs: Set(10) { 'pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil', 'tortillas', 'beans', 'rice', 'avocado' }
// Convert the Set to an array
const newItalianMexicanFoods = [...italianMexicanFoods];
console.log(newItalianMexicanFoods); // Outputs: ['pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil', 'tortillas', 'beans', 'rice', 'avocado']

console.log(
  '--------------------------Set difference--------------------------',
);
// difference() returns a new Set with elements in the first Set but not in the second
// For italianFoods.difference(mexicanFoods), it includes elements unique to italianFoods
const italianOnlyFoods = italianFoods.difference(mexicanFoods);
console.log(italianOnlyFoods); // Outputs: Set(4) { 'pasta', 'gnocchi', 'olive oil', 'basil' }
// For mexicanFoods.difference(italianFoods), it includes elements unique to mexicanFoods
const mexicanOnlyFoods = mexicanFoods.difference(italianFoods);
console.log(mexicanOnlyFoods); // Outputs: Set(4) { 'tortillas', 'beans', 'rice', 'avocado' }
// Convert italianOnlyFoods to an array
const newItalianOnlyFoods = [...italianOnlyFoods];
console.log(newItalianOnlyFoods); // Outputs: ['pasta', 'gnocchi', 'olive oil', 'basil']

console.log(
  '--------------------------Set symmetric difference--------------------------',
);
// symmetricDifference() returns a new Set with elements in either Set but not in both
// Includes elements unique to each Set, excluding common ones
const symmetricFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(symmetricFoods); // Outputs: Set(8) { 'pasta', 'gnocchi', 'olive oil', 'basil', 'tortillas', 'beans', 'rice', 'avocado' }
// Convert to an array
const newSymmetricFoods = [...symmetricFoods];
console.log(newSymmetricFoods); // Outputs: ['pasta', 'gnocchi', 'olive oil', 'basil', 'tortillas', 'beans', 'rice', 'avocado']

console.log('--------------------------Set subset--------------------------');
// isSubsetOf() checks if all elements of the first Set are in the second Set
// Returns true if mexicanFoods is a subset of italianFoods, false otherwise
const isSubset = mexicanFoods.isSubsetOf(italianFoods);
console.log(isSubset); // Outputs: false (mexicanFoods has 'tortillas', 'beans', 'rice', 'avocado' not in italianFoods)

console.log('--------------------------Set superset--------------------------');
// isSupersetOf() checks if the first Set contains all elements of the second Set
// Returns true if italianFoods contains all elements of mexicanFoods, false otherwise
const isSuperset = italianFoods.isSupersetOf(mexicanFoods);
console.log(isSuperset); // Outputs: false (italianFoods lacks 'tortillas', 'beans', 'rice', 'avocado')

console.log(
  '--------------------------Set isDisjoint--------------------------',
);
// isDisjointFrom() checks if two Sets have no elements in common
// Returns true if there are no shared elements, false otherwise
const isDisjoint = italianFoods.isDisjointFrom(mexicanFoods);
console.log(isDisjoint); // Outputs: false (they share 'tomatoes' and 'garlic')

console.log(
  '---------------------------Additional Examples--------------------------',
);
// Example: Managing inventory across restaurant locations using Set methods
const location1Inventory = new Set(['flour', 'tomatoes', 'cheese', 'basil']);
const location2Inventory = new Set([
  'tomatoes',
  'olive oil',
  'basil',
  'garlic',
]);
const newIngredients = new Set(['pasta', 'tomatoes']);

// Find ingredients available at both locations (intersection)
const sharedIngredients = location1Inventory.intersection(location2Inventory);
console.log('Shared Ingredients:', sharedIngredients); // Outputs: Set(2) { 'tomatoes', 'basil' }

// Combine all ingredients across locations and new stock (union)
const totalInventory = location1Inventory
  .union(location2Inventory)
  .union(newIngredients);
console.log('Total Inventory:', totalInventory); // Outputs: Set(6) { 'flour', 'tomatoes', 'cheese', 'basil', 'olive oil', 'garlic', 'pasta' }

// Find ingredients unique to location1 (difference)
const location1Unique = location1Inventory.difference(location2Inventory);
console.log('Location 1 Unique:', location1Unique); // Outputs: Set(2) { 'flour', 'cheese' }

// Check if newIngredients is a subset of total inventory
const isNewStockCovered = newIngredients.isSubsetOf(totalInventory);
console.log('New stock fully in inventory?', isNewStockCovered); // Outputs: true

// Check if location1 and location2 have no common ingredients
const areLocationsDisjoint = location1Inventory.isDisjointFrom(
  new Set(['rice', 'beans']),
);
console.log('Location 1 disjoint from rice/beans?', areLocationsDisjoint); // Outputs: true

// Convert unique ingredients to array for reporting
const uniqueIngredientsList = [...location1Unique];
console.log('Unique Ingredients List:', uniqueIngredientsList); // Outputs: ['flour', 'cheese']
//////////////////////////////////////////////////////////////////////
// MAPS
console.log('---------------------------Maps--------------------------');
// Maps are collections of key-value pairs where keys can be any data type (strings, numbers, objects, etc.)
// Unlike objects, Maps maintain insertion order and allow non-string keys
// Maps are ideal for key-value storage with dynamic or complex keys

console.log('------------------------MAP CREATION------------------------');
// Create a new Map instance
const rest = new Map();
// set(key, value) adds a key-value pair to the Map and returns the Map for chaining
rest.set('name', 'Classico Italiano'); // Key: string 'name', Value: string 'Classico Italiano'
rest.set(1, 'Firenze, Italy'); // Key: number 1, Value: string 'Firenze, Italy'
// set() returns the Map, so console.log shows the updated Map
console.log(rest.set(2, 'Lisbon, Portugal')); // Outputs: Map(3) { 'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal' }
// Log the entire Map to see its contents
console.log(rest); // Outputs: Map(3) { 'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal' }

console.log('------------------------MAP MANIPULATION------------------------');
// Chain multiple set() calls to add more key-value pairs
// Maps support any data type as keys or values, including arrays and booleans
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']) // Key: string 'categories', Value: array
  .set('open', 11) // Key: string 'open', Value: number 11
  .set('close', 23) // Key: string 'close', Value: number 23
  .set(true, 'We are open') // Key: boolean true, Value: string 'We are open'
  .set(false, 'We are closed'); // Key: boolean false, Value: string 'We are closed'
console.log(rest); // Outputs: Map(7) { 'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal', 'categories' => [...], 'open' => 11, 'close' => 23, true => 'We are open', false => 'We are closed' }

console.log('------------------------READ MAP VALUES------------------------');
// get(key) retrieves the value associated with the specified key
console.log(rest.get('name')); // Outputs: 'Classico Italiano'
console.log(rest.get(true)); // Outputs: 'We are open'
console.log(rest.get(1)); // Outputs: 'Firenze, Italy'
console.log(rest.get('1')); // Outputs: undefined (keys are type-sensitive; '1' string ≠ 1 number)

// Use get() with a dynamic expression to check if the restaurant is open
// time > rest.get('open') && time < rest.get('close') evaluates to false (8 < 11)
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // Outputs: 'We are closed'

console.log('------------------------MAP has Method------------------------');
// has(key) checks if a key exists in the Map, returning true or false
console.log(rest.has('categories')); // Outputs: true ('categories' exists)
console.log(rest.has('8')); // Outputs: false ('8' does not exist)

console.log(
  '------------------------MAP delete Method------------------------',
);
// delete(key) removes the key-value pair for the specified key, returning true if successful
const answer = rest.delete(2); // Removes key 2 ('Lisbon, Portugal')
console.log(answer); // Outputs: true (deletion successful)
console.log(rest); // Outputs: Map(6) { 'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 'categories' => [...], 'open' => 11, 'close' => 23, true => 'We are open', false => 'We are closed' }

console.log(
  '------------------------MAP size Property------------------------',
);
// size property returns the number of key-value pairs in the Map
console.log(rest.size); // Outputs: 6 (after deleting key 2)

// console.log('------------------------MAP CLEAR Method------------------------');
// clear() removes all key-value pairs from the Map
// rest.clear();
// console.log(rest); // Outputs: Map(0) {} (commented out to preserve Map contents)

console.log(
  '------------------------MAP Additional Example------------------------',
);
// Using an array as a key; note that the exact array reference matters
rest.set([1, 2], 'Test'); // Key: array [1, 2], Value: string 'Test'
console.log(rest); // Outputs: Map with [1, 2] => 'Test' added
console.log(rest.get([1, 2])); // Outputs: undefined (new array [1, 2] is a different reference)

// Store the array in a variable to reuse the same reference
const arrTest = [1, 2];
rest.set(arrTest, 'Test'); // Key: arrTest reference, Value: 'Test'
console.log(rest); // Outputs: Map with arrTest => 'Test' added
console.log(rest.get(arrTest)); // Outputs: 'Test' (same reference works)

// Using a DOM element as a key; same reference rule applies
rest.set(document.querySelector('h1'), 'Heading'); // Key: h1 DOM element, Value: 'Heading'
console.log(rest); // Outputs: Map with h1 => 'Heading' added
console.log(rest.get(document.querySelector('h1'))); // Outputs: 'Heading' (same DOM element reference)

console.log(
  '------------------------MAP Additional Example MENU------------------------',
);
// Example: Using a Map to store restaurant menu items with varied key types
const newMenuMap = new Map();

// Define a key as an object for categorization
const mainCourseKey = { type: 'Main Course' };
const dessertKey = { type: 'Dessert' };

// Add menu items with different key types
newMenuMap
  .set('pizza', { name: 'Margherita', price: 10, category: 'Main' })
  .set(mainCourseKey, [
    { name: 'Pasta', price: 8 },
    { name: 'Risotto', price: 12 },
  ])
  .set(dessertKey, [
    { name: 'Tiramisu', price: 6 },
    { name: 'Gelato', price: 4 },
  ])
  .set('special', 'Daily Chef Special');

// Log the entire Map
console.log(newMenuMap);
// Outputs: Map(4) { 'pizza' => { name: 'Margherita', price: 10, category: 'Main' }, { type: 'Main Course' } => [...], { type: 'Dessert' } => [...], 'special' => 'Daily Chef Special' }

// Access specific items
console.log(newMenuMap.get('pizza')); // Outputs: { name: 'Margherita', price: 10, category: 'Main' }
console.log(newMenuMap.get(mainCourseKey)); // Outputs: [{ name: 'Pasta', price: 8 }, { name: 'Risotto', price: 12 }]

// Iterate over the Map using for...of and Object.entries
for (const [key, value] of newMenuMap) {
  // Handle object keys carefully (stringify for display)
  const keyDisplay = typeof key === 'object' ? JSON.stringify(key) : key;
  console.log(`Key: ${keyDisplay}, Value: ${JSON.stringify(value)}`);
}
// Outputs:
// Key: pizza, Value: {"name":"Margherita","price":10,"category":"Main"}
// Key: {"type":"Main Course"}, Value: [{"name":"Pasta","price":8},{"name":"Risotto","price":12}]
// Key: {"type":"Dessert"}, Value: [{"name":"Tiramisu","price":6},{"name":"Gelato","price":4}]
// Key: special, Value: "Daily Chef Special"

// Check if a category exists
console.log(newMenuMap.has(dessertKey)); // Outputs: true

// Calculate total price of main courses
const mainCourses = newMenuMap.get(mainCourseKey);
const totalPrice = mainCourses.reduce((sum, item) => sum + item.price, 0);
console.log('Total Main Course Price:', totalPrice); // Outputs: 20

// MAP: Iteration
console.log('-------------------------MAP: Iteration------------------------');
// Maps are iterable collections of key-value pairs, allowing iteration with for...of
// Keys can be any data type (strings, numbers, booleans, etc.), and iteration follows insertion order
// Create a Map with an array of [key, value] pairs to represent a quiz question
const question = new Map([
  ['question', 'What is the best programming language in the world?'], // Key: string, Value: string
  [1, 'C'], // Key: number, Value: string
  [2, 'Java'], // Key: number, Value: string
  [3, 'JavaScript'], // Key: number, Value: string
  ['correct', 3], // Key: string, Value: number
  [true, 'Correct :D'], // Key: boolean, Value: string
  [false, 'Try again! :('], // Key: boolean, Value: string
]);
console.log(question); // Outputs: Map(7) { 'question' => 'What is the best programming language in the world?', 1 => 'C', 2 => 'Java', 3 => 'JavaScript', 'correct' => 3, true => 'Correct :D', false => 'Try again! :(' }

// Convert Object to Map
console.log(
  '-------------------------MAP: Object to Map------------------------',
);
// Object.entries() converts an object to an array of [key, value] pairs
// Assuming openingHours is { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 } }
// new Map(Object.entries()) creates a Map from the object's key-value pairs
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); // Outputs: Map(7) { 'mon' => '9-12', 'tue' => '9-12', 'wed' => '9-12', 'thu' => '9-12', 'fri' => '9-12', 'sat' => '9-12', 'sun' => '9-12' }

// Looping over Maps
console.log('-------------------------MAP: Looping------------------------');
// get(key) retrieves the value for a specific key
console.log(question.get('question')); // Outputs: 'What is the best programming language in the world?'
// for...of iterates over Map entries, yielding [key, value] arrays
// Destructuring [key, value] makes it easy to access both parts
for (const [key, value] of question) {
  // Filter to only log numeric keys (answer options)
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
    // Outputs:
    // Answer 1: C
    // Answer 2: Java
    // Answer 3: JavaScript
  }
}

// Interactive quiz: Prompt user for an answer and check if it's correct
// prompt() returns a string, so Number() converts it to a number
// const correctAnswer = Number(prompt('Your answer')); // Example input: '3'
const correctAnswer = 3; // Example input: '3'
console.log(correctAnswer); // Outputs: 3
// question.get('correct') retrieves 3; compare with user input to get true/false
// question.get(true/false) retrieves 'Correct :D' or 'Try again! :('
const finalAnswer = question.get(question.get('correct') === correctAnswer);
console.log(finalAnswer); // Outputs: 'Correct :D' (if input is 3)

// MAP to Array
console.log('-------------------------MAP to Array------------------------');
// Spreading a Map (...question) returns an array of [key, value] pairs (same as entries())
console.log([...question]); // Outputs: [['question', 'What is...'], [1, 'C'], [2, 'Java'], [3, 'JavaScript'], ['correct', 3], [true, 'Correct :D'], [false, 'Try again! :(']]
// entries() explicitly returns an iterator of [key, value] pairs, spread into an array
console.log([...question.entries()]); // Outputs: Same as above
// keys() returns an iterator of keys, spread into an array
console.log([...question.keys()]); // Outputs: ['question', 1, 2, 3, 'correct', true, false]
// values() returns an iterator of values, spread into an array
console.log([...question.values()]); // Outputs: ['What is...', 'C', 'Java', 'JavaScript', 3, 'Correct :D', 'Try again! :(']

///////////////////////////////////////////////////////////////////////////////////
// WORKING WITH STRINGS
console.log(
  '-------------------------WORKING WITH STRINGS - PART 1------------------------',
);
// Strings in JavaScript are primitive, immutable sequences of characters
// They can be accessed like arrays and have built-in methods for manipulation
const airline = 'TAP Air Portugal'; // Example string with 16 characters
const plane = 'A320'; // Example string with 4 characters

console.log(
  '-------------------------Reading String Values ------------------------',
);
// Strings can be indexed like arrays to access individual characters
// Indices are zero-based; accessing an invalid index returns undefined
console.log(plane[0]); // Outputs: 'A' (first character at index 0)
console.log(plane[1]); // Outputs: '3' (second character at index 1)
console.log(plane[2]); // Outputs: '2' (third character at index 2)
console.log('b737'[0]); // Outputs: 'b' (first character of string literal)

console.log(
  '-----------------------------Length of String-----------------------------',
);
// The length property returns the number of characters in a string
// Includes spaces and special characters
console.log(airline.length); // Outputs: 16 (counts all characters in 'TAP Air Portugal')
console.log('B737'.length); // Outputs: 4 (counts characters in 'B737')

console.log(
  '-----------------------------String Methods-----------------------------',
);
console.log(
  '-----------------------------indexOf()-----------------------------',
);
// indexOf(searchValue) returns the index of the first occurrence of searchValue
// Returns -1 if not found; case-sensitive
console.log(airline.indexOf('r')); // Outputs: 6 (first 'r' in 'Portugal')
console.log(airline.indexOf('portugal')); // Outputs: -1 (not found, lowercase 'p')
console.log(airline.indexOf('Portugal')); // Outputs: 8 (found, matches case exactly)

console.log(
  '-----------------------------lastIndexOf()-----------------------------',
);
// lastIndexOf(searchValue) returns the index of the last occurrence of searchValue
// Returns -1 if not found; case-sensitive
console.log(airline.lastIndexOf('r')); // Outputs: 10 (last 'r' in 'Portugal')

console.log(
  '-----------------------------slice()-----------------------------',
);
// slice(start, end) extracts a portion of the string from start index to end-1
// If end is omitted, extracts to the end; negative indices count from the end
console.log(airline.slice(4)); // Outputs: 'Air Portugal' (from index 4 to end)
console.log(airline.slice(4, 7)); // Outputs: 'Air' (from index 4 to 6, excluding 7)
console.log(airline.slice(0, airline.indexOf(' '))); // Outputs: 'TAP' (from start to first space at index 3)
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Outputs: 'Portugal' (from after last space at index 7 to end)
console.log(airline.slice(-2)); // Outputs: 'al' (from second-to-last character to end)
console.log(airline.slice(1, -1)); // Outputs: 'AP Air Portuga' (from index 1 to second-to-last character)

console.log(
  '-------------------------REAL WORLD EXAMPLES of Slice() Method------------------------',
);
// Function to check if a seat is a middle seat based on its letter (B or E)
const checkMiddleSeat = function (seat) {
  // Middle seats in airplane seating are typically 'B' or 'E' (e.g., in a 3-3 configuration)
  // slice(-1) extracts the last character of the seat string
  const middleSeat = seat.slice(-1);
  if (middleSeat === 'B' || middleSeat === 'E') {
    console.log('You got the middle seat! 😁');
  } else {
    console.log('You got lucky! 🙌');
  }
};

// Test the function with example seat numbers
checkMiddleSeat('11B'); // Outputs: 'You got the middle seat! 😁' (ends with 'B')
checkMiddleSeat('23C'); // Outputs: 'You got lucky! 🙌' (ends with 'C')
checkMiddleSeat('3E'); // Outputs: 'You got the middle seat! 😁' (ends with 'E')

// WORKING WITH STRINGS - PART 2
console.log(
  '-------------------------WORKING WITH STRINGS - PART 2------------------------',
);
// Strings are immutable; methods return new strings without modifying the original
// This section covers case conversion, trimming, replacing, and checking substrings
console.log(
  '-----------------------------toUpperCase()-----------------------------',
);
// toUpperCase() converts all characters to uppercase, returning a new string
console.log(airline.toUpperCase()); // Outputs: 'TAP AIR PORTUGAL'

console.log(
  '-----------------------------toLowerCase()-----------------------------',
);
// toLowerCase() converts all characters to lowercase, returning a new string
console.log(airline.toLowerCase()); // Outputs: 'tap air portugal'

// Fix Capitalization
console.log(
  '-----------------------------Fix Capitalization-----------------------------',
);
// Function to capitalize the first letter of a name and lowercase the rest
const passenger = 'jOnAS'; // Example name with mixed case
const passengerLower = passenger.toLowerCase(); // Convert to lowercase: 'jonas'
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // Capitalize first letter: 'Jonas'
console.log(passengerCorrect); // Outputs: 'Jonas'

// Check Email
console.log(
  '-----------------------------Check Email-----------------------------',
);
console.log('---------------------------trim()-----------------------------');
// trim() removes leading and trailing whitespace (spaces, tabs, newlines) from a string
const passengerEmail = 'hello@jonas.io'; // Reference email
const passengerLoginEmail = '   Hello@Jonas.Io \n'; // Email with extra whitespace and newline
const lowerPassengerEmail = passengerEmail.toLowerCase(); // Normalize to lowercase: 'hello@jonas.io'
const lowerPassengerLoginEmail = passengerLoginEmail.toLowerCase(); // Normalize to lowercase: '   hello@jonas.io \n'
const trimmedPassengerLoginEmail = lowerPassengerLoginEmail.trim(); // Remove whitespace: 'hello@jonas.io'
console.log(trimmedPassengerLoginEmail); // Outputs: 'hello@jonas.io'

console.log(
  '---------------------------methods chaining-----------------------------',
);
// Method chaining combines multiple string methods in a single expression
// toLowerCase().trim() normalizes email in one step
const normalisedEmail = passengerLoginEmail.toLowerCase().trim();
console.log(normalisedEmail); // Outputs: 'hello@jonas.io'

console.log(
  '---------------------------comparison-----------------------------',
);
// Compare normalized emails to check if they match
console.log(lowerPassengerEmail === trimmedPassengerLoginEmail); // Outputs: true (both are 'hello@jonas.io')
console.log(lowerPassengerEmail === trimmedPassengerLoginEmail); // Outputs: true (repeated for clarity)

console.log(
  '---------------------------replace()-----------------------------',
);
// replace(searchValue, newValue) replaces the first occurrence of searchValue with newValue
const priceGB = '28,80£'; // Price in British format
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // Convert to US format
console.log(priceUS); // Outputs: '28.80$' (replaces '£' with '$' and ',' with '.')

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// replace() only replaces the first occurrence
console.log(announcement.replace('door', 'gate')); // Outputs: 'All passengers come to boarding gate 23. Boarding door 23!'

console.log(
  '---------------------------replaceAll()-----------------------------',
);
// replaceAll(searchValue, newValue) replaces all occurrences of searchValue (ES2021+)
console.log(announcement.replaceAll('door', 'gate')); // Outputs: 'All passengers come to boarding gate 23. Boarding gate 23!'

console.log(
  '------------------------------Replacing using Regex------------------------------',
);
// Regular expression with /g flag achieves the same as replaceAll() for older environments
console.log(announcement.replace(/door/g, 'gate')); // Outputs: 'All passengers come to boarding gate 23. Boarding gate 23!'

console.log(
  '---------------------------includes()-----------------------------',
);
// includes(searchString) returns true if searchString is found, false otherwise (case-sensitive)
const newPlane = 'A320neo';
console.log(newPlane.includes('A320')); // Outputs: true ('A320' is in 'A320neo')
console.log(newPlane.includes('neo')); // Outputs: true ('neo' is in 'A320neo')
console.log(newPlane.includes('Boeing')); // Outputs: false ('Boeing' not found)
console.log(newPlane.includes('A321')); // Outputs: false ('A321' not found)

console.log(
  '---------------------------startsWith()-----------------------------',
);
// startsWith(searchString) returns true if the string starts with searchString (case-sensitive)
console.log(newPlane.startsWith('A3')); // Outputs: true ('A320neo' starts with 'A3')
console.log(newPlane.startsWith('B7')); // Outputs: false ('A320neo' doesn’t start with 'B7')

console.log(
  '---------------------------endsWith()-----------------------------',
);
// endsWith(searchString) returns true if the string ends with searchString (case-sensitive)
console.log(newPlane.endsWith('neo')); // Outputs: true ('A320neo' ends with 'neo')
console.log(newPlane.endsWith('320')); // Outputs: false ('A320neo' doesn’t end with '320')

console.log(
  '---------------------------REAL TIME EXAMPLE-----------------------------',
);
// Check if plane model is a specific type using startsWith()
if (newPlane.startsWith('A320')) console.log('Plane is a Boeing 320neo'); // Outputs: 'Plane is a Boeing 320neo' (Note: should be Airbus, not Boeing)

// PRACTICE EXERCISE
console.log(
  '------------------------------PRACTICE EXERCISE------------------------------',
);
// Function to check baggage items for prohibited items (knife, gun)
const checkBaggage = function (items) {
  // Convert to lowercase for case-insensitive checking
  const baggage = items.toLowerCase();
  // Check for prohibited items using includes()
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

// Test baggage checking function
checkBaggage('I have a Laptop, some Food And a pocket Knife'); // Outputs: 'You are NOT allowed on board' (contains 'knife')
checkBaggage('socks and camera'); // Outputs: 'Welcome aboard' (no prohibited items)
checkBaggage('Got some snacks and a guitar'); // Outputs: 'Welcome aboard' (no prohibited items)
checkBaggage('Clothes and a gun for protection'); // Outputs: 'You are NOT allowed on board' (contains 'gun')

console.log(
  '------------------------------REAL WORLD EXAMPLE------------------------------',
);
// Real-time example: Validating and formatting user input in a form
const validateAndFormatUser = function (username, email) {
  // Format username: trim, capitalize first letter, lowercase rest
  const cleanedUsername = username.trim();
  const formattedUsername = cleanedUsername
    ? cleanedUsername[0].toUpperCase() + cleanedUsername.slice(1).toLowerCase()
    : '';

  // Format and validate email: trim, lowercase, check for '@'
  const formattedEmail = email.toLowerCase().trim();
  const isValidEmail =
    formattedEmail.includes('@') && formattedEmail.includes('.');

  // Return formatted data and validation result
  return {
    username: formattedUsername,
    email: formattedEmail,
    isValid: isValidEmail && formattedUsername.length >= 3,
  };
};

// Test the function with sample inputs
console.log(validateAndFormatUser('  jOhN  ', '  John.Doe@Example.Com  '));
// Outputs: { username: 'John', email: 'john.doe@example.com', isValid: true }
console.log(validateAndFormatUser('aB', 'test.com'));
// Outputs: { username: 'Ab', email: 'test.com', isValid: false }
console.log(validateAndFormatUser('  mary JANE  ', 'MARY@company.io'));
// Outputs: { username: 'Mary jane', email: 'mary@company.io', isValid: true }

// Example with invalid input
console.log(validateAndFormatUser('', '  @invalid  '));
// Outputs: { username: '', email: '@invalid', isValid: false }

///////////////////////////////////////////////////////////////////////////////////
