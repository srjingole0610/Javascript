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
btnCheck.addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue, typeof guessValue);

  if (!guessValue) {
    document.querySelector('.message').textContent = 'Enter the Number ⛔';
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
