// Get the display element and button elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calculator__button');

// Clear button functionality
document.getElementById('clear').addEventListener('click', () => {
    display.innerText = '';
});

// Equals button functionality
document.getElementById('equals').addEventListener('click', () => {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
});

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.value) {
            display.innerText += button.dataset.value;
        }
    });
});
