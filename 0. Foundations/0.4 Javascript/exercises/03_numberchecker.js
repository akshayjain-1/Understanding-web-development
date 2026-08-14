//Modify the code so it returns true when the number is greater than or equal to 10, and false if it is less than 10.
function numberChecker(number) {
    if (number >= 10) {
        return true;
    }
    return false;
}

console.log(numberChecker(5));
console.log(numberChecker(10));
console.log(numberChecker(15));