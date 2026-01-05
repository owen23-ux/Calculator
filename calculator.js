const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let output = '';

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const btnValue = e.target.dataset.value;
        
        if (btnValue === "=") {
            try {
                output = eval(output.replace(/%/g, '/100')).toString();
            } catch {
                output = 'Error!!! ';
            }
        } else if (btnValue === "AC") {
            output = '';
        } else if (btnValue === "DEL") {
            output = output.toString().slice(0, -1);
        } else {
            output += btnValue;
        }
        
        display.value = output;
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') calculate('=');
    if (e.key === 'Escape' || e.key === 'Delete') calculate('AC');
    if (e.key === 'Backspace') calculate('DEL');
});