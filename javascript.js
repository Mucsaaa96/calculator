const calculatorBtns = document.querySelectorAll(".calculator");
const display = document.querySelector("#display");
const equal = document.querySelector("#equal");
const refresh = document.querySelector("#refresh");
const deleteBtn = document.querySelector("#deleteBtn"); 

let actualNumber = "";
let symbols = [];
const operators = ["+", "-", "x", "÷", "/"];

function handleInput(value) {

    if (!isNaN(value)) {
        actualNumber += value;
        console.log("Actual number:", actualNumber);
        updateDisplay()
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
    updateDisplay()
}    

function updateDisplay() {
    display.textContent = symbols.join("") + actualNumber;
}

function calculate(array) {
    for(let i = 0; i < array.length; i++) {
            if( array[i] === "x" || array[i] === "÷" || array[i] === "/"){
            const a = Number(array[i - 1]);
            const b = Number(array[i + 1]);

            if(array[i] === "÷" && b === 0 ||
                array[i] === "/" && b === 0) {
                actualNumber = "";
                symbols = [];
                display.textContent = "Error";
                return;
            }

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
    const threeDecimalResult = Math.round(result * 1000) / 1000;

    display.textContent = threeDecimalResult;
    actualNumber = threeDecimalResult;
}

function operate() {
    const lastInSymbols = symbols[symbols.length - 1];

    if(actualNumber !== "") {
        symbols.push(actualNumber);
        actualNumber = "";
    } else if(operators.includes(lastInSymbols)) {
        symbols.pop();
    }
    calculate(symbols);
    symbols = [];
}

function clearDisplay() {
    actualNumber = "";
    symbols = [];
    display.textContent = "";
}

function deleteLastItem() {
    if(actualNumber !== ""){
       actualNumber = actualNumber.slice(0, -1);
    } else {
        symbols.pop();
    }    
    updateDisplay();
}

function handleKeyboardInput(event) {
    if(event.key === "Enter") {
        operate()
    } else if(event.key === "Backspace") {
        deleteLastItem()
    }

    handleInput(event.key)
}    


calculatorBtns.forEach(calculatorBtn => {
    calculatorBtn.addEventListener("click", (event) => handleInput(event.target.textContent))
})

equal.addEventListener("click", operate);

refresh.addEventListener("click", clearDisplay);

deleteBtn.addEventListener("click", deleteLastItem);

document.addEventListener("keydown", handleKeyboardInput);
