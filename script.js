// ===================TASK 1==============================

let initialUserNumber = +prompt('Make a number', 'your number');
let userNumberToAdd = +prompt('How much will we add?', 'your number to add');
let userNumberToSubtract = +prompt('How much will we subtract?', 'your number to subtract');
let userNumberToMultiply = +prompt('How much will we multiply?', 'your number to multiply');
let userNumberToDivide = +prompt('And now divide by', 'your number to divide');

result = ((initialUserNumber + userNumberToAdd) - userNumberToSubtract ) * userNumberToMultiply / userNumberToDivide;
alert(`((${initialUserNumber} + ${userNumberToAdd}) - ${userNumberToSubtract}) * ${userNumberToMultiply} / ${userNumberToDivide} = ${result}`);

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
