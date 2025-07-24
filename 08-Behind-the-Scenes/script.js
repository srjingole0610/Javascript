'use strict';

//High-level
// Garbage-collected
//Interpreted or JIT complied
//Multi-paradigm
// Prototype-based object-oriented
//First-class functions
//Dynamic Typed
//Single-threaded
//Non-blocking event loop
// //JavaScript Engine and runtime :
// 	call stack :  execution context : variable Env, scope chain, this keyword
// 	Heap
// 	callback Queue
//scoping, lexical scoping, scope and scope of variable

///////////////////////////////////////
// Scoping in Practice

function calcAge(birthYear) {
  const age = 2025 - birthYear;
  //Uncaught ReferenceError: lastName is not defined
  // console.log(lastName);
  console.log(firstName);

  function printAge() {
    let output = `${firstName} is ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;

      //Creating NEW variale with same name as outer scope's variable
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Reassigninng outer scope's variable
      output = 'NEW OUTPUT!!';
    }

    //Uncaught ReferenceError: str is not defined
    //console.log(str);
    console.log(millenial);
    console.log(output);
  }
  //Uncaught ReferenceError: add is not defined. FUnctions are blocked scope in ES6, but only in strict mode
  // add(2,3);

  printAge();
  return age;
}

const firstName = 'Suraj';
calcAge(1996);
// Uncaught ReferenceError: age is not defined
// console.log(age);
// Uncaught ReferenceError: printAge is not defined
// printAge();

///////////////////////////////////////
