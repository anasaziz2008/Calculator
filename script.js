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
let forwardCalculation = false;
let result;
let continousCalculation = false;
let waitingForSecondOperand = false;



numbers.forEach((button) => {
    button.addEventListener("click", () => {

        if (resultShown) {
            displaytext.textContent = "";
            resultShown = false;
            firstOperand = null;
            secondOperand = null;
            operatorSign = null;
        }

        displaytext.textContent += button.textContent;
    });
});


operators.forEach((button) => {
    button.addEventListener("click", () => {

        // Ignore operator if nothing entered
        if (displaytext.textContent === "" && firstOperand == null) return;

        // Continue after "="
        if (resultShown) {
            operatorSign = button.textContent;
            resultShown = false;
            displaytext.textContent = "";
            waitingForSecondOperand = true;
            return;
        }

        // First operator
        if (firstOperand == null) {
            firstOperand = displaytext.textContent;
        }
        // Continuous calculation
        else if (displaytext.textContent !== "") {
            secondOperand = displaytext.textContent;
            firstOperand = operate();
        }

        displaytext.textContent = "";
        operatorSign = button.textContent;
        waitingForSecondOperand = true;
    });
});

function operate() {
    switch (operatorSign) {
        case "+":
            return Number(firstOperand) + Number(secondOperand);
            break;

        case "-":
            return Number(firstOperand) - Number(secondOperand);
            break;

        case "×":
            return Number(firstOperand) * Number(secondOperand); 
            break;

        case "÷":
            return Number(firstOperand) / Number(secondOperand); 
            break;

        default:
    }
}

equals.addEventListener("click", () => {

    if (!waitingForSecondOperand || displaytext.textContent === "") return;

    secondOperand = displaytext.textContent;

    result = operate();

    displaytext.textContent = result;

    firstOperand = result;
    resultShown = true;
    waitingForSecondOperand = false;
});


clear.addEventListener("click", () => {
    clearDisplay();
})

back.addEventListener("click", () => {
    let backbtn = displaytext.textContent.slice(0, -1)
    displaytext.textContent = backbtn;
    if (continousCalculation || resultShown) {
        firstOperand = null;
        secondOperand = null;
        operatorSign = null;
        result = null;

        resultShown = false;
        forwardCalculation = false;
        continousCalculation = false;
    }
})

function clearDisplay() {
    firstOperand = null;
    secondOperand = null;
    operatorSign = null;
    result = null;

    resultShown = false;
    forwardCalculation = false;
    continousCalculation = false;

    displaytext.textContent = "";
}