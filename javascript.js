const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(event.target.textContent);
    })
})

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

console.log(subtract(15,12));