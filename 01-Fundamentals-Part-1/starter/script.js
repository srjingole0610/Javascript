//**************************************JS BASICS***************************************

let js = "Am I learning JS?";
if (js == "Am I learning JS?") {
  console.log("Yes");
  // alert('Js is amazing')
}
console.log(40 + 8 + 23 - 10);

//****************************************JS Values and variables**************************************

console.log("Jonas");
console.log(23);

let firstName = "Suraj"; //Variable Declaration
console.log(firstName); //Variable Usage
console.log(firstName);
console.log(firstName);

// // let 3year = 3;  //Variable name cannot start with numbers
// let first&last = "Suraj Ingole";  //Variable name cannot contain & (Ampersand)
// let new = 27;  //Variable name cannot be a reserved keyword (new is a reserved keyword)
let _function = 27; //Variable name can contain _ (underscore)
console.log(_function);

let $function = 35; //Variable name can contain $ (dollar)
console.log($function);

let Person = "jonas"; //We should follow this naming convention
let person = "martha"; //We should follow this naming convention or camelCase

const PI = 3.1415; //Constant value

//Should use descriptive names for variables
let myFirstJob = "Coder";
let myCurrentJob = "Fullstack Developer";

//******************************************JS DATA TYPES**************************************
//Primitive data types

// 1. Number
let age = 30;
// 2. String
let lastName = "Ingole";
// 3. Boolean
let fullAge = true;
// 4. undefined
let children;
// 5.null
let job = null;
// 6. symbol(ECMAScript 2015)
let sym = Symbol();
// 7. bigint(ECMAScript 2019)
let big = 123n;

//Javascript is dynamically typed language
let x = 23;
console.log(`${x} is of type ${typeof x}`);
x = "Suraj"; //reassignment ; x is now a string
console.log(`${x} is of type ${typeof x}`);

let JavascriptIsFun = true;
console.log(`${JavascriptIsFun} is of type ${typeof JavascriptIsFun}`);

// typeof() operator returns the type of the variable
console.log(typeof true);
console.log(typeof "Suraj");
console.log(typeof 23);
console.log(typeof null);
console.log(typeof typeof 23);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null); //null is an object; typeof returns object ; javascript bug but never corrected due to legacy reasons

// ****************************************** VAR, LET, CONST **************************************

// 1. Let
let myAge = 29; //declaration and initialization
myAge = 30; //reassignment
console.log(myAge);

let currentYear; //declaration
currentYear = 2025; //initialization
console.log(currentYear);

// 2.Const
const birthYear = 1991; //declaration and initialization
// birthYear = 1990; //error: assignment to constant variable; cannot reassign
console.log(birthYear);

// 3. Var
var myJob = "Programmer"; //declaration and initialization
myJob = "Teacher"; //reassignment
console.log(myJob);

// No need to declare variable with any keyword but it is not recommended. It is called implicit declaration
favSport = "Cricket"; //declaration and initialization
console.log(favSport);

//****************************************** JavaScript Operators **************************************

// 1. Arithmetic Operators

const yearNow = 2025;
const ageSuraj = yearNow - 1995;
const ageSarah = yearNow - 2003;
console.log(ageSuraj, ageSarah);

console.log(ageSuraj * 2);
console.log(ageSuraj / 7);
console.log(2 ** 3); // 2 to the power of 3 (2^3)

const myFirstName = "Suraj";
const myLastName = "Ingole";

console.log(myFirstName + " " + myLastName); //concatenation

// 2. Assignment Operators

let myAssign = 10 + 5; // simple assignment
console.log(myAssign);
myAssign += 10; // addition assignment
console.log(myAssign);
myAssign *= 4; // multiplication assignment
console.log(myAssign);

// 3. Increment and Decrement Operators

let z = 10;
console.log(z);
z++;
console.log(z);
z--;
console.log(z);

// 4. Comparison Operators

console.log(ageSuraj > ageSarah); // greater than
console.log(ageSarah >= 18); // greater than or equal to
console.log(ageSuraj < ageSarah); // less than
console.log(ageSarah <= 18); // less than or equal to

// ************************** operator precedence ****************************

const now = 2025;
const ageSuraj1 = now - 1995;
const ageSarah1 = now - 2003;

// Math operators have higher precedence than comparison operators
console.log(now - 1995 > now - 2003); // true

// Multiple operations - left to right
let x1, y;
x1 = y = 25 - 10 - 5; // x = y = 10
console.log(x1, y); // 10, 10

// Parentheses have highest precedence
const averageAge = (ageSuraj1 + ageSarah1) / 2;
console.log(averageAge);

// Operator precedence examples
console.log(3 + 4 * 5); // 23 (multiplication before addition)
console.log((3 + 4) * 5); // 35 (parentheses first)
console.log(2 ** (3 ** 2)); // 512 (exponentiation right-to-left)
console.log((2 ** 3) ** 2); // 64 (parentheses first)

// Assignment operators have lowest precedence
let a = 5;
let b = 10;
let c = a + b * 2; // multiplication before addition
console.log(c); // 25

//******************************** Strings *******************************

const iAmFirstString = "Suraj";
const iAmSecondString = "Ingole";
const myBirthYear = 1996;
const currentYearNow = 2025;
const myCurrentworkProfile = "Developer";
console.log(iAmFirstString + " " + iAmSecondString);

const suraj =
  "I'm " +
  iAmFirstString +
  ", a " +
  (currentYearNow - myBirthYear) +
  " year old " +
  myCurrentworkProfile;
console.log(suraj);

// Template Literal

const surajNew = `I'm ${iAmFirstString} ${iAmSecondString}, a ${
  currentYearNow - myBirthYear
} year old ${myCurrentworkProfile}`;
console.log(surajNew);

console.log(`Just a regular string...`);

console.log("String with \nescape sequences");

console.log(`String
multiple
lines`);

//************************ If-else Statement  ************************

// 1. if/else statements

const driverAge = 15;
const isOldEnough = driverAge >= 18;

//1.1 if
if (isOldEnough) {
  console.log("Suraj can drive a car 🏎️");
}

// 1.2 if-else
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

// 1. Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(Number("Suraj"));
console.log(typeof NaN);
console.log(String(23), 23);
console.log(Boolean("Suraj"));
console.log(Boolean(0));

//2. Type Coercion

console.log("I am " + 23 + " years old"); // Number converted to string
console.log("23" - "10" - 3); // String converted to number
console.log("23" + "10" + 3); // String concatenation
console.log("23" * "2"); // String converted to number and multiplication
console.log(23 + "2"); // Number converted to string and concatenation
console.log(23 + "2" * 2); // String concatenation and multiplication

let n = "1" + 1;
console.log(typeof n, n);
n = n - 1;
console.log(typeof n, n);

//******************** Truthy and Falsy Values *************************

// 1. Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

// 2. Truthy Values
console.log(Boolean(23));
console.log(Boolean("Suraj"));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function () {}));

const moneyHave = 100;
if (moneyHave) {
  console.log("Don't spend money");
} else {
  console.log("Get a job");
}

let height;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

//This is a bug
let weight = 0;
if (weight) {
  console.log("Yay! Weight is defined");
} else {
  console.log("Weight is UNDEFINED");
}

//************************** Equality Operators ******************************
const equalAge = 18; //This is assignment
if (equalAge === 18) {
  //This is equality operator
  console.log("You just became an adult");
} else {
  console.log("You are still young");
}

console.log(equalAge === 18); //strict equality
console.log(equalAge === "18"); //strict equality
console.log(equalAge == 18); //loose equality
console.log(equalAge == "18"); //loose equality

const favouriteNumber = prompt("What's your favourite number?");
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

//Example of nested if-else and equality operator
if (favouriteNumber === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favouriteNumber === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

//Example of strict not equality
if (favouriteNumber !== 23) {
  console.log("Why not 23?");
}

//Example of loose not equality
if (favouriteNumber != 23) {
  console.log("Why not 23?");
}
