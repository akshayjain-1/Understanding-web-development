function add7(number) {
    return number + 7;
}

console.log(add7(3)); // Example usage

function multiply(number1, number2) {
    return number1 * number2;
}

console.log(multiply(3, 4)); // Example usage

function titleCase(string1) {
    string_result = string1.charAt(0).toUpperCase() + string1.substring(1).toLowerCase();
    return string_result;
}

console.log(titleCase("aBcD")); // Example usage

function lastLetter(string1) {
    return string1.at(-1);
}

console.log(lastLetter("aBcD")); // Example usage