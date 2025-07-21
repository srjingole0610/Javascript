'use strict';
const body = document.body;
const themeIcon = document.getElementById('theme-icon');
const toggleButton = document.querySelector('.toggle-btn');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');
const diceEl = document.querySelector('.dice')

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');




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
