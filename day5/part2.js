const fs = require('fs');

const data = fs.readFileSync('input2.txt', 'utf-8');
const lines = data.split(/\r?\n/);

const initialHeight = 8;
const stacks = [];

for (let i = initialHeight - 1; i >= 0; i -= 1) {

  const rowItems = lines[i].split(' ');

  rowItems.forEach((box, index) => {
    if (!box) {
      return;
    }

    if (!stacks[index]) {
      stacks[index] = [];
    }

    const item = box.replace('[', '').replace(']', '');
    if (item !== '-') {
      stacks[index].push(item)
    }
    
  });
}

let temp = [];

for (let j = initialHeight + 1; j < lines.length; j += 1) {
  const [moveCount, moveFrom, moveTo] = lines[j]
    .replace('move ', '')
    .replace('from ', '')
    .replace('to ', '')
    .split(' ');

  for (let x = 0; x < moveCount; x += 1) {
    const value = stacks[moveFrom - 1].pop();

    if (value !== undefined) {
      temp.push(value);
    }
  }

  console.log(temp)

  for (let y = 0; y < moveCount; y += 1) {
    const value = temp.pop();
    stacks[moveTo - 1].push(value)
  }

  temp = [];
}

let answer = '';

stacks.forEach((stack) => {
  answer += stack.pop();
})

console.log(answer);