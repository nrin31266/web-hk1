let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelectorAll('#form-close');
//
// Các biến mới cho form đăng ký
let registerForm = document.querySelector('.register-form-container');
let goToRegister = document.querySelector('#go-to-register');
let goToLogin = document.querySelector('#go-to-login');


window.onscroll = () => {
    loginForm.classList.remove('active');
    registerForm.classList.remove('active'); // đóng form đăng ký khi cuộn
}

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
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