const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        // Clear
        if (value === "AC") {
            currentInput = "";
            display.textContent = "0";
            return;
        }

        // Equal
        if (value === "=") {
            try {
                currentInput = currentInput
                    .replace("×", "*")
                    .replace("÷", "/")
                    .replace("−", "-");

                display.textContent = eval(currentInput);
                currentInput = display.textContent;
            } 
            catch {
                display.textContent = "Error";
                currentInput = "";
            }

            return;
        }

        // Add button value
        currentInput += value;

        display.textContent = currentInput;
    });
});
