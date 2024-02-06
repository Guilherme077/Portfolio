const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const windows = document.querySelectorAll('a');
windows.forEach(window => {
    window.addEventListener('click', ()=> nav.classList.toggle('active'));
});

menu.addEventListener('click', ()=> nav.classList.toggle('active'));