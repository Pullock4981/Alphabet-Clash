// function play(){
//     // console.log('play start now');
//     // step-1: hide the home

//     const homeSection = document.getElementById('home');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     //step-2: show the play-ground

//     const playgroundSection = document.getElementById('play-ground');
//     // console.log(playgroundSection);
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyBtnPress(event) {
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);

    if (playerPressed === 'Escaped') {
        gameOver();
    }

    const currentAlphaElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphaElement.innerText.toLowerCase();
    // const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(currentAlphabet, playerPressed);
    // console.log(currentAlphaElement.innerText);

    // check
    if (playerPressed === currentAlphabet) {
        console.log('you get a point');

        // score found
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        // console.log(currentScoreText);
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        // increase score

        const newScore = currentScore + 1;

        // set new score

        currentScoreElement.innerText = newScore;

        removeBgColorById(currentAlphabet);
        continueGame();
    }
    else {

        console.log('you missed a life');

        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);

        const newLife = currentLife - 1;

        currentLifeElement.innerText = newLife;

        if (currentLife === 0) {
            gameOver();
        }


    }

}



// key press
document.addEventListener('keyup', handleKeyBtnPress);

function continueGame() {

    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    // random alpha display

    const currentAlphaElement = document.getElementById('current-alphabet');
    currentAlphaElement.innerText = alphabet;

    // set bg color

    addBgColorById(alphabet)
}


function play() {
    hideElementById('home');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    const gameScore = getTextElementValueById('current-score');
    setElementValueById('game-score', gameScore)

    const currentAlphabet = geElementTextById('current-alphabet');
    removeBgColorById(currentAlphabet);
}

function playAgain() {
    hideElementById('play-again');
    showElementById('play-ground');
}

