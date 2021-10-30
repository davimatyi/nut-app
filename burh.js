let inBruhMode = false;
let playing = false;
const activeBruhMode = () => {
    inBruhMode = true;
    playing = true;
    document.removeEventListener('keydown', konami);
    const bruh = document.querySelector('.content > .nut-btn');
    bruh.innerText = 'Activating Bruh Mode ...';
    const bruhdio = document.querySelector('.content > audio');
    bruhdio.src = './sounds/bruh.mp3';

    const bruhMomento = document.querySelector('.bruh-momento');

    bruhMomento.play();
    bruhMomento.addEventListener('ended', () => {
        bruh.innerText = 'BRUH';
        playing = false;
    });
}

const deactivateBruhMode = () => {
    inBruhMode = false;
    document.removeEventListener('keydown', konami);
    const bruh = document.querySelector('.content > .nut-btn');
    bruh.innerText = 'NUT';
    const bruhdio = document.querySelector('.content > audio');
    bruhdio.src = './sounds/nut.mp3';
}

const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "a",
    "b",
]

const mistake = `<style>
    *:not(.nut-btn) {
        font-family: "Hellvetica" !important;

        animation : rainbow 10s infinite, rainbow2 20s infinite;
    }

    .nut-btn {
        animation : rainbow2 10s infinite, rainbow1 20s infinite;
    }

    @-webkit-keyframes rainbow {
        0%      {color: red;}
        10%     {color: orange;}
        20%     {color: yellow;}
        30%     {color: lime;}
        40%     {color: teal;}
        50%     {color: cyan;}
        60%     {color: blue;}
        70%     {color: purple;}
        80%     {color: hotpink;}
        90%     {color: violet;}
        100%    {color: red;}
    }
    
    @keyframes rainbow {
        0%      {color: red;}
        10%     {color: orange;}
        20%     {color: yellow;}
        30%     {color: lime;}
        40%     {color: teal;}
        50%     {color: cyan;}
        60%     {color: blue;}
        70%     {color: purple;}
        80%     {color: hotpink;}
        90%     {color: violet;}
        100%    {color: red;}   
    }

    @-webkit-keyframes rainbow2 {
        0%      {background-color: red;}
        10%     {background-color: violet;}
        20%     {background-color: yellow;}
        30%     {background-color: hotpink;}
        40%     {background-color: purple;}
        50%     {background-color: blue;}
        60%     {background-color: cyan;}
        70%     {background-color: teal;}
        80%     {background-color: lime;}
        90%     {background-color: orange;}
        100%    {background-color: red;}   
    }

    @keyframes rainbow2 {
        0%      {background-color: red;}
        10%     {background-color: violet;}
        20%     {background-color: yellow;}
        30%     {background-color: hotpink;}
        40%     {background-color: purple;}
        50%     {background-color: blue;}
        60%     {background-color: cyan;}
        70%     {background-color: teal;}
        80%     {background-color: lime;}
        90%     {background-color: orange;}
        100%    {background-color: red;}   
    }
</style>`

let konamiCycle = konamiCode;

function konami(e) {
    if (konamiCycle.length === 1 && e.key === konamiCycle[0]) {
        konamiCycle = konamiCode;
        makeMistake();
    } else if (e.key === konamiCycle[0]) {
        konamiCycle.shift();
    } else {
        konamiCycle = konamiCode;
    }
}

function makeMistake() {
    if(playing) return;
    document.head.innerHTML += mistake;
    if(!inBruhMode) activeBruhMode();
    else deactivateBruhMode();
}

document.addEventListener('keyup', konami);