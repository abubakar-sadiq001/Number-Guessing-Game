'use strict';

const secretNumber = Math.trunc(Math.random() * 30) + 1;
const userGuess = document.querySelector('.user-guess');
const gmOver = document.querySelector('.game-over');
const playBtn = document.querySelector('.play-btn');
// Score & Looses Declaration
let score = JSON.parse(localStorage.getItem("Score"));
let looses = 0;
document.querySelector('.score').textContent = `score: ${score}`;
document.querySelector('.lose').textContent = `looses: ${looses}`;
// Check guess
playBtn.addEventListener('click', function() {
    if (userGuess.value === "") {
        alert('Guess field can not be empty!');
} else {
    const guess = document.querySelector('.random-guess').value = secretNumber;
    if (+userGuess.value > guess) {
        document.querySelector('.progress-tracker').textContent = '📈 Number To High';
        document.querySelector('.score').innerHTML = `Score: ${score -= 1}`;
        document.querySelector('.lose').textContent = `Loose: ${looses += 1}`;
        localStore();
        // if (score === 1) {
        //     alert('one attempt left!');
        // }
        // if (score < -15) {
        //     console.log('you failed try again!');
        //     gmOver.style.display = 'block';
        //     setTimeout(() => {
        //         gmOver.style.display = 'none';
        //         window.location.reload();
        //     }, 2000);
        // }
    } else if (+userGuess.value === guess) {
        document.querySelector('.progress-tracker').textContent = '🏆 congrats guess is correct' ;
        const guess = document.querySelector('.random-guess').textContent = secretNumber;
        console.log(guess)
        document.body.style.background = '#60b347';
        // score increment
        document.querySelector('.score').innerHTML = `score = ${score += 1}`;
        // window.location.reload();
        localStore();
        // if ()

    } else if (+userGuess.value < guess) {
        document.querySelector('.progress-tracker').textContent = '📉 Number To Low'
        document.querySelector('.score').innerHTML = `Score: ${score -= 1}`;
        document.querySelector('.lose').innerHTML = `Loose: ${looses += 1}`;
        localStore();
        // if (score === 1) {
        //     alert('one attempt left!');
        // }
        // if (score < 1) {
        //     console.log('ypu failed try again!');
        //     gmOver.style.display = 'block';
        //     setTimeout(() => {
        //         gmOver.style.display = 'none';
        //         window.location.reload();
        //     }, 2000);
        // }
    }
    userGuess.value = '';
}
  
});
// Local storage
function localStore() {
    localStorage.setItem("Score", JSON.stringify(score));
 };
// Try again
document.querySelector('.replay-btn').addEventListener('click', function() {
    window.location.reload();
    // localStorage.clear();
});
