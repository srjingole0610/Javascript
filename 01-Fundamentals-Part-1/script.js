//**************************************JS BASICS***************************************
// A simple example of conditional logic and basic arithmetic
let js = "Am I learning JS?";
if (js == "Am I learning JS?") {
  console.log("Yes"); // This block executes because condition is true
  // alert('Js is amazing') // You can use alert for browser, but commented for readability
}
console.log(40 + 8 + 23 - 10); // Arithmetic operations

//****************************************JS Values and variables**************************************
// Outputting string and number values
console.log("Jonas");
console.log(23);

// Variable declaration & usage
let firstName = "Suraj"; // Variable declared and initialized
console.log(firstName);  // Access variable
console.log(firstName);
console.log(firstName);

// Invalid versus valid variable names (do not uncomment the invalid lines!)
// let 3year = 3; // Invalid: cannot start with a number
// let first&last = "Suraj Ingole"; // Invalid: cannot contain special chars except _ or $
// let new = 27; // Invalid: can't use reserved keywords as identifiers
let _function = 27; // Valid: underscore allowed
console.log(_function);
let $function = 35; // Valid: dollar sign allowed
console.log($function);

// Naming conventions
let Person = "jonas"; // Uppercase first-letter is valid, but not typical per JS conventions
let person = "martha"; // Lowercase is typical; camelCase like myFirstJob is best practice

const PI = 3.1415; // Constants use uppercase by convention

// Use descriptive variable names (good for code clarity)
let myFirstJob = "Coder";
let myCurrentJob = "Fullstack Developer";

//******************************************JS DATA TYPES**************************************
// Demonstrating all 7 JS primitive data types

// 1. Number
let age = 30;
// 2. String
let lastName = "Ingole";
// 3. Boolean
let fullAge = true;
// 4. undefined
let children;
// 5. null
let job = null;
// 6. Symbol
let sym = Symbol();
// 7. BigInt (for numbers beyond safe integer limit)
let big = 123n;

// JS is dynamically typed (variables can change type)
let x = 23;
console.log(`${x} is of type ${typeof x}`); // number
x = "Suraj";
console.log(`${x} is of type ${typeof x}`); // string
let JavascriptIsFun = true;
console.log(`${JavascriptIsFun} is of type ${typeof JavascriptIsFun}`);

// typeof operator returns the type of variable or value
console.log(typeof true);    // boolean
console.log(typeof "Suraj"); // string
console.log(typeof 23);      // number
console.log(typeof null);    // object (quirk of JS)
console.log(typeof typeof 23); // string (since typeof 23 returns 'number')

// Undefined values
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

console.log(typeof null); // object (historical JS bug)

// ****************************************** VAR, LET, CONST **************************************
// 1. let — block-scoped, can be updated
let myAge = 29;
myAge = 30; // allowed
console.log(myAge);

let currentYear;
currentYear = 2025; // can be assigned later
console.log(currentYear);

// 2. const — block-scoped, cannot be reassigned
const birthYear = 1991;
// birthYear = 1990; // error — can't reassign a const
console.log(birthYear);

// 3. var — function-scoped, older style of JS
var myJob = "Programmer";
myJob = "Teacher"; // allowed
console.log(myJob);

// Implicit declaration (not recommended)
favSport = "Cricket";
console.log(favSport);

//****************************************** JavaScript Operators **************************************
// 1. Arithmetic Operators
const yearNow = 2025;
const ageSuraj = yearNow - 1995;
const ageSarah = yearNow - 2003;
console.log(ageSuraj, ageSarah);
console.log(ageSuraj * 2);
console.log(ageSuraj / 7);
console.log(2 ** 3); // exponentiation (2^3=8)

// String concatenation
const myFirstName = "Suraj";
const myLastName = "Ingole";
console.log(myFirstName + " " + myLastName);

// 2. Assignment Operators
let myAssign = 10 + 5;
console.log(myAssign);
myAssign += 10; // +10
console.log(myAssign);
myAssign *= 4; // *4
console.log(myAssign);

// 3. Increment and Decrement
let z = 10;
console.log(z);
z++; // increment
console.log(z);
z--; // decrement
console.log(z);

// 4. Comparison Operators
console.log(ageSuraj > ageSarah);
console.log(ageSarah >= 18);
console.log(ageSuraj < ageSarah);
console.log(ageSarah <= 18);

// ************************** operator precedence ****************************
const now = 2025;
const ageSuraj1 = now - 1995;
const ageSarah1 = now - 2003;
console.log(now - 1995 > now - 2003); // true

let x1, y;
x1 = y = 25 - 10 - 5;
console.log(x1, y); // 10 10

const averageAge = (ageSuraj1 + ageSarah1) / 2;
console.log(averageAge);

console.log(3 + 4 * 5); // 23
console.log((3 + 4) * 5); // 35
console.log(2 ** (3 ** 2)); // 512 (right-to-left)
console.log((2 ** 3) ** 2); // 64

let a = 5;
let b = 10;
let c = a + b * 2;
console.log(c); // 25

//******************************** Strings *******************************
const iAmFirstString = "Suraj";
const iAmSecondString = "Ingole";
const myBirthYear = 1996;
const currentYearNow = 2025;
const myCurrentworkProfile = "Developer";
console.log(iAmFirstString + " " + iAmSecondString);
const suraj =
  "I'm " + iAmFirstString + ", a " + (currentYearNow - myBirthYear) + " year old " + myCurrentworkProfile;
console.log(suraj);

// Template Literal (preferred for readability)
const surajNew = `I'm ${iAmFirstString} ${iAmSecondString}, a ${
  currentYearNow - myBirthYear
} year old ${myCurrentworkProfile}`;
console.log(surajNew);

// Escape sequences and multiline strings
console.log(`Just a regular string...`);
console.log("String with \nescape sequences");
console.log(`String
multiple
lines`);

//************************ If-else Statement  ************************
const driverAge = 15;
const isOldEnough = driverAge >= 18;

if (isOldEnough) {
  console.log("Suraj can drive a car 🏎️");
} else {
  const yearLeft = 18 - driverAge;
  console.log(`Suraj is too young. Wait another ${yearLeft} years.`);
}

const newBirthYear = 2015;
let whichCentury;
if (newBirthYear <= 2000) {
  whichCentury = 20;
} else {
  whichCentury = 21;
}
console.log(`The century of birth year is ${whichCentury}`);

// ************************** Type Conversion and Coercion ******************************
// 1. Type Conversion — explicit
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991 "1991"
console.log(inputYear + 18); // string concatenation
console.log(Number(inputYear) + 18); // number addition
console.log(Number("Suraj")); // NaN (not a number)
console.log(typeof NaN); // number
console.log(String(23), 23); // "23" 23
console.log(Boolean("Suraj")); // true
console.log(Boolean(0)); // false

// 2. Type Coercion — implicit
console.log("I am " + 23 + " years old"); // string
console.log("23" - "10" - 3); // number
console.log("23" + "10" + 3); // string
console.log("23" * "2"); // number
console.log(23 + "2"); // string
console.log(23 + "2" * 2); // mixed

let n = "1" + 1;
console.log(typeof n, n); // "11"
n = n - 1;
console.log(typeof n, n); // 10 (number)

//******************** Truthy and Falsy Values *************************
// Only 5 falsy values in JS: 0, '', undefined, null, NaN. All others are truthy.
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean(23)); // true
console.log(Boolean("Suraj")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(function () {})); // true

const moneyHave = 100;
if (moneyHave) console.log("Don't spend money");
else console.log("Get a job");

let height;
if (height) console.log("Yay! Height is defined");
else console.log("Height is UNDEFINED");

let weight = 0;
if (weight) console.log("Yay! Weight is defined");
else console.log("Weight is UNDEFINED"); // 0 is falsy!

//************************** Equality Operators ******************************
const equalAge = 18;
if (equalAge === 18) {
  console.log("You just became an adult");
} else {
  console.log("You are still young");
}

console.log(equalAge === 18); // true
console.log(equalAge === "18"); // false (strict ===)
console.log(equalAge == 18); // true (loose ==)
console.log(equalAge == "18"); // true (loose ==)

const favouriteNumber = prompt("What's your favourite number?"); // Always returns a string!
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

// Nested if-else + equality
if (favouriteNumber === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favouriteNumber === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favouriteNumber !== 23) {
  console.log("Why not 23?");
}
if (favouriteNumber != 23) {
  console.log("Why not 23?");
}

//********************************* Boolean Logic and Logical Operators ******************************
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log("Suraj is able to drive!");
} else {
  console.log("Someone else should drive..............");
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Suraj is able to drive!");
} else {
  console.log("Someone else should drive..............");
}

//************************************* Switch Statements **************************************
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

//*************************************** Statements and Expressions ******************************
// Expressions produce (return) a value:
3 + 4;                // 7 (expression)
1991;                 // 1991
true && false && !false; // false
console.log(`Suraj is ${2037 - 1991} years old`); // 46

// Statements perform actions and do not return a value directly:
if (23 > 10) {
  const str = "23 is bigger";
}

//********************************************* Ternary Operators **************************************
const checkAge = 24;
// The ternary operator allows quick if-else control as an expression
const message =
  checkAge >= 18
    ? "I am an adult, I like to drink wine🍷"
    : "I am a child, I like to drink juice🍊";
console.log(message);

// Same with if-else for comparison
let messageNew;
if (checkAge >= 18) {
  messageNew = "I am an adult, I like to drink wine🍷";
} else {
  messageNew = "I am a child, I like to drink juice🍊";
}
console.log(messageNew);

// Ternary operator in template literals
console.log(
  `I am ${checkAge >= 18 ? "an adult" : "a child"}, I like to drink ${
    checkAge >= 18 ? "wine🍷" : "juice🍊"
  }`
);

/*
LEARNING POINTS:
- JavaScript is case-sensitive and variables should follow camelCase.
- Use meaningful variable names.
- Understand the difference between let, const, and var.
- Learn primitive data types and dynamic typing in JS.
- Use strict (===) vs loose (==) equality.
- Use template literals for cleaner, powerful strings.
- Logical operators enable AND, OR, and NOT logic.
- Ternary operator is a concise if-else alternative for variable assignment.
- Type conversion and coercion occur throughout JS, so always check your types.
*/
