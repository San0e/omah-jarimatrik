// DOM Elements
const problemElement = document.getElementById("problem");
const options = document.querySelectorAll(".option");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

// Variables
let correctAnswer;

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generate a random math problem
function generateProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = ["+", "-", "×", "÷"][
        Math.floor(Math.random() * 4)
    ];

    // Generate random colors for numbers, operator, and equals sign
    const num1Color = getRandomColor();
    const num2Color = getRandomColor();
    const operatorColor = getRandomColor();
    const equalsColor = getRandomColor();

    let problem;
    switch (operator) {
        case "+":
            problem = `<span style="color: ${num1Color};">${num1}</span> <span style="color: ${operatorColor};">+</span> <span style="color: ${num2Color};">${num2}</span> <span style="color: ${equalsColor};">=</span> ?`;
            correctAnswer = num1 + num2;
            break;
        case "-":
            problem = `<span style="color: ${num1Color};">${num1}</span> <span style="color: ${operatorColor};">-</span> <span style="color: ${num2Color};">${num2}</span> <span style="color: ${equalsColor};">=</span> ?`;
            correctAnswer = num1 - num2;
            break;
        case "×":
            problem = `<span style="color: ${num1Color};">${num1}</span> <span style="color: ${operatorColor};">×</span> <span style="color: ${num2Color};">${num2}</span> <span style="color: ${equalsColor};">=</span> ?`;
            correctAnswer = num1 * num2;
            break;
        case "÷":
            problem = `<span style="color: ${num1Color};">${
                num1 * num2
            }</span> <span style="color: ${operatorColor};">÷</span> <span style="color: ${num2Color};">${num2}</span> <span style="color: ${equalsColor};">=</span> ?`;
            correctAnswer = num1;
            break;
    }

    problemElement.innerHTML = problem;
    generateOptions();
}

// Generate random options for answers
function generateOptions() {
    const optionsArray = [correctAnswer];
    while (optionsArray.length < 3) {
        const randomAnswer =
            correctAnswer + Math.floor(Math.random() * 5) - 2;
        if (
            !optionsArray.includes(randomAnswer) &&
            randomAnswer > 0
        ) {
            optionsArray.push(randomAnswer);
        }
    }
    optionsArray.sort(() => Math.random() - 0.5);

    options.forEach((option, index) => {
        option.textContent = optionsArray[index];
        option.style.backgroundColor = "#4caf50"; // Reset button color
    });
}

// Check the selected answer
options.forEach((option) => {
    option.addEventListener("click", () => {
        if (Number(option.textContent) === correctAnswer) {
            feedbackElement.textContent = "BENAR! 🎉";
            option.style.backgroundColor = "#8bc34a"; // Green for correct
        } else {
            feedbackElement.textContent = "Oops! COBA LAGI. 😅";
            option.style.backgroundColor = "#f44336"; // Red for incorrect
        }
    });
});

// Load the next problem
nextButton.addEventListener("click", () => {
    feedbackElement.textContent = "";
    generateProblem();
});

// Initialize the first problem
generateProblem();
