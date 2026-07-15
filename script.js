const display = document.querySelector(".display-screen")
const displaytext = document.querySelector("#display");
const buttonsArea = document.querySelector(".buttons-area")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equals = document.querySelector(".equals")
const clear = document.querySelector(".clear")
const back = document.querySelector(".back")


let firstOperand;
let secondOperand;
let operatorSign;
let resultShown = false;
let forwardCalculation = true;


numbers.forEach((button) => {
    button.addEventListener("click", () => {
        if (resultShown) {
            clearDIsplay()
            resultShown = false;
        }

        displaytext.textContent += button.textContent;
    })
})



operators.forEach((button) => {
    button.addEventListener("click", () => {
        firstOperand = parseInt(displaytext.textContent);
        displaytext.textContent = '';
        operatorSign = button.textContent
    })
})


function operate() {
    switch (operatorSign) {
        case "+":
            return firstOperand + secondOperand;
            break;

        case "-":
            return firstOperand - secondOperand;
            break;

        case "×":
            return firstOperand * secondOperand;
            break;

        case "÷":
            return firstOperand / secondOperand;
            break;

        default:
    }
}


equals.addEventListener("click", () => {
    if (firstOperand != null) {
        secondOperand = parseInt(displaytext.textContent)
    }
    if ((secondOperand == null) || (Number.isNaN(secondOperand)) || (firstOperand == null) || (Number.isNaN(firstOperand))) {
        displaytext.textContent = "error"
        resultShown = true;

    } else {
        let result = operate()
        displaytext.textContent = result;
        resultShown = true;
    }

})


clear.addEventListener("click", () => {
    clearDIsplay();
})

back.addEventListener("click", () => {

})

function clearDIsplay() {
    firstOperand = null;
    secondOperand = null;
    operatorSign = null;
    displaytext.textContent = '';
}