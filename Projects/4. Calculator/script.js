const display = document.querySelector('.display');
const backspace = document.getElementById('backspace'); // can also use document.querySelector('#backspace')
const clear = document.getElementById('clear');
const percent = document.getElementById('percent');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const equals = document.getElementById('equals');
const negate = document.getElementById('negate');
const decimal = document.getElementById('decimal');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

function displayText(event) {
    display.textContent += event.target.textContent;
}

function displayFunction(event) {
    let math_function = ["-", "+", "÷", "×"]
    let tokens = display.textContent.trim().split(" ").filter(t => t !== "");
    let lastChar = tokens.length > 0 ? tokens[tokens.length - 1] : "";
    let inputChar = event.target.textContent;
    
    // handle initial negative sign
    if (display.textContent == '') {
        if (inputChar == '-') {
            display.textContent = "-";
        }
        return;
    }
    // handle negative sign after multiplication or division
    if ((lastChar == '÷' || lastChar == '×') && inputChar == '-') {
        display.textContent += " " + inputChar;
    }

    // handle addition of a new math function after a number
    else if (!math_function.includes(lastChar)) {
        // Prevent appending operators directly to an isolated trailing negative sign
        if (lastChar === '-' && tokens.length === 1 && math_function.includes(inputChar)) {
            return; 
        }
        display.textContent += " " + inputChar + " ";
    }
    else {
        // If the last character is an intentional negative sign for a number, don't swap it
        if (lastChar === '-' && tokens.length > 1 && (tokens[tokens.length - 2] === '×' || tokens[tokens.length - 2] === '÷')) {
            return;
        }
        let updatedText = display.textContent.trimEnd();
        updatedText = updatedText.substring(0, updatedText.length - lastChar.length).trimEnd();
        display.textContent = updatedText + " " + inputChar + " ";
    }
}

// display numbers
nine.addEventListener('click', displayText);
eight.addEventListener('click', displayText);
seven.addEventListener('click', displayText);
six.addEventListener('click', displayText);
five.addEventListener('click', displayText);
four.addEventListener('click', displayText);
three.addEventListener('click', displayText);
two.addEventListener('click', displayText);
one.addEventListener('click', displayText);
zero.addEventListener('click', displayText);

// display functions
divide.addEventListener('click', displayFunction);
multiply.addEventListener('click', displayFunction);
subtract.addEventListener('click', displayFunction);
add.addEventListener('click', displayFunction);

// functions for clearing text

function clearDisplay() {
    display.textContent = '';
}

clear.addEventListener('click', clearDisplay);

function backspaceDisplay() {
    display.textContent = display.textContent.slice(0, -1); // slice (start, end) and the element at end index is excluded
}
backspace.addEventListener('click', backspaceDisplay);

function negateElement() {
    let number = display.textContent;
    if (number.split(" ").length > 1) {
        display.textContent = number;
    }
    else if (number) {
        display.textContent = ((parseFloat(number) * -1)).toString();
    }
    else {
        clearDisplay();
    }
}
negate.addEventListener('click', negateElement);

function displayDecimal(event) {
    let displayText = display.textContent;
    if (!displayText.includes('.')) {
        display.textContent += '.';
    }
}
decimal.addEventListener('click', displayDecimal);

// to-do: percent

function equalDisplay() {
    // to-do: define bodmas
    let math_function = ["-", "+", "÷", "×"];

    if (math_function.some(char => display.textContent.includes(char))) {
        let expression = display.textContent.split(" ").filter(element => element !== "");

        // --- Pass 1: Multiplication & Division ---
        for (let i = 0; i < expression.length; i++) {
            if (expression[i] == '×' || expression[i] == '÷') {
                let result = 0; // Declare variable HERE so it is accessible below

                if (expression[i] == '×') {
                    result = parseFloat(expression[i-1]) * parseFloat(expression[i+1]);
                } else {
                    result = parseFloat(expression[i-1]) / parseFloat(expression[i+1]);
                }

                expression.splice(i-1, 3, result.toString());
                i--; 
            }
        }

        // --- Pass 2: Addition & Subtraction ---
        for (let i = 0; i < expression.length; i++) {
            if (expression[i] == '+' || expression[i] == '-') {
                let result = 0; // Declare variable HERE so it is accessible below

                if (expression[i] == '+') {
                    result = parseFloat(expression[i-1]) + parseFloat(expression[i+1]);
                } else {
                    result = parseFloat(expression[i-1]) - parseFloat(expression[i+1]);
                }

                expression.splice(i-1, 3, result.toString());
                i--; 
            }
        }

        // Output final element
        display.textContent = expression[0].toString();
    } else {
        display.textContent = display.textContent;
    }
}

equals.addEventListener('click', equalDisplay);