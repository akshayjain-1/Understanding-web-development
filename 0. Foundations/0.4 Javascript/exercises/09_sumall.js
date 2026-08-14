/* Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10*/

function sumAll (num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;

    }
    return sum;
}
console.log(sumAll(1, 4)); // should print 10