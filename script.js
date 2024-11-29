let firstOperand = '';
let secondOperand = '';
let currentOperator = null;

const numericButtons = document.querySelectorAll('.number-button');
const operationButtons = document.querySelectorAll('.operation-button');

const decimalButton = document.querySelector('.decimal-button');
const backspaceButton = document.querySelector('.backspace-button');
const display = document.querySelector('.calculator-current-display');
const clearButton = document.querySelector('#clear-button');
const equalsButton = document.querySelector('#equals-button');
const pointButton = document.querySelector('#point-button');

clearButton.addEventListener(("click"), () => clearDisplay());
equalsButton.addEventListener(("click"), () => evaluate());
pointButton.addEventListener(("click"), () => addPoint());

numericButtons.forEach(numericButton => {
    numericButton.addEventListener(("click"), () => appendNumber(numericButton.textContent));
});

operationButtons.forEach(operatorButton => {
    operatorButton.addEventListener(("click"), () => setOperation(operatorButton.textContent));
});

function appendNumber(number) {
    number = Number(number);

    if (display.textContent == 0 || display.textContent === '') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
};

function clearDisplay() {
    display.textContent = '';
}

function resetCalculator() {
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
}

function addPoint() {

}

function setOperation(operator) {
    if (currentOperator !== null) evaluate()
    firstOperand = display.textContent;
    currentOperator = operator;
    clearDisplay();
}

function evaluate() {
    if (currentOperator === null) return

    secondOperand = display.textContent;
    display.textContent = roundNumber(operate(firstOperand, currentOperator, secondOperand));
    currentOperator = null;
}

// Round a number to 12 decimal places
function roundNumber(number) {
    return Number(number.toFixed(12));
  }

function operate(operandA, operator, operandB) {
    operandA = Number(operandA);
    operandB = Number(operandB);

    switch(operator) {
        case '+':
            return operandA + operandB; 
        case '-':
            return operandA - operandB;
        case '*':
            return operandA * operandB; 
        case '/':
            return operandA / operandB; 
        default:
            return null;
    }
}
