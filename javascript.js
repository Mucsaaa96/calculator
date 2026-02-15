const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(event.target.textContent);
    })
})