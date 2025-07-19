'use strict';

// Element Selectors
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');

// Game State
let score = 20;
let highScore = 0;
let secretNumber = generateSecretNumber();

// Helper Functions
function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

/**
 * Updates the game message with a given string.
 * @param {string} msg - The message to display.
 */
function displayMessage(msg) {
  messageEl.textContent = msg;
}

/**
 * Updates the document's body with a given theme class.
 * @param {string} [theme] - The theme to apply. If not provided, the theme is unset.
 */
function setTheme(theme) {
  body.classList.remove('winner', 'loser', 'dark-mode');
  if (theme) body.classList.add(theme);
  localStorage.setItem('theme', theme === 'dark-mode' ? 'dark' : 'light');
  toggleBtn.textContent = theme === 'dark-mode' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

/**
 * Resets the game state to its initial state.
 * @description
 * Resets the game's score to 20, generates a new secret number, and resets the number element's text
 * content to '?'. It also resets the guess element's value and disables the guess and check buttons.
 * The number element's width is also reset, and the score is displayed in the score element. Finally,
 * the theme is set to null.
 */
function resetGame() {
  score = 20;
  secretNumber = generateSecretNumber();
  numberEl.textContent = '?';
  guessEl.value = '';
  guessEl.disabled = false;
  btnCheck.disabled = false;
  numberEl.style.width = '12rem';
  scoreEl.textContent = score;
  displayMessage('Start guessing...');
  setTheme(null);
}

// Game Logic
btnCheck.addEventListener('click', () => {
  const guess = Number(guessEl.value);

  if (!guess) {
    displayMessage('Enter the Number ⛔');
    return;
  }

  if (guess === secretNumber) {
    displayMessage('Correct Number. You Won the Game! 🎉');
    numberEl.textContent = secretNumber;
    numberEl.style.width = '24rem';
    guessEl.disabled = true;
    btnCheck.disabled = true;
    setTheme('winner');

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
    return;
  }

  // Handle wrong guess
  if (score > 1) {
    displayMessage(guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉');
    score--;
    scoreEl.textContent = score;
    setTheme('loser');
  } else {
    displayMessage('You Lost The Game 💥');
    scoreEl.textContent = 0;
    setTheme('loser');
  }
});

// Reset Game
btnAgain.addEventListener('click', resetGame);

// Dark Mode Toggle
toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  setTheme(isDark ? 'dark-mode' : null);
});

// Load Saved Theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Light Mode';
  }
});
