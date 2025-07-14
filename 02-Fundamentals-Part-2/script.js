// *********************************** Strict Mode **************************************
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) {
  console.log("I can drive");
}

//Strict Mode will throw an error if we try to declare a variable with a reserved keyword
// const interface = "Audio";
// const private = 534;

// *********************************** Functions **************************************

//Function Declaration
function logger() {
  console.log("I am logger function!");
}

//Invoke Function or Call Function or Run Function
logger();
logger();
logger();

//Function with Parameters and return value
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); // Passing arguments to the function
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 4);
console.log(orangeJuice);

const mixedJuice = fruitProcessor(2, 4);
console.log(mixedJuice);

//Function Declaration can be called before it is declared but function expression cannot be called before it is declared

/**
 * Calculates the age of a person based on their birth year
 * @param {number} birthYear the year of birth
 * @returns {number} the age of the person
 */
function calcAge(birthYear) {
  const currentAge = 2025 - birthYear;
  return currentAge;
}

const surajAge = calcAge(1996);
console.log(surajAge);

//Function Expression
const calcAgeNew = function (birthYear) {
  const currentAge = 2025 - birthYear;
  return currentAge;
};

const surajAgeNew = calcAgeNew(1996);
console.log(surajAgeNew);
