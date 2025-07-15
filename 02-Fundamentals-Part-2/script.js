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

//Arrow Function
//simple Arrow Function with one parameter
const calcAgeArrow = (birthYear) => 2025 - birthYear;
const surajAgeArrow = calcAgeArrow(1996);
console.log(surajAgeArrow);

//Arrow Function with multiple lines of code and return value
const yearUntilRetirement = (birthYear) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearUntilRetirement(1996));

//Arrow function wuth multiple parameters
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1996, "Suraj"));
console.log(yearsUntilRetirement(1985, "Bob"));

//Function Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

const fruitProcessorNew = function (apples, oranges) {
  const applesPieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applesPieces} apples pieces and ${orangesPieces} oranges pieces.`;
  return juice;
};
console.log(fruitProcessorNew(2, 3));

//****************************************** ARRAYS **************************************

//Array Declaration
const myFriends = ["Michael", "Peter", "Steven"];
console.log(myFriends);

//Array Methods to create an array
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

//Accessing Array Elements
console.log(myFriends[0]);
console.log(myFriends[2]);

//Array length
console.log(myFriends.length);
console.log(years.length);

//Last Array Element
console.log(myFriends[myFriends.length - 1]);
console.log(years[years.length - 1]);

//Replacing Array Elements
myFriends[1] = "John";
console.log(myFriends);

// Uncaught TypeError: Assignment to constant variable
// myFriends = ["Bob", "Alice"];
// console.log(myFriends);

//Array with personal data
const suraj = ["Suraj", "Ingole", 2025 - 1996, "Developer", myFriends];
console.log(suraj);
console.log(suraj.length);

// Exercise

const calcAgeArray = function (birthYear) {
  return 2025 - birthYear;
};

const birthYears = [1990, 1967, 2002, 2010, 2018];
const birthAges = calcAgeArray(birthYears);
// Will output NaN because it's expecting a single value
console.log(birthAges);

//Need to pass each array element to the function
const birthAge1 = calcAgeArray(birthYears[0]);
console.log(birthAge1);
const birthAge2 = calcAgeArray(birthYears[1]);
console.log(birthAge2);
const birthAge3 = calcAgeArray(birthYears[birthYears.length - 1]);
console.log(birthAge3);

//Storing the results in an array
const birthAgesArray = [
  calcAgeArray(birthYears[0]),
  calcAgeArray(birthYears[1]),
  calcAgeArray(birthYears[birthYears.length - 1]),
];
console.log(birthAgesArray);

//Array Methods
const myFriendsNew = ["Michael", "Peter", "Steven"];
console.log(myFriendsNew);
console.log(myFriendsNew.length);
//Add Elements
// 1. push() - adds an element to the end of an array and mutates the original array and returns the new length
myFriendsNew.push("Bob");
console.log(myFriendsNew);
console.log(myFriendsNew.length);

//2.unshift() - adds an element to the beginning of an array and mutates the original array and returns the new length
myFriendsNew.unshift("John");
console.log(myFriendsNew);
console.log(myFriendsNew.length);

//Remove Elements
//1. pop() - removes the last element from an array and mutates the original array and returns the removed element
const poppedFriend = myFriendsNew.pop();
console.log(poppedFriend);
console.log(myFriendsNew);
console.log(myFriendsNew.length);

//2. shift() - removes the first element from an array and mutates the original array and returns the removed element
const shiftedFriend = myFriendsNew.shift();
console.log(shiftedFriend);
console.log(myFriendsNew);
console.log(myFriendsNew.length);

// indexOf() - returns the index of the first element in an array that matches the specified value and returns -1 if not found
console.log(myFriendsNew.indexOf("Steven"));
console.log(myFriendsNew.indexOf("Bob"));

//includes() - returns true if the specified value is found in the array and returns false if not found and use strict equality (===) for comparison
console.log(myFriendsNew.includes("Steven"));
console.log(myFriendsNew.includes("Bob"));
if (myFriendsNew.includes("Bob")) {
  console.log("You have a friend named Bob");
} else {
  console.log("You don't have a friend named Bob");
}

//******************************************** OBJECTS **************************************

//Object Literal Syntax
const surajObj = {
  firstName: "suraj",
  lastName: "ingole",
  age: 2025 - 1996,
  job: "developer",
  friends: ["michael", "peter", "steven"],
};

console.log(surajObj);

//Accessing Object Properties

// 1. dot notation
console.log(surajObj.firstName);
console.log(surajObj.friends);

// 2. bracket notation
console.log(surajObj["lastName"]);
console.log(surajObj["friends"]);

const nameKey = "Name";
console.log(surajObj["first" + nameKey]);
console.log(surajObj["last" + nameKey]);

//Example for bracket notation
const interestedIn = prompt(
  "What do you want to know about Suraj? Choose between firstName, lastName, age, job, and friends"
);
console.log(surajObj[interestedIn]);

if (surajObj[interestedIn]) {
  console.log(surajObj[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

//Adding new Object Properties
surajObj.location = "Pune";
surajObj["twitter"] = "@srjrockzz";
console.log(surajObj);

//Challenge
// "Suraj has 3 friends, and his best friend is called Michael"
const messageDot = `${surajObj.firstName} has ${surajObj.friends.length} friends, and his best friend is called ${surajObj.friends[0]}`;
console.log(messageDot);

const messageBracket = `${surajObj["firstName"]} has ${surajObj["friends"].length} friends, and his best friend is called ${surajObj["friends"][0]}`;
console.log(messageBracket);

//Object Methods
const surajObjNew = {
  firstName: "suraj",
  lastName: "ingole",
  birthYear: 1996,
  job: "developer",
  friends: ["michael", "peter", "steven"],
  hasDriversLicense: false,

  calcAgeNormal: function (birthYear) {
    return 2025 - birthYear;
  },

  calcAgeThis: function () {
    console.log(this);
    return 2025 - this.birthYear;
  },

  calcAgeThis2: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  //Challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAgeThis2()} year old ${this.job}, and he ${this.hasDriversLicense ? "has" : "doesn't have"} a driver's license`;
  },    
};

console.log(surajObjNew);
// Code required if this key is not present in the object
const ageDot1 = surajObjNew.calcAgeNormal(1996);
console.log(ageDot1);
const ageBracket1 = surajObjNew["calcAgeNormal"](1996);
console.log(ageBracket1);

// Code required if this key is present in the object
const ageDot2 = surajObjNew.calcAgeThis();
console.log(ageDot2);

const ageBracket2 = surajObjNew["calcAgeThis"]();
console.log(ageBracket2);

console.log(surajObjNew.calcAgeThis2()); // Calculate age first
console.log(surajObjNew.age); // Now age property exists

//Challenege
// "Suraj is a 46 year old developer, and he has a driver's license"

console.log(surajObjNew.getSummary());


