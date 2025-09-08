'use strict'; // Enable strict mode for safer JS

// =============== MODAL ELEMENTS SELECTORS ===============
const modal = document.querySelector('.modal'); // Modal container element
const overlay = document.querySelector('.overlay'); // Background overlay behind modal
const btnCloseModal = document.querySelector('.close-modal'); // Button to close the modal
const btnsOpenModal = document.querySelectorAll('.show-modal'); // All buttons that open the modal

// =============== OPEN MODAL FUNCTION ===============
// Removes 'hidden' class to show modal and overlay,
// then triggers animation classes after 100 ms for smooth entrance effect.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // After a short delay, add 'show' class for animation
  setTimeout(() => {
    modal.classList.add('show');
    overlay.classList.add('show');
  }, 100);
};

// =============== CLOSE MODAL FUNCTION ===============
// Removes animation classes to play closing animation,
// then re-adds 'hidden' after 300 ms delay to hide elements.
const closeModal = function () {
  modal.classList.remove('show');
  overlay.classList.remove('show');

  // Wait for animation to finish before hiding modal
  setTimeout(() => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }, 300);
};

// =============== MODAL EVENT LISTENERS ===============
// Attach click events to all buttons that open modal
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// Attach click event to close button
btnCloseModal.addEventListener('click', closeModal);

// Clicking on overlay outside modal also closes modal
overlay.addEventListener('click', closeModal);

// =============== DARK MODE TOGGLE ===============
// Retrieve saved dark mode state from localStorage, default off
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Toggle dark mode state and update UI/localStorage accordingly
function toggleTheme() {
  isDarkMode = !isDarkMode;
  updateTheme(); // Reflect change in DOM
  localStorage.setItem('darkMode', isDarkMode); // Persist choice
}

// Update the page and toggle button text/icon to reflect current theme
function updateTheme() {
  const body = document.body;
  const themeIcon = document.querySelector('.theme-icon');
  const themeText = document.querySelector('.theme-text');

  if (isDarkMode) {
    body.classList.add('dark-mode'); // Add dark theme styles
    themeIcon.textContent = '☀️'; // Show sun icon for light mode toggle
    themeText.textContent = 'Light Mode'; // Label button accordingly
  } else {
    body.classList.remove('dark-mode'); // Remove dark theme
    themeIcon.textContent = '🌙'; // Moon icon for dark mode toggle
    themeText.textContent = 'Dark Mode';
  }
}

// Initialize theme state on page load
updateTheme();

// =============== CLOSE MODAL WITH ESCAPE KEY ===============
// Listen for Escape key press globally to close modal if open
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// =============== RESPONSIVE & DEVICE-SPECIFIC INTERACTIONS ===============
// After DOM fully loads
document.addEventListener('DOMContentLoaded', function () {
  // Handler to manage viewport and modal visibility on resize or orientation change
  function handleResize() {
    // Close modal if open when screen size changes to avoid layout issues
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }

    // Fix viewport height CSS variable for mobile browsers (e.g. iOS Safari)
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // Run handler initially and when window resizes
  handleResize();
  window.addEventListener('resize', handleResize);

  // Prevent zoom on double-tap (iOS specific)
  let lastTouchEnd = 0;
  document.addEventListener(
    'touchend',
    function (event) {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault(); // Prevent double-tap zoom
      }
      lastTouchEnd = now;
    },
    false,
  );

  // Prevent scrolling when modal is open (for mobile touch)
  function preventScroll(e) {
    if (!modal.classList.contains('hidden')) {
      e.preventDefault();
    }
  }
  document.addEventListener('touchmove', preventScroll, { passive: false });

  // When modal receives focus on mobile, scroll it smoothly into view center
  modal.addEventListener('focus', function () {
    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
