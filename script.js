function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/': 
            return divide(num1, num2);
    }

}

let firstNum = '';
let secondNum = '';
let operator = '';
let result;

const container = document.querySelector('.container');
const display = document.querySelector('.display');

display.textContent = '0';

container.addEventListener('click', (event) => {
    const numbers = '0123456789';
    const operators = '+-*/';

    if (operators.includes(event.target.textContent)) {
        // If there's already a number in firstNum, keep it as the base, reset secondNum and set the operator
        if (firstNum !== '' && secondNum !== '') {
            result = operate(operator, +firstNum, +secondNum);
            
            firstNum = result; // Result becomes the new firstNum
            
            secondNum = ''; // Clear secondNum for the next number input
            
            display.textContent = firstNum;
        }

        operator = event.target.textContent; // Set the new operator
    } 

    // Fill firstNum and secondNum values
    if (numbers.includes(event.target.textContent) && operator.length == 0) {
        firstNum += event.target.textContent;

        display.textContent = firstNum;
    } else if (numbers.includes(event.target.textContent) && operator.length == 1) {
        secondNum += event.target.textContent;

        display.textContent = secondNum;
    }

    // If '=' is clicked perform operation
    if (event.target.textContent == '=' &&
        firstNum !== '' &&
        secondNum !== '' &&
        operator.length !== ''
    ) {
        // Alert error if dividing by 0
        if (secondNum == '0' && operator == '/') {
        alert('You can\'t do that!');

        firstNum = '';
        secondNum = '';
        operator = '';

        display.textContent = '0';
        } else {
            result = operate(operator, +firstNum, +secondNum);

            firstNum = result; // Save result as firsNum for next calculation
            secondNum = ''; // Clean secondNum for next input
            operator = ''; // Clean operator for next operation

            display.textContent = firstNum;
        }
    }

    // If 'AC' is clicked, clear display and values
    if (event.target.textContent == 'AC') {
        display.textContent = '0';

        firstNum = '';
        secondNum = '';
        operator = '';
    }

    // Divide by 100 if '%' is clicked
    if (firstNum !== '' && 
        secondNum === '' &&
        operator === '' &&
        event.target.textContent === '%') {
            firstNum = +firstNum / 100;

            display.textContent = firstNum;
        }
})