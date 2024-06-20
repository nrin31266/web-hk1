AOS.init();


// chuyển động slider của ảnh/video

const sliderVideos = ["Dubai.mp4","HaLongBay.mp4", "MuCangChai.mp4", "Santo.mp4", "VanLyTT.mp4", 
                        "ThuySi.mp4", "Cambo.mp4", "Paris.mp4", "TuCamT.mp4", "Duc.mp4" ];

let slider = document.querySelector('.background-video');
let sliderGridItems = [...document.querySelectorAll('.grid-item')];

let currentVideo = 0;

setInterval(() => {
    changeSliderVideo();
}, 4000);

const changeSliderVideo = () => {
    sliderGridItems.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');

            setTimeout(() => {
                if (index == sliderGridItems.length - 1) {
                    if (currentVideo >= sliderVideos.length - 1) {
                        currentVideo = 0;
                    } else {
                        currentVideo++;
                    }

                    slider.querySelector('source').src = `images/${sliderVideos[currentVideo]}`;
                    slider.load();

                    sliderGridItems.map((item, i) => {

                        setTimeout(() => {

                            item.classList.add('hide');
                        }, i * 100);

                    });

                }

            }, 25);

        }, index * 25);
    });
};

const navbar = document.querySelector('.navbar');
const menu = document.querySelector('#menu-bar');

window.addEventListener('scroll', () => {
    if (scrollY >= 188) {
        navbar.classList.add('bg');
    } else {
        navbar.classList.remove('bg');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelectorAll('#form-close');
//
// Các biến mới cho form đăng ký
let registerForm = document.querySelector('.register-form-container');
let goToRegister = document.querySelector('#go-to-register');
let goToLogin = document.querySelector('#go-to-login');

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
