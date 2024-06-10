//steps 
/*
1. press the first number- we save that nnumber 
2. press the operator- we save the operator
3. press the second number - we save the second number
4. press the equals - make the calculation
*/

let firstNumber;
let secondNumber;
let step = 0;
let operation;
let results = 0;

let numArray = [];
let secondNumArray = [];
let display = document.getElementById('display');

function getNumber(num){
    if (step === 0 || step === 1) {
        numArray.push(num); //1,3,5,7
        step = 1;
        firstNumber = Number(numArray.join('')); //merge into one string, then into number
        display.value = firstNumber;
    } else if (step === 2) {
        secondNumArray.push(num);
        secondNumber = Number(secondNumArray.join(''));
        display.value = secondNumber;
    }
}

function getOperator(op){
    step = 2;
    operation = op; 
}

function clearDisplay(){
    display.value = 0;
    firstNumber = null;
    secondNumber = null;
    step = 0;
    operation = null; 
    results = 0;
    numArray = [];
    secondNumArray = [];
}

function calculateEquals() {
    if ( operation === '+') {
        results = firstNumber + secondNumber;
        display.value = results;
    } else if (operation === '-') {
        results = firstNumber - secondNumber;
        display.value = results;
    } else if (operation === '*') {
        results = firstNumber * secondNumber;
        display.value = results;
    } else if (operation === '/') {
        if (secondNumber === 0) {
            results = "Syntax Error: Cannot divide number by zero ";
            display.value = results;
        } else {
            results = firstNumber / secondNumber;
            display.value = results;
        }
    }
}

// function enterCalculatesEqual(){
//     let enterButton = event.key;
//     console.log(enterButton);
//     if (enterButton === 'Enter') {
        
//         calculateEquals();
//     }
// }


document.getElementsByClassName("equal-button").addEventListener(
    "Enter",
    calculateEquals()
)