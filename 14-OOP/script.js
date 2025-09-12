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

//////////////////////////////////////////////////////////////////////////
// PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN
//////////////////////////////////////////////////////////////////////////

// === Inspecting the prototype chain of a Person object ===
console.log(suraj.__proto__); // Direct prototype: Person.prototype
console.log(suraj.__proto__.__proto__); // Next up: Object.prototype
console.log(suraj.__proto__.__proto__.__proto__); // End of chain: null

// The "constructor" property links back to the constructor function used for creation
console.log(Person.prototype.constructor); // Reference to Person function
console.dir(Person.prototype.constructor); // Details (can re-create objects)

// === Arrays have their own prototype chain ===
// All arrays are instances of Array, inheriting from Array.prototype
const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__); // Shows Array.prototype and its built-in methods
console.log(arr.__proto__ === Array.prototype); // True
console.log(arr.__proto__.__proto__); // Array’s parent: Object.prototype

// === Extending Native Prototypes ===
// Custom methods can be added to native prototypes like Array for new functionality
Array.prototype.unique = function () {
  // Returns an array with only unique elements, uses Set for filtering
  return [...new Set(this)];
};
// Now all arrays inherit and can use unique()
console.log(arr.unique()); // [3,6,5,9]

// === Prototypes in DOM nodes and functions ===
const h1 = document.querySelector('h1');
console.dir(h1); // Reveals h1’s prototype chain (HTMLElement → Element → Node → Object)

console.dir(x => x + 1); // Arrow functions don't have a prototype (cannot be used as a constructor)

//////////////////////////////////////////////////////////////////////////
// Real-Time Example: Animal-Dog-Cat Hierarchy Using Prototypal Inheritance
//////////////////////////////////////////////////////////////////////////

// Base object (prototype) for all animals
const animal = {
  speak: function () {
    console.log('Animal makes a sound');
  },
};

// Create dog object inheriting from animal
const dog = Object.create(animal); // dog inherits from animal
dog.bark = function () {
  console.log('Dog barks!');
};

// Create cat object inheriting from animal
const cat = Object.create(animal); // cat inherits from animal
cat.meow = function () {
  console.log('Cat meows!');
};

// Test: Use shared and unique methods
dog.speak(); // Outputs: Animal makes a sound (inherited from animal)
dog.bark(); // Outputs: Dog barks!      (dog specific)

cat.speak(); // Outputs: Animal makes a sound (inherited)
cat.meow(); // Outputs: Cat meows!       (cat specific)

// See the prototype relationships
console.log(dog.__proto__ === animal); // true
console.log(cat.__proto__ === animal); // true

// Overriding and extending prototype behavior
cat.speak = function () {
  console.log('Cat purrs!');
};
cat.speak(); // Outputs: Cat purrs! (own property overrides inherited)

// More extensible: add a breed property to any animal type
dog.breed = 'German Shepherd';
cat.breed = 'Siamese';
console.log(dog.breed, cat.breed);

// Loop to demonstrate dynamic inheritance: create multiple species inheriting from animal
function makePet(name, sound) {
  const pet = Object.create(animal);
  pet.name = name;
  pet.speak = function () {
    console.log(`${this.name} says: ${sound}`);
  };
  return pet;
}
const parrot = makePet('Parrot', 'Squawk!');
parrot.speak(); // Parrot says: Squawk!

// -------------------------------------------------------------------
// Key Learning Points
// -------------------------------------------------------------------
// - Every object has a hidden [[Prototype]] where it inherits methods/properties[1][2][6].
// - The prototype chain is how JS resolves property/method access by searching up the chain[2][6][1].
// - Native objects (Array, Function, DOM elements) also use prototypes for inheritance[6].
// - You can safely extend native prototypes (like Array) with custom utility methods.
// - Use Object.create(parentObj) or constructor prototypes for chaining in OOP patterns.
// - Arrow functions lack prototypes, so cannot be used for constructor-based inheritance.
// - Understanding these chains is crucial for robust, reusable code and debugging inheritance/behavior issues[3][1][6].

//////////////////////////////////////////////////////////////////////////
// ES6 CLASSES
//////////////////////////////////////////////////////////////////////////

// ==== CLASS EXPRESSION ====
// Define a class expression and assign it to a variable (anonymous class)
const PersonCl2 = class {};

// ==== CLASS DECLARATION ====
// Class declaration defines a named class
class PersonCl {
  /**
   * Constructor method that runs when new instance is created.
   * @param {string} fullName - Person's full name
   * @param {number} birthYear - Year of birth
   */
  constructor(fullName, birthYear) {
    this.fullName = fullName; // Instance property
    this.birthYear = birthYear; // Instance property
  }

  // Instance methods declared here are attached to the class prototype
  // All instances share these methods to save memory and enable inheritance.

  /**
   * Calculate and log the person's age
   */
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  /**
   * Greet the person by name
   */
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // Getter method to calculate age based on birth year
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // Setter method to validate and set full name
  // Requires name to include a space (first and last name)
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  // Getter method to access the protected _fullName property
  get fullName() {
    return this._fullName;
  }
}

// Create instance of PersonCl
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica); // Instance object with properties
jessica.calcAge(); // Execute method shared by prototype
jessica.greet(); // Greet method
console.log(jessica.age); //29

// Prototype check: an instance's __proto__ points to the class prototype object
console.log(jessica.__proto__ === PersonCl.prototype); // true

// Add a shared property to the prototype (accessible by all instances)
PersonCl.prototype.species = 'Homo Sapiens';
console.log(jessica.species); // 'Homo Sapiens'

// Features to remember about ES6 classes:
const walter = new PersonCl('Walter White', 1965);
console.log(walter);

/*
  1. Classes are NOT hoisted: declared class must be defined before use.
  2. Classes are first-class citizens: can be assigned to variables, passed to functions, etc.
  3. Classes run in strict mode automatically, avoiding common mistakes.
*/

//////////////////////////////////////////////////////////////////////////
// Real-Time Example: Task Manager Class
//////////////////////////////////////////////////////////////////////////

class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
    this.completed = false;
  }
  complete() {
    this.completed = true;
    console.log(`Task "${this.title}" completed!`);
  }
  postpone(days) {
    const date = new Date(this.dueDate);
    date.setDate(date.getDate() + days);
    this.dueDate = date.toISOString().split('T');
    console.log(`Task "${this.title}" postponed to ${this.dueDate}`);
  }
}

const task1 = new Task('Finish report', '2025-09-20');
console.log(task1);
task1.complete();
task1.postpone(3);

//////////////////////////////////////////////////////////////////////////
// Key Learning Points:
//////////////////////////////////////////////////////////////////////////
// - ES6 classes provide a clear, concise syntax for object creation and inheritance[1][2].
// - Methods declared in class body go to prototype, shared by all instances.
// - Class instances carry own data properties set by constructor.
// - Classes are not hoisted; declare before use.
// - Classes run in strict mode which improves code safety and consistency.
// - Suitable for real-world entities: tasks, users, UI components, etc.

//////////////////////////////////////////////////////////////////////////
// GETTERS AND SETTERS
//////////////////////////////////////////////////////////////////////////

// Define an account object with a movements array to track transactions
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  // Getter: defines a property "latest" which returns the last movement dynamically
  // Enables accessing 'latest' as a normal property (not function call)
  get latest() {
    return this.movements.slice(-1).pop(); // Returns last element in movements array
  },

  // Setter: allows setting the 'latest' property which actually adds a new movement to the list
  set latest(mov) {
    this.movements.push(mov); // Push value to movements array
  },
};

// Using getter: no parentheses needed, accessed like a property
console.log(account.latest); // Outputs: 300 (last movement)

// Using setter: we assign a value which internally pushes to the array
account.latest = 50;
console.log(account.movements); // Outputs: [200, 530, 120, 300, 50]
console.log(account);

//////////////////////////////////////////////////////////////////////////
// Real-Time Example: Temperature Converter Object
//////////////////////////////////////////////////////////////////////////

const temperature = {
  // Internal temperature stored in Celsius
  _celsius: 25,

  // Getter to obtain temperature in Fahrenheit (computed property)
  get fahrenheit() {
    return this._celsius * 1.8 + 32;
  },

  // Setter to update temperature via Fahrenheit and convert to Celsius internally
  set fahrenheit(value) {
    this._celsius = (value - 32) / 1.8;
  },
};

console.log(temperature.fahrenheit); // Get temperature in Fahrenheit (77)
temperature.fahrenheit = 86; // Set temperature using Fahrenheit
console.log(temperature._celsius); // Internal temperature updated to Celsius (30)

//////////////////////////////////////////////////////////////////////////
// Key Learning Points
//////////////////////////////////////////////////////////////////////////
// - Getters allow you to access object values without calling methods explicitly[1][3].
// - Setters allow assigning values with property syntax while running logic behind the scenes.
// - Useful for computed properties, input validation, calculated fields, and encapsulation.
// - Helpful in managing complex objects where data integrity and transformations are needed.
// - The syntax uses `get` and `set` keywords inside object/class definitions or prototypes[6].
// - Real-world uses include temperature conversion, bank account balances, form validation, and interactive UI states.

//////////////////////////////////////////////////////////////////////////
// ES6 CLASSES AND STATIC METHODS
//////////////////////////////////////////////////////////////////////////

// Constructor function example with a static method (attached directly to the constructor)
const PersonNew = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Static method: belongs to the class itself, not instances
PersonNew.hey = function () {
  console.log('Hey there 👋 from Constructor Function');
};

PersonNew.hey(); // Call on class, NOT on instances

// ES6 Class declaration with instance methods and a static method
class PersonClNew {
  constructor(fullName, birthYear) {
    this.fullName = fullName; // Instance property
    this.birthYear = birthYear; // Instance property
  }

  // Instance method on the prototype; available to all instances
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // Static method, callable only on the class itself, not instances
  static hey() {
    console.log('Hey there 👋 from Class');
  }
}

PersonClNew.hey(); // Call static method on class

// ---- Real-Time Example: Utility Class with Static Methods ----
class TemperatureConverter {
  // Converts Celsius to Fahrenheit
  static celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // Converts Fahrenheit to Celsius
  static fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
}

console.log(TemperatureConverter.celsiusToFahrenheit(30)); // 86
console.log(TemperatureConverter.fahrenheitToCelsius(86)); // 30

// Trying to call static method on an instance throws an error:
// const tempConv = new TemperatureConverter();
// tempConv.celsiusToFahrenheit(30); // Error: tempConv.celsiusToFahrenheit is not a function

//////////////////////////////////////////////////////////////////////////
// Key Learning Points:
//////////////////////////////////////////////////////////////////////////
// - Static methods belong to the class itself, not instances of the class[web:262][web:267][web:268].
// - Static methods are called on the class directly (ClassName.method()), NOT via instance[web:262].
// - Useful for utility functions, factory methods, or operations not tied to instance state[web:262][web:269].
// - Instance methods operate on individual object data (this.property).
// - Classes can have both kinds for organized, modular code.

//////////////////////////////////////////////////////////////////////////
// OBJECT.CREATE
//////////////////////////////////////////////////////////////////////////

// Prototype object with shared methods and initialization function
const PersonProto = {
  // Shared method for calculating age (inherited by all objects created from PersonProto)
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // Initialization method to set instance properties after object creation
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Create a new object 'steven' that inherits from PersonProto
const steven = Object.create(PersonProto);
steven.name = 'Steven'; // Add new own property to 'steven'
steven.birthYear = 2002;
steven.calcAge(); // Uses inherited method
console.log(steven); // Shows steven object with own properties and prototype chain

// Check prototype linkage and inheritance
console.log(steven.__proto__); // Should be PersonProto object
console.log(steven.__proto__ === PersonProto); // true
console.log(PersonProto.isPrototypeOf(steven)); // true

// Another object 'sarah' created from same prototype, using init method for property setup
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
console.log(sarah);
sarah.calcAge();

//////////////////////////////////////////////////////////////////////////
// Real-Time Example: Vehicle Hierarchy with Object.create
//////////////////////////////////////////////////////////////////////////

const VehicleProto = {
  init(make, speed) {
    this.make = make;
    this.speed = speed;
  },
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  },
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  },
};

const car = Object.create(VehicleProto);
car.init('Toyota', 120);
car.accelerate(); // Toyota is going at 130 km/h
car.brake(); // Toyota is going at 125 km/h

const bike = Object.create(VehicleProto);
bike.init('Honda', 90);
bike.accelerate(); // Honda is going at 100 km/h

//////////////////////////////////////////////////////////////////////////
// Key Learning Points
//////////////////////////////////////////////////////////////////////////
// - Object.create(proto) creates a new object with 'proto' as its prototype.
// - Allows direct prototype-based inheritance without using constructor functions.
// - Useful for clean inheritance where shared methods reside in the prototype object.
// - init methods let you set instance-specific properties after creation (similar to constructors).
// - Real-world use cases: Vehicles, Animals, Shapes, UI components, and any entity hierarchy requiring inheritance.
