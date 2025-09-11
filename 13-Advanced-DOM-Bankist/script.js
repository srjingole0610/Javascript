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
  // Matching strategy: Ensure event originated from a nav link
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    // Only scroll for valid section links, ignore others (e.g., modal button)
    if (id && id.startsWith('#') && id.length > 1) {
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
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

///////////////////////////////////////////////////////////////////////
// BUILDING A TABBED COMPONENT
///////////////////////////////////////////////////////////////////////

// --- 1. Select tab buttons, content sections, and the common parent container for delegation ---
const tabs = document.querySelectorAll('.operations__tab'); // all tab buttons
const tabsContainer = document.querySelector('.operations__tab-container'); // parent for all tabs
const tabsContent = document.querySelectorAll('.operations__content'); // content panels for tabs

// --- 2. Use Event Delegation for Efficient Handling ---
// Only ONE event listener is added to the parent, instead of one for each tab.
// This is scalable and works for dynamic tabs!
tabsContainer.addEventListener('click', function (e) {
  // Find the actual tab button clicked, even if an inner child was clicked (e.g., icon inside button)
  const clicked = e.target.closest('.operations__tab');
  // Guard clause: If the click wasn't on a tab, exit (prevents JS errors on background click)
  if (!clicked) return;

  // --- 3. Remove all active states (CSS classes) ---
  tabs.forEach(t => t.classList.remove('operations__tab--active')); // Deactivate all tabs
  tabsContent.forEach(c => c.classList.remove('operations__content--active')); // Hide all content panels

  // --- 4. Add active state to clicked tab and correct content panel ---
  // Activate tab
  clicked.classList.add('operations__tab--active');
  // Activate corresponding content: dynamically construct selector using the clicked tab's data attribute
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/*
KEY LEARNING HIGHLIGHTS:
- Use parent element to "delegate" event listening instead of many listeners on each tab[9].
- .closest('.selector') allows robust click handling even if tabs contain nested elements.
- Guard clauses prevent errors when clicks occur outside intended targets.
- Dynamically add/remove CSS classes to visually show which tab and content are active.
- Connect tabs and content using "data-tab" attributes for easy pairing.
- Real apps use this pattern for pricing, FAQ, dashboards, onboarding, and tabbed user interfaces.
*/

///////////////////////////////////////////////////////////////////////
// MENU FADE ANIMATION
///////////////////////////////////////////////////////////////////////

// Select the main navigation bar/container
const navbar = document.querySelector('.nav');

// Handler function for fading menu items on hover and returning to normal
// Uses 'this' to receive the opacity value (by binding it when adding the event listener)
const handleHover = function (e) {
  // Only act when hovering over actual nav links (not NAV container or other child elements)
  if (e.target.classList.contains('nav__link')) {
    const link = e.target; // The hovered link

    // Select all links within the current nav (siblings)
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // Also select the logo (img inside .nav)
    const logo = link.closest('.nav').querySelector('img');

    // For each sibling, if it isn’t the hovered link, change its opacity
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this; // 'this' is bound to opacity value
    });
    // Fade the logo too
    logo.style.opacity = this;
  }
};

// Pass a custom "opacity" value into the handler by binding it to 'this':
// On mouse over, fade links and logo to 0.5
navbar.addEventListener('mouseover', handleHover.bind(0.5));
// On mouse out, restore opacity to 1
navbar.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////////////////////////////////////
// Key Learning Points
///////////////////////////////////////////////////////////////////////
// - Use event delegation: Attach a single event listener on the parent, not each link[4].
// - Handler uses 'this' via .bind() trick to accept custom arguments (opacity value).
// - For fade effect, modify .style.opacity of all siblings and logo on hover; reset after.
// - Real-world use: Focus user feedback in navigation, onboarding, tooltips, showcasing accessible transitions.
// - Enhances user experience by making navigation feedback clearer and more interactive.

///////////////////////////////////////////////////////////////////////
// Real-Time Example: Interactive Navbar
///////////////////////////////////////////////////////////////////////
/*
When the user hovers over a navigation link, the rest of the links and the logo gently fade out (opacity lowered),
making the hovered link stand out. When the user moves the mouse away, all elements return to full opacity.

Advanced: Developers often use this effect for highlight/focus states and can pass other parameters this way for color,
animation speed, disabling/enabling, etc.
*/

///////////////////////////////////////////////////////////////////////
// STICKY NAVIGATION
///////////////////////////////////////////////////////////////////////

/*
// ======= OLD WAY: Using scroll event and coordinates =======
// 1. Get the bounding rectangle for the target section (e.g. first content section)
const initialCoords = section1.getBoundingClientRect();

// 2. On every scroll event, check scroll position
window.addEventListener('scroll', function (e) {
  // When you've scrolled past the section, add the sticky class to nav
  if (window.scrollY > initialCoords.top) {
    document.querySelector('.nav').classList.add('sticky');
  } else {
    document.querySelector('.nav').classList.remove('sticky');
  }
});
*/

/*
====== MODERN WAY: Using Intersection Observer API ======
- More efficient than scroll events: runs only when observed element crosses a threshold in the viewport[3][5].
- Avoids performance issues of high-frequency scroll event polling.
*/

const header = document.querySelector('.header'); // The section to watch for intersection
const navHeight = navbar.getBoundingClientRect().height; // Dynamic calculation of nav's height for correct offset

// Callback: receives intersection info (array of entries, here always length 1)
const stickNav = function (entries) {
  const [entry] = entries; // Destructure the only observed entry
  // If header is NOT intersecting (i.e., it's out of view), add sticky class
  if (!entry.isIntersecting) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

// Create Intersection Observer: will monitor header intersection with viewport
const headerObserver = new IntersectionObserver(stickNav, {
  root: null, // null = observe intersection with the viewport itself
  threshold: 0, // callback fires as soon as ANY part crosses the threshold (header leaves view)
  rootMargin: `-${navHeight}px`, // Adjusts trigger point to account for nav height, so sticky activates precisely
});

// Start observing the header
headerObserver.observe(header);

///////////////////////////////////////////////////////////////////////
// Key Learning Points
///////////////////////////////////////////////////////////////////////
// - Intersection Observer triggers only when observed element crosses the threshold (no polling)[5][3].
// - 'root': defines what element is considered the visible area (viewport = null).
// - 'threshold': what % of target (header) must be visible before callback; 0 = as soon as any part leaves view[3].
// - 'rootMargin': offsets the trigger point (here: nav's height, so sticky nav appears before header is fully out).
// - Use for "sticky", reveal-on-scroll, infinite scroll, lazy loading, and efficient scroll effects[6][8].

///////////////////////////////////////////////////////////////////////
// REVEAL SECTIONS ON SCROLL USING INTERSECTION OBSERVER API
///////////////////////////////////////////////////////////////////////

// Select all sections to observe (assumed hidden initially by CSS)
const allSections = document.querySelectorAll('.section');

// Callback function for Intersection Observer
// Receives entries array containing all observed elements whose intersection change on viewport
const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    // Only act when the section is actually intersecting the viewport
    if (!entry.isIntersecting) return;

    // Remove 'section--hidden' class to reveal content with animation or styles
    entry.target.classList.remove('section--hidden');

    // Stop observing this section after reveal to improve performance (one-time effect)
    observer.unobserve(entry.target);
  });
};

// Create Intersection Observer instance
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, // null root means observe intersections with viewport
  threshold: 0.15, // Trigger callback when 15% of section is visible in viewport
});

// Observe each section and initially hide it by adding 'section--hidden' class
allSections.forEach(function (section) {
  sectionObserver.observe(section); // Start observing visibility changes
  section.classList.add('section--hidden'); // Hide section (CSS should include transition for animation)
});

///////////////////////////////////////////////////////////////////////
// Key Learning Points
///////////////////////////////////////////////////////////////////////
// - IntersectionObserver watches specified elements for visibility changes relative to viewport[1][4].
// - 'threshold' controls how much visibility before triggering callback.
// - Removing 'hidden' class can trigger CSS animations for smooth reveal effects.
// - observer.unobserve(target) stops further monitoring for performance after reveal.
// - Great for lazy-loading content, animations on scroll, and improving perceived performance in web UX[5].

///////////////////////////////////////////////////////////////////////
// LAZY LOADING IMAGES USING INTERSECTION OBSERVER API
///////////////////////////////////////////////////////////////////////

// Select all <img> elements that have a 'data-src' attribute
// data-src holds the actual high-res image URL, while src points to a low-res placeholder or blank
const imgTargets = document.querySelectorAll('img[data-src]');

// Callback function executed when observed images intersect the viewport
const loadImg = function (entries, observer) {
  entries.forEach(entry => {
    // If the image is NOT intersecting the viewport, do nothing and return (lazy loading deferral)
    if (!entry.isIntersecting) return;
    // Replace the placeholder src with the actual data-src to start loading the real image
    entry.target.src = entry.target.dataset.src;
    // Listen for the real image load event to remove the blur/placeholder effect
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img'); // Remove CSS class that applies blur filter or placeholder styling
    });
    // Stop observing this image after it has been loaded once for better performance
    observer.unobserve(entry.target);
  });
};
// Create an Intersection Observer instance to monitor when images enter the viewport
const imgObserver = new IntersectionObserver(loadImg, {
  root: null, // root=null means viewport is root
  threshold: 0, // 0 means trigger as soon as even one pixel enters viewport
  rootMargin: '200px', // Preload images 200px before they enter the viewport (optional for smoother loading)
});

// Observe each target image for intersection (entering viewport)
imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////////////////////////////////////
// Key Learning Points
///////////////////////////////////////////////////////////////////////
// - Use data-src for actual image URL, and low-res or blank src as placeholder[4][5].
// - IntersectionObserver observes when images enter viewport without costly scroll event listeners.
// - Load actual image only when needed, conserving bandwidth and improving load times.
// - Remove blur or loading styles after image is fully loaded for good UX.
// - Unobserve image after it has loaded to avoid repeated triggers and enhance performance.
// - rootMargin can be adjusted to preload images slightly before they enter viewport.
// - Suitable for infinitely scrolling pages, galleries, and media-heavy websites.

///////////////////////////////////////////////////////////////////////
// Real-Time Scenario
///////////////////////////////////////////////////////////////////////
// E-commerce sites or blogs use lazy loading for product photos.
// Users scroll, and the images load just before they appear, ensuring fast page start and bandwidth savings.
