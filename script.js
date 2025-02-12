
const display = document.querySelector('.display');
let currentInput = '';
let resultDisplayed = false;
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        if (buttonText === 'C') {
            currentInput = '';
            display.textContent = '0';
            resultDisplayed = false;
        }
        else if (buttonText === '+ / -') {
            if (currentInput && !resultDisplayed) {
                currentInput = String(-parseFloat(currentInput));
                display.textContent = currentInput;
            }
        }
        else if (buttonText === '%') {
            if (currentInput && !resultDisplayed) {
                currentInput = String(parseFloat(currentInput) / 100);
                display.textContent = currentInput;
            }
        }
        else if (buttonText === 'backsp') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        }
        else if (buttonText === '=') {
            try {
                currentInput = eval(currentInput) || '0';
                display.textContent = currentInput;
                resultDisplayed = true;
            } catch (error) {
                display.textContent = 'Error';
                currentInput = '';
            }
        }
        else if (buttonText === '✕')
        {
            try{
                currentInput += '*';
                display.textContent = currentInput;
            } catch (error) {
                display.textContent = 'Error';
                currentInput = '';
            }
        }
        else {
            if (resultDisplayed) {
                currentInput = buttonText === '.' ? '0.' : buttonText;
                resultDisplayed = false;
            } else {
                currentInput += buttonText;
            }
            display.textContent = currentInput;
        }
    });
});
