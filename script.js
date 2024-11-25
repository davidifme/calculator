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
    const numberA = Number(a);
    const numberB = Number(b);

    switch(operator) {
        case '+':
            result = add(numberA, numberB);
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

    return result;
}

const numericButtons = document.querySelectorAll('.number-button');
const operationButtons = document.querySelectorAll('.operation-button');
const display = document.querySelector('.calculator-display');

let displayValue = '';
let firstNumber = 0;
let secondNumber = 0;
let currentOperator = '';

numericButtons.forEach((number) => {
    number.addEventListener(("click"), () => {
        const buttonValue = number.textContent;

        if (display.textContent.length <= 12) {
            if (display.textContent == 0 || display.textContent === '') {
                display.textContent = buttonValue;
                displayValue = buttonValue;
            } else {
                display.textContent += buttonValue;
                displayValue += buttonValue;
            }
        }
    });
});

operationButtons.forEach((operator) => {
    operator.addEventListener(("click"), () => {
        if (operator.textContent === 'C') {
            display.textContent = 0;
            displayValue = 0;
        } else if (operator.textContent === '=') {
            secondNumber = display.textContent;
            display.textContent = operate(firstNumber, currentOperator, secondNumber);
            firstNumber = 0;
            secondNumber = 0;
            currentOperator = '';
        } else {
            firstNumber = display.textContent;
            display.textContent = '';
            currentOperator = operator.textContent;
        }
    });
});