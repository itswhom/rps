let computerSelection = computerPlay();
console.log(computerSelection);

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
