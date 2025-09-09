# JavaScript Fundamentals - Part 1: Theory Guide

## Table of Contents

1. [Variables and Values](#variables-and-values)
2. [Data Types](#data-types)
3. [Variable Declarations (var, let, const)](#variable-declarations)
4. [Operators](#operators)
5. [Strings and Template Literals](#strings-and-template-literals)
6. [Conditional Statements](#conditional-statements)
7. [Type Conversion and Coercion](#type-conversion-and-coercion)
8. [Truthy and Falsy Values](#truthy-and-falsy-values)
9. [Equality Operators](#equality-operators)
10. [Logical Operators](#logical-operators)
11. [Switch Statements](#switch-statements)
12. [Ternary Operator](#ternary-operator)
13. [Expressions vs Statements](#expressions-vs-statements)

---

## Variables and Values

### Theory
Variables are containers that store data values. In JavaScript, you can declare variables using `var`, `let`, or `const`. Variable names should be descriptive and follow camelCase naming convention.

### Rules for Variable Names:
- Cannot start with a number
- Cannot contain spaces or special characters (except `_` and `$`)
- Cannot use reserved keywords
- Case-sensitive

### Code Example:
```javascript
// Valid variable declarations
let firstName = "John";
let age = 25;
let _privateVar = "hidden";
let $specialVar = "jquery style";

// Invalid (would cause errors)
// let 3years = 3;        // starts with number
// let first-name = "John"; // contains hyphen
// let new = "value";     // reserved keyword
```

---

## Data Types

### Theory
JavaScript has 7 primitive data types. JavaScript is dynamically typed, meaning variables can change their type during runtime.

### The 7 Primitive Types:
1. **Number** - Integers and floating-point numbers
2. **String** - Text data
3. **Boolean** - true or false
4. **Undefined** - Variable declared but not assigned
5. **Null** - Intentional absence of value
6. **Symbol** - Unique identifier (ES6+)
7. **BigInt** - Large integers beyond safe limit (ES2020+)

### Code Example:
```javascript
// Number
let age = 30;
let price = 99.99;

// String
let name = "Alice";
let message = 'Hello World';

// Boolean
let isActive = true;
let isComplete = false;

// Undefined
let undefinedVar;
console.log(undefinedVar); // undefined

// Null
let emptyValue = null;

// Symbol
let uniqueId = Symbol('id');

// BigInt
let bigNumber = 123456789012345678901234567890n;

// Check types
console.log(typeof age);        // "number"
console.log(typeof name);       // "string"
console.log(typeof isActive);   // "boolean"
console.log(typeof undefinedVar); // "undefined"
console.log(typeof emptyValue); // "object" (JS quirk)
```

---

## Variable Declarations

### Theory
JavaScript provides three ways to declare variables, each with different characteristics:

- **`var`**: Function-scoped, can be redeclared, hoisted
- **`let`**: Block-scoped, cannot be redeclared, temporal dead zone
- **`const`**: Block-scoped, cannot be reassigned, must be initialized

### Code Example:
```javascript
// var - function scoped
var oldStyle = "I'm function scoped";
var oldStyle = "I can be redeclared"; // No error

// let - block scoped
let modernStyle = "I'm block scoped";
modernStyle = "I can be reassigned";
// let modernStyle = "Error"; // Cannot redeclare

// const - block scoped, immutable binding
const constant = "I cannot be reassigned";
// constant = "Error"; // TypeError
// const mustInit; // SyntaxError - missing initializer

// Block scope demonstration
if (true) {
    let blockScoped = "Only visible in this block";
    var functionScoped = "Visible throughout function";
}
// console.log(blockScoped); // ReferenceError
console.log(functionScoped); // "Visible throughout function"
```

---

## Operators

### Theory
Operators are symbols that perform operations on operands. JavaScript has several types of operators:

### Types of Operators:
1. **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `**`
2. **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`
3. **Comparison**: `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`
4. **Logical**: `&&`, `||`, `!`
5. **Unary**: `++`, `--`, `typeof`

### Code Example:
```javascript
// Arithmetic operators
let a = 10;
let b = 3;
console.log(a + b);  // 13 (addition)
console.log(a - b);  // 7 (subtraction)
console.log(a * b);  // 30 (multiplication)
console.log(a / b);  // 3.333... (division)
console.log(a % b);  // 1 (modulus)
console.log(a ** b); // 1000 (exponentiation)

// Assignment operators
let x = 5;
x += 3;  // x = x + 3, now x is 8
x *= 2;  // x = x * 2, now x is 16

// Increment/Decrement
let counter = 0;
counter++;    // post-increment, returns 0 then increments
++counter;    // pre-increment, increments then returns 2
console.log(counter); // 2

// Comparison operators
console.log(5 > 3);   // true
console.log(5 === 5); // true (strict equality)
console.log(5 == "5"); // true (loose equality)
```

---

## Strings and Template Literals

### Theory
Strings represent text data. Modern JavaScript uses template literals (backticks) for string interpolation and multiline strings.

### Features:
- String concatenation with `+`
- Template literals with `${expression}`
- Escape sequences (`\n`, `\t`, `\"`, `\'`)
- Multiline strings with template literals

### Code Example:
```javascript
// Traditional string concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let age = 30;
let introduction = `Hello, I'm ${firstName} ${lastName} and I'm ${age} years old.`;

// Multiline strings
let multiline = `This is line 1
This is line 2
This is line 3`;

// Escape sequences
let escaped = "She said \"Hello\" to me";
let newLine = "First line\nSecond line";

// Expression in template literals
let calculation = `The result is ${10 + 5 * 2}`;
console.log(calculation); // "The result is 20"
```

---

## Conditional Statements

### Theory
Conditional statements execute different code blocks based on conditions. The `if-else` statement is the most basic form of conditional logic.

### Syntax:
```javascript
if (condition) {
    // code if condition is true
} else if (anotherCondition) {
    // code if anotherCondition is true
} else {
    // code if all conditions are false
}
```

### Code Example:
```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

// Nested conditions
let weather = "sunny";
let temperature = 25;

if (weather === "sunny") {
    if (temperature > 20) {
        console.log("Perfect day for a picnic!");
    } else {
        console.log("Sunny but too cold");
    }
} else {
    console.log("Maybe stay indoors");
}
```

---

## Type Conversion and Coercion

### Theory
- **Type Conversion**: Explicit conversion using built-in functions
- **Type Coercion**: Implicit conversion done automatically by JavaScript

### Type Conversion Functions:
- `Number()` - converts to number
- `String()` - converts to string
- `Boolean()` - converts to boolean

### Code Example:
```javascript
// Type Conversion (Explicit)
let stringNumber = "123";
let actualNumber = Number(stringNumber);
console.log(typeof actualNumber); // "number"

let numberToString = String(456);
console.log(typeof numberToString); // "string"

let booleanValue = Boolean(1);
console.log(booleanValue); // true

// Type Coercion (Implicit)
console.log("5" + 3);      // "53" (string concatenation)
console.log("5" - 3);      // 2 (numeric subtraction)
console.log("5" * "2");    // 10 (numeric multiplication)
console.log(true + 1);     // 2 (boolean to number)
console.log(false + 1);    // 1 (boolean to number)

// Complex coercion
console.log("10" - "4" - "3" - 2 + "5"); // "15"
// Step by step: "10" - "4" = 6, 6 - "3" = 3, 3 - 2 = 1, 1 + "5" = "15"
```

---

## Truthy and Falsy Values

### Theory
In JavaScript, every value has an inherent boolean value. Values are either truthy or falsy when used in boolean context.

### Falsy Values (only 5):
1. `false`
2. `0` (zero)
3. `""` or `''` (empty string)
4. `null`
5. `undefined`
6. `NaN`

**Everything else is truthy!**

### Code Example:
```javascript
// Falsy values
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Truthy values
console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true (empty array)
console.log(Boolean({}));        // true (empty object)
console.log(Boolean(-1));        // true (negative numbers)

// Practical usage
let userInput = "";
if (userInput) {
    console.log("User provided input");
} else {
    console.log("No input provided"); // This runs
}

let items = [];
if (items.length) {
    console.log("Items exist");
} else {
    console.log("No items"); // This runs (0 is falsy)
}
```

---

## Equality Operators

### Theory
JavaScript has two equality operators:
- **Strict Equality (`===`)**: Compares value and type, no coercion
- **Loose Equality (`==`)**: Compares value with type coercion

**Best Practice**: Always use strict equality (`===`) unless you specifically need type coercion.

### Code Example:
```javascript
// Strict equality (===)
console.log(5 === 5);        // true (same value, same type)
console.log(5 === "5");      // false (same value, different type)
console.log(true === 1);     // false (different types)
console.log(null === undefined); // false (different types)

// Loose equality (==)
console.log(5 == "5");       // true (coercion: "5" becomes 5)
console.log(true == 1);      // true (coercion: true becomes 1)
console.log(false == 0);     // true (coercion: false becomes 0)
console.log(null == undefined); // true (special case)

// Inequality operators
console.log(5 !== "5");      // true (strict inequality)
console.log(5 != "5");       // false (loose inequality)

// Real-world example
let userAge = prompt("Enter your age:"); // Always returns string
if (userAge === "18") {      // String comparison
    console.log("Exactly 18 as string");
}
if (Number(userAge) === 18) { // Number comparison
    console.log("Exactly 18 as number");
}
```

---

## Logical Operators

### Theory
Logical operators combine or modify boolean expressions:
- **AND (`&&`)**: Returns true if both operands are truthy
- **OR (`||`)**: Returns true if at least one operand is truthy
- **NOT (`!`)**: Inverts the boolean value

### Short-Circuit Evaluation:
- `&&` stops at first falsy value
- `||` stops at first truthy value

### Code Example:
```javascript
// Basic logical operations
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false || true);  // true
console.log(false || false); // false
console.log(!true);          // false
console.log(!false);         // true

// With variables
let hasLicense = true;
let hasInsurance = false;
let canDrive = hasLicense && hasInsurance;
console.log(canDrive); // false

// Short-circuit evaluation
let user = null;
let defaultName = user || "Guest"; // "Guest" (user is falsy)
console.log(defaultName);

let settings = { theme: "dark" };
let theme = settings && settings.theme; // "dark" (both are truthy)

// Practical examples
let age = 20;
let hasPermission = true;

if (age >= 18 && hasPermission) {
    console.log("Access granted");
}

if (age < 13 || age > 65) {
    console.log("Special pricing applies");
}

// Complex conditions
let isWeekend = false;
let isHoliday = true;
let isVacation = false;

if ((isWeekend || isHoliday) && !isVacation) {
    console.log("Enjoy your day off!");
}
```

---

## Switch Statements

### Theory
Switch statements provide a cleaner alternative to multiple if-else statements when comparing a variable against many values. Uses strict equality (`===`) for comparison.

### Important:
- Each case needs a `break` statement to prevent fall-through
- `default` case handles unmatched values
- Cases can be grouped together

### Code Example:
```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        console.log("Plan the week");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Regular work day");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}

// Without breaks (fall-through behavior)
let grade = "B";
switch (grade) {
    case "A":
        console.log("Excellent!");
    case "B":
        console.log("Good job!"); // This runs
    case "C":
        console.log("You passed!"); // This also runs
        break;
    case "F":
        console.log("Better luck next time");
        break;
}

// Equivalent if-else
if (day === "Monday") {
    console.log("Start of work week");
    console.log("Plan the week");
} else if (day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
    console.log("Regular work day");
} else if (day === "Friday") {
    console.log("TGIF!");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend!");
} else {
    console.log("Invalid day");
}
```

---

## Ternary Operator

### Theory
The ternary operator (`? :`) is a concise way to write simple if-else statements. It's the only operator in JavaScript that takes three operands.

### Syntax:
```javascript
condition ? valueIfTrue : valueIfFalse
```

### Code Example:
```javascript
// Basic ternary operator
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Equivalent if-else
let status2;
if (age >= 18) {
    status2 = "adult";
} else {
    status2 = "minor";
}

// In template literals
let name = "John";
let greeting = `Hello ${name}, you are ${age >= 18 ? "an adult" : "a minor"}`;

// Nested ternary (use sparingly)
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // "B"

// Multiple conditions
let weather = "sunny";
let temperature = 25;
let activity = weather === "sunny" && temperature > 20 
    ? "Go to the beach" 
    : "Stay indoors";

// Function calls in ternary
let isLoggedIn = true;
let action = isLoggedIn ? logout() : login();

function login() {
    console.log("Logging in...");
    return "login";
}

function logout() {
    console.log("Logging out...");
    return "logout";
}
```

---

## Expressions vs Statements

### Theory
- **Expression**: Produces a value and can be used where a value is expected
- **Statement**: Performs an action but doesn't produce a value

### Key Differences:
- Expressions can be assigned to variables
- Statements cannot be used in template literals
- Expressions can be arguments to functions

### Code Example:
```javascript
// EXPRESSIONS (produce values)
3 + 4;                    // Arithmetic expression
"Hello" + " World";       // String expression
age >= 18;               // Comparison expression
true && false;           // Logical expression
age >= 18 ? "adult" : "minor"; // Ternary expression

// Can be used in template literals
let age = 20;
console.log(`You are ${age >= 18 ? "an adult" : "a minor"}`);

// Can be assigned to variables
let result = 3 + 4;
let message = age >= 18 ? "Can vote" : "Cannot vote";

// STATEMENTS (perform actions)
if (age >= 18) {         // If statement
    console.log("Adult");
}

let name = "John";       // Variable declaration statement

switch (day) {           // Switch statement
    case "Monday":
        console.log("Monday");
        break;
}

// Cannot use statements in expressions
// console.log(`Status: ${if (age >= 18) { "adult" }}`); // ERROR

// Function declaration vs expression
// Statement
function declaration() {
    return "I'm a statement";
}

// Expression
let expression = function() {
    return "I'm an expression";
};
```

---

## Interview Questions

### Technical Questions

1. **What is the difference between `let`, `const`, and `var` in JavaScript?**
   - **Answer**: `var` is function-scoped and can be redeclared, `let` is block-scoped and can be reassigned but not redeclared, `const` is block-scoped and cannot be reassigned or redeclared. `let` and `const` have temporal dead zone while `var` is hoisted and initialized with `undefined`.

2. **Explain the difference between `==` and `===` operators.**
   - **Answer**: `==` (loose equality) performs type coercion before comparison, while `===` (strict equality) compares both value and type without coercion. For example, `5 == "5"` is `true` but `5 === "5"` is `false`.

3. **What are the falsy values in JavaScript?**
   - **Answer**: There are 6 falsy values: `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`. Everything else is truthy.

4. **What is type coercion in JavaScript? Give examples.**
   - **Answer**: Type coercion is the automatic conversion of values from one data type to another. Examples: `"5" + 3` results in `"53"` (string concatenation), `"5" - 3` results in `2` (numeric subtraction).

5. **Explain the ternary operator and when to use it.**
   - **Answer**: The ternary operator (`condition ? valueIfTrue : valueIfFalse`) is a concise way to write simple if-else statements. Use it for simple conditional assignments or when you need an expression rather than a statement.

### Real-time Based Questions

6. **You're building a user registration form. How would you validate if a user's age input is valid and they're old enough to register (18+)?**
   - **Answer**: 
   ```javascript
   const ageInput = prompt("Enter your age:");
   const age = Number(ageInput);
   
   if (isNaN(age) || age < 0) {
       console.log("Please enter a valid age");
   } else if (age < 18) {
       console.log("You must be 18 or older to register");
   } else {
       console.log("Registration successful!");
   }
   ```

7. **In an e-commerce application, how would you implement a discount system where students get 10% off, seniors (65+) get 15% off, and regular customers get no discount?**
   - **Answer**:
   ```javascript
   function calculateDiscount(age, isStudent) {
       if (isStudent) return 0.10;
       if (age >= 65) return 0.15;
       return 0;
   }
   
   const price = 100;
   const discount = calculateDiscount(25, true);
   const finalPrice = price * (1 - discount);
   ```

8. **You need to display different messages based on the current hour. How would you implement a greeting system?**
   - **Answer**:
   ```javascript
   const hour = new Date().getHours();
   let greeting;
   
   if (hour < 12) {
       greeting = "Good morning!";
   } else if (hour < 17) {
       greeting = "Good afternoon!";
   } else {
       greeting = "Good evening!";
   }
   
   console.log(greeting);
   ```

### Scenario-Based Questions

9. **A user fills out a form with their name, email, and age. Write code to validate all fields and show appropriate error messages.**
   - **Answer**:
   ```javascript
   function validateForm(name, email, age) {
       const errors = [];
       
       if (!name || name.trim() === "") {
           errors.push("Name is required");
       }
       
       if (!email || !email.includes("@")) {
           errors.push("Valid email is required");
       }
       
       const numAge = Number(age);
       if (isNaN(numAge) || numAge < 1 || numAge > 120) {
           errors.push("Valid age between 1-120 is required");
       }
       
       return errors.length === 0 ? "Valid" : errors;
   }
   ```

10. **You're building a game scoring system. Players get different ranks based on their score: 0-299 (Beginner), 300-599 (Intermediate), 600-899 (Advanced), 900+ (Expert). Implement this using both if-else and switch statements.**
    - **Answer**:
    ```javascript
    // Using if-else
    function getRank(score) {
        if (score < 300) return "Beginner";
        if (score < 600) return "Intermediate";
        if (score < 900) return "Advanced";
        return "Expert";
    }
    
    // Using switch with fall-through
    function getRankSwitch(score) {
        switch (true) {
            case score < 300:
                return "Beginner";
            case score < 600:
                return "Intermediate";
            case score < 900:
                return "Advanced";
            default:
                return "Expert";
        }
    }
    ```

---

## Coding Exercises

### Exercise 1: Variable Practice
Create variables for a person's information and display a formatted message.
```javascript
// TODO: Create variables for firstName, lastName, age, and city
// Display: "Hello, I'm [firstName] [lastName], I'm [age] years old and I live in [city]"
```

### Exercise 2: Type Conversion Challenge
```javascript
// Given these variables, predict and verify the output:
let a = "10";
let b = "5";
let c = 2;

console.log(a + b);      // Predict: ?
console.log(a - b);      // Predict: ?
console.log(a * c);      // Predict: ?
console.log(b / c);      // Predict: ?
console.log(+a + +b);    // Predict: ?
```

### Exercise 3: Grade Calculator
Write a function that takes a score (0-100) and returns the letter grade.
```javascript
function calculateGrade(score) {
    // TODO: Implement grade calculation
    // A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60
}
```

### Exercise 4: Even or Odd with Ternary
```javascript
// TODO: Use ternary operator to check if a number is even or odd
function checkEvenOdd(number) {
    // Return "even" or "odd"
}
```

### Exercise 5: Login Status
```javascript
// TODO: Create a function that checks login status
function checkLoginStatus(username, password, isActive) {
    // Return "Success" if username exists, password is correct, and account is active
    // Return appropriate error messages for each failure case
    // Use logical operators
}
```

### Exercise 6: Day of Week Activities
```javascript
// TODO: Use switch statement to suggest activities based on day
function suggestActivity(day) {
    // Monday-Friday: "Work day - focus on tasks"
    // Saturday: "Weekend - time for hobbies"
    // Sunday: "Rest day - relax and recharge"
    // Default: "Invalid day"
}
```

### Exercise 7: Complex Conditions
```javascript
// TODO: Create a movie ticket pricing system
function calculateTicketPrice(age, isStudent, isMatinee) {
    // Base price: $12
    // Children (under 12): 50% off
    // Students: 20% off
    // Matinee shows: 30% off
    // Senior citizens (65+): 40% off
    // Discounts don't stack - use the best one
}
```

### Exercise 8: Truth Table
```javascript
// TODO: Complete this truth table function
function evaluateLogic(a, b, c) {
    // Return the result of: (a && b) || (!a && c)
    // Test with different boolean combinations
}
```

### Exercise 9: String Formatter
```javascript
// TODO: Create a function that formats user information
function formatUserInfo(firstName, lastName, age, email) {
    // Use template literals to create a formatted string
    // Handle cases where some information might be missing
    // Return: "Name: [firstName] [lastName] | Age: [age] | Email: [email]"
}
```

### Exercise 10: Comprehensive Validator
```javascript
// TODO: Create a comprehensive input validator
function validateInput(input, type) {
    // type can be: "email", "phone", "age", "name"
    // Return object: { isValid: boolean, message: string }
    // Use appropriate checks for each type
    // Email: must contain @ and .
    // Phone: must be 10 digits
    // Age: must be number between 1-120
    // Name: must not be empty and contain only letters
}
```

---

## Solutions (Hidden - Try the exercises first!)

<details>
<summary>Click to reveal solutions</summary>

### Solution 1:
```javascript
let firstName = "John";
let lastName = "Doe";
let age = 25;
let city = "New York";
console.log(`Hello, I'm ${firstName} ${lastName}, I'm ${age} years old and I live in ${city}`);
```

### Solution 2:
```javascript
console.log(a + b);      // "105" (string concatenation)
console.log(a - b);      // 5 (numeric subtraction)
console.log(a * c);      // 20 (numeric multiplication)
console.log(b / c);      // 2.5 (numeric division)
console.log(+a + +b);    // 15 (unary + converts to number)
```

### Solution 3:
```javascript
function calculateGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}
```

### Solution 4:
```javascript
function checkEvenOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}
```

### Solution 10:
```javascript
function validateInput(input, type) {
    switch (type) {
        case "email":
            const isValidEmail = input.includes("@") && input.includes(".");
            return {
                isValid: isValidEmail,
                message: isValidEmail ? "Valid email" : "Email must contain @ and ."
            };
        case "phone":
            const phoneNumber = input.replace(/\D/g, "");
            const isValidPhone = phoneNumber.length === 10;
            return {
                isValid: isValidPhone,
                message: isValidPhone ? "Valid phone" : "Phone must be 10 digits"
            };
        case "age":
            const age = Number(input);
            const isValidAge = !isNaN(age) && age >= 1 && age <= 120;
            return {
                isValid: isValidAge,
                message: isValidAge ? "Valid age" : "Age must be between 1-120"
            };
        case "name":
            const isValidName = input.trim() !== "" && /^[a-zA-Z\s]+$/.test(input);
            return {
                isValid: isValidName,
                message: isValidName ? "Valid name" : "Name must contain only letters"
            };
        default:
            return { isValid: false, message: "Invalid validation type" };
    }
}
```

</details>

---

## Summary

This guide covers all fundamental JavaScript concepts from Part 1:
- ✅ Variables and naming conventions
- ✅ All 7 primitive data types
- ✅ Variable declarations (var, let, const)
- ✅ All operator types
- ✅ Strings and template literals
- ✅ Conditional statements and control flow
- ✅ Type conversion and coercion
- ✅ Truthy/falsy values
- ✅ Equality operators
- ✅ Logical operators and short-circuiting
- ✅ Switch statements
- ✅ Ternary operator
- ✅ Expressions vs statements

Practice these concepts regularly, and you'll build a solid foundation for advanced JavaScript topics!

---

# JavaScript Fundamentals - Part 2: Advanced Theory Guide

## Table of Contents (Part 2)
14. [Strict Mode](#strict-mode)
15. [Functions](#functions)
16. [Function Declarations vs Expressions](#function-declarations-vs-expressions)
17. [Arrow Functions](#arrow-functions)
18. [Arrays](#arrays)
19. [Array Methods](#array-methods)
20. [Objects](#objects)
21. [Object Methods and 'this' Keyword](#object-methods-and-this-keyword)
22. [Loops](#loops)
23. [Loop Control and While Loops](#loop-control-and-while-loops)

---

## Strict Mode

### Theory
Strict mode is a way to opt into a restricted variant of JavaScript. It eliminates some JavaScript silent errors by changing them to throw errors and prevents using reserved keywords as variable names.

### Code Example:
```javascript
'use strict'; // Must be at the top of script or function

// This will throw an error in strict mode
// myVariable = 'Hello'; // ReferenceError: myVariable is not defined

// Proper declaration
let myVariable = 'Hello';
console.log(myVariable);

// Reserved keywords throw errors in strict mode
// let interface = 'test'; // SyntaxError
// let private = 'test';   // SyntaxError
```

---

## Functions

### Theory
Functions are reusable blocks of code that perform specific tasks. They can accept parameters, process data, and return results.

### Code Example:
```javascript
// Basic function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function with multiple parameters
function calculateJuice(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const myJuice = calculateJuice(5, 2);
console.log(myJuice); // "Juice with 5 apples and 2 oranges."

// Function calling other functions
function cutFruit(fruit) {
    return fruit * 4;
}

function processJuice(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);
    return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
}
```

---

## Function Declarations vs Expressions

### Theory
- **Function Declaration**: Hoisted (can be called before definition)
- **Function Expression**: Not hoisted (cannot be called before definition)

### Code Example:
```javascript
// Function Declaration (Hoisted)
console.log(add(5, 3)); // Works! Returns 8

function add(a, b) {
    return a + b;
}

// Function Expression (Not Hoisted)
// console.log(multiply(5, 3)); // Error! Cannot access before initialization

const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(5, 3)); // 15
```

---

## Arrow Functions

### Theory
Arrow functions provide a shorter syntax and have different `this` binding behavior. They're always expressions and have implicit return for single expressions.

### Code Example:
```javascript
// Traditional function
const traditional = function(x) {
    return x * 2;
};

// Arrow function - implicit return
const arrow = x => x * 2;

// Multiple parameters
const add = (a, b) => a + b;

// Multiple lines with explicit return
const calculateAge = birthYear => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${retirement} years until retirement`;
};

console.log(calculateAge(1990)); // "30 years until retirement"
```

---

## Arrays

### Theory
Arrays are ordered collections of elements stored in a single variable. They use zero-based indexing and can hold different data types.

### Code Example:
```javascript
// Array creation
const friends = ['Michael', 'Peter', 'Steven'];
const years = new Array(1991, 1984, 2008, 2020);

// Accessing elements
console.log(friends[0]); // 'Michael'
console.log(friends[friends.length - 1]); // 'Steven' (last element)

// Modifying arrays
friends[1] = 'John';
console.log(friends); // ['Michael', 'John', 'Steven']

// Arrays can hold mixed types
const person = ['John', 'Doe', 2025 - 1990, 'Developer', friends];
console.log(person.length); // 5
```

---

## Array Methods

### Theory
JavaScript provides many built-in methods for array manipulation:
- **Mutating**: `push()`, `pop()`, `shift()`, `unshift()`
- **Search**: `indexOf()`, `includes()`

### Code Example:
```javascript
const fruits = ['apple', 'banana', 'orange'];

// Adding elements
fruits.push('grape');     // Add to end - returns new length
fruits.unshift('mango');  // Add to beginning
console.log(fruits); // ['mango', 'apple', 'banana', 'orange', 'grape']

// Removing elements
const lastFruit = fruits.pop();   // Remove from end - returns removed element
const firstFruit = fruits.shift(); // Remove from beginning
console.log(lastFruit);  // 'grape'
console.log(firstFruit); // 'mango'

// Searching
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.includes('apple'));  // true
console.log(fruits.includes('grape'));  // false

// Practical example
if (fruits.includes('banana')) {
    console.log('You have bananas!');
}
```

---

## Objects

### Theory
Objects store data in key-value pairs. Keys are strings (properties) and values can be any data type, including functions (methods).

### Code Example:
```javascript
// Object literal notation
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    job: 'developer',
    friends: ['Michael', 'Peter', 'Steven']
};

// Property access
console.log(person.firstName);     // 'John' (dot notation)
console.log(person['lastName']);   // 'Doe' (bracket notation)

// Dynamic property access
const nameKey = 'Name';
console.log(person['first' + nameKey]); // 'John'

// Adding properties
person.location = 'USA';
person['email'] = 'john@example.com';
console.log(person);

// Checking if property exists
if (person.email) {
    console.log(`Contact: ${person.email}`);
}
```

---

## Object Methods and 'this' Keyword

### Theory
Object methods are functions stored as object properties. The `this` keyword refers to the object that owns the method.

### Code Example:
```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990,
    job: 'developer',
    friends: ['Michael', 'Peter'],
    hasDriversLicense: true,
    
    // Method using 'this'
    calcAge: function() {
        this.age = 2025 - this.birthYear;
        return this.age;
    },
    
    // Method using other properties and methods
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he ${this.hasDriversLicense ? 'has' : "doesn't have"} a driver's license.`;
    }
};

console.log(person.calcAge()); // 35
console.log(person.age);       // 35 (property was set)
console.log(person.getSummary()); // Full summary string
```

---

## Loops

### Theory
Loops allow you to execute code repeatedly. The `for` loop is most common for iterating a specific number of times or through arrays.

### Code Example:
```javascript
// Basic for loop
for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

// Looping through arrays
const friends = ['Michael', 'Peter', 'Steven'];
for (let i = 0; i < friends.length; i++) {
    console.log(`Friend ${i + 1}: ${friends[i]}`);
}

// Creating new arrays with loops
const birthYears = [1991, 1996, 2002, 2010];
const ages = [];
for (let i = 0; i < birthYears.length; i++) {
    ages.push(2025 - birthYears[i]);
}
console.log(ages); // [34, 29, 23, 15]

// Backward loop
for (let i = friends.length - 1; i >= 0; i--) {
    console.log(`${i}: ${friends[i]}`);
}

// Nested loops
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--- Starting exercise ${exercise} ---`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: rep ${rep}`);
    }
}
```

---

## Loop Control and While Loops

### Theory
- **continue**: Skip current iteration, move to next
- **break**: Exit the loop entirely
- **while loop**: Runs as long as condition is true

### Code Example:
```javascript
const mixed = ['John', 23, true, 'developer', false];

// Continue - skip non-strings
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] !== 'string') continue;
    console.log(mixed[i]);
}

// Break - stop at first number
console.log('--- BREAK AT NUMBER ---');
for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === 'number') break;
    console.log(mixed[i]);
}

// While loop
let rep = 1;
while (rep <= 5) {
    console.log(`While loop rep ${rep}`);
    rep++;
}

// While loop with random condition
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
```

---

## Part 2 Interview Questions

### Technical Questions

1. **What is strict mode in JavaScript and why should you use it?**
   - **Answer**: Strict mode (`'use strict'`) enforces stricter parsing and error handling. It prevents accidental globals, throws errors for unsafe actions, eliminates silent errors, and helps write more secure JavaScript code.

2. **Explain the difference between function declarations and function expressions.**
   - **Answer**: Function declarations are hoisted and can be called before they're defined. Function expressions are not hoisted and must be defined before use. Declarations create named functions, expressions can be anonymous.

3. **How do arrow functions differ from regular functions?**
   - **Answer**: Arrow functions have shorter syntax, implicit return for single expressions, lexical `this` binding (inherit from parent scope), cannot be used as constructors, and don't have their own `arguments` object.

4. **What is the `this` keyword in JavaScript?**
   - **Answer**: `this` refers to the object that owns the current method or function. In object methods, it refers to the object. In regular functions, it's undefined (strict mode) or global object. Arrow functions inherit `this` from parent scope.

5. **Explain the difference between `push()` and `unshift()` array methods.**
   - **Answer**: `push()` adds elements to the end of an array and returns the new length. `unshift()` adds elements to the beginning of an array and returns the new length. Both mutate the original array.

### Real-time Based Questions

6. **You need to create a shopping cart system. How would you structure the cart object with methods to add, remove, and calculate total?**
   - **Answer**:
   ```javascript
   const shoppingCart = {
       items: [],
       addItem: function(product, quantity = 1) {
           this.items.push({ product, quantity, price: product.price });
       },
       removeItem: function(productName) {
           this.items = this.items.filter(item => item.product.name !== productName);
       },
       calculateTotal: function() {
           return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
       }
   };
   ```

7. **How would you implement a student grade management system using arrays and objects?**
   - **Answer**:
   ```javascript
   const classroom = {
       students: [],
       addStudent: function(name, grades = []) {
           this.students.push({ name, grades });
       },
       calculateAverage: function(studentName) {
           const student = this.students.find(s => s.name === studentName);
           if (!student) return null;
           const sum = student.grades.reduce((total, grade) => total + grade, 0);
           return sum / student.grades.length;
       },
       getClassAverage: function() {
           const allGrades = this.students.flatMap(student => student.grades);
           return allGrades.reduce((sum, grade) => sum + grade, 0) / allGrades.length;
       }
   };
   ```

### Scenario-Based Questions

8. **You're building a user authentication system. How would you validate user input and handle different user roles?**
   - **Answer**:
   ```javascript
   const authSystem = {
       users: [],
       validateEmail: function(email) {
           return email.includes('@') && email.includes('.');
       },
       registerUser: function(username, email, password, role = 'user') {
           if (!this.validateEmail(email)) return { success: false, message: 'Invalid email' };
           if (password.length < 6) return { success: false, message: 'Password too short' };
           
           const user = { username, email, password, role, isActive: true };
           this.users.push(user);
           return { success: true, user };
       },
       login: function(email, password) {
           const user = this.users.find(u => u.email === email && u.password === password);
           return user ? { success: true, user } : { success: false, message: 'Invalid credentials' };
       }
   };
   ```

9. **Create a simple inventory management system for a store.**
   - **Answer**:
   ```javascript
   const inventory = {
       products: [],
       addProduct: function(name, price, quantity) {
           const existingProduct = this.products.find(p => p.name === name);
           if (existingProduct) {
               existingProduct.quantity += quantity;
           } else {
               this.products.push({ name, price, quantity });
           }
       },
       sellProduct: function(name, quantity) {
           const product = this.products.find(p => p.name === name);
           if (!product) return { success: false, message: 'Product not found' };
           if (product.quantity < quantity) return { success: false, message: 'Insufficient stock' };
           
           product.quantity -= quantity;
           return { success: true, remaining: product.quantity };
       },
       getLowStock: function(threshold = 5) {
           return this.products.filter(product => product.quantity <= threshold);
       }
   };
   ```

10. **How would you implement a simple task management system with priority levels?**
    - **Answer**:
    ```javascript
    const taskManager = {
        tasks: [],
        addTask: function(title, priority = 'medium', dueDate = null) {
            const task = {
                id: Date.now(),
                title,
                priority,
                dueDate,
                completed: false,
                createdAt: new Date()
            };
            this.tasks.push(task);
            return task;
        },
        completeTask: function(id) {
            const task = this.tasks.find(t => t.id === id);
            if (task) task.completed = true;
            return task;
        },
        getTasksByPriority: function(priority) {
            return this.tasks.filter(task => task.priority === priority && !task.completed);
        },
        getPendingTasks: function() {
            return this.tasks.filter(task => !task.completed)
                            .sort((a, b) => {
                                const priorityOrder = { high: 3, medium: 2, low: 1 };
                                return priorityOrder[b.priority] - priorityOrder[a.priority];
                            });
        }
    };
    ```

---

## Part 2 Coding Exercises

### Exercise 1: Function Practice
```javascript
// TODO: Create a function that calculates BMI and returns a descriptive message
function calculateBMI(weight, height) {
    // BMI = weight / (height * height)
    // Return message based on BMI ranges:
    // Below 18.5: "Underweight"
    // 18.5-24.9: "Normal weight"
    // 25-29.9: "Overweight"
    // 30 and above: "Obese"
}
```

### Exercise 2: Arrow Function Challenge
```javascript
// TODO: Convert these function declarations to arrow functions
function multiply(a, b) {
    return a * b;
}

function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
}

function isEven(number) {
    return number % 2 === 0;
}
```

### Exercise 3: Array Manipulation
```javascript
// TODO: Complete the array operations
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Create a new array with only even numbers
// 2. Calculate the sum of all numbers
// 3. Find the largest number
// 4. Create an array of squares of each number
```

### Exercise 4: Object Creation
```javascript
// TODO: Create a car object with properties and methods
const car = {
    // Properties: make, model, year, mileage, isRunning
    // Methods: start(), stop(), drive(miles), getInfo()
    // start() should set isRunning to true
    // stop() should set isRunning to false
    // drive(miles) should add miles to mileage (only if running)
    // getInfo() should return a summary string
};
```

### Exercise 5: Loop Challenges
```javascript
// TODO: Use loops to solve these problems

// 1. Print the multiplication table for number 7 (1-10)

// 2. Count vowels in a string
function countVowels(str) {
    // Count a, e, i, o, u (case insensitive)
}

// 3. Find all prime numbers between 1 and 50
function findPrimes(limit) {
    // Return array of prime numbers
}
```

### Exercise 6: Shopping Cart System
```javascript
// TODO: Complete the shopping cart implementation
const shoppingCart = {
    items: [],
    
    addItem: function(name, price, quantity = 1) {
        // Add item to cart or update quantity if exists
    },
    
    removeItem: function(name) {
        // Remove item completely from cart
    },
    
    updateQuantity: function(name, newQuantity) {
        // Update quantity of existing item
    },
    
    getTotal: function() {
        // Calculate total price of all items
    },
    
    getItemCount: function() {
        // Return total number of items (considering quantities)
    }
};
```

### Exercise 7: Student Grade Calculator
```javascript
// TODO: Create a grade calculator object
const gradeCalculator = {
    students: [],
    
    addStudent: function(name) {
        // Add student with empty grades array
    },
    
    addGrade: function(studentName, grade) {
        // Add grade to specific student
    },
    
    getStudentAverage: function(studentName) {
        // Calculate average grade for student
    },
    
    getClassAverage: function() {
        // Calculate average grade for entire class
    },
    
    getTopStudent: function() {
        // Return student with highest average
    }
};
```

### Exercise 8: Password Validator
```javascript
// TODO: Create a comprehensive password validator
function validatePassword(password) {
    // Check these criteria:
    // - At least 8 characters long
    // - Contains at least one uppercase letter
    // - Contains at least one lowercase letter
    // - Contains at least one number
    // - Contains at least one special character (!@#$%^&*)
    // Return object: { isValid: boolean, errors: string[] }
}
```

### Exercise 9: Number Guessing Game
```javascript
// TODO: Create a number guessing game object
const guessingGame = {
    secretNumber: null,
    attempts: 0,
    maxAttempts: 10,
    gameActive: false,
    
    startGame: function(min = 1, max = 100) {
        // Generate random number and reset game state
    },
    
    makeGuess: function(guess) {
        // Check guess and return result
        // Return: { correct: boolean, message: string, attemptsLeft: number }
    },
    
    resetGame: function() {
        // Reset all game properties
    }
};
```

### Exercise 10: Data Analysis
```javascript
// TODO: Analyze sales data
const salesData = [
    { product: 'Laptop', category: 'Electronics', price: 999, quantity: 5 },
    { product: 'Phone', category: 'Electronics', price: 699, quantity: 8 },
    { product: 'Shirt', category: 'Clothing', price: 29, quantity: 15 },
    { product: 'Shoes', category: 'Clothing', price: 89, quantity: 7 }
];

function analyzeSales(data) {
    // Calculate and return:
    // 1. Total revenue
    // 2. Best selling product (by quantity)
    // 3. Most valuable product (by total revenue)
    // 4. Revenue by category
    // 5. Average price per category
}
```

---

## Part 2 Summary

This Part 2 guide covers advanced JavaScript fundamentals:
- ✅ Strict mode for better error handling
- ✅ Functions: declarations, expressions, and arrow functions
- ✅ Arrays and their essential methods
- ✅ Objects and object-oriented concepts
- ✅ The `this` keyword and object methods
- ✅ Loops and loop control statements
- ✅ Real-world application scenarios

Combined with Part 1, you now have a comprehensive foundation for JavaScript development!
```

