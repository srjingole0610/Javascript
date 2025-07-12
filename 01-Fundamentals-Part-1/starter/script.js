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
let myAge = 29;  //declaration and initialization
myAge = 30; //reassignment
console.log(myAge);

let currentYear;  //declaration
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

 console.log(ageSuraj *2);
 console.log(ageSuraj / 7);
console.log(2 ** 3); // 2 to the power of 3 (2^3)

const myFirstName = "Suraj";
const myLastName = "Ingole";

console.log(myFirstName + " " + myLastName); //concatenation

// 2. Assignment Operators

let myAssign = 10 + 5;  // addition assignment
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

