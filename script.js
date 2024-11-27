const numericButtons = document.querySelectorAll('.number-button');
const operationButtons = document.querySelectorAll('.operation-button');
const display = document.querySelector('.calculator-display');

let displayValue = '';
let firstNumber = 0;
let secondNumber = 0;
let currentOperator = '';
let result = 0;

let numberSwitch = false;
let typeToggle = false;

numericButtons.forEach(button => {
    button.addEventListener(("click"), () => {
        if (!typeToggle) {
            displayValue += button.textContent;
            setDisplayValue(displayValue);
        } else {
            displayValue = button.textContent;
            setDisplayValue(displayValue);
            typeToggle = false;
        }
    });
});

operationButtons.forEach(button => {
    button.addEventListener(("click"), () => {
        switch(button.textContent) {
            case 'C':
                setDisplayValue('');
                break;
            case '=':
                setDisplayValue(getResult());
                typeToggle = true;
                numberSwitch = false;
                break;
            case '.':
                addToDisplayValue('.');
                break;
            default:
                if (!numberSwitch) {
                    firstNumber = getDisplayValue();
                    setDisplayValue('');
                    currentOperator = button.textContent;
                    numberSwitch = true;
                    typeToggle = true;
                } else {
                    setDisplayValue(getResult());
                }
                break;
        }
    }); 
});

function getResult() {
    secondNumber = getDisplayValue();
    result = operate(firstNumber, currentOperator, secondNumber);
    firstNumber = result;
    typeToggle = true;
    return result;
}

function addToDisplayValue(value) {
    display.textContent += value;
    displayValue += value;
}

function setDisplayValue(value) {
    display.textContent = value;
    displayValue = value;
}

function getDisplayValue() {
    return displayValue;
}

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
            if (numberA === 0 || numberB === 0) {
                display.textContent = "ERROR";
                typeToggle = true;
            } else {
                result = divide(numberA, numberB);
            }
            break;
        default:
            console.log('Invalid operator.')
            break;
    }

    return parseFloat(result.toFixed(12));
}

