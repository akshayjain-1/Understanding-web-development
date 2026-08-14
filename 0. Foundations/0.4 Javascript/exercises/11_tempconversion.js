/*Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa*/

function convertToCelsius(temp) {
    return ((temp - 32) * 5/9).toFixed(1);

}

function convertToFahrenheit(temp) {
    return ((temp * 9/5) + 32).toFixed(1);
}
console.log(convertToCelsius(32)); // should print 0.0
console.log(convertToFahrenheit(0)); // should print 32.0
console.log(convertToCelsius(100)); // should print 37.8