'use strict';

// Example: Month names array (not used directly here, but could be useful for showing workout dates)
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Selecting elements from the DOM for the workout form
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

////////////////////////////////////////////////////////////////////////////
// THEME MANAGER: Handles dark/light theme switching
////////////////////////////////////////////////////////////////////////////

class ThemeManager {
  constructor() {
    // UI elements for button, icon, and text
    this.themeToggle = document.getElementById('themeToggle');
    this.themeIcon = document.getElementById('themeIcon');
    this.themeText = document.getElementById('themeText');

    // Load stored theme if available, otherwise fallback to 'light'
    this.currentTheme = this.getStoredTheme() || 'light';

    this.init(); // Call initialization method
  }

  // Initialization logic
  init() {
    // Apply the theme on page load
    this.applyTheme(this.currentTheme);
    this.updateToggleUI();

    // Add click event listener to toggle button
    this.themeToggle.addEventListener('click', () => this.toggleTheme());

    // Detect system theme changes (if user switches OS level dark/light mode)
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        if (!this.getStoredTheme()) {
          // Only auto-detect if user hasn’t set theme manually
          this.currentTheme = e.matches ? 'dark' : 'light';
          this.applyTheme(this.currentTheme);
          this.updateToggleUI();
        }
      });

    // Add keyboard support for accessibility (Enter and Space key)
    this.themeToggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  // Get theme from localStorage, with fallback to null if not set
  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  // Save theme preference to localStorage
  setStoredTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  // Detect system preferred theme
  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  // Actually apply theme by toggling attribute on <html>
  applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  // Update button UI (icon, text, aria attributes)
  updateToggleUI() {
    const isDark = this.currentTheme === 'dark';
    this.themeIcon.textContent = isDark ? '☀️' : '🌙'; // Change icon
    this.themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode'; // Change label

    // ARIA attributes for accessibility
    this.themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light mode' : 'Switch to dark mode',
    );
    this.themeToggle.setAttribute('aria-pressed', isDark.toString());
  }

  // Toggle logic between light and dark
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    this.setStoredTheme(this.currentTheme);
    this.updateToggleUI();

    // Small animation effect on toggle click
    this.themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.themeToggle.style.transform = '';
    }, 150);
  }
}

// // Wait until DOM is loaded before running theme logic
// document.addEventListener('DOMContentLoaded', () => {
//   new ThemeManager();
// });

////////////////////////////////////////////////////////////////////////////
// FORM ACCESSIBILITY ENHANCEMENTS
////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  const typeSelect = document.getElementById('type');
  const cadenceRow = document
    .querySelector('.form__input--cadence')
    .closest('.form__row');
  const elevationRow = document.querySelector('.form__row--hidden'); // Hidden initially

  // Show/hide fields based on workout type
  if (typeSelect) {
    typeSelect.addEventListener('change', e => {
      if (e.target.value === 'cycling') {
        cadenceRow?.classList.add('form__row--hidden'); // Hide cadence
        elevationRow?.classList.remove('form__row--hidden'); // Show elevation
      } else {
        cadenceRow?.classList.remove('form__row--hidden');
        elevationRow?.classList.add('form__row--hidden');
      }
    });
  }

  // Enable keyboard navigation for workout items
  document.querySelectorAll('.workout').forEach(workout => {
    workout.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        workout.click(); // Simulate click on Enter/Space press
      }
    });
  });
});

////////////////////////////////////////////////////////////////////////////
// GEOLOCATION API + LEAFLET MAP INTEGRATION
////////////////////////////////////////////////////////////////////////////

// Check if browser supports Geolocation API
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // ------------------------
      // SUCCESS CALLBACK
      // ------------------------

      // Extract latitude & longitude from position object
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Store as an array [lat, lng] for Leaflet map
      const coords = [latitude, longitude];

      // ------------------------
      // LEAFLET MAP IMPLEMENTATION
      // ------------------------
      // Initialize map inside the HTML element with id="map"
      // setView(coords, zoomLevel)
      const map = L.map('map').setView(coords, 14);

      // Add map layer → Using openstreetmap tiles via Leaflet
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20, // Max zoom allowed
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // ------------------------
      // ADDING A MARKER
      // ------------------------
      L.marker(coords) // Marker placed at user’s location
        .addTo(map) // Add marker to map
        // Popup message bound to marker → opens on click or programmatically
        .bindPopup('📍 You are here! <br> (Popup is CSS customizable).')
        .openPopup(); // Open popup immediately
    },
    function () {
      // ------------------------
      // ERROR CALLBACK
      // ------------------------
      // If user denies permission OR error occurs
      alert('Could not get your position ❌');
    },
  );
}
