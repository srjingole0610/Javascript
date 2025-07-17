'use strict';

/* --- Toggle solution visibility --- */
const btn = document.getElementById('show-solution-btn');
const panel = document.getElementById('solution-panel');
const code = document.getElementById('solution-code');

const fullSolution = `const printForecast = function (arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    output += \`... \${arr[i]}ºC in \${i + 1} day\${i === 0 ? '' : 's'} \`;
  }
  output += '...';
  console.log(output);
  return output;
};

// Example calls
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);`;

// Inject code once
code.textContent = fullSolution;

btn.addEventListener('click', () => {
  panel.classList.toggle('hidden');
  btn.textContent = panel.classList.contains('hidden')
    ? 'Click For Solution'
    : 'Hide Solution';
});