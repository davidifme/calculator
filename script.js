(function() {
    const numericButtons = document.querySelectorAll('.number-button');
    const operationButtons = document.querySelectorAll('.operation-button');
    const decimalButton = document.querySelector('.decimal-button');
    const backspaceButton = document.querySelector('.backspace-button');
    const display = document.querySelector('.calculator-display');

    let displayValue = '';
    let firstOperand = null;
    let currentOperator = null;
    let typeToggle = false;
    let numberSwitch = false;

    numericButtons.forEach(button => {
        button.addEventListener("click", () => handleNumberClick(button.textContent));
    });

    operationButtons.forEach(button => {
        button.addEventListener("click", () => handleOperationClick(button.textContent));
    });

    if (decimalButton) {
        decimalButton.addEventListener("click", () => handleDecimalClick());
    }

    if (backspaceButton) {
        backspaceButton.addEventListener("click", () => handleBackspace());
    }

    document.addEventListener("keydown", handleKeyboardInput);

    function handleNumberClick(value) {
        if (typeToggle) {
            displayValue = value;
            typeToggle = false;
        } else {
            displayValue += value;
        }
        updateDisplay(displayValue);
        updateDecimalButton();
    }

    function handleOperationClick(operator) {
        switch (operator) {
            case 'C':
                resetCalculator();
                break;
            case '=':
                if (currentOperator && firstOperand !== null) {
                    calculateResult();
                }
                break;
            case '.':
                handleDecimalClick();
                break;
            default:
                if (!numberSwitch) {
                    firstOperand = parseFloat(displayValue) || 0;
                    currentOperator = operator;
                    numberSwitch = true;
                    typeToggle = true;
                } else {
                    calculateResult();
                    currentOperator = operator;
                }
                break;
        }
    }

    function handleDecimalClick() {
        if (!displayValue.includes('.')) {
            handleNumberClick('.');
        }
        updateDecimalButton();
    }

    function handleBackspace() {
        if (displayValue.length > 0) {
            displayValue = displayValue.slice(0, -1);
            updateDisplay(displayValue || '0');
        }
        updateDecimalButton();
    }

    function handleKeyboardInput(event) {
        const key = event.key;

        if (/\d/.test(key)) {
            handleNumberClick(key);
        } else if (key === '.') {
            handleDecimalClick();
        } else if (key === 'Backspace') {
            handleBackspace();
        } else if (['+', '-', '*', '/'].includes(key)) {
            handleOperationClick(key);
        } else if (key === 'Enter' || key === '=') {
            handleOperationClick('=');
        } else if (key === 'Escape') {
            resetCalculator();
        }
    }

    function calculateResult() {
        const secondOperand = parseFloat(displayValue) || 0;
        const result = operate(firstOperand, currentOperator, secondOperand);
        firstOperand = result;
        updateDisplay(result);
        typeToggle = true;
        numberSwitch = false;
    }

    function resetCalculator() {
        displayValue = '';
        firstOperand = null;
        currentOperator = null;
        typeToggle = false;
        numberSwitch = false;
        updateDisplay('0');
        updateDecimalButton();
    }

    function updateDisplay(value) {
        display.textContent = value;
        displayValue = value.toString();
    }

    function updateDecimalButton() {
        if (decimalButton) {
            decimalButton.disabled = displayValue.includes('.');
        }
    }

    function operate(a, operator, b) {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b !== 0 ? a / b : 'ERROR';
            default: return 0;
        }
    }
})();