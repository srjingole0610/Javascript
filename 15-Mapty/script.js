'use strict';

// Array of month names used for formatting dates in workout displays and calendar views
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

// DOM element selections for workout form inputs and containers to handle user interactions
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([51.509, -0.08], 5, 23, 178);
const cycling1 = new Cycling([51.509, -0.08], 27, 95, 523);
console.log(run1, cycling1);

// Main application class that handles map functionality and workout tracking
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  #markers = [];

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    this._getLocalStorage();
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);
    if (!workoutEl) return;

    const workout = this.#workouts.find(
      workout => workout.id === workoutEl.dataset.id,
    );
    console.log(workout);

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // The click method is not part of the original project requirements for this function,
    // but if you need it, it will now work because the workout object is a class instance.
    // workout.click(); 
  }

  // Get user's current geolocation position using browser API
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          // Handle geolocation errors by showing user-friendly alert
          alert('Could not get your position ❌');
        },
      );
    }
  }

  // Initialize and configure the map with user's current location
  _loadMap(position) {
    // Extract coordinates from geolocation position for map centering
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = [latitude, longitude];

    // Initialize Leaflet map centered on user location with appropriate zoom level
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    // Add OpenStreetMap tile layer with attribution and max zoom configuration
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Set up event listener for map clicks to display workout form
    this.#map.on('click', this._showForm.bind(this));

    // Render markers for workouts loaded from localStorage
    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  // Display the workout form when user clicks on map
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  // Toggle visibility of elevation/cadence input fields based on workout type
  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // Handle new workout submission and marker creation
  _newWorkout(e) {
    e.preventDefault();

    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;

    // If workout is running, create running object
    // Helper function to validate numeric inputs
    const validateInputs = (...inputs) => {
      // Check for empty inputs first
      // Check for empty inputs first
      console.log('Validating inputs:', inputs); // Debug log for input values
      if (
        inputs.some(
          input =>
            input === '' ||
            input === undefined ||
            input === null ||
            isNaN(input) ||
            input === 0,
        )
      ) {
        console.log('Found empty input'); // Debug log for empty input check
        return { isValid: false, message: 'Please fill in all fields!' };
      } // Then check for positive numbers
      if (!inputs.every(input => Number.isFinite(input) && input > 0)) {
        console.log('Found invalid number'); // Debug log for number validation
        return { isValid: false, message: 'Inputs must be positive numbers!' };
      }
      console.log('All inputs valid'); // Debug log for valid case
      return { isValid: true, message: '' };
    };

    // If workout is running, create cycling object

    if (type === 'running') {
      const cadence = +inputCadence.value;
      console.log('Running workout values:', { distance, duration, cadence }); // Debug log for running values
      const validation = validateInputs(distance, duration, cadence);
      if (!validation.isValid) {
        console.log('Validation failed:', validation.message); // Debug log for validation failure
        return alert(validation.message);
      }
      workout = new Running(
        [this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng],
        distance,
        duration,
        cadence,
      );
    }

    // If workout is cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      console.log('Cycling workout values:', { distance, duration, elevation }); // Debug log for cycling values
      const validation = validateInputs(distance, duration, elevation);
      if (!validation.isValid) {
        console.log('Validation failed:', validation.message); // Debug log for validation failure
        return alert(validation.message);
      }
      workout = new Cycling(
        [this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng],
        distance,
        duration,
        elevation,
      );
    }

    // Add new workout object to workout array
    this.#workouts.push(workout);
    console.log(this.#workouts);
    console.log(workout);

    // Display workout on map as a marker
    this._renderWorkoutMarker(workout, type);
    //Render workout on list
    this._renderWorkout(workout);

    // Hide form and clear input fields
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          autoClose: false,
          maxWidth: '300',
          minWidth: '200',
          closeOnClick: false,
          className: `${workout.type}-popup`,
          closeButton: true,
          autoPan: true,
          offset: [0, -30],
          keepInView: true,
          animation: true,
          interactive: true,
        }).setContent(
          `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.type} on ${
            months[workout.date.getMonth()]
          } ${workout.date.getDate()}`,
        ),
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;

    if (workout.type === 'running') {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;
    }
    if (workout.type === 'cycling') {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;
    }
    form.insertAdjacentHTML('afterend', html);
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
    _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
 
    // Re-instantiate objects to restore prototype chain
    this.#workouts = data.map(work => {
      let workout;
      if (work.type === 'running') {
        workout = new Running(work.coords, work.distance, work.duration, work.cadence);
      }
      if (work.type === 'cycling') {
        workout = new Cycling(work.coords, work.distance, work.duration, work.elevationGain);
      }
      // Restore original id and date
      workout.id = work.id;
      workout.date = new Date(work.date);
      return workout;
    });
 
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }

}

////////////////////////////////////////////////////////////////////////////
// THEME MANAGER: Handles dark/light theme switching and persistence across sessions
////////////////////////////////////////////////////////////////////////////

// Theme manager class responsible for handling theme preferences and UI updates
class ThemeManager {
  constructor() {
    // Initialize theme toggle UI elements and set up references
    this.themeToggle = document.getElementById('themeToggle');
    this.themeIcon = document.getElementById('themeIcon');
    this.themeText = document.getElementById('themeText');

    // Get stored theme preference or fall back to system preference
    this.currentTheme = this.getStoredTheme() || this.getSystemTheme();

    this.init(); // Initialize theme manager and set up event listeners
  }

  // Initialize theme manager with saved preferences and event listeners
  init() {
    // Apply the initial theme and update UI elements
    this.applyTheme(this.currentTheme);
    this.updateToggleUI();

    // Set up click handler for theme toggle button
    this.themeToggle.addEventListener('click', () => this.toggleTheme());

    // Monitor system theme preference changes for automatic updates
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        if (!this.getStoredTheme()) {
          // Update theme only if user hasn't set explicit preference
          this.currentTheme = e.matches ? 'dark' : 'light';
          this.applyTheme(this.currentTheme);
          this.updateToggleUI();
        }
      });

    // Add keyboard support for accessibility
    this.themeToggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  // Get user's theme preference from local storage
  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  // Save user's theme preference to local storage for persistence
  setStoredTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  // Detect system-level theme preference for initial setup
  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  // Apply the selected theme by updating document attributes
  applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  // Update theme toggle button appearance and accessibility attributes
  updateToggleUI() {
    const isDark = this.currentTheme === 'dark';
    this.themeIcon.textContent = isDark ? '☀️' : '🌙';
    this.themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';

    // Update accessibility attributes for screen readers
    this.themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light mode' : 'Switch to dark mode',
    );
    this.themeToggle.setAttribute('aria-pressed', isDark.toString());
  }

  // Toggle between light and dark themes with smooth animation
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    this.setStoredTheme(this.currentTheme);
    this.updateToggleUI();

    // Add subtle scale animation for visual feedback
    this.themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.themeToggle.style.transform = '';
    }, 150);
  }
}

// Initialize application components when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create instances of theme manager and main app
  new ThemeManager();
  new App();
});
