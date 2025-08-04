const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";
let resetDisplay = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (!value) return;

    if (resetDisplay) {
      currentInput = "";
      resetDisplay = false;
    }

    currentInput += value;
    display.innerText = currentInput;
  });
});

equalsButton.addEventListener("click", () => {
  try {
    const result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
    resetDisplay = true;
  } catch (error) {
    display.innerText = "Error";
    currentInput = "";
    resetDisplay = true;
  }
});

clearButton.addEventListener("click", () => {
  currentInput = "";
  display.innerText = "0";
});
