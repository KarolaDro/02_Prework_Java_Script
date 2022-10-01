const users = [["Jaydn Humphries", "Ayda Orozco"], ["Sanjeev Wilkinson", "Jorge Markham"]];

/**
 * Write your code below!
 */




/**
 * Do NOT modify code below!
 */
module.exports = typeof print2DArray === "undefined" ? null : print2DArray;

function print2DArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}
print2DArray(users);