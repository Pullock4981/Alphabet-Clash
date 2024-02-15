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

function play(){
    hideElementById('home');
    showElementById('play-ground');
}
