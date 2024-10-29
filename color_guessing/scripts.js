const colorSquare = document.getElementById("colorSquare");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset");
const buttons = document.querySelectorAll(".option");

let targetColor = '';

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resetColors() {
    targetColor = generateRandomColor();
    colorSquare.style.backgroundColor = targetColor;



    const correctButton = buttons[Math.floor(Math.random() * buttons.length)];
    correctButton.textContent = targetColor;

    messageDisplay.textContent = '';
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.textContent === targetColor.toUpperCase()) {
            messageDisplay.textContent = "good";
            navigator.clipboard.writeText(targetColor).then(() => {
                console.log('Color copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        } else {
            messageDisplay.textContent = "try again";
        }
    });
});

resetButton.addEventListener('click', resetColors);

resetColors();  // Initial call to set up the game