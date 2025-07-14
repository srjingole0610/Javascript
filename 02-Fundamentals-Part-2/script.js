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
