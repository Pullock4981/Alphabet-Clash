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

    const currentAlphaElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphaElement.innerText.toLowerCase();
    // const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(currentAlphabet, playerPressed);
    // console.log(currentAlphaElement.innerText);

    // check
    if (playerPressed === currentAlphabet) {
        console.log('you get a point');
        console.log('you have pressed currently:', currentAlphabet);
        removeBgColorById(currentAlphabet);
        continueGame();
    }
    else {
        console.log('you missed a life');
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
    showElementById('play-ground');
    continueGame();
}


