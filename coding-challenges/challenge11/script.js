/* --- Toggle solution visibility --- */
const btn = document.getElementById('show-solution-btn');
const panel = document.getElementById('solution-panel');
const code = document.getElementById('solution-code');

const fullSolution = `
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


console.log('-----------TASK-1-------------------');
const [players1, players2] = game.players;
console.log(players1, players2);

console.log('-----------TASK-2-------------------');
const [gkTeam1, ...fieldPlayersTeam1] = players1;
const [gkTeam2, ...fieldPlayersTeam2] = players2;
console.log(gkTeam1, fieldPlayersTeam1);
console.log(gkTeam2, fieldPlayersTeam2);

console.log('-----------TASK-3-------------------');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

console.log('-----------TASK-4-------------------');
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

console.log('-----------TASK-5-------------------');
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

console.log('-----------TASK-6-------------------');
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
`;

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

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('-----------TASK-1-------------------');
const [players1, players2] = game.players;
console.log(players1, players2);

console.log('-----------TASK-2-------------------');
const [gkTeam1, ...fieldPlayersTeam1] = players1;
const [gkTeam2, ...fieldPlayersTeam2] = players2;
console.log(gkTeam1, fieldPlayersTeam1);
console.log(gkTeam2, fieldPlayersTeam2);

console.log('-----------TASK-3-------------------');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

console.log('-----------TASK-4-------------------');
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

console.log('-----------TASK-5-------------------');
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

console.log('-----------TASK-6-------------------');
const printGoals = function (...playerScored) {
  console.log(...playerScored);
  console.log(`${playerScored.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

console.log('-----------TASK-7-------------------');
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
