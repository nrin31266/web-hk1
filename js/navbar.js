let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
});

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
});
