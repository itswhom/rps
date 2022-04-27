let computerSelection = computerPlay();
console.log(`Computer Chose: ${computerSelection}`);
let playerSelection = "Rock";
console.log(`Player Chose: ${playerSelection}`);
console.log(playRPS(playerSelection, computerSelection));

function computerPlay() {
    let randomPlay = Math.floor(Math.random() * 3) + 1;
    console.log('randomPlay');

    if (randomPlay == 1) {
        return 'Rock';
    } else if (randomPlay == 2) {
        return 'Paper';
    }
    return 'Scissors';
}
function playRPS(playerSelection, computerSelection) {
    if (playerSelection == 'Rock') {
        switch (computerSelection) {
            case 'Rock':
                return "Computer chose Rock... It's a tie!";
            case 'Paper':
                return "Paper beats Rock... You lose!";
            case 'Scissors':
                return "Rock beats Scissors... You win!";
            default:
                return "Not sure what happened here..."
        }
    } else if (playerSelection == 'Paper') {
        switch (computerSelection) {
            case 'Rock':
                return "Paper beats Rock... You win!";
            case 'Paper':
                return "Computer chose Paper... It's a tie!";
            case 'Scissors':
                return "Scissors beats Paper... You lose!";
            default:
                return "Not sure what happened here...";
        }
    } else {
        switch (computerSelection) {
            case 'Rock':
                return "Rock beats Scissors... You lose!";
            case 'Paper':
                return "Scissors beats Paper... You win!";
            case 'Scissors':
                return "Computer chose Scissors... It's a tie!"
            default:
        }
    }
}
