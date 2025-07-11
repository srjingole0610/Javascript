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
// // let $function = 27;  //Variable name cannot start with $ and _ (Dollar and underscore are not valid in JS)

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
