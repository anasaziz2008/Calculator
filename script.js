const display = document.querySelector(".display-screen")
const displaytext = document.querySelector("#display");
const buttonsArea = document.querySelector(".buttons-area")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equals = document.querySelector(".equals")
const clear = document.querySelector(".clear")
const back = document.querySelector(".back")

// console.log("hello world")

// function add(a, b) {
//     return +a + +b;
// }

// function subtract(a, b) {
//     return +a - +b;
// }

// function multiply(a, b) {
//     return +a * +b;
// }

// function divide(a, b) {
//     return +a / +b;
// }


// function operate(operator, a, b) {
//     if (operator == '+') {
//        return add(a, b)
//     } else if (operator == '-') {
//         return subtract(a, b)
//     } else if (operator == '*') {
//         return multiply(a, b)
//     } else if (operator == '/') {
//         return divide(a, b)
//     }
// }

// let displayNumber;
// numbers.forEach((number) => {
//     number.addEventListener("click", () => {
//         displaytext.textContent += number.textContent;
//         displayNumber = displaytext.textContent
//     })
// })

// let operatorSign;
// operators.forEach((operator) => {
//     operator.addEventListener("click", () => {
//         displaytext.textContent = ""
//         displaytext.textContent += operator.textContent;
//         operatorSign = displaytext.textContent
//         displaytext.textContent = ""

//     })
// })
