const button = document.querySelector('div.nut-btn')

button.addEventListener('click', () => {
    document.querySelector('audio').play();

    button.classList.add('animate')
})

button.addEventListener('animationend', () => {
    button.classList.remove('animate')
})
