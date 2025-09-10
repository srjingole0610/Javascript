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
header.before(message); // Inserts message just before header
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
// Real-Time Example: Notification Banner
///////////////////////////////////////////////////////////////////////
/*
This code creates, displays, and removes a notification banner (like for cookies or sales) at the top
of the page. User can close it immediately, or it will disappear automatically after a few seconds.
This is a common pattern for onboarding, informational updates, or alerts on websites.
*/
const notification = document.querySelector('.notification');
const notificationClose = document.querySelector('.btn--close-notification');
notificationClose.addEventListener('click', () => {
  notification.classList.add('hidden');
});
setTimeout(() => {
  notification.classList.add('hidden');
}, 5000);

///////////////////////////////////////////////////////////////////////
//Key Learning Highlights
///////////////////////////////////////////////////////////////////////

// Element Selection: By querySelector, querySelectorAll, getElementById, getElementsByTagName, and getElementsByClassName.
// Create/Add Element: document.createElement() makes a new DOM node. Use .append(), .prepend(), .before(), .after() to insert, and .cloneNode() for duplicates.
// Remove Element: Call .remove() on an element, or parent’s .removeChild() for backwards compatibility.
// Modify Content: Use .textContent, .innerHTML to set or read text/HTML inside elements.
// Event Handling: Add interactive behavior, e.g., close/shutdown notifications with one button click or automatically after set time.

