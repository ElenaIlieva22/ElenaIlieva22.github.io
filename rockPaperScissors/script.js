const playerScoreDisplay = document.getElementById ('playerScoreDisplay');
const computerScoreDisplay = document.getElementById ('computerScoreDisplay');

let userScore = 0;
let computerScore = 0;

function playRound(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('result').innerText = `You chose ${userChoice}. Computer chose ${computerChoice}.`;

    if (userChoice === computerChoice) {
        document.getElementById('result').innerText +=" It's a draw!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')) {
        document.getElementById('result').innerText += 'You win!';
        userScore++;
        playerScoreDisplay.textContent = userScore;
    } else {
        document.getElementById('result').innerText += 'You lose!';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    updateScoreboard();
}

function updateScoreboard() {
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;

    playerScoreDisplay.innerText = '';
    computerScoreDisplay.innerText = '';
    
    document.getElementById('result').innerText = '';
    updateScoreboard();
}
