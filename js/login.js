let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelectorAll('#form-close');
let registerForm = document.querySelector('.register-form-container');
let goToRegister = document.querySelector('#go-to-register');
let goToLogin = document.querySelector('#go-to-login');

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

window.addEventListener('scroll', () => {
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
});

formClose.forEach(btn => {
    btn.addEventListener('click', () => {
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');
    });
});

goToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
});

goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
});
