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
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

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
  else if (guessValue === secretNumber) {
    document.querySelector('.message').textContent =
      'Corect Number!🎉. You Win The Game';
  } else if (guessValue > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'The Guess Number is Tooo High! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game 💥';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessValue < secretNumber) {
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

// Theme toggle logic
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
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
