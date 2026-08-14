/* Implement a function that takes an array and some other arguments then removes the other arguments from that array, and returns the resulting array:
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]*/

function removeFromArray(array, ...args) {
    for (let value of args) {
        array = array.filter(item => item != value)
    }
    console.log(array);
}
removeFromArray([1, 2, 3, 4], 3, 4);

// OR

function removeUsingIndex(array, ...args) {
    for (let value of args) {
        let index = array.indexOf(value);
        array.splice(index, 1); // remove 1 element found at position <index>
    }
    console.log(array);
}