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
/////////////////////////////////////////////////
// 5. APPLICATION LOGIC - COMPUTE BALANCE
/////////////////////////////////////////////////

// This function computes and displays the account balance for the given movements array.
// "movements" is an array of numbers (positive for deposits, negative for withdrawals).
const calcDisplayBalance = function (movements) {
  // 1. Use .reduce() to sum up all amounts in the movements array.
  //    - acc: accumulator for the sum (starts at 0)
  //    - cur: the current transaction (movement) value as we loop through
  const balance = movements.reduce((acc, cur) => acc + cur, 0);

  // 2. Update the UI: set the text content of the balance label to show the balance and €
  //    - labelBalance is a reference to the HTML element where the balance appears
  labelBalance.textContent = `${balance}€`;

  // 3. Return the balance (optional, in case you want to use it elsewhere)
  return balance;
};

/*
LEARNING POINTS:
- .reduce() efficiently calculates the sum of all movements (deposits & withdrawals).
- The balance is then updated in the DOM so the user sees their total account funds.
- This pattern (calculate ➔ display) is common in UI web applications.
*/

/////////////////////////////////////////////////
// 6. APPLICATION LOGIC - COMPUTE SUMMARY
/////////////////////////////////////////////////

/*
This function computes and displays three key bank account statistics:
  1. Total deposits (income)
  2. Total withdrawals (outgoings)
  3. Total interest earned on deposits (with realistic rule: ≥ €1 per deposit)

It takes one account object (with `movements` and `interestRate`) 
and updates the summary section of the UI.
*/
const calcDisplaySummary = function (account) {
  
  // ===================================================
  // 1. Calculate TOTAL INCOME
  // ===================================================
  const incomes = account.movements
    .filter(mov => mov > 0)                // Keep only positive values → deposits
    .reduce((acc, mov) => acc + mov, 0);   // Sum all deposits into a single number
  
  // ===================================================
  // 2. Calculate TOTAL OUTGOINGS
  // ===================================================
  const outgoings = account.movements
    .filter(mov => mov < 0)                // Keep only negative values → withdrawals
    .reduce((acc, mov) => acc + mov, 0);   // Sum all withdrawals (result will be negative)

  // ===================================================
  // 3. Calculate TOTAL INTEREST
  // ===================================================
  const interest = account.movements
    .filter(mov => mov > 0)                                  // Work with deposits only
    .map(deposit => (deposit * account.interestRate) / 100)  // Interest per deposit
    .filter(int => int >= 1)                                 // Bank only credits ≥ €1
    .reduce((acc, int) => acc + int, 0);                     // Sum all qualifying interests

  // ===================================================
  // 4. Update the UI labels
  // ===================================================
  // Use `toFixed(2)` for cleaner currency display (2 decimal places)
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;                  
  labelSumOut.textContent = `${Math.abs(outgoings).toFixed(2)}€`;     
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;           
};

/*
LEARNING POINTS:
- `filter()` → selects only the transactions matching the condition (deposits or withdrawals).
- `map()` → transforms each item (here: calculate interest per deposit).
- `reduce()` → accumulates all values to a single result (sum of deposits/withdrawals/interest).
- Chaining these methods allows clean "data → transformation → result" flow without extra variables.
- `Math.abs()` ensures withdrawals show as positive numbers when displayed.
- Rounding with `toFixed(2)` makes it display nicely as currency values.
*/

//////////////////////////////////////////////////////
// 7. APPLICATION LOGIC - Implementing User Login (with error handling)
//////////////////////////////////////////////////////

let currentAccount;

// Add a click event listener to the login button
btnLogin.addEventListener('click', function (e) {
  console.log('Login button clicked');
  e.preventDefault(); // Prevent form reload

  // 1️⃣ Find matching account by entered username
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log('Matched account:', currentAccount);

  // 2️⃣ Check both account existence and PIN match
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // ✅ SUCCESSFUL LOGIN

    // Show welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;

    // Show the app screen
    containerApp.style.opacity = 100;

    // Update UI with this account's details
    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount.movements);
    calcDisplaySummary(currentAccount);

  } else {
    // ❌ LOGIN FAILED — username not found or PIN incorrect

    // Show error in console
    console.error('Login failed: Invalid username or PIN');

    // Option 1: Simple alert (works everywhere)
    alert('Incorrect username or PIN. Please try again.');

    // Option 2 (Better UX): Show inline error in welcome label
    labelWelcome.textContent = 'Login failed! Please check credentials.';
    containerApp.style.opacity = 0; // Keep app hidden
  }

  // 3️⃣ Clear input fields in both cases for security
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginUsername.blur();
  inputLoginPin.blur();
});

