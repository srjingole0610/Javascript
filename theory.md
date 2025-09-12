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

# JavaScript Fundamentals - Part 6: Game Development & Advanced Patterns

## Table of Contents (Part 6)
26. [Game State Management](#game-state-management)
27. [Event-Driven Programming](#event-driven-programming)
28. [Array-Based Data Structures](#array-based-data-structures)
29. [Random Number Generation](#random-number-generation)
30. [Game Loop Patterns](#game-loop-patterns)
31. [Player Management Systems](#player-management-systems)
32. [Win Condition Logic](#win-condition-logic)
33. [Theme Persistence](#theme-persistence)

---

## Game State Management

### Theory
Game state management involves tracking and updating various game variables to maintain the current state of the game. This includes player scores, current turn, game status, and any temporary states.

### Key Concepts:
- **State Variables**: Store current game status
- **State Transitions**: Moving between different game states
- **State Validation**: Ensuring game state consistency
- **State Reset**: Returning to initial conditions

### Code Example:
```javascript
// Game state variables
const scores = [0, 0];  // Player total scores
let currentScore = 0;   // Current turn score
let activePlayer = 0;   // Current player (0 or 1)
let playing = true;     // Game active flag
const WINNING_SCORE = 100;

// State management functions
const resetGameState = function() {
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;
};

const updatePlayerScore = function(player, score) {
    scores[player] += score;
    // Check win condition
    if (scores[player] >= WINNING_SCORE) {
        playing = false;
        return true; // Winner found
    }
    return false;
};

// State transition
const switchActivePlayer = function() {
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
};
```

---

## Event-Driven Programming

### Theory
Event-driven programming responds to user interactions through event listeners. Games heavily rely on events for user input handling and state changes.

### Event Types:
- **Click Events**: Button interactions
- **DOM Events**: Page load, content ready
- **Custom Events**: Game-specific triggers

### Code Example:
```javascript
// DOM element references
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Event handlers
const handleRollDice = function() {
    if (!playing) return; // Guard clause
    
    const dice = Math.trunc(Math.random() * 6) + 1;
    updateDiceDisplay(dice);
    
    if (dice !== 1) {
        currentScore += dice;
        updateCurrentScore();
    } else {
        switchPlayer();
    }
};

const handleHoldScore = function() {
    if (!playing) return;
    
    const isWinner = updatePlayerScore(activePlayer, currentScore);
    if (isWinner) {
        endGame();
    } else {
        switchPlayer();
    }
};

// Event listener registration
btnRoll.addEventListener('click', handleRollDice);
btnHold.addEventListener('click', handleHoldScore);
btnNew.addEventListener('click', resetGame);

// Keyboard events for better UX
document.addEventListener('keydown', function(e) {
    if (e.key === ' ') handleRollDice();      // Spacebar to roll
    if (e.key === 'Enter') handleHoldScore(); // Enter to hold
    if (e.key === 'Escape') resetGame();     // Escape for new game
});
```

---

## Array-Based Data Structures

### Theory
Arrays are perfect for storing player data, game history, and managing multiple similar entities in games.

### Common Patterns:
- **Player Arrays**: Store scores, names, stats
- **Index-Based Access**: Use player index for data retrieval
- **Array Methods**: Utilize built-in methods for data manipulation

### Code Example:
```javascript
// Player data management
const players = [
    { name: 'Player 1', score: 0, isActive: true },
    { name: 'Player 2', score: 0, isActive: false }
];

// Using arrays for scores (simpler approach)
const scores = [0, 0];
const names = ['Player 1', 'Player 2'];

// Array manipulation methods
const updateScore = function(playerIndex, points) {
    scores[playerIndex] += points;
    return scores[playerIndex];
};

const getHighestScore = function() {
    return Math.max(...scores);
};

const getWinner = function() {
    const maxScore = Math.max(...scores);
    return scores.indexOf(maxScore);
};

// Game history tracking
const gameHistory = [];

const recordMove = function(player, action, value) {
    gameHistory.push({
        player,
        action, // 'roll', 'hold', 'switch'
        value,
        timestamp: Date.now()
    });
};

// Analyze game statistics
const getPlayerStats = function(playerIndex) {
    const playerMoves = gameHistory.filter(move => move.player === playerIndex);
    return {
        totalMoves: playerMoves.length,
        rollCount: playerMoves.filter(m => m.action === 'roll').length,
        holdCount: playerMoves.filter(m => m.action === 'hold').length
    };
};
```

---

## Random Number Generation

### Theory
Random number generation is crucial for games. JavaScript's `Math.random()` provides pseudorandom numbers that need to be scaled and transformed for game use.

### Key Methods:
- **Math.random()**: Returns 0-1 (exclusive)
- **Math.floor()** / **Math.trunc()**: Integer conversion
- **Scaling**: Multiply and add for range

### Code Example:
```javascript
// Basic dice roll (1-6)
const rollDice = function() {
    return Math.trunc(Math.random() * 6) + 1;
};

// Generic random range function
const randomBetween = function(min, max) {
    return Math.trunc(Math.random() * (max - min + 1)) + min;
};

// Weighted random selection
const weightedRoll = function() {
    const rand = Math.random();
    if (rand < 0.1) return 1;      // 10% chance
    if (rand < 0.3) return 2;      // 20% chance
    if (rand < 0.6) return 3;      // 30% chance
    if (rand < 0.8) return 4;      // 20% chance
    if (rand < 0.95) return 5;     // 15% chance
    return 6;                      // 5% chance
};

// Multiple dice rolls
const rollMultipleDice = function(count) {
    const rolls = [];
    for (let i = 0; i < count; i++) {
        rolls.push(rollDice());
    }
    return rolls;
};

// Advanced: Seed-based random (for reproducible games)
class SeededRandom {
    constructor(seed = Date.now()) {
        this.seed = seed;
    }
    
    next() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }
    
    roll() {
        return Math.floor(this.next() * 6) + 1;
    }
}

const gameRandom = new SeededRandom(12345);
console.log(gameRandom.roll()); // Reproducible sequence
```

---

## Game Loop Patterns

### Theory
Game loops manage the flow of game execution, handling user input, updating game state, and rendering changes.

### Common Patterns:
- **Turn-Based**: Players take turns (like Pig Game)
- **Real-Time**: Continuous updates
- **Event-Driven**: React to user actions

### Code Example:
```javascript
// Turn-based game loop structure
class GameLoop {
    constructor() {
        this.currentPlayer = 0;
        this.gameState = 'waiting'; // 'waiting', 'playing', 'ended'
        this.turnPhase = 'roll'; // 'roll', 'hold', 'switch'
    }
    
    startTurn() {
        this.gameState = 'playing';
        this.turnPhase = 'roll';
        this.updateUI();
    }
    
    processPlayerAction(action) {
        if (this.gameState !== 'playing') return;
        
        switch (action) {
            case 'roll':
                this.handleRoll();
                break;
            case 'hold':
                this.handleHold();
                break;
        }
        
        this.checkGameEnd();
        this.updateUI();
    }
    
    handleRoll() {
        const dice = rollDice();
        if (dice === 1) {
            this.switchPlayer();
        } else {
            this.addToCurrentScore(dice);
        }
    }
    
    handleHold() {
        this.commitScore();
        this.switchPlayer();
    }
    
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
        this.turnPhase = 'roll';
    }
    
    checkGameEnd() {
        if (this.hasWinner()) {
            this.gameState = 'ended';
        }
    }
    
    updateUI() {
        // Update visual elements based on current state
        this.highlightActivePlayer();
        this.updateScoreDisplays();
        this.updateButtonStates();
    }
}

// Usage
const game = new GameLoop();
game.startTurn();
```

---

## Player Management Systems

### Theory
Player management involves tracking multiple players, their states, and providing methods to switch between them effectively.

### Code Example:
```javascript
// Player management system
class PlayerManager {
    constructor(playerCount = 2) {
        this.players = this.initializePlayers(playerCount);
        this.activePlayerIndex = 0;
    }
    
    initializePlayers(count) {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            name: `Player ${i + 1}`,
            score: 0,
            currentScore: 0,
            isActive: i === 0,
            wins: 0
        }));
    }
    
    getActivePlayer() {
        return this.players[this.activePlayerIndex];
    }
    
    switchToNextPlayer() {
        this.players[this.activePlayerIndex].isActive = false;
        this.players[this.activePlayerIndex].currentScore = 0;
        
        this.activePlayerIndex = (this.activePlayerIndex + 1) % this.players.length;
        this.players[this.activePlayerIndex].isActive = true;
    }
    
    updatePlayerScore(points) {
        const player = this.getActivePlayer();
        player.currentScore += points;
    }
    
    commitCurrentScore() {
        const player = this.getActivePlayer();
        player.score += player.currentScore;
        player.currentScore = 0;
    }
    
    resetScores() {
        this.players.forEach(player => {
            player.score = 0;
            player.currentScore = 0;
            player.isActive = false;
        });
        this.activePlayerIndex = 0;
        this.players[0].isActive = true;
    }
}
```

---

## Win Condition Logic

### Theory
Win conditions define how and when a game ends. They should be checked after each significant game action.

### Code Example:
```javascript
// Win condition checker
class WinConditionChecker {
    constructor(winningScore = 100) {
        this.winningScore = winningScore;
        this.gameEnded = false;
        this.winner = null;
    }
    
    checkWinCondition(players) {
        // Score-based win condition
        const winner = players.find(player => player.score >= this.winningScore);
        
        if (winner) {
            this.gameEnded = true;
            this.winner = winner;
            winner.wins++;
            return { hasWinner: true, winner };
        }
        
        return { hasWinner: false, winner: null };
    }
    
    // Alternative win conditions
    checkTimeBasedWin(players, timeLimit) {
        if (Date.now() > timeLimit) {
            const winner = players.reduce((prev, current) => 
                prev.score > current.score ? prev : current
            );
            return { hasWinner: true, winner, reason: 'time' };
        }
        return { hasWinner: false };
    }
    
    checkTurnBasedWin(players, maxTurns, currentTurn) {
        if (currentTurn >= maxTurns) {
            const winner = players.reduce((prev, current) => 
                prev.score > current.score ? prev : current
            );
            return { hasWinner: true, winner, reason: 'turns' };
        }
        return { hasWinner: false };
    }
    
    reset() {
        this.gameEnded = false;
        this.winner = null;
    }
}
```

---

## Theme Persistence

### Theory
Theme persistence saves user preferences across browser sessions using localStorage, providing a consistent user experience.

### Code Example:
```javascript
// Theme management system
class ThemeManager {
    constructor() {
        this.currentTheme = this.loadSavedTheme();
        this.applyTheme(this.currentTheme);
    }
    
    loadSavedTheme() {
        return localStorage.getItem('pig-game-theme') || 'light';
    }
    
    saveTheme(theme) {
        localStorage.setItem('pig-game-theme', theme);
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.saveTheme(this.currentTheme);
    }
    
    applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        this.updateThemeIcon(theme);
    }
    
    updateThemeIcon(theme) {
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.textContent = theme === 'dark' ? '🌙' : '☀️';
        }
    }
    
    // Advanced: System preference detection
    detectSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
    
    // Listen for system theme changes
    watchSystemTheme() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addListener((e) => {
                if (!localStorage.getItem('pig-game-theme')) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    this.applyTheme(newTheme);
                }
            });
        }
    }
}

// Usage
const themeManager = new ThemeManager();
themeManager.watchSystemTheme();

// Theme toggle button
document.querySelector('.theme-toggle').addEventListener('click', () => {
    themeManager.toggleTheme();
});
```

---

## Interview Questions (Part 6)

### Technical Questions

1. **How do you manage game state in JavaScript applications?**
   - **Answer**: Use state variables to track game status, implement state transition functions, validate state consistency, and provide reset mechanisms. Consider using classes or objects to encapsulate related state.

2. **What's the difference between event-driven and polling-based game loops?**
   - **Answer**: Event-driven responds to user actions (better for turn-based games), while polling continuously checks for updates (better for real-time games). Event-driven is more efficient for battery life and performance.

3. **How do you generate truly random numbers in JavaScript games?**
   - **Answer**: JavaScript's `Math.random()` is pseudorandom. For true randomness, use Web Crypto API: `crypto.getRandomValues()`. For games, pseudorandom is usually sufficient and can be seeded for reproducibility.

### Real-time Based Questions

4. **You're building a multiplayer game. How would you synchronize player actions?**
   - **Answer**: Use WebSockets for real-time communication, implement action queuing, add timestamp validation, and handle network lag with prediction algorithms.

5. **How would you implement an undo feature in a turn-based game?**
   - **Answer**: Store game state snapshots before each action, maintain a history stack, and restore previous states when undo is triggered.

### Scenario-Based Questions

6. **Players report that dice rolls seem unfair. How would you investigate and fix this?**
   - **Answer**: Log roll statistics, implement chi-square tests for distribution analysis, add visual feedback for transparency, and consider weighted randomness if needed.

7. **You need to persist high scores across browser sessions. What's your approach?**
   - **Answer**: Use localStorage for client-side storage, implement data validation, add backup/restore features, and consider server-side storage for global leaderboards.

---

## Coding Exercises (Part 6)

### Exercise 1: Game State Manager
Create a complete game state management system:
```javascript
// TODO: Implement GameState class
class GameState {
    constructor() {
        // Initialize players, scores, current player, etc.
    }
    
    rollDice() {
        // Handle dice roll logic
    }
    
    holdScore() {
        // Handle score holding
    }
    
    switchPlayer() {
        // Switch active player
    }
    
    checkWinner() {
        // Check win conditions
    }
    
    reset() {
        // Reset game state
    }
}
```

### Exercise 2: Advanced Random Generator
```javascript
// TODO: Create a DiceRoller class with different dice types
class DiceRoller {
    rollStandard() { /* 1-6 */ }
    rollD20() { /* 1-20 */ }
    rollCustom(sides) { /* 1-sides */ }
    rollMultiple(count, sides) { /* Multiple dice */ }
    rollWithAdvantage() { /* Roll twice, take higher */ }
}
```

### Exercise 3: Player Statistics Tracker
```javascript
// TODO: Track detailed player statistics
class PlayerStats {
    constructor(playerName) {
        this.name = playerName;
        // Add properties for: games played, wins, average score, etc.
    }
    
    recordGame(score, isWinner) {
        // Update statistics
    }
    
    getWinRate() {
        // Calculate win percentage
    }
    
    getAverageScore() {
        // Calculate average score
    }
}
```

---

## Summary (Part 6)

This section covered advanced game development patterns:
- ✅ Game state management and transitions
- ✅ Event-driven programming patterns
- ✅ Array-based data structures for games
- ✅ Random number generation techniques
- ✅ Game loop architecture
- ✅ Player management systems
- ✅ Win condition logic
- ✅ Theme persistence with localStorage

These concepts form the foundation for building interactive games and complex applications with JavaScript!

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

---

# JavaScript Developer Skills & HTML/CSS Fundamentals

## Table of Contents (Part 3)
24. [Developer Skills and Problem Solving](#developer-skills-and-problem-solving)
25. [Debugging with Console and Breakpoints](#debugging-with-console-and-breakpoints)
26. [HTML & CSS Basics](#html--css-basics)
27. [Form Elements and User Input](#form-elements-and-user-input)

---

## Developer Skills and Problem Solving

### Theory
Developer skills involve systematic problem-solving approaches, breaking down complex problems into smaller manageable pieces, and using available resources effectively. The key is to understand the problem before jumping to solutions.

### Problem-Solving Framework:
1. **Understand the problem** - What exactly needs to be solved?
2. **Break it down** - Divide into smaller sub-problems
3. **Research** - Use Google, Stack Overflow, MDN documentation
4. **Plan the solution** - Write pseudocode or outline steps
5. **Implement** - Write the actual code
6. **Test and debug** - Verify the solution works correctly

### Code Example:
```javascript
'use strict';

// PROBLEM: Calculate temperature amplitude from an array of temperatures
// (difference between highest and lowest temperature)
// Handle sensor errors (non-numeric values)

// 1) Understanding the problem:
// - What is temperature amplitude? Difference between max and min
// - How to find max and min values?
// - What to do with sensor errors? Ignore them

// 2) Breaking into sub-problems:
// - Filter out non-numeric values (errors)
// - Find maximum temperature
// - Find minimum temperature  
// - Calculate amplitude (max - min)

const calculateTempAmplitude = function(temperatures) {
    let max = temperatures[0];
    let min = temperatures[0];
    
    for (let i = 0; i < temperatures.length; i++) {
        const currentTemp = temperatures[i];
        
        // Skip sensor errors (non-numeric values)
        if (typeof currentTemp !== 'number') continue;
        
        // Update max and min values
        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    
    return max - min;
};

// Test with sample data including sensor errors
const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const amplitude = calculateTempAmplitude(temps);
console.log(`Temperature amplitude: ${amplitude}°C`); // 23°C

// PROBLEM 2: Handle multiple arrays of temperatures
// Solution: Merge arrays first, then apply same logic

const calculateTempAmplitudeMultiple = function(temps1, temps2) {
    // Merge two arrays
    const allTemps = temps1.concat(temps2);
    
    let max = allTemps[0];
    let min = allTemps[0];
    
    for (let i = 0; i < allTemps.length; i++) {
        const currentTemp = allTemps[i];
        
        if (typeof currentTemp !== 'number') continue;
        
        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    
    return max - min;
};

const amplitude2 = calculateTempAmplitudeMultiple([3, 5, 1], [9, 6, 5]);
console.log(`Combined amplitude: ${amplitude2}°C`); // 8°C
```

---

## Debugging with Console and Breakpoints

### Theory
Debugging is the process of finding and fixing errors in code. JavaScript provides several debugging tools and techniques to help identify and resolve issues.

### Debugging Techniques:
1. **Console methods**: `console.log()`, `console.table()`, `console.error()`
2. **Browser DevTools**: Breakpoints, step through code
3. **Code analysis**: Reading error messages, understanding stack traces
4. **Rubber duck debugging**: Explaining code to identify issues

### Common Console Methods:
- `console.log()` - Basic output
- `console.table()` - Display objects/arrays in table format
- `console.error()` - Display errors in red
- `console.warn()` - Display warnings in yellow
- `console.group()` - Group related console outputs

### Code Example:
```javascript
'use strict';

// Example with debugging techniques
const measureKelvin = function() {
    const measurement = {
        type: 'temperature',
        unit: 'celsius',
        // Common bug: prompt() returns string, not number
        value: Number(prompt('Enter temperature in Celsius:'))
    };
    
    // Debugging with console methods
    console.log('Measurement object:', measurement);
    console.table(measurement); // Nice table format
    console.log('Value type:', typeof measurement.value);
    
    // Convert Celsius to Kelvin
    const kelvin = measurement.value + 273.15;
    
    console.log(`${measurement.value}°C = ${kelvin}K`);
    return kelvin;
};

// Debugging a function with logical errors
const findTemperatureAmplitude = function(temps1, temps2) {
    const allTemps = temps1.concat(temps2);
    console.log('All temperatures:', allTemps);
    
    // BUG: Initialize with first valid temperature, not 0
    let max = allTemps[0];
    let min = allTemps[0];
    
    for (let i = 0; i < allTemps.length; i++) {
        const currentTemp = allTemps[i];
        
        if (typeof currentTemp !== 'number') continue;
        
        // Add debugging logs
        console.log(`Checking temp: ${currentTemp}, current max: ${max}, current min: ${min}`);
        
        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    
    console.log(`Final max: ${max}, min: ${min}`);
    return max - min;
};

// Using console.group for organized debugging
console.group('Temperature Analysis');
console.log('Input arrays processed');
console.log('Errors filtered out');
console.log('Amplitude calculated');
console.groupEnd();

// Error handling example
function safeTemperatureConversion(celsius) {
    try {
        if (isNaN(celsius)) {
            throw new Error('Input must be a number');
        }
        
        const kelvin = celsius + 273.15;
        console.log(`Conversion successful: ${celsius}°C = ${kelvin}K`);
        return kelvin;
    } catch (error) {
        console.error('Conversion failed:', error.message);
        return null;
    }
}
```

---

## HTML & CSS Basics

### Theory
HTML provides structure and content, while CSS provides visual styling. Together they create the foundation for web pages that JavaScript can manipulate.

### Essential HTML Elements:
- **Document structure**: `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`
- **Text content**: `<h1>-<h6>`, `<p>`, `<a>`, `<strong>`, `<em>`
- **Layout**: `<div>`, `<main>`, `<section>`, `<header>`, `<footer>`
- **Forms**: `<form>`, `<input>`, `<button>`, `<select>`
- **Media**: `<img>`, `<video>`, `<audio>`

### Key CSS Concepts:
- **Selectors**: Target elements to style
- **Box Model**: Content, padding, border, margin
- **Layout**: Flexbox, Grid, positioning
- **Responsive design**: Media queries, flexible units

### Code Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML & CSS Fundamentals</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <main class="container">
        <h1>JavaScript is fun, but so is HTML & CSS!</h1>
        
        <p class="intro">
            HTML gives structure, CSS gives style. Together, they bring your ideas to life.
            <a href="#" target="_blank">Learn more here</a>.
        </p>
        
        <img id="demo-image" src="placeholder.jpg" alt="Demo Image" />
        
        <form id="user-form">
            <h2>Contact Form</h2>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <button type="submit">Submit</button>
        </form>
    </main>
</body>
</html>
```

### CSS Example:
```css
/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

h1 {
    color: #333;
    margin-bottom: 20px;
}

.intro {
    color: #666;
    margin-bottom: 30px;
}

a {
    color: #007bff;
    text-decoration: none;
    padding: 2px 6px;
    border-radius: 4px;
    transition: background-color 0.3s;
}

a:hover {
    background-color: #007bff;
    color: white;
}

#demo-image {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    margin: 20px 0;
}

form {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 8px;
    margin-top: 30px;
}

input {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
}

input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

button {
    background: #28a745;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:hover {
    background: #218838;
}

/* Responsive design */
@media (max-width: 600px) {
    .container {
        padding: 20px;
    }
    
    h1 {
        font-size: 24px;
    }
}
```

---

## Form Elements and User Input

### Theory
Forms are essential for collecting user input in web applications. They provide various input types and validation mechanisms.

### Form Input Types:
- **Text inputs**: `text`, `email`, `password`, `tel`
- **Selections**: `radio`, `checkbox`, `select`
- **Special**: `file`, `date`, `color`, `range`
- **Buttons**: `submit`, `reset`, `button`

### Form Attributes:
- **Validation**: `required`, `pattern`, `min`, `max`
- **Accessibility**: `aria-label`, `for` attributes
- **User experience**: `placeholder`, `autocomplete`

### Code Example:
```html
<form id="registration-form">
    <div class="form-group">
        <label for="username">Username</label>
        <input 
            type="text" 
            id="username"
            name="username"
            required
            minlength="3"
            placeholder="Enter username"
        />
    </div>
    
    <div class="form-group">
        <label for="email">Email</label>
        <input 
            type="email" 
            id="email"
            name="email"
            required
            placeholder="your@email.com"
        />
    </div>
    
    <div class="form-group">
        <label for="country">Country</label>
        <select id="country" name="country">
            <option value="">Select country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="in">India</option>
        </select>
    </div>
    
    <div class="form-group">
        <label>
            <input type="checkbox" name="newsletter">
            Subscribe to newsletter
        </label>
    </div>
    
    <button type="submit">Register</button>
</form>
```

---

## Part 3 Interview Questions

### Technical Questions

1. **What is the importance of problem-solving methodology in programming?**
   - **Answer**: Problem-solving methodology helps break complex problems into manageable pieces, ensures thorough understanding before coding, reduces bugs, makes code more maintainable, and improves development efficiency.

2. **Explain different console methods available for debugging in JavaScript.**
   - **Answer**: `console.log()` for basic output, `console.table()` for structured data, `console.error()` for errors, `console.warn()` for warnings, `console.group()` for grouping outputs, and `console.time()` for performance measurement.

3. **What is the difference between HTML elements and attributes?**
   - **Answer**: Elements are the building blocks of HTML (like `<div>`, `<p>`), while attributes provide additional information about elements (like `class="container"`, `id="header"`). Elements define structure, attributes modify behavior or appearance.

4. **How do CSS selectors work and what is specificity?**
   - **Answer**: CSS selectors target HTML elements for styling. Specificity determines which styles apply when multiple rules target the same element. Order: inline styles > IDs > classes > elements. More specific selectors override less specific ones.

5. **What makes a form accessible and user-friendly?**
   - **Answer**: Proper labeling with `<label>` elements, appropriate input types, validation attributes, clear error messages, logical tab order, ARIA attributes, and responsive design for different devices.

### Real-time Based Questions

6. **You need to debug a temperature conversion function that's giving wrong results. How would you approach this?**
   - **Answer**:
   ```javascript
   function debugTemperatureConversion(celsius) {
       console.log('Input:', celsius, 'Type:', typeof celsius);
       
       // Check if input is valid
       if (isNaN(celsius)) {
           console.error('Invalid input - not a number');
           return null;
       }
       
       const kelvin = parseFloat(celsius) + 273.15;
       console.log('Conversion:', celsius + '°C = ' + kelvin + 'K');
       
       return kelvin;
   }
   ```

7. **How would you create a responsive registration form that works on all devices?**
   - **Answer**: Use mobile-first CSS, flexible layouts with CSS Grid/Flexbox, appropriate input types, touch-friendly button sizes, proper validation, and test across different screen sizes.

### Scenario-Based Questions

8. **A user reports that form submission isn't working. What debugging steps would you take?**
   - **Answer**: Check browser console for errors, verify form element structure, test JavaScript event handlers, validate form attributes, check network requests, and test form validation logic.

9. **You need to optimize a webpage for better performance and accessibility. What would you focus on?**
   - **Answer**: Semantic HTML structure, proper heading hierarchy, alt text for images, color contrast, keyboard navigation, form labels, responsive design, and optimized images.

10. **How would you implement a multi-step form with validation and error handling?**
    - **Answer**: Break form into sections, implement step navigation, validate each step before proceeding, show clear error messages, save progress locally, and provide visual feedback for completion status.

---

## Part 3 Coding Exercises

### Exercise 1: Problem Solving Practice
```javascript
// TODO: Solve the data analysis problem step by step
// Given an array of daily sales data, calculate:
// 1. Total sales for the week
// 2. Average daily sales
// 3. Best and worst performing days
// 4. Handle any invalid data (non-numbers, negative values)

const salesData = [1200, 1500, 'error', 1800, 900, -100, 2000];

function analyzeSalesData(data) {
    // Step 1: Understand the problem
    // Step 2: Break into sub-problems
    // Step 3: Implement solution with debugging
}
```

### Exercise 2: Debugging Challenge
```javascript
// TODO: Find and fix the bugs in this temperature converter
function convertTemperature(temp, fromUnit, toUnit) {
    console.log('Converting:', temp, 'from', fromUnit, 'to', toUnit);
    
    let celsius;
    if (fromUnit === 'fahrenheit') {
        celsius = (temp - 32) * 5/9;
    } else if (fromUnit === 'kelvin') {
        celsius = temp - 273.15;
    } else {
        celsius = temp;
    }
    
    let result;
    if (toUnit === 'fahrenheit') {
        result = celsius * 9/5 + 32;
    } else if (toUnit === 'kelvin') {
        result = celsius + 273.15;
    } else {
        result = celsius;
    }
    
    return result;
}

// Test cases that might reveal bugs
console.log(convertTemperature('25', 'celsius', 'fahrenheit'));
console.log(convertTemperature(null, 'celsius', 'kelvin'));
```

### Exercise 3: HTML Structure Creation
```html
<!-- TODO: Create a complete HTML page structure -->
<!-- Include: semantic elements, proper head section, navigation, main content, form -->
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add proper meta tags, title, and CSS link -->
</head>
<body>
    <!-- Create semantic structure with header, nav, main, sections, footer -->
</body>
</html>
```

### Exercise 4: CSS Styling Challenge
```css
/* TODO: Create a modern, responsive card layout */
/* Requirements: */
/* - Mobile-first approach */
/* - Flexible grid system */
/* - Hover effects */
/* - Proper typography scale */
/* - Color scheme with CSS variables */
```

### Exercise 5: Form Validation
```html
<!-- TODO: Create a comprehensive registration form -->
<!-- Include: various input types, validation, accessibility features -->
<form id="advanced-registration">
    <!-- Add form fields with proper validation and accessibility -->
</form>
```

---

## Part 3 Summary

This Part 3 guide covers essential developer skills:
- ✅ Systematic problem-solving approaches
- ✅ Debugging techniques and console methods
- ✅ HTML structure and semantic elements
- ✅ CSS styling and responsive design
- ✅ Form creation and user input handling
- ✅ Real-world development practices

Combined with Parts 1 and 2, you now have comprehensive JavaScript fundamentals plus essential web development skills!

---

# JavaScript DOM Manipulation & Interactive Games

## Table of Contents (Part 4)
28. [DOM Manipulation Fundamentals](#dom-manipulation-fundamentals)
29. [Event Handling and User Interactions](#event-handling-and-user-interactions)
30. [Game State Management](#game-state-management)
31. [Local Storage and Data Persistence](#local-storage-and-data-persistence)
32. [Dynamic Styling and CSS Classes](#dynamic-styling-and-css-classes)
33. [Input Validation and User Feedback](#input-validation-and-user-feedback)
34. [Random Number Generation](#random-number-generation)
35. [Theme Management and UI States](#theme-management-and-ui-states)

---

## DOM Manipulation Fundamentals

### Theory
DOM (Document Object Model) manipulation is the process of dynamically changing the content, structure, and style of HTML elements using JavaScript. It's essential for creating interactive web applications.

### Key DOM Concepts:
- **Element Selection**: Finding HTML elements to manipulate
- **Content Modification**: Changing text, HTML, or attributes
- **Style Manipulation**: Modifying CSS properties dynamically
- **Element Creation/Removal**: Adding or removing DOM elements
- **Event Handling**: Responding to user interactions

### DOM Selection Methods:
- `document.querySelector()` - Select first matching element
- `document.querySelectorAll()` - Select all matching elements
- `document.getElementById()` - Select by ID
- `document.getElementsByClassName()` - Select by class name

### Code Example:
```javascript
'use strict';

// Element selection methods
const messageEl = document.querySelector('.message'); // By class
const scoreEl = document.querySelector('.score'); // By class
const numberEl = document.querySelector('.number'); // By class
const toggleBtn = document.getElementById('themeToggle'); // By ID
const guessEl = document.querySelector('.guess'); // Input element

// Content manipulation
function displayMessage(msg) {
    messageEl.textContent = msg; // Change text content
}

function updateScore(newScore) {
    scoreEl.textContent = newScore; // Update score display
}

function revealNumber(secretNumber) {
    numberEl.textContent = secretNumber; // Show the secret number
    numberEl.style.width = '24rem'; // Change CSS style
}

// Practical example: Game feedback system
function provideFeedback(guess, secretNumber, score) {
    if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        revealNumber(secretNumber);
        // Disable input after win
        guessEl.disabled = true;
    } else if (score > 1) {
        const message = guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉';
        displayMessage(message);
        updateScore(score - 1);
    } else {
        displayMessage('💥 You Lost The Game!');
        updateScore(0);
    }
}

// Multiple element manipulation
function resetGameUI() {
    displayMessage('Start guessing...');
    numberEl.textContent = '?';
    numberEl.style.width = '12rem';
    guessEl.value = '';
    guessEl.disabled = false;
    updateScore(20);
}

// Dynamic content creation
function createScoreHistory(scores) {
    const historyContainer = document.querySelector('.score-history');
    historyContainer.innerHTML = ''; // Clear existing content
    
    scores.forEach((score, index) => {
        const scoreItem = document.createElement('div');
        scoreItem.className = 'score-item';
        scoreItem.textContent = `Game ${index + 1}: ${score} points`;
        historyContainer.appendChild(scoreItem);
    });
}
```

---

## Event Handling and User Interactions

### Theory
Event handling allows JavaScript to respond to user actions like clicks, key presses, form submissions, and mouse movements. Events are the foundation of interactive web applications.

### Common Event Types:
- **Mouse events**: `click`, `mouseover`, `mouseout`, `mousedown`, `mouseup`
- **Keyboard events**: `keydown`, `keyup`, `keypress`
- **Form events**: `submit`, `change`, `input`, `focus`, `blur`
- **Window events**: `load`, `resize`, `scroll`

### Event Handling Methods:
- `addEventListener()` - Modern, flexible approach
- `onclick` property - Direct property assignment
- Inline event handlers - HTML attribute (not recommended)

### Code Example:
```javascript
'use strict';

// Element references
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const guessInput = document.querySelector('.guess');
const body = document.body;

// Click event handling
btnCheck.addEventListener('click', function() {
    const guess = Number(guessInput.value);
    
    // Input validation
    if (!guess) {
        displayMessage('⛔ Enter a number!');
        return;
    }
    
    // Process the guess
    processGuess(guess);
});

// Multiple event listeners on same element
btnAgain.addEventListener('click', resetGame);
btnAgain.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
});
btnAgain.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// Keyboard event handling
guessInput.addEventListener('keydown', function(event) {
    // Allow Enter key to submit guess
    if (event.key === 'Enter') {
        btnCheck.click(); // Trigger check button
    }
    
    // Prevent non-numeric input (except special keys)
    if (!/[0-9]/.test(event.key) && 
        !['Backspace', 'Delete', 'Tab', 'Enter'].includes(event.key)) {
        event.preventDefault();
    }
});

// Window/document events
window.addEventListener('DOMContentLoaded', function() {
    // Initialize game when DOM is ready
    initializeGame();
    loadUserPreferences();
});

window.addEventListener('beforeunload', function() {
    // Save game state before page closes
    saveGameState();
});

// Event delegation for dynamic elements
document.addEventListener('click', function(event) {
    // Handle clicks on dynamically created elements
    if (event.target.classList.contains('difficulty-btn')) {
        setDifficulty(event.target.dataset.level);
    }
});

// Custom event creation and handling
function createCustomEvent(eventName, data) {
    const customEvent = new CustomEvent(eventName, {
        detail: data
    });
    document.dispatchEvent(customEvent);
}

// Listen for custom events
document.addEventListener('gameWon', function(event) {
    console.log('Game won with score:', event.detail.score);
    updateLeaderboard(event.detail.score);
});

// Trigger custom event
function onGameWin(score) {
    createCustomEvent('gameWon', { score: score });
}
```

---

## Game State Management

### Theory
Game state management involves tracking and updating all the dynamic data that changes during gameplay. Proper state management ensures consistent behavior and enables features like save/load, undo/redo, and multiplayer synchronization.

### Key State Concepts:
- **Game variables**: Score, level, lives, current state
- **State transitions**: How the game moves between different states
- **State persistence**: Saving state to localStorage or server
- **State validation**: Ensuring state integrity

### Common Game States:
- **Initial**: Game not started
- **Playing**: Active gameplay
- **Paused**: Game temporarily stopped
- **GameOver**: Game ended (win/lose)
- **Loading**: Loading saved state or new level

### Code Example:
```javascript
'use strict';

// Game state object
const gameState = {
    // Core game data
    secretNumber: 0,
    currentGuess: 0,
    score: 20,
    highScore: 0,
    gameStatus: 'initial', // 'initial', 'playing', 'won', 'lost'
    
    // Game settings
    maxNumber: 20,
    initialScore: 20,
    
    // Game history
    guessHistory: [],
    totalGamesPlayed: 0,
    totalWins: 0
};

// State management functions
function initializeGame() {
    gameState.secretNumber = generateSecretNumber();
    gameState.score = gameState.initialScore;
    gameState.gameStatus = 'playing';
    gameState.guessHistory = [];
    gameState.currentGuess = 0;
    
    updateUI();
}

function generateSecretNumber() {
    return Math.trunc(Math.random() * gameState.maxNumber) + 1;
}

function processGuess(guess) {
    // Validate current state
    if (gameState.gameStatus !== 'playing') {
        displayMessage('Game is not active!');
        return;
    }
    
    // Update state
    gameState.currentGuess = guess;
    gameState.guessHistory.push(guess);
    
    // Game logic
    if (guess === gameState.secretNumber) {
        gameState.gameStatus = 'won';
        gameState.totalWins++;
        
        // Update high score
        if (gameState.score > gameState.highScore) {
            gameState.highScore = gameState.score;
        }
    } else {
        gameState.score--;
        
        if (gameState.score <= 0) {
            gameState.gameStatus = 'lost';
        }
    }
    
    gameState.totalGamesPlayed++;
    updateUI();
    saveGameState();
}

// UI update based on state
function updateUI() {
    // Update displays
    document.querySelector('.score').textContent = gameState.score;
    document.querySelector('.highscore').textContent = gameState.highScore;
    
    // Update based on game status
    switch (gameState.gameStatus) {
        case 'playing':
            displayMessage('Make your guess...');
            break;
        case 'won':
            displayMessage('🎉 Correct Number!');
            document.querySelector('.number').textContent = gameState.secretNumber;
            disableInput();
            break;
        case 'lost':
            displayMessage('💥 You Lost The Game!');
            document.querySelector('.number').textContent = gameState.secretNumber;
            disableInput();
            break;
    }
    
    updateGuessHistory();
}

function updateGuessHistory() {
    const historyEl = document.querySelector('.guess-history');
    if (!historyEl) return;
    
    historyEl.innerHTML = gameState.guessHistory
        .map((guess, index) => `<span class="guess-item">${guess}</span>`)
        .join(' ');
}

// State persistence
function saveGameState() {
    const saveData = {
        highScore: gameState.highScore,
        totalGamesPlayed: gameState.totalGamesPlayed,
        totalWins: gameState.totalWins
    };
    
    localStorage.setItem('guessNumberGame', JSON.stringify(saveData));
}

function loadGameState() {
    const savedData = localStorage.getItem('guessNumberGame');
    
    if (savedData) {
        const data = JSON.parse(savedData);
        gameState.highScore = data.highScore || 0;
        gameState.totalGamesPlayed = data.totalGamesPlayed || 0;
        gameState.totalWins = data.totalWins || 0;
    }
}

// State validation
function validateGameState() {
    if (gameState.score < 0) gameState.score = 0;
    if (gameState.secretNumber < 1 || gameState.secretNumber > gameState.maxNumber) {
        gameState.secretNumber = generateSecretNumber();
    }
    if (!['initial', 'playing', 'won', 'lost'].includes(gameState.gameStatus)) {
        gameState.gameStatus = 'initial';
    }
}

// Game statistics
function getGameStats() {
    return {
        totalGames: gameState.totalGamesPlayed,
        totalWins: gameState.totalWins,
        winRate: gameState.totalGamesPlayed > 0 
            ? (gameState.totalWins / gameState.totalGamesPlayed * 100).toFixed(1) + '%'
            : '0%',
        highScore: gameState.highScore,
        currentStreak: calculateWinStreak()
    };
}
```

---

## Local Storage and Data Persistence

### Theory
Local Storage allows web applications to store data locally in the user's browser. This data persists across browser sessions, enabling features like user preferences, game progress, and settings.

### Storage Types:
- **localStorage**: Persistent storage (until manually cleared)
- **sessionStorage**: Session-based storage (cleared when tab closes)
- **cookies**: Traditional storage (limited size, sent to server)

### Common Use Cases:
- User preferences (theme, language, settings)
- Game progress and high scores
- Form data (auto-save)
- Shopping cart contents
- User authentication tokens

### Code Example:
```javascript
'use strict';

// Local Storage utility functions
const StorageManager = {
    // Save data to localStorage
    save(key, data) {
        try {
            const jsonData = JSON.stringify(data);
            localStorage.setItem(key, jsonData);
            return true;
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
            return false;
        }
    },
    
    // Load data from localStorage
    load(key, defaultValue = null) {
        try {
            const jsonData = localStorage.getItem(key);
            return jsonData ? JSON.parse(jsonData) : defaultValue;
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
            return defaultValue;
        }
    },
    
    // Remove data from localStorage
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Failed to remove from localStorage:', error);
            return false;
        }
    },
    
    // Clear all localStorage data
    clear() {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error('Failed to clear localStorage:', error);
            return false;
        }
    },
    
    // Check if localStorage is available
    isAvailable() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch (error) {
            return false;
        }
    }
};

// Game-specific storage functions
const GameStorage = {
    KEYS: {
        GAME_DATA: 'guessNumberGame',
        USER_PREFERENCES: 'userPreferences',
        GAME_HISTORY: 'gameHistory'
    },
    
    // Save game progress
    saveGameData(gameState) {
        const gameData = {
            highScore: gameState.highScore,
            totalGamesPlayed: gameState.totalGamesPlayed,
            totalWins: gameState.totalWins,
            lastPlayed: new Date().toISOString(),
            version: '1.0'
        };
        
        return StorageManager.save(this.KEYS.GAME_DATA, gameData);
    },
    
    // Load game progress
    loadGameData() {
        const defaultData = {
            highScore: 0,
            totalGamesPlayed: 0,
            totalWins: 0,
            lastPlayed: null,
            version: '1.0'
        };
        
        return StorageManager.load(this.KEYS.GAME_DATA, defaultData);
    },
    
    // Save user preferences
    saveUserPreferences(preferences) {
        const userPrefs = {
            theme: preferences.theme || 'light',
            difficulty: preferences.difficulty || 'medium',
            soundEnabled: preferences.soundEnabled !== false,
            animations: preferences.animations !== false,
            language: preferences.language || 'en'
        };
        
        return StorageManager.save(this.KEYS.USER_PREFERENCES, userPrefs);
    },
    
    // Load user preferences
    loadUserPreferences() {
        const defaultPrefs = {
            theme: 'light',
            difficulty: 'medium',
            soundEnabled: true,
            animations: true,
            language: 'en'
        };
        
        return StorageManager.load(this.KEYS.USER_PREFERENCES, defaultPrefs);
    },
    
    // Save game history
    saveGameHistory(gameResult) {
        let history = StorageManager.load(this.KEYS.GAME_HISTORY, []);
        
        // Add new game result
        history.unshift({
            ...gameResult,
            timestamp: new Date().toISOString()
        });
        
        // Keep only last 50 games
        history = history.slice(0, 50);
        
        return StorageManager.save(this.KEYS.GAME_HISTORY, history);
    },
    
    // Get game statistics
    getGameStats() {
        const gameData = this.loadGameData();
        const history = StorageManager.load(this.KEYS.GAME_HISTORY, []);
        
        return {
            ...gameData,
            recentGames: history.slice(0, 10),
            winRate: gameData.totalGamesPlayed > 0 
                ? (gameData.totalWins / gameData.totalGamesPlayed * 100).toFixed(1)
                : 0,
            averageScore: history.length > 0
                ? (history.reduce((sum, game) => sum + game.score, 0) / history.length).toFixed(1)
                : 0
        };
    }
};

// Theme management with localStorage
const ThemeManager = {
    currentTheme: 'light',
    
    init() {
        const preferences = GameStorage.loadUserPreferences();
        this.setTheme(preferences.theme);
    },
    
    setTheme(theme) {
        this.currentTheme = theme;
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(`${theme}-mode`);
        
        // Update toggle button
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        }
        
        // Save preference
        const preferences = GameStorage.loadUserPreferences();
        preferences.theme = theme;
        GameStorage.saveUserPreferences(preferences);
    },
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
};

// Usage example
function initializeApp() {
    // Check if localStorage is available
    if (!StorageManager.isAvailable()) {
        console.warn('localStorage not available. Some features may not work.');
        return;
    }
    
    // Initialize theme
    ThemeManager.init();
    
    // Load game data
    const gameData = GameStorage.loadGameData();
    console.log('Loaded game data:', gameData);
    
    // Set up event listeners
    document.getElementById('themeToggle')?.addEventListener('click', () => {
        ThemeManager.toggleTheme();
    });
}

// Initialize when DOM is ready
window.addEventListener('DOMContentLoaded', initializeApp);
```

---

## Dynamic Styling and CSS Classes

### Theory
Dynamic styling allows JavaScript to modify CSS properties and classes in real-time, creating interactive visual effects.

### Code Example:
```javascript
// CSS class manipulation
function setTheme(theme) {
    const body = document.body;
    body.classList.remove('winner', 'loser', 'dark-mode');
    if (theme) body.classList.add(theme);
}

// Direct style manipulation
function animateNumberReveal(element, secretNumber) {
    element.textContent = secretNumber;
    element.style.width = '24rem';
    element.style.transition = 'all 0.3s ease';
}
```

---

## Input Validation and User Feedback

### Theory
Input validation ensures user input meets expected criteria and provides immediate feedback.

### Code Example:
```javascript
function validateGuess(value, min = 1, max = 20) {
    const num = Number(value);
    
    if (!value) return { valid: false, message: '⛔ Enter a number!' };
    if (isNaN(num)) return { valid: false, message: '⛔ Invalid number!' };
    if (num < min || num > max) {
        return { valid: false, message: `⛔ Between ${min}-${max} only!` };
    }
    
    return { valid: true, value: num };
}
```

---

## Random Number Generation

### Theory
Random number generation creates unpredictable game experiences using `Math.random()`.

### Code Example:
```javascript
// Generate random integer between min and max (inclusive)
function randomInt(min, max) {
    return Math.trunc(Math.random() * (max - min + 1)) + min;
}

// Game-specific implementation
function generateSecretNumber(min = 1, max = 20) {
    return randomInt(min, max);
}
```

---

## Theme Management and UI States

### Theory
Theme management allows users to customize visual appearance and maintains preferences across sessions.

### Code Example:
```javascript
class ThemeManager {
    setTheme(theme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${theme}-theme`);
        localStorage.setItem('theme', theme);
    }
    
    loadTheme() {
        const saved = localStorage.getItem('theme') || 'light';
        this.setTheme(saved);
    }
}
```

---

## Part 4 Interview Questions

### Technical Questions

1. **What is the DOM and how do you manipulate it?**
   - **Answer**: DOM is the programming interface for HTML documents. Manipulate using `querySelector()`, `textContent`, `classList`, and `style` properties.

2. **Explain event bubbling and capturing.**
   - **Answer**: Bubbling travels from target to root (default), capturing travels root to target. Control with `addEventListener()`'s third parameter.

3. **Difference between localStorage and sessionStorage?**
   - **Answer**: localStorage persists until cleared, sessionStorage only for current tab session. Both store strings, ~5-10MB limit.

4. **How to generate random numbers in a specific range?**
   - **Answer**: `Math.floor(Math.random() * (max - min + 1)) + min` for integers.

5. **What's the difference between textContent and innerHTML?**
   - **Answer**: textContent sets/gets text only, innerHTML handles HTML markup. textContent is safer and faster.

### Real-time Based Questions

6. **How would you implement persistent theme switching?**
   - **Answer**: Use localStorage to save preference, CSS classes for themes, system preference detection with matchMedia.

7. **Implement input validation for a number guessing game.**
   - **Answer**: Check for empty values, validate numeric input, ensure range limits, provide user feedback.

### Scenario-Based Questions

8. **User's high score isn't saving. How to debug?**
   - **Answer**: Check localStorage availability, JSON parsing, browser settings, add error handling and logging.

9. **Make game accessible for screen readers.**
   - **Answer**: Use ARIA labels, semantic HTML, keyboard navigation, focus management, high contrast themes.

10. **Implement game state management system.**
    - **Answer**: Centralized state object, validation, localStorage persistence, state observers, history tracking.

---

## Part 4 Coding Exercises

### Exercise 1: DOM Manipulation
```javascript
// TODO: Create dynamic scoreboard with add/remove players, score updates, sorting
const ScoreBoard = {
    players: [],
    addPlayer(name) { /* Add player to DOM */ },
    updateScore(id, score) { /* Update with animation */ },
    removePlayer(id) { /* Remove from DOM */ }
};
```

### Exercise 2: Event System
```javascript
// TODO: Comprehensive event handling with delegation
class EventManager {
    on(element, event, handler) { /* Register event */ }
    off(element, event, handler) { /* Remove event */ }
    delegate(parent, selector, event, handler) { /* Event delegation */ }
}
```

### Exercise 3: Game State Machine
```javascript
// TODO: Card matching game with states: idle, flipping, matching, gameOver
class CardGame {
    setState(newState) { /* Handle state transitions */ }
    flipCard(id) { /* Card flip logic */ }
    checkMatch(card1, card2) { /* Match validation */ }
}
```

### Exercise 4: Storage Manager
```javascript
// TODO: localStorage wrapper with expiration, validation, error handling
class StorageManager {
    set(key, value, expiry) { /* Store with expiration */ }
    get(key, defaultValue) { /* Retrieve with validation */ }
    isExpired(timestamp, days) { /* Check expiration */ }
}
```

### Exercise 5: Theme System
```javascript
// TODO: Advanced theme manager with custom properties, system detection
class ThemeManager {
    registerTheme(name, config) { /* Register theme */ }
    setTheme(name) { /* Apply CSS variables */ }
    detectSystemPreference() { /* System theme detection */ }
}
```

### Exercise 6: Validation Framework
```javascript
// TODO: Input validation with custom rules, real-time feedback
class ValidationSystem {
    addRule(name, validator, message) { /* Custom rule */ }
    validateField(value, rules) { /* Field validation */ }
    setupRealTime(input, rules) { /* Real-time validation */ }
}
```

### Exercise 7: Random Game Engine
```javascript
// TODO: Configurable number guessing with hints, difficulty adjustment
class GameEngine {
    makeGuess(guess) { /* Process guess */ }
    generateHint(guess, secret) { /* Contextual hints */ }
    adjustDifficulty(performance) { /* Dynamic difficulty */ }
}
```

### Exercise 8: Animation System
```javascript
// TODO: CSS animations with chaining, easing, callbacks
class AnimationEngine {
    animate(element, properties, options) { /* Animate element */ }
    chain(animations) { /* Sequential animations */ }
    parallel(animations) { /* Simultaneous animations */ }
}
```

### Exercise 9: Achievement System
```javascript
// TODO: Track achievements, unlock conditions, progress display
class AchievementSystem {
    trackAction(action, data) { /* Track player actions */ }
    checkUnlocks(playerId) { /* Check achievement conditions */ }
    displayProgress(achievementId) { /* Show progress */ }
}
```

### Exercise 10: Game Analytics
```javascript
// TODO: Track gameplay metrics, session data, performance analysis
class GameAnalytics {
    trackEvent(event, properties) { /* Track game events */ }
    startSession() { /* Begin session tracking */ }
    getInsights() { /* Generate analytics insights */ }
}
```

---

## Part 4 Summary

This Part 4 guide covers essential DOM manipulation and interactive game development:
- ✅ DOM element selection and manipulation
- ✅ Event handling and user interactions
- ✅ Game state management and data persistence
- ✅ Local storage and theme management
- ✅ Dynamic styling and CSS class manipulation
- ✅ Input validation and user feedback systems
- ✅ Random number generation for games
- ✅ UI state management and theme switching

Combined with Parts 1-3, you now have comprehensive JavaScript knowledge from fundamentals to interactive web applications!

---

# Advanced DOM Manipulation & Modal Components

## Table of Contents (Part 5)
36. [Advanced Event Handling](#advanced-event-handling)
37. [Modal Components and Overlays](#modal-components-and-overlays)
38. [CSS Class Management](#css-class-management)
39. [Animation and Transitions](#animation-and-transitions)
40. [Local Storage and Theme Persistence](#local-storage-and-theme-persistence)
41. [Responsive Design with JavaScript](#responsive-design-with-javascript)
42. [Touch and Mobile Interactions](#touch-and-mobile-interactions)
43. [Keyboard Accessibility](#keyboard-accessibility)

---

## Advanced Event Handling

### Theory
Advanced event handling involves managing multiple event types, event delegation, custom events, and optimizing performance for better user experience.

### Key Concepts:
- **Event delegation**: Handle events on parent elements
- **Event propagation**: Bubbling and capturing phases
- **preventDefault()**: Stop default browser behavior
- **Multiple event listeners**: Same element, different events
- **Custom events**: Create and dispatch custom events
- **Event cleanup**: Remove listeners to prevent memory leaks

### Code Example:
```javascript
'use strict';

// Multiple event listeners on same elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// Event delegation for multiple buttons
btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', openModal);
});

// Multiple ways to close modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Global keyboard event handling
document.addEventListener('keydown', function(e) {
    // Close modal with Escape key
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
    
    // Prevent certain key combinations
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault(); // Prevent browser save dialog
        console.log('Custom save action');
    }
});

// Advanced event handling with options
const handleScroll = function(e) {
    // Prevent scroll when modal is open
    if (!modal.classList.contains('hidden')) {
        e.preventDefault();
    }
};

// Passive event listeners for better performance
document.addEventListener('touchmove', handleScroll, { passive: false });

// Event delegation for dynamic elements
document.addEventListener('click', function(e) {
    // Handle clicks on dynamically created elements
    if (e.target.matches('.dynamic-button')) {
        handleDynamicClick(e.target);
    }
    
    // Close dropdowns when clicking outside
    if (!e.target.closest('.dropdown')) {
        closeAllDropdowns();
    }
});

// Custom event creation and handling
function createCustomEvent(eventName, data) {
    const event = new CustomEvent(eventName, {
        detail: data,
        bubbles: true,
        cancelable: true
    });
    document.dispatchEvent(event);
}

// Listen for custom events
document.addEventListener('modalOpened', function(e) {
    console.log('Modal opened:', e.detail);
    // Track analytics, update UI, etc.
});

// Trigger custom event
function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
    // Dispatch custom event
    createCustomEvent('modalOpened', {
        modalId: modal.id,
        timestamp: Date.now()
    });
}

// Event cleanup (important for SPAs)
function cleanup() {
    // Remove event listeners when component unmounts
    btnsOpenModal.forEach(btn => {
        btn.removeEventListener('click', openModal);
    });
    
    document.removeEventListener('keydown', handleKeydown);
    document.removeEventListener('touchmove', handleScroll);
}

// Throttling and debouncing for performance
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    
    return function(...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Throttled resize handler
const handleResize = throttle(function() {
    // Close modal on resize to avoid layout issues
    if (!modal.classList.contains('hidden')) {
        closeModal();
    }
    
    // Update viewport height for mobile
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}, 250);

window.addEventListener('resize', handleResize);
```

---

## Modal Components and Overlays

### Theory
Modals are dialog boxes that appear on top of the main content. They're essential for user interactions like confirmations, forms, and detailed views without navigating away from the current page.

### Modal Components:
- **Modal container**: The main dialog box
- **Overlay/backdrop**: Background that covers main content
- **Close button**: X button to close modal
- **Content area**: Where modal content is displayed
- **Header/footer**: Optional sections for titles and actions

### Best Practices:
- Focus management for accessibility
- Prevent body scroll when modal is open
- Close on Escape key and overlay click
- Smooth animations for better UX
- Responsive design for all screen sizes

### Code Example:
```javascript
'use strict';

// Modal management class
class ModalManager {
    constructor() {
        this.modals = new Map();
        this.activeModal = null;
        this.focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        this.init();
    }
    
    init() {
        // Set up global event listeners
        document.addEventListener('keydown', this.handleKeydown.bind(this));
        document.addEventListener('click', this.handleClick.bind(this));
    }
    
    // Register a modal
    register(modalId, options = {}) {
        const modal = document.querySelector(modalId);
        const overlay = document.querySelector('.overlay');
        
        if (!modal) {
            console.error(`Modal ${modalId} not found`);
            return;
        }
        
        this.modals.set(modalId, {
            element: modal,
            overlay: overlay,
            options: {
                closeOnOverlay: true,
                closeOnEscape: true,
                animation: 'fade',
                ...options
            },
            previousFocus: null
        });
    }
    
    // Open modal
    open(modalId, data = {}) {
        const modalData = this.modals.get(modalId);
        if (!modalData) {
            console.error(`Modal ${modalId} not registered`);
            return;
        }
        
        const { element: modal, overlay, options } = modalData;
        
        // Store currently focused element
        modalData.previousFocus = document.activeElement;
        
        // Show modal and overlay
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        
        // Add animation classes after a brief delay
        setTimeout(() => {
            modal.classList.add('show');
            overlay.classList.add('show');
        }, 10);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus management
        this.setFocus(modal);
        
        // Set active modal
        this.activeModal = modalId;
        
        // Dispatch custom event
        this.dispatchEvent('modalOpened', { modalId, data });
    }
    
    // Close modal
    close(modalId = this.activeModal) {
        if (!modalId) return;
        
        const modalData = this.modals.get(modalId);
        if (!modalData) return;
        
        const { element: modal, overlay } = modalData;
        
        // Start closing animation
        modal.classList.remove('show');
        overlay.classList.remove('show');
        
        // Hide after animation completes
        setTimeout(() => {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
            
            // Restore body scroll
            document.body.style.overflow = '';
            
            // Restore focus
            if (modalData.previousFocus) {
                modalData.previousFocus.focus();
                modalData.previousFocus = null;
            }
            
            // Clear active modal
            this.activeModal = null;
            
            // Dispatch custom event
            this.dispatchEvent('modalClosed', { modalId });
        }, 300);
    }
    
    // Handle keyboard events
    handleKeydown(e) {
        if (!this.activeModal) return;
        
        const modalData = this.modals.get(this.activeModal);
        if (!modalData) return;
        
        // Close on Escape
        if (e.key === 'Escape' && modalData.options.closeOnEscape) {
            this.close();
            return;
        }
        
        // Trap focus within modal
        if (e.key === 'Tab') {
            this.trapFocus(e, modalData.element);
        }
    }
    
    // Handle click events
    handleClick(e) {
        if (!this.activeModal) return;
        
        const modalData = this.modals.get(this.activeModal);
        if (!modalData) return;
        
        // Close on overlay click
        if (e.target === modalData.overlay && modalData.options.closeOnOverlay) {
            this.close();
        }
        
        // Close on close button click
        if (e.target.closest('.close-modal')) {
            this.close();
        }
    }
    
    // Focus management
    setFocus(modal) {
        const focusableElements = modal.querySelectorAll(this.focusableElements);
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        } else {
            modal.focus();
        }
    }
    
    // Trap focus within modal
    trapFocus(e, modal) {
        const focusableElements = modal.querySelectorAll(this.focusableElements);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
    
    // Dispatch custom events
    dispatchEvent(eventName, data) {
        const event = new CustomEvent(eventName, {
            detail: data
        });
        document.dispatchEvent(event);
    }
}

// Usage example
const modalManager = new ModalManager();

// Register modals
modalManager.register('.modal', {
    closeOnOverlay: true,
    closeOnEscape: true,
    animation: 'scale'
});

// Set up open buttons
document.querySelectorAll('.show-modal').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modalManager.open('.modal', { buttonIndex: index });
    });
});

// Listen for modal events
document.addEventListener('modalOpened', (e) => {
    console.log('Modal opened:', e.detail);
});

document.addEventListener('modalClosed', (e) => {
    console.log('Modal closed:', e.detail);
});
```

---

## CSS Class Management

### Theory
Dynamic CSS class management is crucial for creating interactive UIs. It involves adding, removing, and toggling classes to change element appearance and behavior.

### classList Methods:
- `add()` - Add one or more classes
- `remove()` - Remove one or more classes
- `toggle()` - Toggle class presence
- `contains()` - Check if class exists
- `replace()` - Replace one class with another

### Code Example:
```javascript
'use strict';

// CSS Class Management Utility
class CSSClassManager {
    constructor(element) {
        this.element = element;
    }
    
    // Add multiple classes with validation
    addClasses(...classes) {
        const validClasses = classes.filter(cls => 
            typeof cls === 'string' && cls.trim() !== ''
        );
        
        if (validClasses.length > 0) {
            this.element.classList.add(...validClasses);
        }
        
        return this; // Method chaining
    }
    
    // Remove multiple classes
    removeClasses(...classes) {
        const validClasses = classes.filter(cls => 
            typeof cls === 'string' && cls.trim() !== ''
        );
        
        if (validClasses.length > 0) {
            this.element.classList.remove(...validClasses);
        }
        
        return this;
    }
    
    // Toggle class with condition
    toggleClass(className, condition) {
        if (condition !== undefined) {
            this.element.classList.toggle(className, condition);
        } else {
            this.element.classList.toggle(className);
        }
        
        return this;
    }
    
    // Replace class
    replaceClass(oldClass, newClass) {
        if (this.element.classList.contains(oldClass)) {
            this.element.classList.replace(oldClass, newClass);
        }
        
        return this;
    }
    
    // Set classes (remove all, add new)
    setClasses(...classes) {
        this.element.className = '';
        return this.addClasses(...classes);
    }
    
    // Check if has any of the classes
    hasAnyClass(...classes) {
        return classes.some(cls => this.element.classList.contains(cls));
    }
    
    // Check if has all classes
    hasAllClasses(...classes) {
        return classes.every(cls => this.element.classList.contains(cls));
    }
    
    // Get all classes as array
    getClasses() {
        return Array.from(this.element.classList);
    }
}

// Modal-specific class management
class ModalClassManager {
    constructor(modal, overlay) {
        this.modal = new CSSClassManager(modal);
        this.overlay = new CSSClassManager(overlay);
        this.body = new CSSClassManager(document.body);
    }
    
    // Show modal with animation
    show(animationType = 'fade') {
        // Remove hidden class
        this.modal.removeClasses('hidden');
        this.overlay.removeClasses('hidden');
        
        // Add show class after brief delay for animation
        setTimeout(() => {
            this.modal.addClasses('show', `animate-${animationType}`);
            this.overlay.addClasses('show');
        }, 10);
        
        // Prevent body scroll
        this.body.addClasses('modal-open');
        
        return this;
    }
    
    // Hide modal with animation
    hide(animationType = 'fade') {
        // Remove show classes to start closing animation
        this.modal.removeClasses('show', `animate-${animationType}`);
        this.overlay.removeClasses('show');
        
        // Add hidden class after animation completes
        setTimeout(() => {
            this.modal.addClasses('hidden');
            this.overlay.addClasses('hidden');
            
            // Allow body scroll
            this.body.removeClasses('modal-open');
        }, 300);
        
        return this;
    }
    
    // Check if modal is visible
    isVisible() {
        return !this.modal.hasAnyClass('hidden');
    }
    
    // Set modal state classes
    setState(state) {
        // Remove all state classes
        this.modal.removeClasses('loading', 'error', 'success', 'warning');
        
        // Add new state class
        if (state) {
            this.modal.addClasses(`state-${state}`);
        }
        
        return this;
    }
}

// Theme management with classes
class ThemeManager {
    constructor() {
        this.body = new CSSClassManager(document.body);
        this.currentTheme = this.loadTheme();
        this.applyTheme(this.currentTheme);
    }
    
    // Apply theme
    applyTheme(theme) {
        // Remove all theme classes
        this.body.removeClasses('light-theme', 'dark-theme', 'auto-theme');
        
        // Add current theme class
        this.body.addClasses(`${theme}-theme`);
        
        // Update theme toggle button
        this.updateThemeToggle(theme);
        
        // Save theme preference
        this.saveTheme(theme);
        
        this.currentTheme = theme;
    }
    
    // Toggle between themes
    toggleTheme() {
        const nextTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(nextTheme);
    }
    
    // Update theme toggle button
    updateThemeToggle(theme) {
        const themeIcon = document.querySelector('.theme-icon');
        const themeText = document.querySelector('.theme-text');
        
        if (themeIcon && themeText) {
            if (theme === 'dark') {
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Light Mode';
            } else {
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Dark Mode';
            }
        }
    }
    
    // Save theme to localStorage
    saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }
    
    // Load theme from localStorage
    loadTheme() {
        return localStorage.getItem('theme') || 'light';
    }
}

// Usage examples
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalClassManager = new ModalClassManager(modal, overlay);
const themeManager = new ThemeManager();

// Show modal
function openModal() {
    modalClassManager.show('scale');
}

// Hide modal
function closeModal() {
    modalClassManager.hide('scale');
}

// Theme toggle
function toggleTheme() {
    themeManager.toggleTheme();
}

// Advanced class operations
const element = document.querySelector('.some-element');
const classManager = new CSSClassManager(element);

// Method chaining
classManager
    .removeClasses('old-class', 'another-old-class')
    .addClasses('new-class', 'active')
    .toggleClass('visible', someCondition);

// Conditional class management
if (classManager.hasAnyClass('error', 'warning')) {
    classManager.addClasses('needs-attention');
}
```

---

## Animation and Transitions

### Theory
CSS animations and transitions create smooth, engaging user experiences. JavaScript controls when animations trigger and can coordinate complex animation sequences.

### Animation Types:
- **CSS Transitions**: Smooth changes between states
- **CSS Animations**: Complex keyframe-based animations
- **JavaScript Animations**: Programmatic control over animations
- **Web Animations API**: Modern JavaScript animation interface

### Code Example:
```javascript
'use strict';

// Animation utilities
class AnimationManager {
    constructor() {
        this.animations = new Map();
        this.defaultDuration = 300;
    }
    
    // CSS transition-based animation
    fadeIn(element, duration = this.defaultDuration) {
        return new Promise((resolve) => {
            // Set initial state
            element.style.opacity = '0';
            element.style.display = 'block';
            
            // Force reflow
            element.offsetHeight;
            
            // Set transition
            element.style.transition = `opacity ${duration}ms ease`;
            
            // Start animation
            element.style.opacity = '1';
            
            // Resolve promise when animation completes
            setTimeout(() => {
                element.style.transition = '';
                resolve();
            }, duration);
        });
    }
    
    // Fade out animation
    fadeOut(element, duration = this.defaultDuration) {
        return new Promise((resolve) => {
            element.style.transition = `opacity ${duration}ms ease`;
            element.style.opacity = '0';
            
            setTimeout(() => {
                element.style.display = 'none';
                element.style.transition = '';
                resolve();
            }, duration);
        });
    }
    
    // Scale animation
    scaleIn(element, duration = this.defaultDuration) {
        return new Promise((resolve) => {
            element.style.transform = 'scale(0.8)';
            element.style.opacity = '0';
            element.style.display = 'block';
            
            element.offsetHeight; // Force reflow
            
            element.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
            
            setTimeout(() => {
                element.style.transition = '';
                resolve();
            }, duration);
        });
    }
    
    // Slide animation
    slideDown(element, duration = this.defaultDuration) {
        return new Promise((resolve) => {
            const height = element.scrollHeight;
            
            element.style.height = '0';
            element.style.overflow = 'hidden';
            element.style.display = 'block';
            
            element.offsetHeight; // Force reflow
            
            element.style.transition = `height ${duration}ms ease`;
            element.style.height = height + 'px';
            
            setTimeout(() => {
                element.style.height = '';
                element.style.overflow = '';
                element.style.transition = '';
                resolve();
            }, duration);
        });
    }
    
    // Chain multiple animations
    async chain(animations) {
        for (const animation of animations) {
            await animation();
        }
    }
    
    // Run animations in parallel
    async parallel(animations) {
        await Promise.all(animations.map(animation => animation()));
    }
    
    // Web Animations API example
    animateWithAPI(element, keyframes, options = {}) {
        const defaultOptions = {
            duration: this.defaultDuration,
            easing: 'ease',
            fill: 'forwards'
        };
        
        const animation = element.animate(keyframes, {
            ...defaultOptions,
            ...options
        });
        
        return animation.finished;
    }
}

// Modal-specific animations
class ModalAnimations {
    constructor(modal, overlay) {
        this.modal = modal;
        this.overlay = overlay;
        this.animationManager = new AnimationManager();
    }
    
    // Show modal with custom animation
    async show(animationType = 'fade') {
        // Show elements
        this.modal.classList.remove('hidden');
        this.overlay.classList.remove('hidden');
        
        // Run animations based on type
        switch (animationType) {
            case 'fade':
                await this.fadeInAnimation();
                break;
            case 'scale':
                await this.scaleInAnimation();
                break;
            case 'slide':
                await this.slideInAnimation();
                break;
            default:
                await this.fadeInAnimation();
        }
        
        // Add show classes
        this.modal.classList.add('show');
        this.overlay.classList.add('show');
    }
    
    // Hide modal with animation
    async hide(animationType = 'fade') {
        // Remove show classes
        this.modal.classList.remove('show');
        this.overlay.classList.remove('show');
        
        // Run exit animation
        await this.exitAnimation(animationType);
        
        // Hide elements
        this.modal.classList.add('hidden');
        this.overlay.classList.add('hidden');
    }
    
    // Fade in animation
    async fadeInAnimation() {
        await this.animationManager.parallel([
            () => this.animationManager.fadeIn(this.modal, 300),
            () => this.animationManager.fadeIn(this.overlay, 200)
        ]);
    }
    
    // Scale in animation
    async scaleInAnimation() {
        // First fade in overlay
        await this.animationManager.fadeIn(this.overlay, 200);
        
        // Then scale in modal
        await this.animationManager.scaleIn(this.modal, 300);
    }
    
    // Slide in animation
    async slideInAnimation() {
        await this.animationManager.parallel([
            () => this.animationManager.fadeIn(this.overlay, 200),
            () => this.slideFromTop()
        ]);
    }
    
    // Custom slide from top
    slideFromTop() {
        return this.animationManager.animateWithAPI(
            this.modal,
            [
                { transform: 'translateY(-100px)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 }
            ],
            { duration: 400, easing: 'ease-out' }
        );
    }
    
    // Exit animation
    async exitAnimation(type) {
        switch (type) {
            case 'scale':
                await this.animationManager.parallel([
                    () => this.scaleOut(),
                    () => this.animationManager.fadeOut(this.overlay, 200)
                ]);
                break;
            default:
                await this.animationManager.parallel([
                    () => this.animationManager.fadeOut(this.modal, 200),
                    () => this.animationManager.fadeOut(this.overlay, 200)
                ]);
        }
    }
    
    // Scale out animation
    scaleOut() {
        return this.animationManager.animateWithAPI(
            this.modal,
            [
                { transform: 'scale(1)', opacity: 1 },
                { transform: 'scale(0.8)', opacity: 0 }
            ],
            { duration: 200, easing: 'ease-in' }
        );
    }
}

// Usage example
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalAnimations = new ModalAnimations(modal, overlay);

// Open modal with scale animation
async function openModal() {
    await modalAnimations.show('scale');
    console.log('Modal animation completed');
}

// Close modal with fade animation
async function closeModal() {
    await modalAnimations.hide('fade');
    console.log('Modal closed');
}

// Chained animations example
const animationManager = new AnimationManager();

async function complexAnimation() {
    const elements = document.querySelectorAll('.animate-item');
    
    // Animate elements one by one
    await animationManager.chain(
        elements.map(el => () => animationManager.fadeIn(el, 200))
    );
    
    console.log('All animations completed');
}
```

---

## Local Storage and Theme Persistence

### Theory
Persisting user preferences like theme settings enhances user experience by maintaining choices across sessions.

### Code Example:
```javascript
// Theme persistence manager
class ThemePersistence {
    constructor() {
        this.storageKey = 'userTheme';
        this.currentTheme = this.loadTheme();
    }
    
    saveTheme(theme) {
        localStorage.setItem(this.storageKey, theme);
        this.currentTheme = theme;
    }
    
    loadTheme() {
        return localStorage.getItem(this.storageKey) || 'light';
    }
    
    applyTheme() {
        document.body.classList.toggle('dark-mode', this.currentTheme === 'dark');
        this.updateThemeToggle();
    }
    
    updateThemeToggle() {
        const icon = document.querySelector('.theme-icon');
        const text = document.querySelector('.theme-text');
        
        if (this.currentTheme === 'dark') {
            icon.textContent = '☀️';
            text.textContent = 'Light Mode';
        } else {
            icon.textContent = '🌙';
            text.textContent = 'Dark Mode';
        }
    }
}
```

---

## Responsive Design with JavaScript

### Theory
JavaScript enhances responsive design by handling viewport changes, device-specific interactions, and dynamic layout adjustments.

### Code Example:
```javascript
// Responsive handler
class ResponsiveHandler {
    constructor() {
        this.breakpoints = {
            mobile: 480,
            tablet: 768,
            desktop: 1024
        };
        this.init();
    }
    
    init() {
        this.handleResize();
        window.addEventListener('resize', this.throttle(this.handleResize.bind(this), 250));
        window.addEventListener('orientationchange', this.handleOrientationChange.bind(this));
    }
    
    handleResize() {
        const width = window.innerWidth;
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
        // Close modal on resize to prevent layout issues
        const modal = document.querySelector('.modal');
        if (modal && !modal.classList.contains('hidden')) {
            this.closeModal();
        }
    }
    
    throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        return function(...args) {
            const currentTime = Date.now();
            if (currentTime - lastExecTime > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            }
        };
    }
}
```

---

## Touch and Mobile Interactions

### Theory
Mobile devices require special handling for touch events, preventing unwanted behaviors, and optimizing for touch interfaces.

### Code Example:
```javascript
// Mobile interaction handler
class MobileHandler {
    constructor() {
        this.lastTouchEnd = 0;
        this.init();
    }
    
    init() {
        // Prevent double-tap zoom
        document.addEventListener('touchend', this.preventDoubleZoom.bind(this), false);
        
        // Handle touch scroll prevention
        document.addEventListener('touchmove', this.preventScroll.bind(this), { passive: false });
    }
    
    preventDoubleZoom(event) {
        const now = Date.now();
        if (now - this.lastTouchEnd <= 300) {
            event.preventDefault();
        }
        this.lastTouchEnd = now;
    }
    
    preventScroll(event) {
        const modal = document.querySelector('.modal');
        if (modal && !modal.classList.contains('hidden')) {
            event.preventDefault();
        }
    }
}
```

---

## Keyboard Accessibility

### Theory
Keyboard accessibility ensures all users can interact with modals using keyboard navigation, essential for accessibility compliance.

### Code Example:
```javascript
// Keyboard accessibility handler
class KeyboardAccessibility {
    constructor(modal) {
        this.modal = modal;
        this.focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        this.previousFocus = null;
    }
    
    handleKeydown(event) {
        if (event.key === 'Escape') {
            this.closeModal();
        } else if (event.key === 'Tab') {
            this.trapFocus(event);
        }
    }
    
    trapFocus(event) {
        const focusableElements = this.modal.querySelectorAll(this.focusableElements);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
    
    setInitialFocus() {
        this.previousFocus = document.activeElement;
        const focusableElements = this.modal.querySelectorAll(this.focusableElements);
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }
    
    restoreFocus() {
        if (this.previousFocus) {
            this.previousFocus.focus();
        }
    }
}
```

---

## Part 5 Interview Questions

### Technical Questions

1. **How do you handle multiple event listeners efficiently?**
   - **Answer**: Use event delegation, attach listeners to parent elements, and use `removeEventListener()` for cleanup to prevent memory leaks.

2. **What's the difference between `addEventListener` and inline event handlers?**
   - **Answer**: `addEventListener` allows multiple listeners, better separation of concerns, can control capturing/bubbling, and easier to remove. Inline handlers are simpler but limited.

3. **How do you create smooth CSS animations with JavaScript?**
   - **Answer**: Use CSS transitions with class toggles, `requestAnimationFrame()` for JS animations, or Web Animations API for complex sequences.

4. **What is focus trapping and why is it important?**
   - **Answer**: Focus trapping keeps keyboard navigation within a modal, essential for accessibility. Prevents focus from moving to background elements.

5. **How do you prevent body scroll when a modal is open?**
   - **Answer**: Set `body { overflow: hidden }` when modal opens, restore on close. Handle touch events with `preventDefault()` for mobile.

### Real-time Based Questions

6. **How would you implement a modal that adapts to different screen sizes?**
   - **Answer**: Use responsive CSS with viewport units, JavaScript resize handlers, and different animation types for mobile vs desktop.

7. **Implement theme switching with persistence across browser sessions.**
   - **Answer**: Use localStorage to save theme, apply classes to body element, handle system preference detection with `matchMedia()`.

### Scenario-Based Questions

8. **User reports modal doesn't close on mobile. How do you debug?**
   - **Answer**: Check touch event handling, overlay click detection, escape key functionality, and viewport scaling issues.

9. **How would you make a modal system accessible for screen readers?**
   - **Answer**: Use ARIA attributes, manage focus properly, provide keyboard navigation, announce modal state changes.

10. **Implement a modal queue system for multiple modals.**
    - **Answer**: Create modal manager with queue, handle z-index stacking, manage focus between modals, coordinate animations.

---

## Part 5 Coding Exercises

### Exercise 1: Advanced Modal System
```javascript
// TODO: Create modal system with multiple types (alert, confirm, custom)
class ModalSystem {
    show(type, options) { /* Show modal with type-specific content */ }
    hide(modalId) { /* Hide specific modal */ }
    queue(modalData) { /* Queue modal for display */ }
    handleKeyboard(event) { /* Keyboard navigation */ }
}
```

### Exercise 2: Animation Sequencer
```javascript
// TODO: Create animation sequencer for complex modal transitions
class AnimationSequencer {
    sequence(animations) { /* Run animations in sequence */ }
    parallel(animations) { /* Run animations simultaneously */ }
    reverse(animation) { /* Reverse animation */ }
    pause() { /* Pause all animations */ }
}
```

### Exercise 3: Theme Manager
```javascript
// TODO: Advanced theme manager with custom properties
class ThemeManager {
    registerTheme(name, variables) { /* Register custom theme */ }
    switchTheme(themeName) { /* Switch to theme */ }
    createVariation(baseTheme, changes) { /* Create theme variation */ }
    detectSystemTheme() { /* Auto-detect system preference */ }
}
```

### Exercise 4: Responsive Modal Handler
```javascript
// TODO: Handle modal behavior across different screen sizes
class ResponsiveModal {
    adaptToViewport() { /* Adjust modal for viewport */ }
    handleOrientationChange() { /* Handle device rotation */ }
    optimizeForTouch() { /* Touch-friendly interactions */ }
    preventZoom() { /* Prevent unwanted zoom */ }
}
```

### Exercise 5: Accessibility Manager
```javascript
// TODO: Comprehensive accessibility for modals
class AccessibilityManager {
    trapFocus(container) { /* Keep focus within container */ }
    announceChange(message) { /* Screen reader announcements */ }
    setupKeyboardNav() { /* Keyboard navigation */ }
    validateContrast() { /* Check color contrast */ }
}
```

---

## Part 5 Summary

This Part 5 guide covers advanced modal and UI interaction concepts:
- ✅ Advanced event handling and delegation
- ✅ Modal components with overlays and animations
- ✅ Dynamic CSS class management
- ✅ Smooth animations and transitions
- ✅ Theme persistence with localStorage
- ✅ Responsive design with JavaScript
- ✅ Touch and mobile interaction handling
- ✅ Keyboard accessibility and focus management

Combined with Parts 1-4, you now have comprehensive JavaScript knowledge from fundamentals to advanced interactive UI components!
```
```
```

