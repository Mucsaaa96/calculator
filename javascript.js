const calculatorBtns = document.querySelectorAll(".calculator");
const display = document.querySelector("#display");
let actualNumber = "";
const symbols = [];

function handleInput(value) {
    if(!isNaN(value)) {
        actualNumber += value;
        console.log("actual number", actualNumber)
    } else {
        if(actualNumber !== "") {
            symbols.push(actualNumber);
            actualNumber = "";
        }
        symbols.push(value);
    }
}

calculatorBtns.forEach(calculatorBtn => {
    calculatorBtn.addEventListener("click", (event) => handleInput(event.target.textContent))
})

