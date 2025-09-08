'use strict'; // Treat all JS code as newer standard, avoiding accidental mistakes.

// ====================== ELEMENT SELECTORS ========================
// Grabbing DOM elements to interact with HTML components
const toggleBtn = document.getElementById('themeToggle'); // Theme toggle button
const body = document.body; // Main page container
const btnCheck = document.querySelector('.check'); // "Check" button for guesses
const btnAgain = document.querySelector('.again'); // "Again" button to reset game
const messageEl = document.querySelector('.message'); // Message display area for feedback
const scoreEl = document.querySelector('.score'); // Score display area
const highScoreEl = document.querySelector('.highscore'); // Highscore area
const numberEl = document.querySelector('.number'); // Displayed secret number or placeholder
const guessEl = document.querySelector('.guess'); // Guess input field

// ====================== GAME STATE VARIABLES =====================
// Keep track of the current score, high score, and secret number
let score = 20; // Initial player score (points)
let highScore = 0; // Record for best score
let secretNumber = generateSecretNumber(); // Random secret number for guessing

// ====================== HELPER FUNCTIONS =========================
function generateSecretNumber() {
  // Randomly creates a number between 1 and 20, inclusive
  return Math.trunc(Math.random() * 20) + 1;
}

/**
 * Update the game message for player feedback
 * @param {string} msg - The message to display
 */
function displayMessage(msg) {
  messageEl.textContent = msg;
}

/**
 * Apply theme (like winner, loser, or dark mode) by setting CSS classes.
 * Also updates localStorage so UI remains consistent on reload.
 * @param {string} [theme]
 */
function setTheme(theme) {
  body.classList.remove('winner', 'loser', 'dark-mode'); // Remove all theme classes
  if (theme) body.classList.add(theme); // Apply the specified theme
  localStorage.setItem('theme', theme === 'dark-mode' ? 'dark' : 'light'); // Save theme
  toggleBtn.textContent =
    theme === 'dark-mode' ? '☀️ Light Mode' : '🌙 Dark Mode'; // Button label
}

/**
 * Reset everything to the game's initial state so user can play again.
 */
function resetGame() {
  score = 20; // Reset score
  secretNumber = generateSecretNumber(); // Get a new secret number
  numberEl.textContent = '?'; // Hide the secret number
  guessEl.value = ''; // Clear previous guess
  guessEl.disabled = false; // Enable input and guessing
  btnCheck.disabled = false;
  numberEl.style.width = '12rem'; // Restore width styling
  scoreEl.textContent = score; // Show updated score
  displayMessage('Start guessing...'); // Reset message
  setTheme(null); // Remove any special theme
}

// ====================== GAME LOGIC ===============================
// Handles player guess, feedback, updating score and game end
btnCheck.addEventListener('click', () => {
  const guess = Number(guessEl.value); // Capture and convert guess to number

  // If no valid guess was entered
  if (!guess) {
    displayMessage('Enter the Number ⛔');
    return;
  }

  // If player guessed correctly
  if (guess === secretNumber) {
    displayMessage('Correct Number. You Won the Game! 🎉');
    numberEl.textContent = secretNumber; // Reveal the answer
    numberEl.style.width = '24rem'; // Visually highlight winner state
    guessEl.disabled = true; // Disable input after win
    btnCheck.disabled = true;
    setTheme('winner');

    // Update highscore if current score is better
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
    return;
  }

  // If player's guess is wrong
  if (score > 1) {
    displayMessage(guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉');
    score--; // Deduct score
    scoreEl.textContent = score; // Update score display
    setTheme('loser');
  } else {
    // If score reaches zero, game over
    displayMessage('You Lost The Game 💥');
    scoreEl.textContent = 0;
    setTheme('loser');
  }
});

// Reset game when user clicks "Again"
btnAgain.addEventListener('click', resetGame);

// ====================== THEME TOGGLE BUTTON ======================
// Switch between dark and light mode visually
toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  setTheme(isDark ? 'dark-mode' : null);
});

// ====================== LOAD USER PREFERENCE =====================
// On page reload, restore theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Light Mode';
  }
});
