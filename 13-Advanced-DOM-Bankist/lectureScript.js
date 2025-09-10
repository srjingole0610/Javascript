'use strict';

// ==== EXPLORING THE DOM TREE ====
// Log out the complete root <html>, <head>, and <body> elements
console.log(document.documentElement); // Root HTML element node
console.log(document.head);            // Head section
console.log(document.body);            // Body section

// ==== SELECTING ELEMENTS ====
// Select first element with class 'header' (like a site navigation/header)
const header = document.querySelector('.header');
console.log(header);
// Select ALL elements with class 'section' (returns NodeList)
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// Select element by ID (returns the first match)
document.getElementById('section--1');
// Get all button elements (returns HTMLCollection – live updates as DOM changes)
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Get all elements with class 'btn' (returns HTMLCollection)
console.log(document.getElementsByClassName('btn'));

// ==== CREATING AND INSERTING ELEMENTS ====
// Create a <div> element for a cookie message
const message = document.createElement('div');           // Not yet in the DOM!
message.classList.add('cookie-message');                 // Add a class to style or select it
message.textContent = 'We use cookies for improved functionality and analytics.';
// Add inner HTML for message and a dismiss button
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Insert the message element as the first child of header (prepend - before other content)
// header.prepend(message);

// Insert as last child of header (append - after any other content), adds only once (cannot exist in two places)
// If you want to insert in multiple places, use cloneNode(true) to copy the node
header.append(message);
// header.append(message.cloneNode(true));

// Insert before or after the header (as siblings)
// header.before(message); // Inserts message just before header
// header.after(message); // Would add just after header

// ==== REMOVING ELEMENTS ====
// Add a click event handler to the "Got it!" button inside the cookie message
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // Instantly removes the element from the DOM tree
  });

// Alternative: Remove the message automatically after 5 seconds (real-time notification/banner behavior)
setTimeout(function () {
  message.remove();
}, 5000); // 5 seconds (5000 milliseconds)

///////////////////////////////////////////////////////////////////////
//Key Learning Highlights
///////////////////////////////////////////////////////////////////////

// Element Selection: By querySelector, querySelectorAll, getElementById, getElementsByTagName, and getElementsByClassName.
// Create/Add Element: document.createElement() makes a new DOM node. Use .append(), .prepend(), .before(), .after() to insert, and .cloneNode() for duplicates.
// Remove Element: Call .remove() on an element, or parent’s .removeChild() for backwards compatibility.
// Modify Content: Use .textContent, .innerHTML to set or read text/HTML inside elements.
// Event Handling: Add interactive behavior, e.g., close/shutdown notifications with one button click or automatically after set time.


// ===========================
// STYLE Manipulation
// ===========================

// Directly set inline CSS styles via .style
message.style.backgroundColor = '#37383d'; // Sets message background to dark gray
message.style.width = '120%';              // Overwrites CSS width with a new value

// Reading styles:
// .style only reads inline styles set via JS or 'style' attributes
console.log(message.style.height);          // Shows only inline style, undefined if set via CSS
console.log(message.style.backgroundColor); // Shows set inline style

// getComputedStyle returns the final computed style (from CSS, stylesheets, etc.)
console.log(getComputedStyle(message).color);  // Reads actual color as computed
console.log(getComputedStyle(message).height); // Reads actual height as computed

// Dynamically change style properties using computed value
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // Adds 30px to current height
console.log(getComputedStyle(message).height);

// Set a CSS variable (custom property) globally
document.documentElement.style.setProperty('--color-primary', 'orangered'); // Changes site theme color

// ===========================
// ATTRIBUTE Manipulation
// ===========================

// Select an image/logo element
const logo = document.querySelector('.nav__logo');

// Read standard built-in attributes
console.log(logo.alt);  // Gets the alt attribute (should be a text description)
console.log(logo.src);  // Gets the full URL of the image source

// Modify standard attribute
logo.alt = 'Beautiful minimalist logo';  // Changes alt text for accessibility
console.log(logo.alt);

// Custom attributes: properties only exist if defined in markup or setAttribute
console.log(logo.designer); // Undefined unless defined in markup
console.log(logo.getAttribute('designer')); // Use .getAttribute for any attribute

// Read all class names as a string
console.log(logo.className);

// Add a custom attribute (visible in DOM, usable for logic/styling)
logo.setAttribute('company', 'Bankist');

// Difference between src property (absolute URL) and getAttribute('src') (raw or relative value)
console.log(logo.getAttribute('src')); // Returns value as written in HTML
console.log(logo.src);                 // Returns resolved absolute URL

// Read and compare link attributes for demonstration
const link = document.querySelector('.nav__link--btn');
console.log(link.href);                // Absolute URL
console.log(link.getAttribute('href')); // Relative or raw HTML value

// ===========================
// DATA Attribute Manipulation
// ===========================

// Attributes like data-version-number show up in .dataset
console.log(logo.dataset.versionNumber); // CamelCase property for 'data-version-number'

// ===========================
// CLASS Manipulation
// ===========================

// Add CSS classes for multiple style changes
logo.classList.add('c', 'j');        // Adds classes 'c' and 'j'
// Remove one or more classes
logo.classList.remove('c', 'j');
// Toggle class: adds if missing, removes if present
logo.classList.toggle('c');
// Check if class exists
logo.classList.contains('c');

///////////////////////////////////////////////////////////////////////
// Real-Time Example: Dynamic Theming and Style Toggles
///////////////////////////////////////////////////////////////////////

// User can click a button to switch the logo color theme
// document.querySelector('.theme-toggle').addEventListener('click', function () {
//   logo.classList.toggle('dark-theme'); // CSS can give .dark-theme new colors
//   // Optionally update a data attribute for tracking
//   logo.dataset.themeOn = logo.classList.contains('dark-theme');
//   // Change alt text to reflect state
//   logo.alt = logo.classList.contains('dark-theme')
//     ? 'Minimalist dark theme logo'
//     : 'Beautiful minimalist logo';
// });

///////////////////////////////////////////////////////////////////////
// Key Learning Highlights
///////////////////////////////////////////////////////////////////////
// - Use .style for inline CSS changes; CSS variables for custom/theming
// - Use .setAttribute and .getAttribute for any attribute, standard or custom
// - Use .dataset for direct access to data-* attributes
// - Use .classList for class management: add, remove, toggle, contains, replace
// - Real-world use: Building dynamic interfaces, live themes, notifications, A/B tests, user feedback.




