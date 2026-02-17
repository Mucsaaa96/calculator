const calculatorBtns = document.querySelectorAll(".calculator");
const display = document.querySelector("#display");
let actualNumber = "";
const symbols = [];

function handleInput(value) {
    const operators = ["+", "-", "x", "÷"];

    if (!isNaN(value)) {
        actualNumber += value;
        console.log("Actual number:", actualNumber);
    } else if (operators.includes(value)) {
            if (symbols.length === 0 && actualNumber === "" && value === "-") {
                actualNumber = "-";
                return; 
            }

            if (symbols.length === 0 && actualNumber === "") {
                return; 
            }
        
            if (actualNumber !== "") {
                symbols.push(actualNumber);
                actualNumber = "";
            }
        
            const lastInArray = symbols[symbols.length - 1];

            if (operators.includes(lastInArray)) {
                symbols[symbols.length - 1] = value;
            } else {
                symbols.push(value);
            }
    }
    console.log("Symbols array:", symbols);
}


calculatorBtns.forEach(calculatorBtn => {
    calculatorBtn.addEventListener("click", (event) => handleInput(event.target.textContent))
})

function calculate(array) {
    for(let i = 0; i < array.length; i++) {
    if( array[i] === "x" || array[i] === "÷"){
        const a = array[i - 1];
        const b = array[i + 1];
        const res = array[i] === "x" ? a * b : a / b;
        array.splice(i - 1, 3, String(res))
        i--;
    }
    } 
    let result = Number(array[0])

    for(let i = 1; i < array.length; i += 2) {
        const op = array[i]
        const num = Number(array[i + 1]);
        if(op === "+") result += num;
        else result -= num;
    }
    return result;
}
