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

/*
 This function:
 --------------
 - Calculates the current account balance from all its movements (transactions).
 - Stores this balance inside the account object for later use.
 - Updates the UI so the user can see their latest balance in euros.
*/

const calcDisplayBalance = function (account) {
  // 1️⃣ Calculate total balance using .reduce()
  //    - account.movements is an array with positive (deposits) and negative (withdrawals) numbers.
  //    - acc (accumulator) starts at 0.
  //    - cur is the current movement value in the loop.
  //    - On completion, "balance" will be the sum of all deposits and withdrawals.
  const balance = account.movements.reduce((acc, cur) => acc + cur, 0);

  // 2️⃣ Store the calculated balance back into the account object
  //    This makes it possible to reuse the same balance value later
  //    without recalculating (e.g., for transfers, loan checks).
  account.balance = balance;

  // 3️⃣ Update the UI so the balance is visible to the logged-in user
  //    - labelBalance is the HTML element where the balance is displayed.
  //    - Template literal adds the "€" euro symbol immediately after the amount.
  labelBalance.textContent = `${balance}€`;

  // 4️⃣ Return the balance if needed for other parts of the program
  return balance;
};

/*
 LEARNING POINTS:
 ----------------
 - The .reduce() method is perfect for converting an array full of numbers
   into a single summary value (like sum, average, max, etc.).
 - Here we sum all deposits (positive) and withdrawals (negative) to get the net balance.
 - Storing the result inside "account.balance" allows other functions to access it
   without recalculating.
 - Updating the DOM (`labelBalance.textContent = ...`) links the logic to the UI 
   so the customer instantly sees the updated value after any transaction.
 - This "calculate ➜ store ➜ display" pattern is VERY common in web apps with dynamic data.
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
    .filter(mov => mov > 0) // Keep only positive values → deposits
    .reduce((acc, mov) => acc + mov, 0); // Sum all deposits into a single number

  // ===================================================
  // 2. Calculate TOTAL OUTGOINGS
  // ===================================================
  const outgoings = account.movements
    .filter(mov => mov < 0) // Keep only negative values → withdrawals
    .reduce((acc, mov) => acc + mov, 0); // Sum all withdrawals (result will be negative)

  // ===================================================
  // 3. Calculate TOTAL INTEREST
  // ===================================================
  const interest = account.movements
    .filter(mov => mov > 0) // Work with deposits only
    .map(deposit => (deposit * account.interestRate) / 100) // Interest per deposit
    .filter(int => int >= 1) // Bank only credits ≥ €1
    .reduce((acc, int) => acc + int, 0); // Sum all qualifying interests

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
// 7. APPLICATION LOGIC - UI UPDATES
//////////////////////////////////////////////////////

/*
 The purpose of this function:
 --------------------------------
 - To centralize all the logic needed to refresh the "dashboard" 
   for the currently logged-in account.
 - This prevents repetitive code — instead of calling 
   displayMovements(), calcDisplayBalance(), and calcDisplaySummary() 
   separately every time something changes, we just call updateUI(account).
*/

const updateUI = function (account) {
  // 1️⃣ Display account movements (transactions)
  //    Shows each deposit or withdrawal in the transaction history list.
  //    We pass the account.movements array to the function that renders them in the UI.
  displayMovements(account.movements);

  // 2️⃣ Display account balance
  //    Calculates the total balance from the movements
  //    and updates the balance label in the UI.
  //    Passing the whole account allows calcDisplayBalance to also store balance if needed.
  calcDisplayBalance(account);

  // 3️⃣ Display account summary (total deposits, withdrawals, and interest)
  //    Summarizes account activity and shows stats in the UI.
  calcDisplaySummary(account);
};

/*
LEARNING POINTS:
----------------
- "UI update" patterns like this are common in interactive web apps.
- This function acts as a SINGLE place to update all parts of the user interface related to the account.
- Benefits:
    ✅ Avoids repeated code and makes the app DRY (Don't Repeat Yourself).
    ✅ Makes it easier to maintain — if we change how the UI is updated, we only do it here.
    ✅ Improves code readability.
- It's called whenever the account's data changes:
    → After login
    → After money transfer
    → After loan approval
    → After closing an account
*/

//////////////////////////////////////////////////////
// 8. APPLICATION LOGIC - Implementing User Login (with error handling)
//////////////////////////////////////////////////////

let currentAccount;

// Add a click event listener to the login button
btnLogin.addEventListener('click', function (e) {
  console.log('Login button clicked');
  e.preventDefault(); // Prevent form reload

  // 1️⃣ Find matching account by entered username
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
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

    updateUI(currentAccount);
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

///////////////////////////////////////////////////////////////
// 9. APPLICATION LOGIC - Implementing Transfer Functionality
///////////////////////////////////////////////////////////////

/*
   This event listener handles transferring money from the currently logged‑in account
   (currentAccount) to another user account.

   STEPS:
   1. Get the transfer details (amount & recipient username) from the form inputs.
   2. Find the receiver account in the accounts array.
   3. Validate:
        - Amount is positive.
        - Recipient exists.
        - Sender has enough balance.
        - Sender is not transferring to themselves.
   4. If valid:
        - Deduct amount from sender's movements (negative value).
        - Add amount to receiver's movements (positive value).
        - Update the UI so both sender's history and balance are refreshed.
*/

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); //  Prevent form submission & page reload
  console.log('Transfer button clicked');

  // 1️⃣ Get amount & recipient username from inputs
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );
  console.log(amount, receiverAcc);

  // 2️⃣ Clear the form fields after reading the values
  inputTransferAmount.value = inputTransferTo.value = '';

  // 3️⃣ Validate transfer conditions
  if (
    amount > 0 && // Amount must be positive
    receiverAcc && // Receiver must exist
    currentAccount.balance >= amount && // Sender must have enough money
    receiverAcc?.username !== currentAccount.username // Can't transfer to yourself
  ) {
    // ✅ Successful transfer:

    // Record the outgoing transfer in sender's movements as a negative value
    currentAccount.movements.push(-amount);

    // Record the incoming transfer in receiver's movements as a positive value
    receiverAcc.movements.push(amount);

    // Update the sender's UI: movements list, balance, and summary
    updateUI(currentAccount);

    console.log(`Transfer of ${amount}€ to ${receiverAcc.username} completed.`);
  } else {
    // ❌ Transfer failed — could be due to invalid amount, no recipient, low balance, or self-transfer
    console.warn('Transfer failed: Check amount, balance, or receiver.');
    // You could show a UI error message here in a real app
  }
});

///////////////////////////////////////////////////////////////
// 10. APPLICATION LOGIC - Close Account + Log Closure Event
///////////////////////////////////////////////////////////////

// We'll keep a separate log of account closures
const closureLog = []; // Each entry will have { username, date }

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Close button clicked');

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // ✅ Credentials match — proceed with account closure

    // Find the index of the current account
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );

    // 1️⃣ Create a closure event log entry
    const closureEntry = {
      username: currentAccount.username,
      owner: currentAccount.owner,
      date: new Date().toISOString(), // store in ISO standard format
    };
    closureLog.push(closureEntry);

    // 2️⃣ Remove the account from the accounts array
    accounts.splice(index, 1);

    // 3️⃣ Hide the UI (logout effect)
    containerApp.style.opacity = 0;

    // 4️⃣ Clear the input fields
    inputCloseUsername.value = inputClosePin.value = '';

    console.log('Account closed successfully.');
    console.log('Closure log updated:', closureLog);

    // 5️⃣ Confirm to user
    alert(
      `Account closed successfully on ${new Date(
        closureEntry.date,
      ).toLocaleString()}`,
    );
  } else {
    // ❌ Closure failed
    console.warn('Close account failed: Invalid username or PIN.');
    alert('Close account failed: Invalid username or PIN.');
  }
});
