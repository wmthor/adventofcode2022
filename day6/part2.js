const fs = require('fs');

const data = fs.readFileSync('input2.txt', 'utf-8');
const lines = data.split(/\r?\n/);

const line = lines[0];

function hasRepeats (str) {
  return /(.).*\1/.test(str);
}

for (let i = 14; i <= line.length; i += 1) {
  const chunk = line.slice(i - 14, i);
  
  if (!hasRepeats(chunk)) {
    console.log(i);
    break;
  }
}