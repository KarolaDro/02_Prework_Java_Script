const n = 3;
const calc = [];

/**
 * Write your code below!
  */

for (let i = 0; i < n; i++) {
    calc.push([]);
    for (let j = 1; j <= n; j++) {
        calc[i].push(i + " x " + j + " = " + i * j);
    }
    console.log(calc[i].join(" | "));
}
console.log(calc);
