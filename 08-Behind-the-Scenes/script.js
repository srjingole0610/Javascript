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
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

///////////////////////////////////////
