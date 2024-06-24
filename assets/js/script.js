/** Declaring const elements */
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const lossScore = document.getElementById('loss-score');
const winScore = document.getElementById('win-score');
const tieScore = document.getElementById('tie-score');
const userImage = document.getElementById('user-img');
const computerImage = document.getElementById('computer-img');
const buttons = document.getElementsByClassName('button');
const TIED = "tied";

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
function playGame(userChoice) {
    userImage.src = `assets/images/${choices[userChoice]}.jpg`;
    userImage.alt = choices[userChoice];

    let computerChoice = Math.floor(Math.random()*5);

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[userChoice]);

    updateScores(result);
}

/**Checks for the winner, or for a tie. It accepts two strings */
function checkWinner(value1, value2) {
    if (value1 === 'rock') {
        if (value2 === 'paper' || value2 === 'spock') {
            alert('Congrats! You beat the computer!');
            return 'winner';
        } else if (value2 === 'lizard'|| value2 === 'scissors') {
            alert('Aww, looks like the computer won this round...');
            return 'loser';
        } else {
            alert('Hmm, looks like a tie. Care to try again?');
            return 'tied';
        }
    } else if (value1 === 'paper') {
        if (value2 === 'scissors' || value2 === 'lizard') {
            alert('Congrats! You beat the computer!');
            return 'winner';
        } else if (value2 === 'rock' || value2 === 'spock') {
            alert('Aww, looks like the computer won this round...');
            return 'loser';
        } else {
            alert('Hmm, looks like a tie. Care to try again?');
            return 'tied';
        }
    } else if (value1 === 'scissors') {
        if (value2 === 'rock' || value2 === 'spock') {
            alert('Congrats! You beat the computer!');
            return 'winner';
        } else if (value2 === 'lizard' || value2 === 'paper') {
            alert('Aww, looks like the computer won this round...');
            return 'loser';
        } else {
            alert('Hmm, looks like a tie. Care to try again?');
            return 'tied';
        }
    } else if (value1 === 'lizard') {
        if (value2 === 'scissors' || value2 === 'rock') {
            alert('Congrats! You beat the computer!');
            return 'winner';
        } else if (value2 === 'spock' || value2 === 'paper') {
            alert('Aww, looks like the computer won this round...');
            return 'loser';
        } else {
            alert('Hmm, looks like a tie. Care to try again?');
            return 'tied';
        }
    } else if (value1 === 'spock') {
        if (value2 === 'lizard' || value2 === 'paper') {
            alert('Congrats! You beat the computer!');
            return 'winner'
        } else if (value2 === 'scissors' || value2 === 'rock') {
            alert('Aww, looks like the computer won this round...');
            return 'loser'
        } else {
            alert('Hmm, looks like a tie. Care to try again?');
            return 'tied';
        }
    }
}

/**Updating the correct score based off of the result */
function updateScores(var1) {
    if (var1 === 'winner') {
        let oldScore = parseInt(winScore.innerText);
        winScore.innerText = ++oldScore;
    } else if (var1 === 'tied') {
        let oldScore = parseInt(tieScore.innerText);
        tieScore.innerText = ++oldScore;
    } else {
        let oldScore = parseInt(lossScore.innerText);
        lossScore.innerText = ++oldScore;
    }
}
