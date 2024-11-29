let firstOperand = '';
let secondOperand = '';
let currentOperator = '';

const numericButtons = document.querySelectorAll('.number-button');
const operationButtons = document.querySelectorAll('.operation-button');

const decimalButton = document.querySelector('.decimal-button');
const backspaceButton = document.querySelector('.backspace-button');
const display = document.querySelector('.calculator-current-display');

numericButtons.forEach(numericButton => {
    numericButton.addEventListener(("click"), () => appendNumber(numericButton.textContent));
});

function appendNumber(number) {
    if (display.textContent !== 0 || display.textContent !== '') {
        display.textContent += number;
    } else {
        display.textContent = number;
    }
};

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
