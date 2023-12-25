document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.para');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    const numButtons = document.querySelectorAll('.num-btn');
    numButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentInput += button.textContent;
            display.textContent = currentInput;
        });
    });

    const operatorButtons = document.querySelectorAll('.minus');
    operatorButtons.forEach(opButton => {
        opButton.addEventListener('click', () => {
            if (currentInput !== '') {
                if (firstOperand === null) {
                    firstOperand = parseFloat(currentInput);
                    operator = opButton.textContent;
                    currentInput = '';
                } else {
                    const secondOperand = parseFloat(currentInput);
                    const result = operate(firstOperand, secondOperand, operator);
                    display.textContent = result;
                    firstOperand = result;
                    currentInput = '';
                    operator = opButton.textContent;
                }
            }
        });
    });

    document.querySelector('.div').addEventListener('click', function (event) {
        if (event.target.textContent === '=') {
            if (currentInput !== '') {
                const secondOperand = parseFloat(currentInput);
                const result = operate(firstOperand, secondOperand, operator);
                display.textContent = result;
                firstOperand = null;
                currentInput = result.toString();
                operator = '';
            }
        } else if (event.target.textContent === 'Clear') {
            display.textContent = '';
            currentInput = '';
            firstOperand = null;
            operator = '';
        }
    });

    function operate(a, b, op) {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) return 'Error: Division by zero';
                return a / b;
            default:
                return 'Error: Invalid operation';
        }
    }
});
