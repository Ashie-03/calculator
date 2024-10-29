// Get required elements
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operators');
let clear = document.querySelector('.clear');
let backspace = document.querySelector('.backspace');
let equals = document.querySelector('.equals');
let decimal = document.querySelector('.decimal');
let previousValue = document.querySelector('.previous-value');
let currentValue = document.querySelector('.current-value');

// Declare 3 variables - previousNum, currentNum, operator
let previousNum = '';
let currentNum = '';
let operator = '';

// Functions
function handleNumber(number){
    if (currentNum.length < 5){
        currentNum += number.textContent;
    }
}

function handleOperator(operatorValue){
    calculate();
    previousNum = currentNum;
    operator = operatorValue.textContent;
    currentNum = '';
}

function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator == '+'){
        currentNum = (previousNum + currentNum) // Round this
    } else if (operator == '-'){
        currentNum = (previousNum - currentNum) // Round this
    } else if (operator == '*'){
        currentNum = (previousNum * currentNum) // Round this
    } else if (operator == '÷'){
        currentNum = (previousNum / currentNum) // Round this
    }
};

// Event listeners
// For numbers
numbers.forEach((number) => number.addEventListener('click', function(){
    handleNumber(number);
    currentValue.textContent = currentNum;
}));

// For operators
operators.forEach((operatorValue) => operatorValue.addEventListener('click', function(){
    handleOperator(operatorValue);
    previousValue.textContent = previousNum + ' ' + operator;
    currentValue.textContent = currentNum;
}));

// For clear
clear.addEventListener('click', function(){
    previousNum = '';
    operator = '';
    currentNum = '';
    previousValue.textContent = '';
    currentValue.textContent = 0;
});

// For equals
equals.addEventListener('click', function(){
    calculate();
    currentValue.textContent = currentNum;
    previousValue.textContent = '';
    previousNum = '';
    operator = '';
    currentNum = '';
});

// For backspace
backspace.addEventListener('click', function(){
    currentNum = (Math.floor(currentNum / 10)).toString();
    currentValue.textContent = currentNum;
});

// For decimal
decimal.addEventListener('click', function(){
    if (!currentNum.includes('.')){
        currentNum += '.'
        currentValue.textContent = currentNum;
    }
});
