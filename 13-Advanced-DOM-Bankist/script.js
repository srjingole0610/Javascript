'use strict';
///////////////////////////////////////
// Modal window

// ==== DOM ELEMENT SELECTION ====
// Store references to modal elements for repeated use
const modal = document.querySelector('.modal');      // Selects modal dialog box
const overlay = document.querySelector('.overlay');  // Selects overlay behind modal
const btnCloseModal = document.querySelector('.btn--close-modal'); // Selects close button on modal
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); // All buttons that open the modal

// ==== MODAL OPEN/CLOSE HANDLERS ====
// Function to show modal and overlay
const openModal = function (event) {
  event.preventDefault(); // Prevents link/button default action (e.g., href navigation)
  modal.classList.remove('hidden');    // Remove 'hidden' class to show modal
  overlay.classList.remove('hidden');  // Remove 'hidden' class to show overlay
};

// Function to hide modal and overlay
const closeModal = function () {
  modal.classList.add('hidden');      // Add 'hidden' class to hide modal
  overlay.classList.add('hidden');    // Add 'hidden' class to hide overlay
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

// ==== DOM ELEMENT SELECTION ====
// Store references for button and target section
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


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


