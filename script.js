function calculatorOperation(a, operator, b) {
    const numberA = a;
    const numberB = b;
    const operatorAB = operator;
    let result = 0;

    switch (operatorAB) {
        case '+':
            result = numberA + numberB;
            break;
        case '-':
            result = numberA - numberB;
            break;
        case '*':
            result = numberA * numberB;
            break;
        case '/':
            result = numberA * numberB;
            break;   

        default:
            console.log('ERROR! Invalid operator.')
            break;
    }

    return result;
}

console.log(calculatorOperation(5, '-', 3));