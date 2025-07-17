'use strict';

/* --- Toggle solution visibility --- */
const btn = document.getElementById('show-solution-btn');
const panel = document.getElementById('solution-panel');
const code = document.getElementById('solution-code');

const fullSolution = `function analyzeWeeklyHours(hoursArray) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Validate input
  if (!Array.isArray(hoursArray) || hoursArray.length !== 7) {
    return 'Error: Please provide an array of exactly 7 daily hour values (Monday to Sunday).';
  }

  const totalHours = hoursArray.reduce((sum, hrs) => sum + hrs, 0);
  const daysWorked = hoursArray.filter(hrs => hrs > 0).length;
  const averageHours = daysWorked > 0 ? (totalHours / daysWorked) : 0;

  const maxHours = Math.max(...hoursArray);
  const maxDayIndex = hoursArray.indexOf(maxHours);
  const maxDay = days[maxDayIndex];

  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours: +averageHours.toFixed(2),
    maxDay,
    daysWorked,
    isFullTime
  };
}

// TEST DATA
const weekHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const result = analyzeWeeklyHours(weekHours);
console.log(result);`;

// Inject solution code into code block
code.textContent = fullSolution;

// Toggle visibility of the panel
btn.addEventListener('click', () => {
  panel.classList.toggle('hidden');
  btn.textContent = panel.classList.contains('hidden')
    ? 'Click For Solution'
    : 'Hide Solution';
});

/* --- Actual working logic --- */

function analyzeWeeklyHours(hoursArray) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Validate input
  if (!Array.isArray(hoursArray) || hoursArray.length !== 7) {
    return 'Error: Please provide an array of exactly 7 daily hour values (Monday to Sunday).';
  }

  const totalHours = hoursArray.reduce((sum, hrs) => sum + hrs, 0);
  const daysWorked = hoursArray.filter(hrs => hrs > 0).length;
  const averageHours = daysWorked > 0 ? totalHours / daysWorked : 0;

  const maxHours = Math.max(...hoursArray);
  const maxDayIndex = hoursArray.indexOf(maxHours);
  const maxDay = days[maxDayIndex];

  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours: +averageHours.toFixed(2),
    maxDay,
    daysWorked,
    isFullTime,
  };
}

// 1. Typical full week
const test1 = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log('Test 1:', analyzeWeeklyHours(test1));
// → should return valid object, not full-time (34.5 hrs)

// 2. Full-time week (>= 35 hours)
const test2 = [8, 8, 8, 8, 4, 0, 0];
console.log('Test 2:', analyzeWeeklyHours(test2));
// → total: 36, isFullTime: true

// 3. Empty week (no work)
const test3 = [0, 0, 0, 0, 0, 0, 0];
console.log('Test 3:', analyzeWeeklyHours(test3));
// → total: 0, daysWorked: 0, averageHours: 0, isFullTime: false

// 4. Max on a weekend
const test4 = [2, 3, 4, 2, 1, 5, 6];
console.log('Test 4:', analyzeWeeklyHours(test4));
// → maxDay: Sunday

// 5. Invalid input: Less than 7 days
const test5 = [5, 4, 6, 7, 3, 4];
console.log('Test 5:', analyzeWeeklyHours(test5));
// → Error message

// 6. Invalid input: More than 7 days
const test6 = [5, 4, 6, 7, 3, 4, 2, 1];
console.log('Test 6:', analyzeWeeklyHours(test6));
// → Error message

// 7. Invalid input: Not an array
const test7 = '7.5,8,6.5,0,8.5,4,0';
console.log('Test 7:', analyzeWeeklyHours(test7));
// → Error message
