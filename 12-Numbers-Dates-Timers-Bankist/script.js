'use strict';

/////////////////////////////////////////////////
// BANKIST APP DEMO WITH EDUCATIONAL COMMENTS
/////////////////////////////////////////////////

// =============================== DATA AND ACCOUNTS ===============================
// Note: Each account object stores name, movements, movement dates, interest rate, PIN, currency, and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2025-09-08T21:31:17.178Z',
    '2025-09-07T07:42:02.383Z',
    '2025-09-06T09:15:04.904Z',
    '2025-09-05T10:17:24.185Z',
    '2025-09-04T14:11:59.604Z',
    '2025-09-03T17:01:17.194Z',
    '2025-09-02T23:36:17.929Z',
    '2025-09-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // Locale for number/date formatting
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2025-09-08T13:15:33.035Z',
    '2025-09-07T09:48:16.867Z',
    '2025-09-06T06:04:23.907Z',
    '2025-09-05T14:18:46.235Z',
    '2025-09-04T16:33:06.386Z',
    '2025-09-03T14:43:26.374Z',
    '2025-09-02T18:49:59.371Z',
    '2025-09-01T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2]; // Array of all bank accounts in the app

/////////////////////////////////////////////////
// ELEMENT SELECTORS (cache DOM elements for fast access and updates)
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// DATE & CURRENCY HELPERS

// Format movement date as 'Today', 'Yesterday', 'X days ago', or use locale for older dates
const formatMovementDate = function (date, locale) {
  // Returns the number of days between two Date objects
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // For older dates, use locale-based formatted date string
  return new Intl.DateTimeFormat(locale).format(date);
};

// Formats a number as local currency using the account's locale and ISO currency code
const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency, // Always required when style is 'currency' (see error in your previous query)
  }).format(value);
};

/////////////////////////////////////////////////
// MAIN UI DISPLAY FUNCTIONS

// Display/account movement list with amount, date and formatting
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  // Combine movement (amount) with date and create array of objects for display
  const combinedMovements = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: new Date(acc.movementsDates[i]),
  }));

  // If sort true, order by movement value ascending
  if (sort) combinedMovements.sort((a, b) => a.movement - b.movement);

  // Loop over all movements and render each row to the DOM
  combinedMovements.forEach(function (obj, i) {
    const { movement, movementDate } = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const displayDate = formatMovementDate(movementDate, acc.locale); // Date as user-friendly string
    const formatterMovement = formatCurrency(
      movement,
      acc.locale,
      acc.currency,
    ); // Local currency format

    // Build the movements HTML row
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatterMovement}</div>
      </div>
    `;
    // Insert the new row at the top
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculate and render current account balance in user's currency
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formatterMovement = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency,
  );
  labelBalance.textContent = `${formatterMovement}`;
};

// Calculate and render total incoming, outgoing, and earned interest in summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(out, acc.locale, acc.currency);

  // Calculate and display interest only if >=1 (example rule)
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency,
  );
};

// Create usernames by taking initials of account owner (e.g. "Jonas Schmedtmann" -> "js")
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts); // Initialize usernames for all demo accounts

// Update/re-render all account information
const updateUI = function (acc) {
  displayMovements(acc); // List of all operations/movements
  calcDisplayBalance(acc); // Account balance (total)
  calcDisplaySummary(acc); // Total in/out/interest
};

/**
 * Starts a logout timer that automatically logs out the user after 5 minutes of inactivity
 * @returns {number} The interval ID that can be used to cancel the timer
 * @description
 * - Initializes a 5 minute (300 second) countdown timer
 * - Updates the UI every second to show remaining minutes and seconds
 * - When timer reaches 0, logs out the user by:
 *   - Clearing the timer interval
 *   - Resetting the welcome message
 *   - Hiding the app container
 * - Returns the timer ID so it can be cancelled if needed
 */
const startLogOutTimer = function () {
  // Set time to 5 minutes (300 seconds)
  let time = 300;
  let intervalId;
  // Function to display the remaining time in minutes and seconds
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(intervalId);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease by 1 second
    time--;
  };

  // Call tick every second
  tick();
  intervalId = setInterval(tick, 1000);

  // Return the timer interval ID for potential cancellation
  return intervalId;
};

///////////////////////////////////////
// EVENT HANDLERS (connect JS to user interface buttons/inputs)
let currentAccount, timer;

// Login functionality
/**
 * Event handler for the login button click.
 * Authenticates user credentials and initializes the banking interface.
 *
 * @param {Event} e - The click event object
 *
 * @description
 * - Prevents default form submission
 * - Finds account matching entered username
 * - Validates PIN against account
 * - If valid:
 *   - Displays welcome message
 *   - Shows app interface
 *   - Updates date/time display with locale formatting
 *   - Clears login form
 *   - Resets/starts logout timer
 *   - Updates UI with account data
 *
 * @example
 * // Login with username 'js' and PIN 1111
 * inputLoginUsername.value = 'js';
 * inputLoginPin.value = '1111';
 * btnLogin.click();
 */
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form submission/reload
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display welcome & show app
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Show locale-formatted date/time
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date());
    // Clear login fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI with account data
    updateUI(currentAccount);
  }
});

// Money Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  // Transfer only if enough balance, amount > 0, valid receiver, not self
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Store date of transaction for both sender and receiver
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
  }

  //Reset the timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

// Request Loan
// Handle loan request button click:
// 1. Prevent form submission
// 2. Get and round down loan amount from input
// 3. Validate loan request:
//    - Amount must be positive
//    - User must have at least one deposit >= 10% of requested amount
// 4. If valid, add loan amount to movements after 2.5s delay
// 5. Add current date to movements dates
// 6. Update UI to reflect new balance
// 7. Clear loan input field
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  // Grant only if user had deposit >=10% of requested amount
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';

  //Reset the timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

// Close Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // Delete only if username and PIN match current account
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    accounts.splice(index, 1); // Remove user from accounts array
    containerApp.style.opacity = 0; // Hide UI after close
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Sort operations (movements) by value
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  clearInterval(timer);
  timer = startLogOutTimer();
});

/////////////////////////////////////////////////

// MAIN CONCEPTS DEMONSTRATED IN THIS APP:
// - Using array transformation methods (map, filter, reduce)[7]
// - Currency and date internationalization with Intl.NumberFormat and Intl.DateTimeFormat[5][7]
// - User input and event handling
// - Data-driven UI updates
// - Reusability through helper functions and modular code

// This project demonstrates how modern web apps structure real data workflows and a practical application
// of core JavaScript methods and browser APIs for user-facing features[5][7].
// It also highlights the importance of clean, modular code and the need for clear, concise documentation.
