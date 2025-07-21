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

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Responsive and device-specific interactions
document.addEventListener('DOMContentLoaded', function () {
  // Consolidated resize handler
  function handleResize() {
    // Close modal on resize/orientation change to prevent layout issues
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }

    // Handle viewport changes for mobile browsers
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // Initialize viewport height and add single resize listener
  handleResize();
  window.addEventListener('resize', handleResize);

  // Prevent zoom on double tap for iOS
  let lastTouchEnd = 0;
  document.addEventListener(
    'touchend',
    function (event) {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    false,
  );

  // Smooth scrolling prevention when modal is open
  function preventScroll(e) {
    if (!modal.classList.contains('hidden')) {
      e.preventDefault();
    }
  }

  // Add touch event listeners for better mobile experience
  document.addEventListener('touchmove', preventScroll, { passive: false });

  // Enhanced modal accessibility for mobile
  modal.addEventListener('focus', function () {
    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});