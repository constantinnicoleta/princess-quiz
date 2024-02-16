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