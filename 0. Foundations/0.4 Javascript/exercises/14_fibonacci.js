/* Create a function that returns a specific member of the Fibonacci sequence */

function generateFibonacci(n) {
    let series = [1, 1];
    if ( n < 0)
        return "OOPS"
    if (n == 1 || n == 2)
        return series;
    for (let i = 2; i < n; i ++)
        series[i] = series[i - 1] + series[i - 2];
    return series;
}

function getFibonacciMember(n) {
    let series = generateFibonacci(n);
    if (typeof series === "string")
        return series;
    return series[n - 1];
}

console.log(getFibonacciMember(5));
console.log(getFibonacciMember(1));
console.log(getFibonacciMember(10));
console.log(getFibonacciMember(-3));