let computerWins = 0;
let playerWins = 0;
const choosePane = document.getElementById("choose-pane");
const resultsPane = document.getElementById("results-pane");
const rulesModal = document.getElementById("rules-modal");
const aboutModal = document.getElementById("about-modal");
let youChose = document.getElementById("you-chose-icon");
let npcChose = document.getElementById("npc-chose-icon");
let winLoseText = document.getElementById("win-lose-text");
let runningScore = document.getElementById("running-score");
let nextButton = document.getElementById("next-round-container");
let playerScore = 0;
let npcScore = 0;
let openPane = choosePane; // which pane to go back to when closing modals

//  OUTCOMES array of 2-dimensional weapon combos
//  T: Tie; P: Player Win; N: NPC Win
//  OUTCOMES[][] calls down then out, index 0
const OUTCOMES = [
    ["T", "P", "N", "N", "P"],
    ["N", "T", "P", "P", "N"],
    ["P", "N", "T", "N", "P"],
    ["P", "N", "P", "T", "N"],
    ["N", "P", "N", "P", "T"]
];

//  Player chooses their weapon
/*  event listener on each weapon button
    Each one runs playGame(clickedButton) or something
    */


//  Play RPS
function playGame(playerSelection) {
    let npcSelection = npcChoice();
    let currentResult = OUTCOMES[npcSelection][playerSelection];
    openPane = resultsPane;
    resultsPane.style.display = 'flex';
    choosePane.style.display = 'none';
    
    if (currentResult == "T") { // it's a tie
        resultsImages(playerSelection,npcSelection);
        winLoseText.innerText = "It's a tie!";
    } else if (currentResult == "N") { // npc wins
        resultsImages(playerSelection,npcSelection);
        winLoseText.innerText = "Computer win!";
        npcScore ++;
    } else { // player wins
        resultsImages(playerSelection,npcSelection);
        winLoseText.innerText = "Player win!";
        playerScore ++;
    }

    runningScore.innerText = `${playerScore} - ${npcScore}`;
    if (playerScore > 4 || npcScore > 4) {
        //  win conditions
        if (playerScore > npcScore) {
            winLoseText.innerHTML = `<h1 class="win-text">YOU BESTED THE `
                +   `COMPUTER!<br/>Play again?</h1>`;
        } else {
            winLoseText.innerHTML = `<h1 class="lose-text">THE COMPUTER `
                +   `BESTED YOU!<br/>Play again?</h1>`;
        }
        nextButton.innerHTML = `<button onclick="newGame()">New Game</button>`;
    }
}

//  Determine who won after scores are finalized
function whoWon() {
    if (computerWins > playerWins) {
        return `The computer won ${computerWins} to ${playerWins}.`;
    } else if (computerWins < playerWins) {
        return `You won ${playerWins} to ${computerWins}`;
    } else {
        return `It was a tie game? But how?`;
    }
}

function npcChoice() {
    //  NPC chooses its weapon:
    //  0: Rock; 1: Paper; 2: Scissors; 3: Lizard; 4: Spock
    return Math.floor(Math.random() * 5);
}

function rulesModalOpen() {
    rulesModal.style.display = 'flex';
    openPane.style.display = 'none';
    aboutModal.style.display = 'none';
}

function rulesModalClose() {
    rulesModal.style.display = 'none';
    openPane.style.display = 'flex';
}

function aboutModalOpen() {
    aboutModal.style.display = 'flex';
    openPane.style.display = 'none';
    rulesModal.style.display = 'none';
}

function aboutModalClose() {
    aboutModal.style.display = 'none';
    openPane.style.display = 'flex';
}

function nextRound() {
    resultsPane.style.display = 'none';
    choosePane.style.display = 'flex';
    openPane = choosePane;
}

function newGame() {
    resultsPane.style.display = 'none';
    choosePane.style.display = 'flex';
    openPane = choosePane;
    npcScore = 0;
    playerScore = 0;
    nextButton.innerHTML = `<button onclick="nextRound()">Next Round</button>`;
}

function resultsImages(playerSelection, npcSelection) {
    youChose.innerHTML = `<img src="${choiceToImage(playerSelection)}">`;
    npcChose.innerHTML = `<img src="${choiceToImage(npcSelection)}">`;
}

function choiceToImage (theChoice) {
    switch (theChoice) {
        case 0:
            return "images/rock.png";
        case 1:
            return "images/paper.png";
        case 2:
            return "images/scissors.png";
        case 3:
            return "images/lizard.png";
        case 4:
            return "images/spock.png";
        default:
            return "image conversion error";
    }
}


//  Play a single game of RPS
/*function playRPS(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'ROCK':
                gameResult = "t";
                return "Computer chose Rock... It's a tie!";
            case 'PAPER':
                gameResult = "c";
                return "Paper beats Rock... You lose!";
            case 'SCISSORS':
                gameResult = "p";
                return "Rock beats Scissors... You win!";
            default:
                return "Not sure what happened here..."
        }
    } else if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'ROCK':
                gameResult = "p";
                return "Paper beats Rock... You win!";
            case 'PAPER':
                gameResult = "t";
                return "Computer chose Paper... It's a tie!";
            case 'SCISSORS':
                gameResult = "c";
                return "Scissors beats Paper... You lose!";
            default:
                return "Not sure what happened here...";
        }
    } else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'ROCK':
                gameResult = "c";
                return "Rock beats Scissors... You lose!";
            case 'PAPER':
                gameResult = "p";
                return "Scissors beats Paper... You win!";
            case 'SCISSORS':
                gameResult = "t";
                return "Computer chose Scissors... It's a tie!"
            default:
        }
    } else {
        return "Something went... wrong!";
    }
}
*/