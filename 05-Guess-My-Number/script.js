'use strict';

// CODE Written for learning basic DOM
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Corect Number!🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;
// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);

const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Check button logic
btnCheck.addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue, typeof guessValue);

  if (!guessValue) {
    document.querySelector('.message').textContent = 'Enter the Number ⛔';
  }
  // else if (guessValue > score) {
  //   document.querySelector('.message').textContent =
  //     'Enter the Number below 20 ⛔';
  // }

  //When Player wins
  else if (guessValue === secretNumber) {
    document.body.classList.remove('dark-mode');
    document.body.classList.remove('loser');
    document.body.classList.add('winner');
    document.querySelector('.number').style.width = '24rem';
    document.querySelector('.message').textContent =
      'Correct Number. You Won the Game! 🎉';
    document.querySelector('.number').textContent = secretNumber;
    toggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
  //When Guess is too high
  else if (guessValue > secretNumber) {
    body.classList.remove('dark-mode');
    body.classList.add('loser');
    toggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
    if (score > 1) {
      document.querySelector('.message').textContent =
        'The Guess Number is Tooo High! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game 💥';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When Guess is too Low
  else if (guessValue < secretNumber) {
  body.classList.remove('dark-mode');
   body.classList.add('loser');
    toggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
    if (score > 1) {
      document.querySelector('.message').textContent =
        'The Guess Number is Tooo Low! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game 💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Play Again Button Logic which will reset the game
btnAgain.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.classList.remove('dark-mode');
  body.classList.remove('loser');
  body.classList.remove('winner');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '12rem';
})

// Theme toggle logic
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.remove('winner'); // ← add this line
  body.classList.remove('loser');
  body.style.background = '';
  const isDark = body.classList.contains('dark-mode');
  toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';

  // Optional: persist choice
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// On load, apply saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Light Mode';
  }
});
