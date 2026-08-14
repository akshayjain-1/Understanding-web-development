/*Create a function that determines whether or not a given year is a leap year*/

function leapYear(year) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
        return true;
    else
        return false;
}
console.log(leapYear(2020)); // should print true
console.log(leapYear(1900)); // should print false
console.log(leapYear(2000)); // should print true