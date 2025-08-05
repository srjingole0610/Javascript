'use strict';

//============================================================
// BANKIST APP - COMPLETE CODE WITH EXPLANATORY COMMENTS
//============================================================

/////////////////////////////////////////////////
// 1. ACCOUNT DATA SETUP
/////////////////////////////////////////////////

// Each account represents a user object, with data like
// owner name, account movements (positive = deposit, negative = withdrawal),
// interest rate (in %), and a PIN for login.
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// All account objects are grouped in an array to allow searching and looping
const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// 2. ELEMENT SELECTION FROM THE DOM
/////////////////////////////////////////////////

// Here we get references to each HTML element we’ll dynamically update or listen to

const labelWelcome = document.querySelector('.welcome'); // Welcome message
const labelDate = document.querySelector('.date'); // Date of current login/operation
const labelBalance = document.querySelector('.balance__value'); // Account balance label
const labelSumIn = document.querySelector('.summary__value--in'); // Summary: total deposits
const labelSumOut = document.querySelector('.summary__value--out'); // Summary: total withdrawals
const labelSumInterest = document.querySelector('.summary__value--interest'); // Summary: total interest earned
const labelTimer = document.querySelector('.timer'); // Inactivity or logout timer

const containerApp = document.querySelector('.app'); // The main app container (to show/hide UI)
const containerMovements = document.querySelector('.movements'); // The container for transaction rows

// Buttons for user actions (login, transfer, request loan, logout, sort)
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

// Input fields for login credentials and transaction data
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// 3. APPLICATION LOGIC - DISPLAY MOVEMENTS
/////////////////////////////////////////////////

// This function takes an array of "movements" (transactions) and
// displays each one as a row in the .movements container.
// "movements" is an array of amounts: positive for deposits, negative for withdrawals.
const displayMovements = function (movements) {
  // 1. Clear any previous movement rows in the container
  containerMovements.innerHTML = '';

  // 2. Loop through each movement (transaction)
  movements.forEach(function (mov, i) {
    // Determine if movement is a 'deposit' or 'withdrawal'
    const movementType = mov > 0 ? 'deposit' : 'withdrawal';

    // 3. Build the HTML for one row using a template string
    const htmlTemplate = `<div class="movements__row">
        <div class="movements__type movements__type--${movementType}">
          ${i + 1} ${movementType}
        </div>
        <div class="movements__value">${mov}</div>
      </div>`;

    // 4. Insert this transaction row at the top of the container (afterbegin)
    containerMovements.insertAdjacentHTML('afterbegin', htmlTemplate);
  });
};

// Call the displayMovements function so the UI shows Jonas' transactions as a demo
displayMovements(account1.movements);

/////////////////////////////////////////////////
// 4. APPLICATION LOGIC - COMPUTE USERNAME
/////////////////////////////////////////////////

// This function takes the array of account objects.
// For every account, it creates a new 'username' property.
// The username is built by taking the first letter of each part of the owner's name (all lowercase).
// For example, "Steven Thomas Williams" becomes "stw".
const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    // 1. Convert the full owner name to lowercase for consistency.
    // 2. Split the string into an array of name parts (e.g., ['steven', 'thomas', 'williams']).
    // 3. Use map to pick the first character of each name part.
    // 4. Join all initials together to form the username.
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

// Run the function to assign usernames to all account objects
createUsernames(accounts);

// Now, every account object has a 'username' property! Useful for logins, etc.
console.log(accounts);
/* 
  [
    { owner: "Jonas Schmedtmann", username: "js", ... },
    { owner: "Jessica Davis", username: "jd", ... },
    ...
  ]
*/

