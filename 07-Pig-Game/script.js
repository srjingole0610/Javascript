'use strict'; // Enable strict mode for better error checking

// ==================== DOM ELEMENT SELECTORS ====================
// Cache frequently used DOM elements for manipulation
const body = document.body;
const toggleButton = document.querySelector('.toggle-btn');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const themeIcon = document.getElementById('theme-icon');

// ==================== GAME STATE VARIABLES ====================
// Store players' total scores in an array
const scores = [0, 0];
// Current score accumulated during a player's turn
let currentScore = 0;
// Track which player is active (0 or 1)
let activePlayer = 0;
// Flag to indicate if game is running or ended
let playing = true;
// Score required to win the game
const WINNING_SCORE = 100;

// ==================== INITIALIZE GAME DISPLAY ====================
// Set initial scores to zero and hide the dice image
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// ==================== HELPER FUNCTIONS ====================
// Generate a dice roll (1 - 6)
const generateRandomDice = function () {
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  return diceValue;
};

// Switch active player after certain events like rolling a 1
const switchPlayer = function () {
  // Reset current score display for current player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0; // Reset current score variable
  // Switch active player from 0 to 1 or vice versa
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Toggle visual active player indicator CSS class
  player0El.classList.toggle('player--active'); 
  player1El.classList.toggle('player--active');
};

// Handles dice roll logic and updates UI and scores accordingly
const rollDice = function () {
  if (!playing) return; // If game ended, prevent rolls

  const dice = generateRandomDice(); // Get a random dice value (1-6)

  // Show dice image and update source to correct dice face image
  diceEl.classList.remove('hidden');
  diceEl.src = `../images/dice-${dice}.png`;

  // Check if player rolled a 1 (bad roll)
  if (dice !== 1) {
    // Add dice number to current score
    currentScore += dice;
    // Update display for current player's current score
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // If dice is 1, switch player (current score lost)
    switchPlayer();
  }
};

// Handles logic when player decides to hold current score
const holdScore = function () {
  if (!playing) return; // Do nothing if game ended

  // Add current accumulated score to active player's total score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  // Check if player reached or exceeded winning score (100)
  if (scores[activePlayer] >= WINNING_SCORE) {
    playing = false;
    diceEl.classList.add('hidden'); // Hide dice because game ended
    // Highlight winner visually
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  } else {
    // Otherwise switch to the next player
    switchPlayer();
  }
};

// Toggle between light and dark themes, update icon, and save preference
function toggleTheme() {
  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
}

// Load theme preference from localStorage and apply it on page load
const loadSavedTheme = function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
};

// Reset the entire game state and UI to initial conditions
const resetGame = function () {
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores = 0;
  scores[10] = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// =============== EVENT LISTENERS ===============
// Toggle theme button to switch between dark/light modes
toggleButton.addEventListener('click', toggleTheme);

// Roll dice button triggers dice roll and updates game state
btnRoll.addEventListener('click', rollDice);

// Hold button adds current score to total and checks for winner
btnHold.addEventListener('click', holdScore);

// New game button resets everything for a fresh start
btnNew.addEventListener('click', resetGame);

// Load theme preference on page load to keep user settings persistent
document.addEventListener('DOMContentLoaded', loadSavedTheme);
