'use strict';
///////////////////////////////////////
// Modal window

// ==== DOM ELEMENT SELECTION ====
// Store references to modal elements for repeated use
const modal = document.querySelector('.modal'); // Selects modal dialog box
const overlay = document.querySelector('.overlay'); // Selects overlay behind modal
const btnCloseModal = document.querySelector('.btn--close-modal'); // Selects close button on modal
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); // All buttons that open the moda
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// ==== MODAL OPEN/CLOSE HANDLERS ====
// Function to show modal and overlay
const openModal = function (event) {
  event.preventDefault(); // Prevents link/button default action (e.g., href navigation)
  modal.classList.remove('hidden'); // Remove 'hidden' class to show modal
  overlay.classList.remove('hidden'); // Remove 'hidden' class to show overlay
};

// Function to hide modal and overlay
const closeModal = function () {
  modal.classList.add('hidden'); // Add 'hidden' class to hide modal
  overlay.classList.add('hidden'); // Add 'hidden' class to hide overlay
};

// Register click event to each trigger button to open modal
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// Register click event on close button and overlay to close modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Keyboard accessibility: Press Escape to close modal if modal is open
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Scroll to section functionality

// //OLD Way
// buttonScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   window.scrollTo(
//     s1coords.left + window.pageXOffset,
//     s1coords.top + window.pageYOffset
//   );
// });

// ==== MODERN SCROLLING ====
// Attach click event to button, on click scroll smoothly to target section
buttonScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' }); // Smooth automatic scrolling
});

///////////////////////////////////////////////////////////////////////
// PAGE NAVIGATION
///////////////////////////////////////////////////////////////////////

/*
// OLD WAY: Attaching an event listener to each nav link individually.
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault(); // Prevents default link navigation behavior
    const id = this.getAttribute('href'); // Get target section ID from href
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // Scroll to section smoothly
  });
});
*/

/*
USING EVENT DELEGATION:
- Instead of attaching listeners to every navigation link, one listener is attached to their parent container ('.nav__links').
- This improves performance and ensures even dynamically added links are managed without needing new listeners.
*/

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault(); // Prevents default link navigation regardless of target
  // Matching strategy: Ensure event originated from a nav link (may have other children)
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // Get section element ID from href attribute
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
  }
});

///////////////////////////////////////////////////////////////////////
// Real-Time Example: Efficient Navigation Handling for SPA
///////////////////////////////////////////////////////////////////////
/*
In single-page apps, links or buttons are often added/removed based on user state. 
Event delegation ensures any new nav link (with class .nav__link) will automatically be handled by this one listener on .nav__links.
You can add or remove items with JavaScript, and scrolling/navigation will always work, making the code scalable and efficient.
*/

///////////////////////////////////////////////////////////////////////
// Key Learning Highlights
///////////////////////////////////////////////////////////////////////
// - Event delegation uses parent container event handler to manage all child elements via event bubbling[1][2][6][7].
// - The event object’s 'target' property identifies which child generated the event.
// - Only child elements matching our selector ('.nav__link') are processed for navigation.
// - This keeps code fast, DRY (Don’t Repeat Yourself), and simple for large or changing UI.
