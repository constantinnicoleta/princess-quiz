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