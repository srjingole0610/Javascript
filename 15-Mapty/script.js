'use strict';

// Array of month names for date formatting in workout displays
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

// DOM element selections for workout form inputs and containers
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Global variables for map instance and click event data
let map, mapEvent;

////////////////////////////////////////////////////////////////////////////
// THEME MANAGER: Handles dark/light theme switching and persistence
////////////////////////////////////////////////////////////////////////////

class ThemeManager {
  constructor() {
    // Initialize theme toggle UI elements
    this.themeToggle = document.getElementById('themeToggle');
    this.themeIcon = document.getElementById('themeIcon');
    this.themeText = document.getElementById('themeText');

    // Get stored theme preference or default to light theme
    this.currentTheme = this.getStoredTheme() || 'light';

    this.init(); // Initialize theme manager
  }

  // Set up theme manager event listeners and initial state
  init() {
    // Apply saved/default theme on page load
    this.applyTheme(this.currentTheme);
    this.updateToggleUI();

    // Handle theme toggle button clicks
    this.themeToggle.addEventListener('click', () => this.toggleTheme());

    // Listen for system theme preference changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        if (!this.getStoredTheme()) {
          // Auto-adjust theme only if user hasn't manually set preference
          this.currentTheme = e.matches ? 'dark' : 'light';
          this.applyTheme(this.currentTheme);
          this.updateToggleUI();
        }
      });

    // Add keyboard accessibility for theme toggle
    this.themeToggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  // Retrieve theme preference from localStorage
  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  // Save theme preference to localStorage for persistence
  setStoredTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  // Detect system-level theme preference
  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  // Apply theme by setting data-theme attribute on root element
  applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  // Update theme toggle button UI elements and accessibility attributes
  updateToggleUI() {
    const isDark = this.currentTheme === 'dark';
    this.themeIcon.textContent = isDark ? '☀️' : '🌙';
    this.themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';

    // Update ARIA attributes for accessibility
    this.themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light mode' : 'Switch to dark mode',
    );
    this.themeToggle.setAttribute('aria-pressed', isDark.toString());
  }

  // Toggle between light and dark themes with animation
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    this.setStoredTheme(this.currentTheme);
    this.updateToggleUI();

    // Add scale animation on theme toggle
    this.themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.themeToggle.style.transform = '';
    }, 150);
  }
}

////////////////////////////////////////////////////////////////////////////
// FORM ACCESSIBILITY ENHANCEMENTS: Improve form usability and keyboard navigation
////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme manager
  new ThemeManager();
  
  // Get form elements for workout type switching
  const typeSelect = document.getElementById('type');
  const cadenceRow = document
    .querySelector('.form__input--cadence')
    .closest('.form__row');
  const elevationRow = document.querySelector('.form__row--hidden');

  // Toggle form fields based on workout type selection
  if (typeSelect) {
    typeSelect.addEventListener('change', e => {
      if (e.target.value === 'cycling') {
        cadenceRow?.classList.add('form__row--hidden');
        elevationRow?.classList.remove('form__row--hidden');
      } else {
        cadenceRow?.classList.remove('form__row--hidden');
        elevationRow?.classList.add('form__row--hidden');
      }
    });
  }

  // Add keyboard navigation support for workout items
  document.querySelectorAll('.workout').forEach(workout => {
    workout.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        workout.click();
      }
    });
  });
});

////////////////////////////////////////////////////////////////////////////
// GEOLOCATION AND MAP: Handle location services and map interactions
////////////////////////////////////////////////////////////////////////////

// Initialize map with user's location if geolocation is supported
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Extract coordinates from geolocation position
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const coords = [latitude, longitude];

      // Initialize Leaflet map centered on user location
      map = L.map('map').setView(coords, 14);

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Handle map clicks to show workout form
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      // Handle geolocation errors
      alert('Could not get your position ❌');
    },
  );
}

// Handle workout form submission and marker creation
const handleSubmit = function (e) {
  e.preventDefault();

  // Clear all input fields after submission
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';
  inputDistance.focus();

  // Create and add marker at clicked location
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        autoClose: false,
        maxWidth: '300',
        minWidth: '200',
        closeOnClick: false,
        className: 'running-popup',
        closeButton: true,
        autoPan: true,
        offset: [0, -30],
        keepInView: true,
        animation: true,
        interactive: true,
      }).setContent(`Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`),
    )
    .openPopup();
};

// Toggle between running/cycling input fields
const handleInputType = function (e) {
  e.preventDefault();
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
};


// Add event listeners for form interactions
inputType.addEventListener('change', handleInputType);
form.addEventListener('submit', handleSubmit);
