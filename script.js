let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldClearDisplay = false;

const numericButtons = document.querySelectorAll('.number-button');
const operationButtons = document.querySelectorAll('.operation-button');

const display = document.querySelector('.calculator-current-display');
const clearButton = document.querySelector('#clear-button');
const equalsButton = document.querySelector('#equals-button');
const pointButton = document.querySelector('#point-button');

clearButton.addEventListener(("click"), resetCalculator);
equalsButton.addEventListener(("click"), evaluate);
pointButton.addEventListener(("click"), addPoint);

numericButtons.forEach(numericButton => {
    numericButton.addEventListener('click', () => appendNumber(numericButton.textContent));
});

operationButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => setOperation(operatorButton.textContent));
});

function appendNumber(number) {
    if (display.textContent === '0' || shouldClearDisplay)
        clearDisplay();
    display.textContent += number;
};

function clearDisplay() {
    display.textContent = '';
    shouldClearDisplay = false;
}

function resetCalculator() {
    display.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}

function addPoint() {
    if (shouldClearDisplay) clearDisplay();
    if (display.textContent === '')
        display.textContent = '0';
    if (display.textContent.includes('.')) return
    display.textContent += '.';
}

function setOperation(operator) {
    if (currentOperator !== null) evaluate()
    firstOperand = display.textContent;
    currentOperator = operator;
    shouldClearDisplay = true;
}

function evaluate() {
    if (currentOperator === null || shouldClearDisplay) return
    if (currentOperator === '/' && display.textContent === '0') {
        alert("ERROR! Can't divide by 0.")
        return
      }

    secondOperand = display.textContent;
    display.textContent = roundNumber(
        operate(firstOperand, currentOperator, secondOperand)
    );
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
            if (operandB === 0) return null
            else return operandA / operandB; 
        default:
            return null;
    }
}
