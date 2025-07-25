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
console.log(newMenu);           // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']
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
console.log(letters);       // ['S','u','r','a','j',' ','I.']
console.log(...newStr);     // S u r a j (spreads characters)


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
  ...restaurant,      // copies all properties
  founder: 'Suraj Ingole',  // adds new property
  foundingYear: 1998, // note: corrected spelling from 'foudingYear'
};
console.log(newRestaurant);

// Shallow cloning: same top-level structure, but not deep/nested clone
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);

// Changes to the copy do NOT affect the original
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);       // 'Classico Italiano'
console.log(restaurantCopy.name);   // 'Ristorante Roma'

// But changing a nested object property will affect both (because of shallow copy)
restaurantCopy.openingHours.fri.open = 10;
console.log(restaurant.openingHours.fri.open); // 10 (changed in both!)

// ---- EXTRA EXAMPLES ----
// 1. Spreading to create a shallow copy of a nested array
const doubleArr = [[1,2], [3,4]];
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
