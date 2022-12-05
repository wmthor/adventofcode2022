const fs = require('fs');

const data = fs.readFileSync('input1.txt', 'utf-8');
const lines = data.split(/\r?\n/);

const isContain = (inner, outer) => {
  const [innerStart, innerEnd] = inner.split('-');
  const [outerStart, outerEnd] = outer.split('-');

  return Number.parseInt(innerStart) >= Number.parseInt(outerStart) && Number.parseInt(innerEnd) <= Number.parseInt(outerEnd);
};

let totalContains = 0;

lines.forEach(line => {
  const [a, b] = line.split(',');

  // 36-49 35-57
  console.log(a, b, isContain(a, b), isContain(b, a))
  if (isContain(a, b) || isContain(b, a)) {
    totalContains += 1;
  }
});

// console.log(totalContains);