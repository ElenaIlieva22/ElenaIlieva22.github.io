const cards = document.querySelectorAll('.main-card');
let flippedCards = [];
let matchedCards = [];
let moves = 0;
let timer;
let time = 0;


function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

shuffle()

// Add click event listener to each card
cards.forEach(card => card.addEventListener('click', flipCard));

// Function to flip a card
function flipCard() {
    if (!timer) {
        startTimer();
    }
    if (flippedCards.length === 2 || this === flippedCards[0]) return;
    this.classList.add('flip'); 
    flippedCards.push(this);
    if (flippedCards.length === 2) {
        checkMatch();
        updateMoves();
    }
}

// Function to check if two flipped cards match
function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
    const firstImageSrc = firstCard.querySelector('img').getAttribute('src').split("/").pop();
    const secondImageSrc = secondCard.querySelector('img').getAttribute('src').split("/").pop();
    if (firstImageSrc === secondImageSrc) {
        matchedCards.push(...flippedCards);
        if (matchedCards.length === cards.length) {
            endGame();
        }
    } else {
        flippedCards.forEach(card => {
            setTimeout(() => {
                card.classList.remove('flip')
            }, 1000);
        });
    }
    flippedCards = [];
}

// Function to update moves counter
function updateMoves() {
    moves++;
    document.getElementById('moves').innerText = moves;
}

// Function to start the timer b 
function startTimer() {
    timer = setInterval(() => {
        time++;
        document.getElementById('timer').innerText = time;
    }, 1000);

}

// Function to end the game
function endGame() {
    alert(`Congratulations! You've won in ${time} seconds with ${moves} moves.`);
    resetGame();

}

// Function to reset the game
function resetGame() {
    clearInterval(timer);
    matchedCards = [];
    moves = 0;
    time = 0;
    timer = undefined
    document.getElementById('moves').innerText = moves;
    document.getElementById('timer').innerText = time;
    cards.forEach(card => card.classList.remove('flip'));
    shuffle()
}


document.getElementById('restart-btn').addEventListener('click', resetGame);


