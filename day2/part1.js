const fs = require('fs')

const shapeScoreMap = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
};

const OutcomeScore = {
  Win: 6,
  Draw: 3,
  Lose: 0,
};

const battleScore = (opponent, me) => {
  const outcome = {
    'A|X': OutcomeScore.Draw,
    'A|Y': OutcomeScore.Win,
    'A|Z': OutcomeScore.Lose,
    'B|X': OutcomeScore.Lose,
    'B|Y': OutcomeScore.Draw,
    'B|Z': OutcomeScore.Win,
    'C|X': OutcomeScore.Win,
    'C|Y': OutcomeScore.Lose,
    'C|Z': OutcomeScore.Draw,
  }

  return outcome[`${opponent}|${me}`];
}

const data = fs.readFileSync('input.txt', 'utf-8')
const lines = data.split(/\r?\n/)

let totalScore = 0;

lines.forEach(line => {
  const [opponent, me] = line.split(' ');
  totalScore += battleScore(opponent, me) + shapeScoreMap[me];
});

console.log(totalScore);