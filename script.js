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

    return parseFloat(result.toFixed(11));
}

const numericButtons = document.querySelectorAll('.number-button');
const operationButtons = document.querySelectorAll('.operation-button');
const display = document.querySelector('.calculator-display');

let displayValue = '';
let firstNumber = 0;
let secondNumber = 0;
let currentOperator = '';
let currentResult = 0;
let typeToggle = true;
let numberSwitch = false;

numericButtons.forEach((number) => {
    number.addEventListener(("click"), () => {
        const buttonValue = number.textContent;

        if (display.textContent.length <= 12) {
            if (typeToggle === false || display.textContent == 0 || display.textContent === '') {
                display.textContent = buttonValue;
                displayValue = buttonValue;
                typeToggle = true;
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
            numberSwitch = false;
        } else if (operator.textContent === '=') {
            secondNumber = display.textContent;
            currentResult = operate(firstNumber, currentOperator, secondNumber);
            display.textContent = currentResult;
            firstNumber = 0;
            secondNumber = 0;
            currentOperator = '';
            typeToggle = false;
            numberSwitch = false;
        } else {
            if (!numberSwitch) {
                firstNumber = display.textContent;
                currentOperator = operator.textContent;
                numberSwitch = true;
                typeToggle = false;
            } else {
                secondNumber = display.textContent;
                currentResult = operate(firstNumber, currentOperator, secondNumber);
                currentOperator = operator.textContent;
                firstNumber = currentResult;
                display.textContent = currentResult;
                typeToggle = false;
            }
        }
    });
});