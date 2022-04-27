let computerSelection = computerPlay();
console.log(`Computer Chose: ${computerSelection}`);
let playerSelection = askPlayerWeapon();

//  Prompt user for their weapon and validate selection
function askPlayerWeapon() {
    while (true) {
        let askPlayer = prompt("Choose either Rock, Paper, or Scissors: ");

        if (askPlayer.toLowerCase() == 'rock'
        ||  askPlayer.toLowerCase() == 'paper'
        ||  askPlayer.toLowerCase() == 'scissors') {
            console.log(`Player ChoSe: ${askPlayer}`);
            return askPlayer.toLowerCase();
        }
    }
}

console.log(`Player chose: ${playerSelection}`);



console.log(playRPS(playerSelection, computerSelection));

//  Computer chooses its weapon
function computerPlay() {
    let randomPlay = Math.floor(Math.random() * 3) + 1;

    if (randomPlay == 1) {
        return 'ROCK';
    } else if (randomPlay == 2) {
        return 'PAPER';
    }
    return 'SCISSORS';
}

function playRPS(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'ROCK':
                return "Computer chose Rock... It's a tie!";
            case 'PAPER':
                return "Paper beats Rock... You lose!";
            case 'SCISSORS':
                return "Rock beats Scissors... You win!";
            default:
                return "Not sure what happened here..."
        }
    } else if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'ROCK':
                return "Paper beats Rock... You win!";
            case 'PAPER':
                return "Computer chose Paper... It's a tie!";
            case 'SCISSORS':
                return "Scissors beats Paper... You lose!";
            default:
                return "Not sure what happened here...";
        }
    } else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'ROCK':
                return "Rock beats Scissors... You lose!";
            case 'PAPER':
                return "Scissors beats Paper... You win!";
            case 'SCISSORS':
                return "Computer chose Scissors... It's a tie!"
            default:
        }
    } else {
        return "Something went... wrong!";
    }
}
