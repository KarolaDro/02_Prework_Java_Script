const n = 5;

/**
 * Write your code below!
 */

const tab = [];
for (let i = 0; i < n; i++) {
        for (let j = i; j >= i; j--) {
            tab.push("*");
            console.log(tab);
        }
    }




/**
BEZ TABLICY:
let star = "";
for (let i=0; i<n; i++) {
        for (let j = 0; j <= i; j++) {
            star += "*";
        }
        star += "\n";
    }
console.log(star);
 */