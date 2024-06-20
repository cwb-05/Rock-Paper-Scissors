/** Declaring const elements */
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const lossScore = document.getElementById('loss-score');
const winScore = document.getElementById('win-score');
const tieScore = document.getElementById('tie-score');
const userImage = document.getElementById('user-img');
const computerImage = document.getElementById('computer-img');
const buttons = document.getElementsByClassName('button');

/** Adding an event listener to the buttons */
for (let button of buttons) {
    button.addEventListener("click", function(){
        let userChoice = this.getAttribute('data-choice');
        playGame(userChoice);
    });

}

/**Main function. Accepts "data-coice" parameter selected by the user
 * through the buttons
 */
