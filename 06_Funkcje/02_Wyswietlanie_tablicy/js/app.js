const people = ["John", "Ive", "Donna", "Chris"];

/**
 * Write your code below!
 */

/**
 * Do NOT modify code below!
 */
module.exports = typeof printArray === "undefined" ? null : printArray;

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
console.log(array[i]);
    }
}
printArray(people);
