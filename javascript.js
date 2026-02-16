const calculatorBtns = document.querySelectorAll(".calculator");
const display = document.querySelector("#display");
let actualNumber = "";
const symbols = [];

function handleInput(value) {
    const operators = ["+", "-", "x", "÷"];

    if (!isNaN(value)) {
        actualNumber += value;
        console.log("Actual number:", actualNumber);
    } 
    else if (operators.includes(value)) {
        
        if (actualNumber !== "") {
            symbols.push(actualNumber);
            actualNumber = "";
        }

        const lastInArray = symbols[symbols.length - 1];

        if (operators.includes(lastInArray)) {
            symbols[symbols.length - 1] = value;
        } else if (symbols.length > 0) {
            symbols.push(value);
        }
    }
    console.log("Symbols array:", symbols);
}


calculatorBtns.forEach(calculatorBtn => {
    calculatorBtn.addEventListener("click", (event) => handleInput(event.target.textContent))
})

