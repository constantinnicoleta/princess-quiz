/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {
    //event listener for the play button
    const playButton = document.getElementById("play-btn");
    playButton.addEventListener("click", startQuiz);

    //event listener for the play-again button
    const playAgainButton = document.getElementById("play-again-btn");
    playAgainButton.addEventListener("click", restartQuiz);
}); 

//Array to hold the options and correct answers
const princesses = [{
    imageUrl: "assets/images/cinderella.png",
    options: ["Tina", "Cindarella", "Mulan"],
    answer: "Cindarella"
},
{
    imageUrl: "assets/images/merida.png",
    options: ["Merida", "Tiana", "Anna"],
    answer: "Merida"
},
{
    imageUrl: "assets/images/tiana.png",
    options: ["Ariel", "Tiana", "Jasmine"],
    answer: "Tiana"
},
{
    imageUrl: "assets/images/mulan.png",
    options: ["Rapunzel", "Mulan", "Moana"],
    answer: "Mulan"
},
{
    imageUrl: "assets/images/anna.png",
    options: ["Merida", "Anna", "Belle"],
    answer: "Anna"
},
{
    imageUrl: "assets/images/elsa.png",
    options: ["Aurora", "Snow White", "Elsa"],
    answer: "Elsa"
},
];

let shuffledPrincesses = [];

let currentQuestion = 0;
let score = 0;
const playButton = document.getElementById("play-btn");
const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const princessImageElement = document.getElementById("princess-image");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");

scoreElement.style.display = "none"; 

// Function to shuffle the array
/**
 * Function to shuffle the array
 * @param {array} array 
 * @returns shuffled array
 */
function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//Function to start the quiz
function startQuiz() {
    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    playButton.style.display = "none";
    document.getElementById("action-button").style.display = "block";

    // Shuffle the array of princesses
    shuffledPrincesses = shuffleArray(princesses);

    loadQuestion();
}

//Function to load the questions & options
function loadQuestion() {
    if (currentQuestion < shuffledPrincesses.length) {
        const currentPrincess = shuffledPrincesses[currentQuestion];
        princessImageElement.src = currentPrincess.imageUrl;
        questionElement.textContent = "What is the name of this Princess?";
        optionsContainer.innerHTML = "";
        scoreElement.style.display = "none";

        currentPrincess.options.forEach((option, index) => {
            const optionElement = document.createElement("button");
            optionElement.textContent = option;
            optionElement.classList.add("option-button");
            optionElement.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(optionElement);
        });
    }
}

//Function to check answer & colour it if correct/incorrect
function checkAnswer(selectedOption) {
    const currentPrincess = shuffledPrincesses[currentQuestion];
    const options = optionsContainer.children;

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        option.disabled = true; // Disable options after the user has clicked

        if (option.textContent === currentPrincess.answer) {
            option.style.backgroundColor = "lightgreen"; // correct answer is coloured green
        } else if (option.textContent === selectedOption && option.textContent !== currentPrincess.answer) {
            option.style.backgroundColor = "red"; //  incorrect selected answer is coloured red
        }
    }

    if (selectedOption === currentPrincess.answer) {
        score++;
    }

    currentQuestion++;
    // 1s delay to show the correct/incorrect answers
    if (currentQuestion < shuffledPrincesses.length) {
        setTimeout(() => {
            loadQuestion();
        }, 1000);
    } else {
        setTimeout(() => {
            showResult();
            document.getElementById("play-again-btn").style.display = "block";
        }, 1000);
    }
}