'use strict';
const body = document.body;
const themeIcon = document.getElementById('theme-icon');
const toggleButton = document.querySelector('.toggle-btn');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.tn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El  = document.getElementById('current--1');

let currentScore = 0;

//Starting conditions for the Game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Generate Random Number
const GenerateRandomDice = function () {
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  return diceValue;
};

//Rolling Dice condition
btnRoll.addEventListener('click', function () {
  // Generate a random dice roll
  const dice = GenerateRandomDice();
  //Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `../images/dice-${dice}.png`;

  //Check for rolled 1: if true, switch to next player;
  if (dice !== 1) {
    //Add dice to the current score
    currentScore += dice;
    currentScore0El.textContent = currentScore;
  } else {
  }
});

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

toggleButton.addEventListener('click', toggleTheme);

// Load saved theme
document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const themeIcon = document.getElementById('theme-icon');

  document.body.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
});
