/*Pretty simple, write a function called reverseString that returns its input, reversed!
reverseString('hello there') // returns 'ereht olleh'*/

function reverseString(string) {
    reversedString = "";
    for (let i = string.length - 1; i >=0; i --) {
        reversedString += string[i];
    }
    console.log(reversedString);
}
reverseString('hello there');
