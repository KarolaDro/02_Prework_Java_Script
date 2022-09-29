const numbers = [];
const columns = 4;
const rows = 5;

/**
 * Write your code below!
 */

let count = 1;
for (let i = 0; i < rows; i++)
{
    numbers.push([]);

    for (let j = 0; j < columns; j++)
    {
        numbers[i].push(count);
        count++;
    }
}
console.log(numbers);

