'use strict';

// Dark mode functionality
let isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleTheme() {
  isDarkMode = !isDarkMode;
  updateTheme();
  localStorage.setItem('darkMode', isDarkMode);
}

function updateTheme() {
  const body = document.body;
  const themeIcon = document.querySelector('.theme-icon');
  const themeText = document.querySelector('.theme-text');

  if (isDarkMode) {
    body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light Mode';
  } else {
    body.classList.remove('dark-mode');
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark Mode';
  }
}

// Initialize theme on page load
updateTheme();

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModel = document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);

for(let i=0; i<btnsOpenModel.length;i++){
    console.log(btnsOpenModel[i].textContent)
}