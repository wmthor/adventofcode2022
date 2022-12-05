const fs = require('fs')

const ShapeScore = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
};

const outcomeScoreMap = {
  Z: 6,
  Y: 3,
  X: 0,
};

const battleSelection = (opponent, outcome) => {
  const selectionResult = {
    'A|X': 'Z',
    'A|Y': 'X',
    'A|Z': 'Y',
    'B|X': 'X',
    'B|Y': 'Y',
    'B|Z': 'Z',
    'C|X': 'Y',
    'C|Y': 'Z',
    'C|Z': 'X',
  }
  
  return selectionResult[`${opponent}|${outcome}`];
}

const data = fs.readFileSync('input.txt', 'utf-8')
const lines = data.split(/\r?\n/)

let totalScore = 0;

lines.forEach(line => {
  const [opponent, outcome] = line.split(' ');

  const selection = battleSelection(opponent, outcome);
  totalScore += outcomeScoreMap[outcome] + ShapeScore[selection];
})

console.log(totalScore);