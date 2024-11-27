const numericButtons = document.querySelectorAll('.number-button');
const operationButtons = document.querySelectorAll('.operation-button');
const display = document.querySelector('.calculator-display');

let displayNumber = '0';
let firstNumber = 0;
let secondNumber = 0;
let currentOperator = '';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    let result = 0;
    const numberA = a;
    const numberB = b;

    switch(operator) {
        case '+':
            result = add(Number(numberA), Number(numberB));
            break;
        case '-':
            result = subtract(numberA, numberB);
           break;
        case '*':
            result = multiply(numberA, numberB);
           break;
        case '/':
            result = divide(numberA, numberB);
          break;
        default:
            console.log('Invalid operator.')
            break;
    }

    return parseFloat(result.toFixed(11));
}

