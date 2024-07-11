// Toggle Menu
const toggleInput = document.querySelector('.toggle-input');
const menu = document.querySelector('#menu');

toggleInput.addEventListener('click', () => {
    menu.classList.toggle('translate-y-[-200%]')
})

const navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach( navLink => {
    navLink.addEventListener('click', () => {
        menu.classList.add('translate-y-[-200%]')
        checkAll();

    })
})

function checkAll() {
    var inputs = document.querySelectorAll('.toggle-input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
}
window.onload = function() {
    window.addEventListener('load', checkAll, false);
}

const html = document.querySelector('html');
const toggleTheme = document.querySelector('#toggle-theme');
toggleTheme.addEventListener('click',() =>{
    html.classList.toggle('dark')
})