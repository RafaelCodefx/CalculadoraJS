document.addEventListener("DOMContentLoaded", function() {
    const screen = document.querySelector("#screen");
    const buttons = document.querySelectorAll("button");
    let currentInput = "0";
    let previousInput = "";
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.textContent;

            if (parseInt(value) >= 0 || value === ".") {
                handleNumber(value);
            } else if (value === "=") {
                handleEquals();
            } else {
                handleOperator(value);
            }

            updateScreen();
        });
    });

    function handleNumber(value) {
        if (currentInput === "0" && value !== ".") {
            currentInput = value;
        } else {
            currentInput += value;
        }
    }

    function handleOperator(value) {
        if (operator !== null) {
            handleEquals();
        }
        previousInput = currentInput;
        currentInput = "0";
        operator = value;
    }

    function handleEquals() {
        let result = 0;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                result = prev / current;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = null;
        previousInput = "";
    }

    function updateScreen() {
        screen.textContent = currentInput;
    }
});
