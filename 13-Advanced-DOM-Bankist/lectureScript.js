'use strict';

// ==== EXPLORING THE DOM TREE ====
// Log out the complete root <html>, <head>, and <body> elements
console.log(document.documentElement); // Root HTML element node
console.log(document.head); // Head section
console.log(document.body); // Body section

// ==== SELECTING ELEMENTS ====
// Select first element with class 'header' (like a site navigation/header)
const header1 = document.querySelector('.header');
console.log(header1);
// Select ALL elements with class 'section' (returns NodeList)
const allSections1 = document.querySelectorAll('.section');
console.log(allSections1);

// Select element by ID (returns the first match)
document.getElementById('section--1');
// Get all button elements (returns HTMLCollection – live updates as DOM changes)
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Get all elements with class 'btn' (returns HTMLCollection)
console.log(document.getElementsByClassName('btn'));

// ==== CREATING AND INSERTING ELEMENTS ====
// Create a <div> element for a cookie message
const message = document.createElement('div'); // Not yet in the DOM!
message.classList.add('cookie-message'); // Add a class to style or select it
message.textContent =
  'We use cookies for improved functionality and analytics.';
// Add inner HTML for message and a dismiss button
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Insert the message element as the first child of header (prepend - before other content)
// header.prepend(message);

// Insert as last child of header (append - after any other content), adds only once (cannot exist in two places)
// If you want to insert in multiple places, use cloneNode(true) to copy the node
header1.append(message);
// header.append(message.cloneNode(true));

// Insert before or after the header (as siblings)
// header1.before(message); // Inserts message just before header
// header1.after(message); // Would add just after header

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
message.style.width = '120%'; // Overwrites CSS width with a new value

// Reading styles:
// .style only reads inline styles set via JS or 'style' attributes
console.log(message.style.height); // Shows only inline style, undefined if set via CSS
console.log(message.style.backgroundColor); // Shows set inline style

// getComputedStyle returns the final computed style (from CSS, stylesheets, etc.)
console.log(getComputedStyle(message).color); // Reads actual color as computed
console.log(getComputedStyle(message).height); // Reads actual height as computed

// Dynamically change style properties using computed value
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // Adds 30px to current height
console.log(getComputedStyle(message).height);

// Set a CSS variable (custom property) globally
// document.documentElement.style.setProperty('--color-primary', 'orangered'); // Changes site theme color

// ===========================
// ATTRIBUTE Manipulation
// ===========================

// Select an image/logo element
const logo = document.querySelector('.nav__logo');

// Read standard built-in attributes
console.log(logo.alt); // Gets the alt attribute (should be a text description)
console.log(logo.src); // Gets the full URL of the image source

// Modify standard attribute
logo.alt = 'Beautiful minimalist logo'; // Changes alt text for accessibility
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
console.log(logo.src); // Returns resolved absolute URL

// Read and compare link attributes for demonstration
const link = document.querySelector('.nav__link--btn');
console.log(link.href); // Absolute URL
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
logo.classList.add('c', 'j'); // Adds classes 'c' and 'j'
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

// ===========================
// Types of Event and Event Handlers
// ===========================

// Select the <h1> element to apply event listeners
const h1 = document.querySelector('h1');

// --- Method 1: Using addEventListener ---
// Allows multiple event listeners for the same event and element; supports removal.
// Triggers every time mouse enters the heading.
// Best practice for modern JavaScript development.
// Function receives a MouseEvent object as its argument.
h1.addEventListener('mouseenter', function (e) {
  alert(
    'addEventListener: Great! You are reading the heading for first time :D',
  );
});

// --- Method 2: Using the on-event property ---
// Direct property assignment replaces any previous handler for this event type.
// Here, it will show alert only when mouse enters the heading ("mouseenter" event).
// If this property is assigned multiple times, only the last one runs.
h1.onmouseenter = function (e) {
  alert('onmouseenter: Great! You are reading the heading for second Time :D');
};

// --- Named Function with Removal ---
// Demonstrates removing an event listener after first use (single-use callback mechanic).
// Useful for onboarding, one-time tips, etc.
const alertH1 = function (e) {
  alert(
    'addEventListener: Great! You are reading the heading for third Time  :D',
  );
  h1.removeEventListener('mouseenter', alertH1); // After this runs once, it's removed!
};

// Attach the named listener (removable, efficient)
h1.addEventListener('mouseenter', alertH1);

///////////////////////////////////////////////////////////////////////
// Real-Time Example: Tooltips and Context Guidance
///////////////////////////////////////////////////////////////////////
// A common real-world use is showing a tooltip, instruction, or tip to guide user:
// - Use `addEventListener` with a named function that removes itself for one-time assistance.
// - Use multiple listeners to provide both persistent and context-driven help.
// - Use on-event property only for simple pages or legacy compatibility needs.
///////////////////////////////////////////////////////////////////////

/*
KEY LEARNING HIGHLIGHTS:

- addEventListener allows multiple simultaneous handlers, dynamic add/remove, and is the recommended approach for modern apps[6][8][9].
- onmouseenter (or other "on"-event properties) assigns exactly one handler per event type, replacing previous assignments.
- Removing listeners enables single-use or context-specific interactivity. Named functions are required to remove listeners (anonymous functions cannot be removed!).
- Event objects (like MouseEvent) contain useful info about the interaction/context.
- Real situations: onboarding, tooltips, instant feedback, forms, step-by-step guides.
*/

///////////////////////////////////////////////////////////////////////
// EVENT PROPAGATION : BUBBLING AND CAPTURING
///////////////////////////////////////////////////////////////////////
/*
Event propagation determines how events travel through the DOM tree:
- Bubbling: event starts at the innermost (clicked) element and bubbles up to ancestors.
- Capturing: event travels from the outermost ancestor down to the target element.
- Both phases run before the event gets handled at the target (event.target).
- Most event listeners use BUBBLING by default[8].
- You can specify the CAPTURING phase using addEventListener's third parameter (true)[2].
- Propagation can be stopped with e.stopPropagation(), useful for controlling event flow.
*/

// ===== Utility function to generate a random RGB color string =====
const randomColor = function () {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256,
  )},${Math.floor(Math.random() * 256)})`;
};
console.log(randomColor());

// ===== BUBBLING: Event listeners default to bubbling phase =====
// Nav Link: Most specific/inner element
document.querySelector('.nav__link').addEventListener('click', function (e) {
  // This listener is only attached to the first '.nav__link' element.
  this.style.backgroundColor = randomColor(); // Change background to random color
  console.log('LINK', e.target, e.currentTarget); // e.target: clicked element; e.currentTarget: handler's element
  // Prevent further propagation upward (stops bubbling here)
  e.stopPropagation();
});

// Nav Links Container: Parent of nav__link
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  // No stopPropagation() here, so event continues bubbling up after running
});

// ===== CAPTURING: Add listener on parent with capturing enabled (true as third param) =====
// Nav: Outermost parent
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true, // Enables capturing phase for this handler
);

///////////////////////////////////////////////////////////////////////
// Real-Time Example: Layered Navigation Coloring
///////////////////////////////////////////////////////////////////////
/*
Scenario: Clicking on a navigation link can trigger multiple effects on parent/ancestor containers.
- Demonstrate that event listeners fire on parent containers as well in a specific order.
- Bubbling lets child click events trigger parent handlers unless stopped.
- Capturing (with third param true) gives priority to ancestor handler before target's.
- Use stopPropagation to ensure only the innermost handler runs (e.g. click on popup, no background click).
*/

///////////////////////////////////////////////////////////////////////
// Key Learning Highlights
///////////////////////////////////////////////////////////////////////
// - Bubbling (default): goes from event target up to root; parent handlers run after child handlers[2][8][4].
// - Capturing: use third param true; handlers run from root down to target before the target's own handler[2].
// - e.stopPropagation prevents parent listeners from executing, useful for specific UI control[6][5].
// - Use cases: modal dialogs, navigation bars, complex forms with parent-child event logic.

///////////////////////////////////////////////////////////////////////
// DOM TRAVERSING BASICS AND EXAMPLES
///////////////////////////////////////////////////////////////////////
const h1New = document.querySelector('h1');

// ==== GOING DOWN THE DOM: CHILDREN ====

// Selects all descendants of <h1> with class 'highlight' (nodeList, NOT just direct children)
console.log(h1New.querySelectorAll('.highlight')); // Descendant highlights

// NodeList of all child nodes INCLUDING elements, text, and comments
console.log(h1New.childNodes);

// HTMLCollection of ONLY element children (excludes text nodes)
console.log(h1New.children);

// Style the first and last element children of h1
h1New.firstElementChild.style.color = 'white'; // First child
h1New.lastElementChild.style.color = 'orangered'; // Last child

// ==== GOING UP THE DOM: PARENTS ====

// parentNode and parentElement often return the same value (the parent node, or parent element)
console.log(h1New.parentNode); // May return non-element nodes (rare for h1)
console.log(h1New.parentElement); // Always returns parent element (null if root)

// closest(selector) finds nearest ancestor (parent or self) that matches selector
// Useful for progressive enhancement and looking for context
h1New.closest('.header').style.background = 'var(--gradient-secondary)'; // Sets ancestor header bg
h1New.closest('h1').style.background = 'var(--gradient-primary)'; // Sets h1 bg if matches selector

// ==== GOING SIDEWAYS: SIBLINGS ====

// Returns element siblings before/after (null if none)
console.log(h1New.previousElementSibling);
console.log(h1New.nextElementSibling);

// Returns ANY sibling node (including text or comment nodes)
console.log(h1New.previousSibling);
console.log(h1New.nextSibling);

// HTMLCollection of all element children of h1's parent (includes h1 itself and its siblings)
console.log(h1New.parentElement.children);

// Loop over all h1's siblings and scale them down (skip h1 itself!)
[...h1New.parentElement.children].forEach(function (el) {
  if (el !== h1New) el.style.transform = 'scale(0.7)';
});

///////////////////////////////////////////////////////////////////////
// Real-Time Example: Fading Siblings and Highlighting Section Titles
///////////////////////////////////////////////////////////////////////
/*
- When a user focuses on an element (e.g., section title), you can visually de-emphasize sibling elements to draw attention.
- Traversing up: Use .closest() to find the section or header that contains it and apply special CSS.
- Traversing sideways: Dim or shrink sibling sections/headings for focus/animation effects.
- Traversing down: Find all highlights (e.g., inline <mark> or <span class="highlight">) and animate or style them to guide the user’s attention.
- DOM traversal allows for dynamic, intuitive, and interactive UIs.
*/

///////////////////////////////////////////////////////////////////////
// Key Learning Highlights
///////////////////////////////////////////////////////////////////////
// - childNodes vs. children: childNodes includes all node types; children only element nodes
// - firstElementChild/lastElementChild: strictly go to first/last element, skipping whitespace/comments
// - parentNode/parentElement: navigate upwards, .closest() finds ancestors by selector match
// - previousElementSibling/nextElementSibling: traverse adjacent elements, not just nodes.
// - Techniques combine for tree traversal, animation, interactivity, and context-aware UI.

///////////////////////////////////////////////////////////////////////
// LIFECYCLE DOM EVENTS
///////////////////////////////////////////////////////////////////////

// The DOMContentLoaded event fires when the initial HTML document has been
// completely loaded and parsed. This means the DOM tree is fully built,
// but resources like images, CSS, and external scripts may still be loading.
// Use this event to safely manipulate or query DOM elements once they're available.
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

// The load event fires later, when the entire page including all dependent
// resources such as images, stylesheets, and iframes have finished loading.
// Use this event for code that depends on resources being fully available,
// such as image dimensions or ready third-party libraries.
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// The beforeunload event fires when the page is about to be unloaded,
// for example, when the user navigates away or closes the tab/window.
// You can use this to warn users about unsaved changes or confirm exiting.
// Calling e.preventDefault() and setting e.returnValue triggers this confirmation.
window.addEventListener('beforeunload', function (e) {
  e.preventDefault(); // Required for some browsers for confirmation prompt
  console.log(e); // Event object info
  e.returnValue = ''; // Legacy way to trigger the confirmation dialog
});

///////////////////////////////////////////////////////////////////////
// Real-Time Example Scenario:
// - Use DOMContentLoaded to initialize UI components or attach event listeners
//   as soon as the document is parsed for faster responsiveness.
// - Use load event to start functionality dependent on images or other media.
// - Use beforeunload to prevent data loss by asking the user if they want to leave
//   a form with unsaved inputs.
///////////////////////////////////////////////////////////////////////
