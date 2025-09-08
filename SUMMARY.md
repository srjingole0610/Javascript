# An In-Depth Summary of JavaScript Fundamentals

This document provides a detailed breakdown of the fundamental JavaScript concepts illustrated in the provided code snippet. It covers everything from variables and data types to operators and control flow.

## Variables and Scope: let, const, and var

JavaScript uses variables to store data. The way a variable behaves depends on its declaration keyword:

- let myAge = 29;myAge = 30; // Allowed
- const birthYear = 1991;// birthYear = 1990; // Throws a TypeError
- var myJob = "Programmer";myJob = "Teacher"; // Allowed

## JavaScript Data Types

JavaScript has eight data types, with seven of them being **primitive** (immutable values). The provided code demonstrates these:

1.  let age = 30;let pi = 3.14;
2.  let lastName = "Ingole";
3.  let fullAge = true;
4.  let children; // children is undefined
5.  let job = null;
6.  **Symbol**: A unique and immutable primitive value.
7.  **BigInt**: Used to represent integer values larger than the maximum safe integer limit for Number.

JavaScript is a **dynamically typed** language. This means you don't have to specify the data type of a variable, and a variable can hold different types of values over its lifetime. The typeof operator is useful for checking the data type of a value.

## JavaScript Operators

Operators are special symbols used to perform operations on values and variables.

### 1\. Arithmetic Operators

Used for mathematical calculations.

- \+ (addition)
- \- (subtraction)
- \* (multiplication)
- / (division)
- const ageSuraj = 2025 - 1995;console.log(ageSuraj / 7);

### 2\. Assignment Operators

Used to assign values to variables.

- let myAssign = 10 + 5; // myAssign is 15myAssign += 10; // myAssign is now 25

### 3\. Comparison Operators

Used to compare values, returning a boolean (true or false).

- \> (greater than), < (less than)
- \>= (greater than or equal to), <= (less than or equal to)
- **\=== (Strict Equality)**: Compares both the value and the type. This is the **recommended** operator to avoid unexpected bugs.
- console.log(18 === "18"); // false (types don't match)console.log(18 == "18"); // true (type is coerced)

### 4\. Logical Operators

Used to combine boolean values.

- && (AND): Returns true if **both** operands are true.
- || (OR): Returns true if **at least one** operand is true.
- ! (NOT): Inverts the boolean value.

## Type Conversion and Coercion

JavaScript can change the data type of a value.

- const inputYear = "1991";console.log(Number(inputYear)); // Converts "1991" string to 1991 number
- console.log("I am " + 23 + " years old"); // The number 23 is coerced to a string.console.log("23" - "10" - 3); // The strings are coerced to numbers for subtraction.

## Truthy and Falsy Values

In JavaScript, every value can be treated as either "truthy" or "falsy" in a boolean context (like an if statement).There are only **five falsy values**:

- 0
- '' (empty string)
- undefined
- null
- NaN (Not a Number)

All other values are considered **truthy**. This is a common source of bugs if not understood.

```javascript
let height; // undefined, which is a falsy value
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is UNDEFINED");
} // This will log "Height is UNDEFINED"
```

## Control Flow Statements

These statements control the order of execution in your code.

### 1. if-else Statement

Executes a block of code if a condition is true. The optional else block executes if the condition is false.

```javascript
  const driverAge = 15;  
  if (driverAge >= 18) 
  {      
     console.log("Suraj can drive a car");   
  } 
  else 
    {      
     console.log("Suraj is too young.");  
    }  
```

### 2\. switch Statement

Provides a more structured alternative to a series of if-else if statements, especially when comparing a single value against multiple possible cases.

```javascript
  const day = "Monday";  
  switch (day) 
  {      
        case "Monday":          
        console.log("It's Monday.");          
        break; 
        case "Tuesday":          
        console.log("It's Tuesday.");          
        break; 
        case "Wednesday":          
        console.log("It's Wednesday.");          
        break;  
        case "Thursday":          
        console.log("It's Thursday.");          
        break;  
        case "Friday":          
        console.log("It's Friday.");          
        break;  
        case "Saturday":          
        console.log("It's Saturday.");          
        break;  
        case "Sunday":          
        console.log("It's Sunday.");          
        break;  
        default:          
        console.log("Not a valid day");  
        break; 
  }
```

### 3\. Ternary Operator

A concise, single-line alternative for simple if-else statements. It's an **expression** that produces a value.

```javascript

  const checkAge = 24;  const message = checkAge >= 18 ? "I am an adult" : "I am a child";  console.log(message); // "I am an adult"  
```

## Statements vs. Expressions

- An **Expression** produces a value. Examples include 3 + 4 and true && false. You can use them wherever a value is expected.
- A **Statement** performs an action. It doesn't necessarily produce a value. Examples include a full if-else block or a for loop.

```javascript  
This is a statement  if (23 > 10) {      const str = "23 is bigger";  }  // This is an expression  console.log(`Suraj is ${2037 - 1991} years old`); // The part in ${...} is an expression
```

# Advanced JavaScript Fundamentals

This document provides a detailed breakdown of the more advanced JavaScript concepts introduced in the provided code, including strict mode, functions, arrays, objects, and loops.

## Strict Mode: 'use strict'

The 'use strict' directive is a literal expression placed at the beginning of a script or a function. Its purpose is to opt in to a restricted variant of JavaScript syntax, which helps you write safer and better code.

When a script is executed in strict mode, it:

- **Prevents "silent" errors** from happening by turning them into exceptions.
- **Forbids a number of syntax mistakes** that would be considered bad practice.
- **Prevents the use of reserved keywords** for variable names.
- **Prevents accidental global variables** by requiring all variables to be properly declared with let, const, or var.

```javascript
'use strict';  let hasDriversLicense = false;  const passTest = true;  if (passTest) {    hasDriversLicense = true;  }  // This is now an error without 'use strict';  // const interface = "Audio";
```

## Functions

Functions are fundamental building blocks in JavaScript that allow you to encapsulate and reuse code. The provided code demonstrates three ways to define a function:

### 1\. Function Declaration

- **Hoisting:** A key feature of function declarations is that they are **hoisted**, meaning you can call the function before it's declared in the code.
- **Syntax:** Uses the function keyword followed by the function name, parameters, and a code block.

```javascript
  // This works due to hoisting  
  logger();  function logger() {    console.log('I am a logger function!');  }  
```

### 2\. Function Expression

- **Syntax:** An anonymous function assigned to a variable.
- **No Hoisting:** You cannot call a function expression before it's defined in the code.

```javascript
  const calcAge = function(birthYear) {    return 2025 - birthYear;  };  const surajAge = calcAge(1996);  console.log(surajAge);  
  ```

### 3\. Arrow Function (ES6)

- **Syntax:** A concise and modern way to write functions, particularly for single-line operations.
- **No this binding:** They do not have their own this keyword, which is a major difference from other function types.
- **Implicit Return:** For a single-line function, you can omit the return keyword and the curly braces.

```javascript
  // Simple one-line arrow function with implicit return  
  const calcAgeArrow = birthYear => 2025 - birthYear;  
  // Arrow function with multiple lines and an explicit return  
  const yearsUntilRetirement = (birthYear, firstName) => {    const age = 2025 - birthYear;    const retirement = 65 - age;    return `${firstName} retires in ${retirement} years`;  };  
  ```

## Data Structures: Arrays and Objects

### Arrays

An **array** is a special type of object used to store multiple values in a single variable in an ordered list.

- **Declaration:**

  - **Literal notation:** const myFriends = \['Michael', 'Peter', 'Steven'\];
  - **Constructor:** const years = new Array(1991, 1984);

- console.log(myFriends\[0\]); // 'Michael'console.log(myFriends\[myFriends.length - 1\]); // 'Steven'
- **Mutating Arrays:** Arrays are **mutable**, meaning you can change their contents even if declared with const.

  - **Adding Elements:** push() (end), unshift() (start)
  - **Removing Elements:** pop() (end), shift() (start)
  - **Searching:** indexOf() (returns index), includes() (returns boolean)

```javascript
  const myFriends = ['Michael', 'Peter'];  
  myFriends.push('Steven'); // Adds 'Steven' to the end  
  myFriends.unshift('John'); // Adds 'John' to the beginning  
  console.log(myFriends.includes('Steven')); // true  
  ```

### Objects

An **object** is a collection of **key-value pairs**, used to describe a single entity. Unlike arrays, the order of properties is not guaranteed.

- const surajObj = { firstName: 'suraj', lastName: 'ingole', job: 'developer', friends: \['michael', 'peter', 'steven'\],};
- **Accessing Properties:**

  - **Dot Notation:** surajObj.firstName (preferred for static properties)
  - **Bracket Notation:** surajObj\['lastName'\] (useful for dynamic or computed property names)

```javascript
  const interestedIn = 'age';  console.log(surajObj.job);  // Using bracket notation for a dynamic property  console.log(surajObj[interestedIn]);  
  ```

- **Object Methods:** Functions can be properties of an object. These are called methods. The this keyword within a method refers to the object itself, allowing you to access its properties.

```javascript
  const surajObjNew = {    birthYear: 1996,    calcAge: function() {      return 2025 - this.birthYear;    }  };  console.log(surajObjNew.calcAge());  
  ```

## Loops

Loops are control flow statements that allow you to repeatedly execute a block of code.

### 1\. for loop

- **Use Case:** Ideal for when you know exactly how many times you want to loop. It's commonly used to iterate over arrays using an index.
- for (let rep = 1; rep <= 10; rep++) { console.log(\`Lifting weights repetition ${rep}🏋️‍♀\`);}
- **Loop Control Statements:**

  - continue: Skips the current iteration and moves to the next one.
  - break: Exits the entire loop immediately.

### 2\. while loop

- let rep = 1;while (rep <= 10) { console.log(\`Lifting weights repetition ${rep}🏋️‍♀\`); rep++;}
- **Random Events:** The while loop is perfect for scenarios where the condition depends on a random event, such as a dice roll. The loop continues until a specific outcome is met.

```javascript
  let rolledDice = Math.trunc(Math.random() * 6) + 1;  while (rolledDice !== 6) {    console.log(`You rolled a ${rolledDice}`);    rolledDice = Math.trunc(Math.random() * 6) + 1;  }  
  ```
