'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderFood: function (starterIndex, mainIndex) {
    // This method returns an array consisting of a starter and a main dish
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
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
  },

  orderDelivery: function ({
    starterIndex = 1, // default value if not provided in argument object
    mainIndex = 0,
    time = '20:00',
    address,
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
const { name, openingHours, categories } = restaurant;
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

// Modern ES6 way: Use spread to "explode" array into separate arguments
const ingredients = [
  prompt(`Let's make pasta! Ingredient 1? `),
  prompt(`Let's make pasta! Ingredient 2? `),
  prompt(`Let's make pasta! Ingredient 3? `),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients); // Cleaner and scalable!

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
restaurantCopy.openingHours.fri.open = 10;
console.log(restaurant.openingHours.fri.open); // 10 (changed in both!)

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
const { sat, ...weekdays } = restaurant.openingHours;
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
console.log(' ------------------- EXTRA EXAMPLES! -----------------------')
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
