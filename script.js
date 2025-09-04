// Select all button elements
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const zeroBtn = document.getElementById('zero');
const decimalBtn = document.getElementById('decimal');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const allClearBtn = document.getElementById('allClear');
const display = document.getElementById('display');
const currDisplay = document.getElementById('result');
const history = document.getElementById('history');
const negativeBtn = document.getElementById('negative');

let clearOnNext = false;
const operators = ['+', '-', '*', '/'];

oneBtn.addEventListener('click', () => pressNumber("1"));
twoBtn.addEventListener('click', () => pressNumber("2"));
threeBtn.addEventListener('click', () => pressNumber("3"));
fourBtn.addEventListener('click', () => pressNumber("4"));
fiveBtn.addEventListener('click', () => pressNumber("5"));
sixBtn.addEventListener('click', () => pressNumber("6"));
sevenBtn.addEventListener('click', () => pressNumber("7"));
eightBtn.addEventListener('click', () => pressNumber("8"));
nineBtn.addEventListener('click', () => pressNumber("9"));
zeroBtn.addEventListener('click', () => pressNumber("0"));
decimalBtn.addEventListener('click', pressDecimal);
clearBtn.addEventListener('click', () => {currDisplay.textContent = '0'});
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
addBtn.addEventListener('click', add);
equalsBtn.addEventListener('click', () => calculate());
negativeBtn.addEventListener('click', () => makeNegative());
allClearBtn.addEventListener('click', () => {
    currDisplay.textContent = '0';
    history.textContent = '';
});

currDisplay.textContent = '0';

// Loop through each button and add a click event listener
function pressNumber(n) {
    if(clearOnNext) {
        currDisplay.textContent = '0';
        clearOnNext = false;
    }
    if(currDisplay.textContent === '0') {
        currDisplay.textContent = '';
    }
    console.log('Button clicked:', n);
    currDisplay.textContent += n;
}

function pressDecimal() {
    if (currDisplay.textContent.includes('.')) {
        return;
    }
  console.log('Button clicked: .');
  currDisplay.textContent += '.';
}

function subtract(){
    if(currDisplay.textContent.slice(0, 1) === '-') {
    }
    else if(history.textContent && operators.includes(history.textContent.slice(-2, -1))) {
        calculate();
    }
    history.textContent = currDisplay.textContent + ' - '
    currDisplay.textContent = '0';
}
function add(){
    if(currDisplay.textContent.slice(0, 1) === '-') {
    }
    else if(history.textContent && operators.includes(history.textContent.slice(-2, -1))) {
        calculate();
    }
    history.textContent = currDisplay.textContent + ' + '
    currDisplay.textContent = '0';
}
function multiply(){
    if(currDisplay.textContent.slice(0, 1) === '-') {
    }
    else if(history.textContent && operators.includes(history.textContent.slice(-2, -1))) {
        calculate();
    }
    history.textContent = currDisplay.textContent + ' * '
    currDisplay.textContent = '0';
}
function divide(){
    if(currDisplay.textContent.slice(0, 1) === '-') {
    }
    else if(history.textContent && operators.includes(history.textContent.slice(-2, -1))) {
        calculate();
    }
    history.textContent = currDisplay.textContent + ' / '
    currDisplay.textContent = '0';
}
function calculate() {
    let firstNum = parseFloat(history.textContent);
    let secondNum = parseFloat(currDisplay.textContent);
    let operator = history.textContent.slice(-2, -1).trim();
    let result;

    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            if (secondNum === 0) {
                alert("Error: Division by zero");
                return;
            }
            result = firstNum / secondNum;
            break;
        default:
            alert("Error: Invalid operator");
            return;
    }
    let expression = history.textContent + currDisplay.textContent;
    if(expression.length > 14){
        result = result.toExponential(5);
    }
    currDisplay.textContent = result;
    clearOnNext = true;
    history.textContent = expression + ' = ' + result;
}

function makeNegative() {
    if(currDisplay.textContent === '0') return;
    if(currDisplay.textContent.startsWith('-')) {
        currDisplay.textContent = currDisplay.textContent.slice(1);
    } else {
        currDisplay.textContent = '-' + currDisplay.textContent;
    }
}