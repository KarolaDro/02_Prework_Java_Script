const n = 5;

/**
 * Write your code below!
 */

for (let i = 1; i <= n; i++)
{
    let star = "";

    for ( let j = 1; j <= i; j++)
    {
        star = star + "*";
    }
    console.log(star);
}
