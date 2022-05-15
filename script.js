
let computerWins = 0;
let playerWins = 0;
let gameResult = '';

//  Play the game() function!


//  Player chooses their weapon (in lowercase)
function askPlayerWeapon() {
    while (true) {
        let askPlayer = prompt("Choose either Rock, Paper, or Scissors: ");

        if (askPlayer.toLowerCase() == 'rock'
        ||  askPlayer.toLowerCase() == 'paper'
        ||  askPlayer.toLowerCase() == 'scissors') {
            /* console.log(`Player ChoSe: ${askPlayer}`); */
            return askPlayer.toLowerCase();
        }
    }
}

//  Play RPS until five games have been played, then report winner/loser/tie
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = askPlayerWeapon();
            console.log(`Player chose: ${playerSelection}`);
        let computerSelection = computerPlay();
            console.log(`Computer Chose: ${computerSelection}`);


            console.log(playRPS(playerSelection, computerSelection));
            //console.log(gameResult);

        if (gameResult == "p") {
            playerWins ++;
        } else if (gameResult == "c") {
            computerWins ++;
        }

        /* if (playerWins == 3 || computerWins == 3) {
            return;
        } */
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

//  Computer chooses its weapon (IN CAPS)
function computerPlay() {
    let randomPlay = Math.floor(Math.random() * 3) + 1;

    if (randomPlay == 1) {
        return 'ROCK';
    } else if (randomPlay == 2) {
        return 'PAPER';
    }
    return 'SCISSORS';
}

//  Play a single game of RPS
function playRPS(playerSelection, computerSelection) {
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
