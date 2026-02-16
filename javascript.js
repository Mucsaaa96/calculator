const calculatorBtns = document.querySelectorAll(".calculator");
const display = document.querySelector("#display");
let actualNumber = "";
const symbols = [];

function handleInput(value) {
    if(!isNaN(value)) {
        actualNumber += value;
    } else {
        if(actualNumber !== "") {
            symbols.push(actualNumber);
            actualNumber = "";
        }
        symbols.push(value);
    }
}

