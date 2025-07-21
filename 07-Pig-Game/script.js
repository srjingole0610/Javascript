'use strict';
const body = document.body;
const toggleButton = document.querySelector('.toggle-btn');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.tn--new');
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Starting conditions for the Game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Generate Random Number
const GenerateRandomDice = function () {
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  return diceValue;
};

//Switching Player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling Dice condition
const rollDice = function () {
  if (!playing) return;
  // Generate a random dice roll
  const dice = GenerateRandomDice();
  //Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `../images/dice-${dice}.png`;

  //Check for rolled 1: if true, switch to next player;
  if (dice !== 1) {
    //Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch to next player
    switchPlayer();
  }
};

const holdScore = function () {
  if (!playing) return;
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // 2. check if player's score is >=100
  if (scores[activePlayer] >= 10) {
    playing = false;
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // if score < 100 switch the player
    switchPlayer();
  }
};

// Theme Management
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

// Load saved theme
const loadSavedTheme = function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const themeIcon = document.getElementById('theme-icon');

  document.body.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
};

toggleButton.addEventListener('click', toggleTheme);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
document.addEventListener('DOMContentLoaded', loadSavedTheme);
