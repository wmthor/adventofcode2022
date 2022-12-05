const fs = require('fs');

const data = fs.readFileSync('input2.txt', 'utf-8');
const lines = data.split(/\r?\n/);

const isOverlap = (a, b) => {
  const [aStart, aEnd] = a.split('-').map((str) => Number.parseInt(str));
  const [bStart, bEnd] = b.split('-').map((str) => Number.parseInt(str));

  return aStart <= bEnd && bStart <= aEnd;
};

let totalOverlap = 0;

lines.forEach(line => {
  const [a, b] = line.split(',');

  if (isOverlap(a, b)) {
    totalOverlap += 1;
  }
});

console.log(totalOverlap);