// ===================TASK 1==============================

let initialNumber = +prompt('Make a number', 'your number');
addNumber = +prompt('How much will we add?', 'your number to add');
multiplyNumber = +prompt('How much will we multiply?', 'your number to multiply');
divideNumber = +prompt('And now divide by', 'your number to divide');

result = (initialNumber + addNumber) * multiplyNumber / divideNumber;
alert(`(${initialNumber} + ${addNumber}) * ${multiplyNumber} / ${divideNumber} = ${result}`);

// ===================TASK 2===============================

let userName = 'Tania';
let userAge = 30;
let userVote = userAge > 18;

console.log(`Переменная userName имеет тип ${typeof userName}`);
console.log(`Переменная userAge имеет тип ${typeof userAge}`);
console.log(`Переменная userVote имеет тип ${typeof userVote}`);

// ===================TASK 3=================================

let firstPart = 12;
let secondPart = 34;

result = firstPart.toString() + secondPart.toString();

console.log(result);

// ====================TASK 3***===============================

let userFirstNumber = +prompt('Enter your number:', 'number')
let userSecondNumber = +prompt('Enter your second number:', 'number');

result = userFirstNumber.toString() + userSecondNumber.toString();

console.log(typeof userFirstNumber);
console.log(typeof userSecondNumber);
console.log(result);