const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');


buttons.forEach(function(button) {
    button.addEventListener('click', () => {
        const color = button.id
        body.style.backgroundColor = color;
    })
})