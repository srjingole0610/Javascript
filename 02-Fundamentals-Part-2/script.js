// *********************************** Strict Mode **************************************
'use strict'; // Enforces stricter parsing and error handling for your JS code.
// Strict mode protects you from making certain mistakes and "unsafe" actions.
// Example: It stops variable use without declaration and usage of reserved keywords as variable names.

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) {
  console.log('I can drive');
}

// Trying to declare variables with reserved words will throw an error in strict mode.
// const interface = "Audio";
// const private = 534;

// *********************************** Functions **************************************

// Function Declaration (can be called before it's defined thanks to hoisting in JS)
function logger() {
  console.log('I am logger function!');
}
logger();
logger();
logger();

// Function with parameters and a return value.
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges); // logs the counts
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // returns the string
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const orangeJuice = fruitProcessor(0, 4);
console.log(orangeJuice);
const mixedJuice = fruitProcessor(2, 4);
console.log(mixedJuice);

// Function Declaration vs Function Expression:
function calcAge(birthYear) {
  const currentAge = 2025 - birthYear;
  return currentAge;
}
const surajAge = calcAge(1996);
console.log(surajAge);

// Function Expression (anonymous function assigned to a variable)
const calcAgeNew = function (birthYear) {
  const currentAge = 2025 - birthYear;
  return currentAge;
};
const surajAgeNew = calcAgeNew(1996);
console.log(surajAgeNew);

// Arrow Function (introduced in ES6; concise syntax and lexical this)
const calcAgeArrow = birthYear => 2025 - birthYear;
const surajAgeArrow = calcAgeArrow(1996);
console.log(surajAgeArrow);

// Arrow function with multiple lines and return value
const yearUntilRetirement = birthYear => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearUntilRetirement(1996));

// Arrow function with multiple parameters and a template literal in return
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1996, 'Suraj'));
console.log(yearsUntilRetirement(1985, 'Bob'));

// Functions can call other functions
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
// Array declaration (literal)
const myFriends = ['Michael', 'Peter', 'Steven'];
console.log(myFriends);

// Arrays can also be created using the Array constructor
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// Accessing elements in array (zero-based index)
console.log(myFriends[0]);
console.log(myFriends[2]);

// Array length gives number of elements
console.log(myFriends.length);
console.log(years.length);

// Access last element (length - 1)
console.log(myFriends[myFriends.length - 1]);
console.log(years[years.length - 1]);

// Changing elements by index (arrays are mutable)
myFriends[1] = 'John';
console.log(myFriends);

// Arrays can hold any data type, even other arrays
const suraj = ['Suraj', 'Ingole', 2025 - 1996, 'Developer', myFriends];
console.log(suraj);
console.log(suraj.length);

// Trying to use an array as a single value in a non-array function causes issues:
const calcAgeArray = function (birthYear) { return 2025 - birthYear; };
const birthYears = [1990, 1967, 2002, 2010, 2018];
// This will be NaN, as the function expects a number, not an array:
console.log(calcAgeArray(birthYears));
// Pass single values instead:
const birthAge1 = calcAgeArray(birthYears[0]);
console.log(birthAge1);

// Store results in a new array
const birthAgesArray = [
  calcAgeArray(birthYears[0]),
  calcAgeArray(birthYears[1]),
  calcAgeArray(birthYears[birthYears.length - 1]),
];
console.log(birthAgesArray);

// Array push/unshift (add), pop/shift (remove), indexOf/includes (search) methods
const myFriendsNew = ['Michael', 'Peter', 'Steven'];
myFriendsNew.push('Bob');
myFriendsNew.unshift('John');
console.log(myFriendsNew);

// pop (removes last), shift (removes first)
const poppedFriend = myFriendsNew.pop();
console.log(poppedFriend, myFriendsNew);

const shiftedFriend = myFriendsNew.shift();
console.log(shiftedFriend, myFriendsNew);

// indexOf returns position, includes returns boolean
console.log(myFriendsNew.indexOf('Steven'), myFriendsNew.includes('Bob'));
if (myFriendsNew.includes('Bob')) {
  console.log('You have a friend named Bob');
} else {
  console.log("You don't have a friend named Bob");
}

//******************************************** OBJECTS **************************************
// Object literal notation (key-value pairs; keys are called properties)
const surajObj = {
  firstName: 'suraj',
  lastName: 'ingole',
  age: 2025 - 1996,
  job: 'developer',
  friends: ['michael', 'peter', 'steven'],
};
console.log(surajObj);

// Dot and bracket notation to access properties
console.log(surajObj.firstName, surajObj['lastName']);

// Bracket notation is useful for dynamic property names
const nameKey = 'Name';
console.log(surajObj['first' + nameKey]);
console.log(surajObj['last' + nameKey]);

// Prompt user for property, then check if it exists and display a message
const interestedIn = prompt('What do you want to know about Suraj? Choose between firstName, lastName, age, job, and friends');
if (surajObj[interestedIn]) {
  console.log(surajObj[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

// Adding new properties
surajObj.location = 'Pune';
surajObj['twitter'] = '@srjrockzz';
console.log(surajObj);

// Object methods (functions attached to objects) can use "this" keyword
const surajObjNew = {
  firstName: 'suraj',
  lastName: 'ingole',
  birthYear: 1996,
  job: 'developer',
  friends: ['michael', 'peter', 'steven'],
  hasDriversLicense: false,
  calcAgeNormal: function (birthYear) { return 2025 - birthYear; },
  calcAgeThis: function () { return 2025 - this.birthYear; },
  calcAgeThis2: function () {
    if (!this.age) this.age = 2025 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAgeThis2()} year old ${this.job}, and he ${this.hasDriversLicense ? 'has' : "doesn't have"} a driver's license`;
  },
};
console.log(surajObjNew.calcAgeThis2());
console.log(surajObjNew.age); // Shows that the age property is now set
console.log(surajObjNew.getSummary());

//****************************** LOOPS ******************************
// For loop (runs fixed number of times)
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}🏋️‍♀`);
}

// Loop through array to gather types
const surajArray = ['Suraj', 'ingole', 2025 - 1996, 'developer', ['michael', 'peter', 'steven'], true];
const surajArrayTypes = [];
for (let i = 0; i < surajArray.length; i++) {
  surajArrayTypes.push(typeof surajArray[i]);
}
console.log(surajArrayTypes);

// Example: transforming birth years to ages using loops
const birthYearsNew = [1991, 1996, 2002, 2010];
const currentAgeNew = [];
for (let i = 0; i < birthYearsNew.length; i++) {
  currentAgeNew.push(2025 - birthYearsNew[i]);
}
console.log(currentAgeNew);

// Break and continue
// continue = skip to next iteration, break = exit loop
console.log('------- ONLY STRINGS --------');
for (let i = 0; i < surajArray.length; i++) {
  if (typeof surajArray[i] !== 'string') continue;
  console.log(surajArray[i], typeof surajArray[i]);
}
console.log('-------- BREAK WITH NUMBER --------');
for (let i = 0; i < surajArray.length; i++) {
  if (typeof surajArray[i] === 'number') break;
  console.log(surajArray[i], typeof surajArray[i]);
}

// Looping backwards
console.log('-------- BACKWARDS ---------');
for (let i = surajArray.length - 1; i >= 0; i--) {
  console.log(i, surajArray[i]);
}

// Nested loops: exercise & repetitions
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--------- Starting exercise ${exercise} ---------------`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise} : Lifting weights repetition ${rep}🏋️‍♀`);
  }
}

// While loop (good for indeterminate number of repetitions)
console.log('-------- WHILE LOOP ---------');
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}🏋️‍♀`);
  rep++;
}

// While loop for random events (dice roll)
let rolledDice = Math.trunc(Math.random() * 6) + 1;
while (rolledDice !== 6) {
  console.log(`You rolled a ${rolledDice}`);
  rolledDice = Math.trunc(Math.random() * 6) + 1;
  if (rolledDice === 6) console.log('Loop is about to end...');
}

/*
LEARNING POINTS:
- "use strict" avoids many silent bugs by enforcing stricter syntax.
- Functions can be declared (hoisted), expressed, or arrow-style—each has its place in code.
- Arrays are zero-based, mutable lists; objects are key-value collections.
- Use array/object methods for adding, removing, and searching data efficiently.
- Loops automate repetition and processing in regular or dynamic data structures.
- Methods attached to objects often use "this" to access object properties.
- Understanding these JS building blocks is the foundation for advanced web apps!
*/
