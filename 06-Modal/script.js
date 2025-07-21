'use strict';

// Modal functionality
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // Trigger animations
  setTimeout(() => {
    modal.classList.add('show');
    overlay.classList.add('show');
  }, 100);
};

const closeModal = function () {
  modal.classList.remove('show');
  overlay.classList.remove('show');

  // Hide after animation
  setTimeout(() => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }, 300);
};

// Event listeners for modal
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


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

