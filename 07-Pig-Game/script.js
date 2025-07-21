'use strict';
const body = document.body;
const themeIcon = document.getElementById('theme-icon');
const toggleButton = document.querySelector('.toggle-btn');
// Theme Management
function toggleTheme() {
  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
}

toggleButton.addEventListener('click', toggleTheme);

// Load saved theme
document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const themeIcon = document.getElementById('theme-icon');

  document.body.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
});
