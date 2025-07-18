// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let maxValue = temps[0];
  let minValue = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (temps[i] > maxValue) {
      maxValue = currentTemp;
    }
    if (temps[i] < minValue) {
      minValue = currentTemp;
    }
  }
  console.log(maxValue, minValue);
  return maxValue - minValue;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (temp1, temp2) {
  const temps = temp1.concat(temp2);
  console.log(temps);
  let maxValue = temps[0];
  let minValue = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (temps[i] > maxValue) {
      maxValue = currentTemp;
    }
    if (temps[i] < minValue) {
      minValue = currentTemp;
    }
  }
  console.log(maxValue, minValue);
  return maxValue - minValue;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 6, 5]);
console.log(amplitudeNew);

///////////////////////////////////////
// Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIXME:
    // value: prompt('Degree Celsius:'),
    value: Number(prompt('Degree Celsius:')),
  };
  // B) FIND THE BUG
  console.log('measurement', measurement);
  console.table(measurement);
  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify the bug
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  // B) FIND THE BUG
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
