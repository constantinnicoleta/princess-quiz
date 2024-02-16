/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {
    //event listener for the play button
    const playButton = document.getElementById("play-btn");
    playButton.addEventListener("click", startQuiz);

    //event listener for the play-again button
    const playAgainButton = document.getElementById("play-again-btn");
    playAgainButton.addEventListener("click", restartQuiz);
}); 