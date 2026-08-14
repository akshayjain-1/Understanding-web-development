/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

function greetings(firstName, lastName, thisYear, birthYear) {
    console.log(`Hello! My name is ${firstName} ${lastName} and I am ${thisYear - birthYear} years old.`);
}

console.log(greetings("Carlos", "Stevenson", 1965, 1947));