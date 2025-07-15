"use strict";

//Solution
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

/**
 * This function takes the average scores of two teams (Dolphins and Koalas)
 * and determines which team wins. If the average score of one team is at
 * least double the average score of the other team, then that team wins.
 * Otherwise, no team wins.
 * @param {number} avgDolphins - average score of Dolphins
 * @param {number} avgKoalas - average score of Koalas
 * @returns {string} - the winner message
 */
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    const winnerMessage = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    return winnerMessage;
  } else if (avgKoalas > 2 * avgDolphins) {
    const winnerMessage = `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    return winnerMessage;
  } else {
    const winnerMessage = "No team wins...";
    return winnerMessage;
  }
};
const matchWinner = checkWinner(scoreDolphins, scoreKoalas);
console.log(matchWinner);
