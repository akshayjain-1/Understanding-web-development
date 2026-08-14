/* The goal for this exercise is to create a calculator that does the following:

add(): take two numbers and return their sum
subtract(): take two numbers and return the result after subtracting the second from the first
sum(): take an array of numbers and add all the numbers together
multiply(): take an array of numbers and multiply all the numbers together
power(): take two numbers (base and exponent) and return the result of raising the base to that exponent
factorial(): given a single number, find its factorial
*/

function add (a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function sum (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function multiply (arr) {
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
        total *= arr[i];
    }
    return total;
}

function power (base, power) {
    return Math.pow(base, power);
}

function factorial (n) {
    if (n === 0 || n === 1)
        return 1;
    return n * factorial(n-1);
}

console.log(add(2, 3));
console.log(subtract(5, 2));
console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));
console.log(power(2, 3));
console.log(factorial(5));
