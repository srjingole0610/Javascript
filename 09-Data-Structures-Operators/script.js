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
};

//////////////////////////////////////////
// DESTRUCTURING ON AN ARRAY

const arr = [2, 3, 4];

// Traditional way to extract array elements
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // 2 3 4

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
let num1 = 10, num2 = 20;
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

