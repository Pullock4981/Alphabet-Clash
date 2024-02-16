function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}

function removeBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    
    // console.log(index, alphabet);
    return alphabet
}

