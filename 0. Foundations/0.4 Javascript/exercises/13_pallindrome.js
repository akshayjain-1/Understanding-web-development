/*Write a function that determines whether or not a given string is a palindrome.*/

function pallindrome(str) {
    let reversedString = str.split('').reverse().join('')
    if (str == reversedString)
        return true;
    return false;
}

console.log(pallindrome('racecar')) // true
console.log(pallindrome('tacos')) // false