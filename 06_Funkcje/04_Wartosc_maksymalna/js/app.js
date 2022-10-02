const randomNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];

/**
 * Write your code below!
 */

function maxFromArray(numbers) {
    let max = numbers[0];
    for (let i = 0; i < randomNumbers.length; i++) {
        if (randomNumbers[i] > max) {
            max = randomNumbers[i];
        }
    }
    return max;
}
const result = maxFromArray(randomNumbers);
console.log(result);

