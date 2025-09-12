'use strict';

//////////////////////////////////////////////////////////////////////////////
// CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR
//////////////////////////////////////////////////////////////////////////////

/**
 * Constructor function for creating Person objects.
 * This pattern allows creating multiple objects of the same 'type', each with its own data.
 * By convention, constructor functions are named with an uppercase first letter.
 * @param {string} firstName - The person's first name
 * @param {number} birthYear - The birth year of the person
 */
const Person = function (firstName, birthYear) {
  // Instance properties (each object gets its own copies)
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Don't create methods inside constructor functions, as each object
  // would get a separate copy (wastes memory and breaks DRY).
  // this.calcAge = function(){
  //     console.log(2025 - this.birthYear);
  // }
};

/*
When you call a constructor function with "new", four steps happen:
1. A new empty object {} is created
2. The constructor function runs, with "this" bound to the new object
3. The new object is linked to the function's prototype (for shared methods)
4. The function returns the new object automatically (even without "return")
*/

// Create object instances ("Person" type) using the constructor
const suraj = new Person('Suraj', 1996);
const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(suraj, jonas, matilda, jack); // Shows all the created Person objects

// instanceof operator checks if an object was created with a specific constructor
console.log(suraj instanceof Person); // true
const jay = 'Jay';
console.log(jay instanceof Person); // false

/////////////////////////////////////////////////////////////////////////
// Real-Time Example: Simple Bank Account Constructor Function
/////////////////////////////////////////////////////////////////////////
/**
 * Creates BankAccount objects with owner, balance, and deposit/withdraw methods.
 * Shows how to build real reusable objects for a banking app.
 */
function BankAccount(owner, initialBalance) {
  this.owner = owner;
  this.balance = initialBalance;

  // Shared methods should be added to BankAccount.prototype.
}
// Add methods to shared prototype
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

// Create new bank accounts
const surajAccount = new BankAccount('Suraj', 1000);
surajAccount.deposit(500);
surajAccount.withdraw(200);
console.log(surajAccount); // { owner: 'Suraj', balance: 1300 }

/////////////////////////////////////////////////////////////////////////
// Key Learning Points
/////////////////////////////////////////////////////////////////////////
// - Constructor functions allow reusable, consistent object creation with "new"[2][5][8].
// - Properties (data) go inside the constructor; methods should use prototype[5][8].
// - Avoid defining methods inside constructors to save memory[2][8].
// - instanceof checks "type" for objects.
// - Real-world: Used for objects like users, accounts, events, products, etc.
// - Prefer ES6 class syntax for simpler, safer code in big projects[8].

/////////////////////////////////////////////////////////////////////////
// PROTOTYPES
/////////////////////////////////////////////////////////////////////////

/**
 * Add a method to the Person constructor's prototype.
 * All Person instances (created with new Person(...)) share this method via inheritance.
 * This makes code DRY and memory efficient, because the method is not duplicated on every instance.
 */
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

// Any Person instance will inherit and can use calcAge
suraj.calcAge(); // Prints Suraj's age
matilda.calcAge(); // Prints Matilda's age

/**
 * Add a shared property to Person.prototype.
 * All Person instances will have access to this property via prototype.
 */
Person.prototype.species = 'Homo Sapiens';

console.log(suraj.species, jonas.species); // "Homo Sapiens" for both
console.log(suraj, jonas);

// ===== GETTING & COMPARING PROTOTYPES =====
console.log(suraj.__proto__); // Shows the prototype object linked to suraj
console.log(suraj.__proto__ === Person.prototype); // True: suraj's prototype is Person.prototype

// Check if Person.prototype is in the prototype chain for suraj
console.log(Person.prototype.isPrototypeOf(suraj)); // True
console.log(Person.prototype.isPrototypeOf(Person)); // False, because Person is a constructor, not an instance

// ===== PROPERTY OWNERSHIP: OWN vs. INHERITED =====
console.log(suraj.hasOwnProperty('firstName')); // True: firstName is set directly on suraj
console.log(suraj.hasOwnProperty('species')); // False: species is inherited via prototype, not a direct property

/////////////////////////////////////////////////////////////////////////
// Real-Time Example: BankAccount Prototypes
/////////////////////////////////////////////////////////////////////////
/**
 * Constructor function for simple bank account object.
 * Demonstrates shared methods and prototype properties for accounts.
 */
function NewBankAccount(owner, initialBalance) {
  this.owner = owner;
  this.balance = initialBalance;
}
// Method added to prototype, shared by all BankAccount instances
NewBankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
NewBankAccount.prototype.bankType = 'Savings'; // Shared property

const acc1 = new NewBankAccount('Suraj', 1000);
acc1.deposit(500);
console.log(acc1.owner); // "Suraj"
console.log(acc1.balance); // 1500
console.log(acc1.bankType); // "Savings"
console.log(acc1.hasOwnProperty('bankType')); // false (inherited from prototype)

/////////////////////////////////////////////////////////////////////////
// Key Learning Points
/////////////////////////////////////////////////////////////////////////
// - Prototypes are objects linked by the [[Prototype]] chain; inheritance flows up this chain[1][2][7][6].
// - Shared methods/properties go on the prototype for efficiency.
// - hasOwnProperty determines which properties are “own” vs. inherited[2][6].
// - Prototype chain enables powerful code reuse, DRY design, and easy extension.
// - Most modern JS uses ES6 classes, which are "syntactic sugar" over prototypes; understanding prototypes is essential for mastery[1][6].
